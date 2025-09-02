---
title: Redis设计与实现随笔
author: Ray
date: 2025/01/22 21:25
categories:
 - 中间件生态
tags:
 - Redis
---
# Redis设计与实现随笔

## 数据结构和对象

### 概述

这篇博客作为前一篇基础使用之后的进阶篇

### 对象

书上是按照先介绍底层的数据结构，然后再介绍5种基本的存储类型，但是呢我觉得先看一大堆数据结构可能会失去兴趣，所以我将Redis中对象的设计放在前面，通过对象的设计去探究底层的数据结构对我来说更加容易一些

```c
typedef struct redisObject{
   //类型
   unsigned type:4;
   //encoding编码
   unsigned encoding:4;
   //指向底层实现数据结构的指针
   void * ptr;
}
```

#### 5种基本类型

就是入门篇里提到的5种类型对象
String、List、Set、Zset、Hash
**注:由于Redis里面都是键对象和值对象,所以这一章的角度都是从这两个对象出发**

```
EVAL "for i=1, 128 do redis.call('ZADD', KEYS[1], i, i) end" 1 numbers  
```

上面这段代码是往一个zset里面插入128个元素,从1开始

键对象就是一个字符串对象,这里不多做赘述，重点来看一下

##### 值对象的数据结构

```C
typedef struct redisObject{
    //类型
    unsigned type:4;
    //编码
    unsigned encoding:4;
    //指向底层实现数据结构的设计
    void *ptr;  
    //对象的空转时长
    unsigned lru:22;
    //引用计数
    int refcount;
}
```

type 就代表是5种基本数据类型的哪一种

##### encoding不同类型的编码方式(重点)

虽然Redis有5种基本数据类型,但是每种数据类型还是的底层还是有至少两种以上的编码方式
这里就不得不提一下多态了,真的是随处可见,比如说所有的类型都能够使用命令DEL
有些命令是数据类型独有的,例如RPUSH、ZADD,这些命令在执行时,不同底层编码方式也都会执行这些指令。

##### 类型检查

服务器在执行某些命令前,会先检查给定键的类型能够执行指定的命令,其实就是检查值对象的类型

##### refcount与内存回收机制

对象上有个字段refcount,代表当前对象被引用次数,如果为0,则会从内存中删除掉

##### 内存共享

0-9999整数值会预先存好,就像Java的字符串常量池一样

##### lru空转时间

越近访问的值空转时间会越少,这个属性与淘汰策略有关

### 字符串

#### SDS(Simple Dynamic String,简单动态字符串)数据结构

每个sds.h/sdshdr结构表示一个SDS值

```c
struct sdshdr{  
    //记录buf数组中已使用字节的数量
    //等于SDS所保存字符串的长度
    int len;

    //记录buf数组中未使用字节的数量
    int free;

    //字节数组，用于保存字符串
    char buf[]; 
}
```

##### 优势

1. 常数复杂度获取字符串长度
   数据结构中有len属性用于保存字符串的长度
2. 杜绝缓冲区溢出
   在字符串进行扩展前,会先检查一下buff的长度是否足够,如果不够的话就会进行扩展,然后再执行添加字符的操作
3. 减少内存分配次数
   **SDS通过两种策略来实现**

* **空间预分配**
  如果对SDS进行修改之后,len属性小于1MB,那么程序分配和len同样大小的未使用空间,即len和free属性值相同;如果大于1MB,那么将分配1MB未使用空间
* **惰性空间释放**
  当SDS的API需要缩短保存的字符串时,**内存重分配**不会立即释放未使用的空间,而是将其作为free的数量

4. 二进制安全
   首先需要了解C,C的字符串必须符合某种编码,例如如果一开始读入空格将被识别为结尾SDS以二进制形式存储,文本存进去是什么内容,拿出来就还是什么内容
5. 兼容部分C字符串函数
   SDS遵循C字符串以空字符结尾,这样就能重用/<string.h>的stracasecmp函数

```
strcasecpm(sds->buff,"hello world!")
```

### 链表

#### 数据结构

双向链表

```c
typedef struct list{
    //表头节点  
    listNode * head;
    //表尾节点
    listNode * tail;
    //链表所包含的节点
    unsigned long len;
    //节点值复制函数
    void *(*dup)(void *ptr);
    //节点值释放函数
    void (*free)(void *ptr);
    //节点值对比函数
    int (*keyCompare)(void *ptr1, void *ptr2);
}list
```

复习一下结点的数据结构(梦回408王道数据结构)

```c
typedef struct listNode{  
    //前置节点
    struct ListNode * prev;  
    //后置节点
    struct ListNode * next;  
    //节点的值
    void * value;  
} 
listNode * tail;
unsigned long len;
//节点复制函数
void *(*dup)(void *ptr)
```

#### 特性

双端、无环、带表头和表尾指针、带链表长度计数器和多态(个人理解和Java的多态好像不太一样)
关于多态这里解释一下,以复制函数为例,使用的void*指针来保存节点值,所以可以保存各种不同类型的值

#### 用途

1. 列表键、发布与订阅、慢查询、监视器等
   列表键暂时不知
   发布与订阅容易消息丢失,适用于要求不高的场景,可以从确保消息不丢失的问题延伸
   慢查询暂时不知
   监视器暂时不知

### 字典

#### 哈希表节点与哈希表数据结构

##### 哈希表结构

```c
typdef struct dictht{
    //哈希表数组
    dictEntry ** table;
    //哈希表大小
    unsigned long size;
    //哈希表掩码，用于计算索引值
    //总是等于size-1
    unsigned long sizemask;
    //哈希表元素数量
    unsigned long used;
}dictht
```

##### 哈希表节点结构

```c
typef struct dictEntry{
    //键
    void * key;
    //值
    union{
        void * value;
        uint64_tu64;
        int64_ts64;
    }v;

    //指向下一个节点
    struct dictEntry * next;
}dictEntry
```

##### 字典结构

```c
typedef struct dict{
    //类型特定函数
    dictType * type;

    //私有数据
    void * privData;

    //哈希表
    dictht ht[2];
    //rehash索引
    //当rehash进行中,rehashIndex的值会不断增加,直到为-1
    int trehashidx; 
}dict;
```

type属性是一个指向dictType结构的指针，每个dictType结构**保存了一簇用于操作特定类型键值对的函数**，Redis会为用途不同的字典设置不同的类型特定函数。

```c
typedef struct dictType{
    //计算哈希值的函数
    unsigned (int|long)(*hashFunction)(const void *key);
    //复制键的函数
    void *(*keyDup)(void *privdata, const void *key);
    //复制值的函数
    void *(*valDup)(void *privdata, const void *obj);
    //比较键的函数
    int (*keyCompare)(void *privdata, const void *key1, const void *key2);
    //释放键的函数
    void (*keyDestructor)(void *privdata, void *key);
    //释放值的函数
    void (*valDestructor)(void *privdata, void *obj);
}
```

![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2023-04-04%20%E4%B8%8B%E5%8D%883.34.26.png)
从上面的图里可以看到,字典中有哈希表结构,而哈希表中有key-value键值节点

#### 哈希算法

通过键来计算出哈希值和索引值(通过哈希值和哈希掩码计算出来),将包含新键值对的哈希表节点放在置顶索引上面

#### 解决键冲突(哈希冲突)

链表法

#### rehash(重新散列)

说人话就是为了在字典里面的数据增加或者减少的时候将**哈希表的长度控制在一定范围内,避免不够用或者过于浪费**当哈希表增加或者缩减到一定程度时就会触发rehash操作

1. 如果是增加,那么ht[1]的大小等于ht[0].used*2的2^n^如果是减少,那么ht[1]的大小等于ht[0].used的2^n^
2. 将ht[0]的所有键值都放到ht[1]中,这个过程会重新计算hash值和索引值
3. 释放ht[0],然后将ht[1]设置为ht[0],并且在ht[1]新创建一个空白哈希表,为下一次的rehash做准备

#### 渐进式rehash

先定义一个rehashindex变量,初始值为0,在执行新增、删除、查询时都会将对应ht[0]的redisindex索引处的key-value重新散列到ht[1],并且在渐进式rehash期间,新增的结点不会进入到ht[0]中,就保证了ht[0]最终会成为空表(意义在哪???)

### 跳跃表

几个重要的概念

1. 前进指针
   每个跳跃表结点都有指向下一个结点的指针
2. 层
   每个跳跃表结点都会有很多层,至于具体是干什么的现在还不太清楚
3. 后退指针
   最后一个跳跃表结点指向前一个结点
4. 跨度
   就是从头结点开始到目标结点经历的路径,有点想图的权
5. 分值和成员
   分值是一个double类型的浮点数,跳跃表中的所有的结点的分值按照从小大来排序
   ![img](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2023-04-05%20%E4%B8%8A%E5%8D%8810.16.54.png)
   对象是一个指针,它指向一个字符串对象,而字符串对象中则保存一个SDS值
   不太清楚一个跳跃表结点是不是只能存放一个对象,但是我猜测是这样的
   ps:来自2025的我，你的想法是对的，每个节点有一个权重分值和成员

#### 总结

1. Redis的跳跃表实现是由zkiplist和zkiplistNode两个结构组成,其中zkiplist用于保存跳跃表信息(比如表头节点、表尾节点、长度),而zskiplistNode则用于跳跃表节点
2. 多个跳跃表节点的分值可以相同,但是对象必须唯一

### 整数集合

整数集合是集合键的底层实现之一,当一个集合只包含整数值元素,并且这个集合的元素数量不多时,Redis
sadd numbers 1 3 5 7 9
上面的命令用的是sadd,说明用的集合set的基本类型(Redis对外提供的)

#### 升级

先来看数据结构

```C
typedef strunct intset{
    unit32_t encoding;
}
```

上面的encoding属性决定当前数组的元素是用什么方式编码,如果当前是inset_enc_int16,此时再添加进一个64位编码的元素那么就会执行升级操作
整数集合只支持**升级**而不支持降级

### 压缩列表(新版本已被替代)

压缩列表ziplist是列表键(List???)和哈希键(Hash???)的底层实现之一。当一个列表键只包含少量列表项,并且每个列表项要么是小整数值,要么是长度比较短的字符串,那么Redis就会使用压缩列表来做列表键的底层实现
在3.2和5之后引入了quicklist和listpack,所以废弃了

#### 1. quickList

链表和压缩列表的结合体，它以链表的形式组织数据。每个链表节点是一个压缩列表。

#### 2.listpack

同样是紧凑存储，每个元素的存储方式做了更改，头部记录了自身长度等信息，插入或者删除元素时不会影响其他元素。

## 单机数据库的实现

### 选择数据库

select 0(index)
客户端程序中有个数据结构,其中有个属性保存了当前客户端使用的数据库

### 数据库键空间

首先来看redis-server的结构

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/202504050717064.png)

数据库键空间是这一章的重点
![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2023-04-07%20%E4%B8%8B%E5%8D%882.26.03.png)

从上面可以看出dict

##### 关于键值变化时的操作过程

1. 新增键
2. 删除键
3. 更新键
4. 读写键的维护操作
   服务器中键有命中和不命中次数属性,是一个统计指标
   键有ideltime,用来指示键的闲置时间
   键有过期时长,不知道和这个闲置时间的属性有什么关系
   键有个属性代表是否被修改,书上说的是键是不是为dirty(脏键),每次修改这个值都会被加1,如果客户端使用WATCH命令对其进行了监听,那么客户端程序在执行事务程序时就会注意到。

### 设置生存或者过期时间

通过Expire命令来设置过期时间

```bash
set key value
set key 5
```

### 过期键的删除策略

#### 定时删除

#### 惰性删除

#### 定期删除

#### Redis的过期删除策略如何实现

Redis服务器实际使用的是**惰性删除的和定期删除两种策略**；通过配合使用这两种删除策略，服务器可以很好地在**合理使用CPU时间和避免浪费内存空间**之间的取得平衡。

### RDB持久化

#### SAVE和BGSAVE

#### Mac下使用Homebrew安装的Redis的RDB文件位置

1. 首先还是得找到redis.conf的位置
   使用brew info redis命令可以查看到

```bash
/opt/homebrew/etc/redis.conf
```

2. 在redis.conf找到dbfilename和dir属性的值来确定文件名称和路径

```bash
db.dump和/opt/homebrew/var/db/redis
```

### AOF持久化

Append Only File，其实将服务器要执行的写命令(增删改)进行保存

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0AOF%E5%B7%A5%E4%BD%9C%E6%9E%B6%E6%9E%8420250415.png)

#### 实现

##### 1. 命令追加

服务器在执行完一个命令之后，会以协议格式将被执行的的写命令追加到服务器状态的aof_buf缓冲区的结尾

##### 2.AOF文件的写入与同步

Redis的服务器进程就是一个事件循环(Loop)，这个循环中的**文件事件负责接收客户端的命令请求**，以及向客户端发送命令回复，而时间事件则负责执行像serverCron函数这样需要定时运行的函数。

```c
def eventLoop():
	while True:
	# 处理文件事件，接收命令请求以及发送命令回复
	# 处理命令请求时可能会有新的内容被追加到aof_buf缓冲区
	processFileEvents()

	# 处理时间事件
	processTimeEvents()

	flushAppendOnFile()
```

#### AOF文件的载入与数据还原

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0AOF%E8%BD%BD%E5%85%A5%E4%B8%8E%E9%87%8D%E5%86%9920250415.png)

#### 重写

##### 为什么要重写

因为随着命令的追加这个AOF文件会越来越膨胀，如果不加以控制的话，那么体积过大的AOF文件就会Redis服务器甚至宿主机造成影响

##### 如何实现

我看书理解下来就是将多个同类型的进行一个合并，例如list类型 rpush "a"和rpush "b"是两条命令，但是进行命令合并之后就会改写为rpush "a" "b"

##### AOF重写缓冲区

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0AOF%E9%87%8D%E5%86%99%E7%BC%93%E5%86%B2%E5%8C%BA20250415.png)

在执行BGREWRITEAOF命令时，Redis服务器会维护一个**AOF重写缓冲区**，该缓冲区会在子进程创建新的AOF期间，**记录服务器执行的所有写命令**。当子进程完成创建新的AOF的工作命令后，服务器会将重写缓冲区中的所有内容追加到新AOF的末尾。

### 事件

1.文件事件file event

Redis服务器通过套接字与客户端进行连接，而**文件事件就是服务器对套接字操作的抽象**。服务器与客户端(或者其他服务器)的通信会产生相应的文件事件，而服务器则通过监听并处理这些事件来完成一系列网络通信操作。

2.时间事件time event

Redis服务器中的一些操作(比如serverCron函数)需要在给定的时间点执行，而时间事件就是服务器对这类定时操作的抽象。

#### 文件事件

##### 文件事件处理器

基于**Reactor模式**(不知道这块儿的理论知识)开发了自己的网络事件处理器

1.文件事件处理器使用I/O多路复用(multiplexing)程序来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器(这里看不懂很正常，后面会有新的介绍)。

2.当被监听的套接字准备好执行应答(accept)、读取(read)、写入(write)和关闭等操作时，与操作相对应的事件就会产生，这时文件事件处理器就回调用套接字之前关联好的事件处理器来处理这些事件。

##### 文件事件处理器的构成

![img](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E6%96%87%E4%BB%B6%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A820250415.png)

最左边的就是文件事件即套接字操作的抽象

然后就是I/O多路复用程序，多个文件事件回并发地出现，但是I/O多路复用程序总是回将所有产生事件的套接字都放到一个队列里面，然后通过这个队列，以有序(sequentially)、同步(synchronously)、每次一个套接字的方式向文件事件分派器传送套接。重要的你前面不管咋并发，我都是维护一个队列，一个一个地发送到后面的分派器(不知道为啥要着重描述这一段???)。只有当上一个套接字产生的事件被处理完之后(该套接字为事件所关联的事件处理器执行完毕)，I/O多路复用程序才会继续向文件事件分派器传送下一个关键字。

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E6%96%87%E4%BB%B6%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A8%E9%98%9F%E5%88%9720250415.png)

文件事件分派器负责接收来自I/O多路复用程序传来的关键字，并根据套接字产生的事件的类型来调用相应的事件处理器。

服务器会为执行不同任务的套接字关联不同的事件处理器，这些处理器都是一个个函数，它们定义了某个事件发生时，服务器应该执行的动作。

##### I/O多路复用程序的实现

还是通过包装底层的select、epoll、evport和kqueue这些I/O多路复用的函数库来实现的

##### 事件的实现

##### API

##### 文件事件的处理器

#### 时间事件

首先来复习一下多路复用,没办法用的多有什么辙
几个关键的记忆点,bind()函数和accept()函数,socket
客户端connect()
已连接队列
多进程模型
多线程模型
IO多路复用模型select()和poll()
IO多路复用模型epoll()
事件机制,回调函数

#### Redis中的IO多路复用

### 客户端

主要内容是服务器内部保存的redis-client结构,对其中的的属性进行讲解

### 服务端

## 多机数据库的实现

### 复制

分为旧版复制功能和新版复制功能

#### 旧版功能的实现

##### 1.同步

1. 从服务器向主服务器发送SYNC命令
2. 收到SYNC命令的主服务器执行BGSAVE命令，在后台生成一个RDB文件，并使用一个缓冲区记录从现在开始执行的所有写命令。
3. 将生成的文件发送给从服务器，从服务器接收并载入这个RDB文件，将自己的数据库状态更新至主服务器执行BGSAVE命令时的数据库状态
4. 主服务器再将之前缓冲区的文件发送给从服务器。

##### 2. 命令传播

现在主从一致之后，主服务器接收来自客户端的命令导致主从的数据又不一致，然后这个时候主服务器就会执行命令传播操作：

将造成主从数据库不一致的命令发送给从服务器，让从服务器也执行这条命令

#### 新版复制功能

其实也就是在主从断开连接之后重新连接的时候做了优化，让其只用从传输断开时的数据开始重新传输

##### 部分重同步的实现

###### 1.复制偏移量

主服务器发送完之后记录自己发送数据偏移量，从服务器接收完之后也会记录自己接收的偏移量

###### 2.复制积压缓冲区

复制积压区是由主服务器维护的一个固定长度(fixed-size)先进先出(FIFO)队列，默认大小为1MB。

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E6%96%B0%E7%89%88%E5%A4%8D%E5%88%B6%E5%8A%9F%E8%83%BD%E6%A1%88%E4%BE%8B20250417.png)

以上面的例子来说

A断线之后，需要理解向主服务器发送PSYNC命令，报告自己的复制偏移量为10086。

主服务器收到从服务器发来的PSYNC命令以及偏移量10086之后，主服务将检查偏移量10086之后的数据是否存在于复制积压区中，如果存在则则直接发送，如果不存在那么就要重新执行完整的同步操作了。

###### 3.服务器运行id

* 每个Redis服务器节点，无论主从都有自己的运行id，40个16进制字符组成
* 当从服务器重新连接上时，PYSNC命令也将发送自己保存的主服务器id，主服务器拿到之后和本节点id进行比较，如果一致的话那么说明从节点之前就是从本主节点同步的，如果不是的那么就要进行完整的复制流程。

#### 心跳检测

### Sential

引入了一个新的角色，哨兵，可以监视任意多个主服务器，一旦发现主节点下线，就会在从节点中重新选择新的节点作为主节点，原来的主节点重新上线后就让它成为新主节点的从节点

### 集群

一个集群通常由多个节点(node，一主多从)组成，它们之间通过复杂的工作机制进行关联。

#### 节点

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E9%9B%86%E7%BE%A4%E8%8A%82%E7%82%B9.png)![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E9%9B%86%E7%BE%A4%E8%8A%82%E7%82%B9.png)

#### 槽指派

集群的整个数据库被分为16384个槽(slot)，数据库中的每个键都属于这16384个槽中的其中一个，集群的每个节点可以处理0个或最多16384个槽。

#### 在集群中执行命令

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/Redis%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0%E5%9C%A8%E9%9B%86%E7%BE%A4%E4%B8%AD%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A420250417.png)

#### 重新分片

举个例子，假如说原来有3个节点被分派了所有槽位

#### ASK错误

#### 复制与故障转移

#### 消息

## 独立功能的实现

## 一点碎碎念

最近因为面试，所以又拿出了《Redis设计与实现》这本书出来复习，其实23年的时候就已经刷过一遍这本书了，但是没有做笔记，今年发现做笔记和不做笔记差别还是挺大的。这两天也不想去复盘之前的面试(畏难心理还是已经皮实了，不想再继续下去了)，索性就写写笔记，当做一种娱乐了。
