---
title: 从根上理解MySQL随笔
author: Ray
date: 2022/10/22 21:25
categories:
 - MySQL快速入门
tags:
 - MySQL
---
# 从根上理解MySQL随笔

## 重新认识MySQL

### 客户端/服务器架构

### MySQL的安装

#### bin目录下的可执行文件

bin目录下有好几种启动MySQL的可执行文件

### 启动MySQL服务器程序

#### UNIX里启动服务器程序

1. mysqld 可以启动一个服务器进程
2. mysqld_safe  启动脚本,间接调用mysqld,顺便启动一个监控线程,在服务器进程挂了的时候，帮助重启。
3. mysql.server 启动脚本,间接调用mysql_safe,在调用mysql.server时在后边指定start参数就可以启动服务器程序。 mysql.server start
4. mysqld_multi 对每一个服务器进程的启动和停止进行监控

### 启动MySQL客户端程序

```shell
mysql -h主机名 -u用户名 -p密码
```

本上是一个进程间通信的过程

### 客户端与服务器连接的过程

#### TCP/IP

如果使用TCP/IP网络来连接到服务器进程,就需要在启动客户端程序时在-h后面使用IP地址来作为需要连接的服务器进程所在主机的主机名。

### 服务器处理客户端的请求

## 启动选项和系统变量

### 启动选项和配置文件

#### 在命令行上使用选项

例如,启动时禁止使用TCP/IP网络通信。

```shell
mysql --skip-networking
```

指定启动选项时需要加上--前缀。另外如果选项名是由多个单词构成的,他们之间可以由短划线-连接起来。比如,skip-networking和skip_networking表示的含义是相同的。
还有一个例子是启动时设置表的存储引擎
书上还强调了一下选项的长形式和短形式,例如--host -h主机名这样式儿的

#### 配置文件使用选项

因为启动时命令行选项只在本次起作用,所以放在配置文件中永久生效

##### 配置文件路径

这块对于类unix的路径进行描述

##### 配置文件内容

分组进行配置,各个启动命令也有能读取的组的限制。
注:如果同一个启动选项即出现在命令行中,又出现在配置文件中,那么以命令行的启动选项为准。

### 系统变量

#### 简介

在服务器程序运行过程中能对其造成影响的变量。

#### 查看系统变量

```shell
show variables like 'default_storage_engine'
```

#### 设置系统变量

##### 通过启动选项设置

##### 服务器运行过程中设置

###### 设置不同作用范围的系统变量

书上提到了两个概念或者说是两个范围,一个是global,另一个是session。

1. GLOBL:全局变量,影响服务器的整体操作
2. SESSION:会话变量,影响某个客户端连接的操作
   服务器启动时,会将每个全局变量初始化为其默认值。服务器会为每个客户端连接维护一组会话变量,客户端的会话变量在连接时使用相应全局变量的当前值初始化。
   如果在设置系统变量的语句中省略了作用范围,**默认的作用范围就是SESSION**(这次的客户端连接)。

###### 查看不同作用范围的系统变量

同样也是使用show varaibles like 'default_storage_engine'

### 状态变量

为了检测服务器程序的运行情况而存在的变量,由此而知,它们的值是由服务器程序来设置的。
show status like 'thread%'
状态变量也有global和session两个作用范围。

## 字符集和比较规则

### 字符集和比较规则介绍

#### 字符集简介

将二进制数据转换为字符所用的这套转换规则就是字符集

#### 比较规则简介

a-0x01 b-0x02上面的字符如果以二进制数据自身的比较规则来进行比较的话,那么大多数时候是不符合场景需求的。'a'和'A'进行比较时:

1. 将两个大小写不同的字符全部转换为大写或者小写
2. 再比较这两个字符对应的二进制数据。

### 字符集和比较规则的应用

#### 各级别的字符集和比较规则

#### 客户端和服务器通信过程中使用的字符集

#### 比较规则的应用

### 总结

1. 字符集
2. 比较规则
3. 在MySQL中,一个字符集可以有若干种比较规则,其中有一个默认的比较规则,一个比较规则必须对应一个字符集
4. 查看MySQL支持的字符集和比较规则语句:
   show (charcter set|charset)[like 匹配的模式]show collation [like 匹配的模式]
5. MySQL有四个级别的字符集和比较规则
   + 1 服务器级别
   + 2 数据库级别
   + 3 表级别
   + 4 列级别

---

6. 从发送请求到接收结果过程中发生的字符集转换
7. 比较规则的作用通常体现在比较字符串大小的表达式和对某个字符串进行排序中

## InnoDB记录存储结构

虽然书上已经讲得十分通俗了,奈何我学的还是非常吃力,找了一篇博客,觉得还不错。
https://draveness.me/mysql-innodb/

### 简介

将数据划分为若干个页,以页作为磁盘和内存之间交互的工作单位,InnoDB中页的大小一般为16KB.

### Compact格式

### Redundant行格式

### 两者的异同

最大的不同就是Compact在行记录的**第一部分倒序**存放了一行数据中列的长度(Length),而Redundant中存的是每一列的偏移量(Offset)

### 行溢出数据

当InnoDB使用Compact或者Redundant格式**存储极长的VARCHAR或者BLOB这类大对象时**,我们**并不会直接将所有的内容都存放在数据页节点中**,而是将行数据中的前768个字节存储在数据页中,后面会通过偏移量指向溢出页。
当使用新的记录格式Compressed或者Dynamic时都会只在行记录中保存20个子节的指针,**实际的数据都会存放在溢出页面中**。

## InnoDB数据页结构

### 不同类型的页

为了不同的目的设计了许多种不同类型的页,比如存放头部信息的页,存放Insert Buffer信息的,存放index信息的页,存放undo日志信息的页等

### 数据页结构的快速浏览

数据页代表的这块16KB大小的存储空间可以被划分多个部分,不同的部分有不同的功能

1. File Header
2. Page Header
3. Infimum+supremum 两个虚拟的行记录 最大记录和最小记录
4. User Records 真实存储行记录内容
5. Free Space
6. Page Directory 页中的某些记录的相对位置
7. File Tailer

### 记录在页中的存储

不得不再提及一下记录的构成,下面展示了行记录的记录头格式

#### 记录头的构成

1. 预留位1
2. 预留位2
3. delete_mask 标记该记录是否被删除
4. min_rec_mask B+树的每层非叶子结点的最小记录
5. n_owned 表示当前拥有的记录数
6. heap_no 表示当前记录在记录堆中的位置
7. record_type 表示当前记录的类型
8. next_record 表示下一条记录的相对位置
   其中比较重要的3个字段n_owned、heap_no和next_record书上讲的非常的详细

### Page Directory(页目录)

### Page Header(页面头部)

### File Header(文件头部)

### File Trailer(文件尾部)

### 总结

1. InnoDB为了不同的目的设计了不同类型的页,我们把用于存放记录的页叫做数据页
2. 数据页大致被分为7个部分:

- File Header 表示页的一些通用信息,占固定的38字节
- PageHeader 表示数据页专有的一些信息,占固定的56个字节
- Infimum+Supremum 两个虚拟的伪记录,分别表示页中的最小和最大记录,占26个子节
- User Records 真实存储我们插入的记录的部分,大小不固定
- Free Space 页中尚未使用的部分
- Page Diretory 页中某些记录的位置,对于数据页来说是每一组的最后一条记录
- File Trailer 用于检验数据页是否完整(备份到磁盘过程断电的检验)

3. 记录会形成单链表
4. 查找记录的过程(必须完全理解)提示:Page Directory+二分+next_record
5. FileHeader会使得所有数据页组成一个**双链表**
6. 校验和以及LSN值

## B+树索引

通过前面的学习我们知道查询到记录是存放在**数据页**中的,通过FileHeader和FileTrail将其连接为一个双向链表。数据记录是next_record指针连接起来的链表。

### 为什么需要索引

暴力遍历:从最小记录开始遍历
二分法:根据数据页记录槽中的数据来快速定位到(这是在数据页中快速查找)
如何快速找到是哪个数据页
这个时候就需要借助某种数据结构来帮助我们快速定位到数据页

#### 页分裂问题

### 先从简单的索引方案开始

为每个数据页建立一个目录项,这些目录项页保存在数据页中,目录项的格式为key-value,key用的是主键id,value保存的是页的地址(书上用的名词叫做页号),通过目录项可以快速的访问到页。

### InnoDB中的索引方案

上面的方案有一个痛点就是数据页的大小只有16KB,如果用户记录很多的时候那么目录项也会有很多,这个时候会有多个存储目录项的数据页,又遇到了找哪个页的问题。
所以,InnoDB采用了树结构的方式来保存目录项和用户记录(每条记录的头信息中有个属性叫做record_type，用来表示是不是B+树叶子节点),而这种数据结构也被称为**B+树**

#### 为什么不用B树

##### 1.IO性能问题

你想，B树如果非叶子节点和叶子节点都是记录的话，那么每一层的记录都需要进行IO读取，磁盘I/O的次数也就越多

而B+树里面非叶子节点存储的索引更加多，一次读取的数据多，所以I/O次数少

##### 2.范围查找支持

B树的范围查找更难实现，算法复杂，而B+树直接根据索引查询到范围，定位到叶子节点进行链表的顺序读取即可

#### 聚簇索引

B+树本身就是一个聚簇索引,也就是说索引和数据都在树中,且叶子结点保存用户记录。

#### 二级索引

用某个列作为目录项,叶子结点存储的的是主键,拿到主键之后还要去聚簇索引中查记录,这个过程称为回表

#### 联合索引

多个列构成的二级索引

### InnoDB的B+树索引的注意事项

1. 根结点不移动,移动的是页中的数据
2. 内节点(除去叶子节点)目录项记录的唯一性

   ![img](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/%E6%A0%B9%E4%B8%8AMySQLB+%E6%A0%91%E4%BA%8C%E7%BA%A7%E7%B4%A2%E5%BC%9520250416.png)

   也就是说最终的索引目录项如上图所示
3. 一个页面最少存储2条记录

### MyISAM中的索引方案简单介绍

索引与数据是分开,索引信息会存储在被称为索引文件的文件中。MyISAM会单独为表的主键创建一个索引,存储的是主键和行号。

### 创建和删除索引的语句

在建表时创建索引

```mysql
create table index_demo{
    c1 int,
    c2 int,
    c3 char(1),
    primary key(c1), 
    index idx_c2_c3 (c2,c3)
}
```

修改表来添加索引

```mysql
alter table table_name add [index|key] 索引名(需要被索引的单个列或多个列)
```

删除时使用drop

#### 索引下推与倒排索引

倒排列表,每个词汇对应一个文档列表,展示词汇在文档中出现的位置

## 学会使用B+树索引

### 索引的代价

* 空间上的代价：每建立一颗索引都要重新创建一颗B+树，B+树的叶子节点都是一个数据页，每个页占用的空间大小为16KB
* 时间上的代价：每次增、删、查都要修改索引

### B+树索引的适用条件

#### 全值匹配

索引的每个列都用到了,这种情况被称为全值匹配

#### 匹配左边的列

用到了联合索引中的左边的列

#### 匹配前缀

```mysql
SELECT * FROM person_info WHERE name LIKE 'As%';
```

可以看到根据前缀进行了匹配,在索引的排序也是这样的,在索引变动时某个列也会根据字母顺序排序

#### 匹配范围值(重要)

```mysql
select * from person_info where name >'Asa' and name<'Barlow' and birthday>'1980-01-01';
```

找到name的值为Asa的记录
找到name的值为Barlow的记录
拿到中间的所有记录，然后会用到这颗B+树索引树的匹配出来主键id,但是不会用到birthday索引缩小范围，因为多个name匹配下的birthday不是有序的

#### 精确匹配某一列并范围匹配另一列(重要)

```mysql
SELECT * FROM person_info WHERE name = 'Ashburn' AND birthday > '1980-01-01' AND birthday
< '2000-12-31' AND phone_number > '15100000000';
```

精确匹配到的列必须是最左边的列

**注意：这里的最左匹配原则生效我之前理解有误，应该联合索引(a,b,c)，如果a的值确定的情况下b的值才会有走索引的价值，不然就不会走索引。**

为什么，我们例子来看上面的例子，name已经确定了是'Ashburn'，然后a索引下的目录项的b索引都是有序的，就可以用birthday索引来缩小范围，但是phone_number索引就不能生效了

#### 用于排序

```mysql
select * from person_info order by name,birthday,phone_number limit 10;
```

注意:排序的列必须要和联合索引的列的顺序保持一致

#### 用于分组

```mysql
select name,birthday,phone_number,count(*) from person_info group by name,birthday,phone_number
```

不出意料的是索引也会生效,因为首先会找到最左边的列,然后再按联合索引后面的索引进行分组。

## MySQL的数据目录

### 文件系统

操作系统用来管理磁盘的叫做**文件系统**

### MySQL数据目录

#### 安装目录与数据目录

安装目录的话一开始就说过这个文件,下面的bin目录有许多可执行文件;数据目录是用来存储运行过程中产生的数据

#### 如何查看数据目录

show variables like 'datadir';

### 数据目录的结构

#### 数据库在文件在文件系统中的表示

新建数据库时会在数据目录下产生一个子目录

#### 表文件在文件系统中的表示

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/MySQL%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%9520250425.png)

如上，这是我本地docker安装的数据库的文件，表结构文件后缀是.frm，而数据存储文件则以.ibd后缀结尾。

(我在自己电脑上没有发现与书上一致的表结构文件和表数据文件,只有一个.ibd文件，写这段话的时间是在2023年，估计是版本不同)

##### 1.表结构的定义

也就是上面所说的frm

##### 2.表数据文件

也就是上面所说的ibd

##### InnoDB是如何存储数据的

InnoDB提出了一个**表空间**的概念，这是一个抽象的概念，它可以对应文件系统上一个或者多个真实文件(不同表空间对应的文件数量不同)。每一个表空间可以被划分为很多个页，我们的表数据就存放在表空间某些页里。

###### 系统表空间

5.5.7-5.6.6之间的时候,数据会被存储到系统表空间,我在电脑上试了一下并不是一个文件夹,同时在启动的时候也可以配置系统表空间的位置和大小

###### 独立表空间

MySQL5.6.6之后数据会被存储到独立表空间
我们自己可以指定是否使用独立表空间还是系统表空间

##### MyISAM是如何存储数据的

表结构、索引(在介绍索引时有提到过)和表数据三者分开存储
test.frm test.MYD  test.MYI

#### 视图在文件系统中的表示

虚拟表,所以只用存储表结构文件

#### 其他的文件

服务器进程文件:MySQL服务器会把自己的进程ID写入到一个文件中
服务器日志文件:各种日志文件,例如查询日志、错误日志、二进制日志和redo日志
默认/自动生成的SSL和RSA证书和密钥文件:为了客户端和服务器端的安全通信而创建的一些文件

### 文件系统对数据库的影响

数据库收到文件系统的约束
数据库名称和表名不能超过文件系统所允许的最大长度
表结构文件中会有特殊字符
文件长度受到文件系统最大长度限制

## 存放页面的池子-InnoDB的表空间

可以把表空间想象成被切分为许许多多个页的池子，当我们想为某个表插入一条记录的时候，就从池子中捞出一个对应的页来把数据写入进去。

这一章的内容可能难以理解,所以需要借助图片来更加直观的展示

### 复习有关页的知识

#### 页面类型

书上大概讲了一下这部分,我听的多的是Undo日志页

#### 页面通用部分

##### FileHeader的组成部分

书中对于各个组成部分描述
FIL_PAGE_OFFSET 页号

### 独立表空间

用书上的例子来说的话,表空间就是一个军团,段就是一个个师,而区既可以隶属于师,也可以直接作为独立团属于表空间

#### 区(Extend)

区是由物理上的64个页组成的,具有物理存储结构
256个区构成一个组,独立表空间中第一组的前三个页是特殊的,它的内容是固定的
FSP_HDR:表空间整体属性和本组所有的区
IBUF_BITMAP:???
INODE:还是没理解这块儿

##### 为什么引入区？

避免随机I/O

#### 段

为什么引入段的概念?
书上的理由是为了区分叶子结点和非叶子结点(在范围扫描时起作用),为什么区分了就快???所以将索引的叶子结点与非叶子结点区分(逻辑上的，至于物理上的肯定还是通过链表连接)为了节省空间同时就有了碎片区这一概念,直属于表空间,有些页用于段A,有些页用于段B。此后,为某个段分配存储空间的策略:

1. 在刚开始向表中插入数据的时候,段是从某个碎片区以单个页面为单位来分配存储空间
2. 当某个段已经占用了32个碎片页的时候,就会以完整的区为单位来分配存储单位

#### 区的分类

空闲的区(FREE):未使用的区
有剩余空间的碎片区(FREE_FRAG):表示碎片区中还有可用的页面
没有剩余空间的碎片区(FULL_FRAG):已经完全被使用
隶属于某个段的区(FSEG):之前提到过如果某个区被分配给某个段的情况
FREE、FREE_FLAG和FULL_FLAG都是直属于表空间的
**XDES Entry()**的结构,是这一章出现的第一种结构(数据结构),其中有个组成部分就是**ListNode**,链表,用来将多个XDES Entry连接起来
与上面3种类型对应的就是FREE链表、FREE_FRAG链表和FULL_FRAG链表
上面提到过给段分配存储空间如果占用了超过32个碎片页的时候就会分配完整的区,结合3种类型的链表,无非就是修改链表的next node指针操作了

##### 哪些区属于哪个段

上面的问题针对于碎片区来说的,那么段中的页是什么情况?
每个段有三个链表:FREE、NOT_FULL和FULL链表
假设一个表有两个索引,共需维护15个链,段在数据量比较大时插入数据的话,会先获取NOT_FULL链表的头节点,直接将数据插入这个头节点对应的区中即可,如果该区的空间使用完则会被移到FULL链表中。

##### 链表基节点

如何找到某个XDES Entry,这个时候用的就是List Base Node

#### 段的结构

ListNode链表

#### 各类型页面详细情况

前面讲了那么多链表,那么它们的List Base Node在哪儿呢?

##### FSP_HDR类型

###### File Space Header

3种类型的List Base Node
Free Limit

#### Segment Header

用来区分叶子结点和非叶子结点

#### 真实表空间对应的文件大小

.ibd自扩展,随着表中的数据的增多,表空间对应的文件也逐渐增大

### 系统表空间

和独立表空间类似,但是比表空间在第一组中多了三个页
![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-10-28%20%E4%B8%8B%E5%8D%883.21.37.png)

## 单表访问方法

在此之前,书上有建了一个表,这是前提,可以回到前面查看建表语句。
在执行一条SQL语句的时候有多种方案,MySQL Server有个**查询优化器**的模块,这个模块最终会将查询语句优化成一个所谓的**执行计划**,执行计划后面会详细讲解,现在先有这么一个概念。

### 执行方法(access method)

MySQL的**查询方式**大致有两种:

* 使用全表搜索
* 使用索引进行查询,可以细分为很多种类
  * 针对主键或唯一二级索引的等值查询(唯一)
  * 针对普通二级索引的等值查询(范围)
  * 针对索引列的范围查询(范围)
  * 直接扫描整个索引
    针对上面的这几种细分的查询方式,MySQL将其称为**访问方法**或者**访问类型**。

### const(常量级别)

指的就是针对主键或者唯一二级索引,执行几次二分查询就可得到数据,所以就是const

### ref&eq_ref

```mysql
select * from single_table where key1='abc'
```

搜索条件为二级索引与常数值等值比较,采用二级索引来执行查询的访问方法称为:ref。
同时常见的还有eq_ref,区别就是eq_ref使用的二级索引是唯一索引或者主键,所以eq_ref更加的快

### ref_or_null

与上面的差别是将NULL的等值也包括了

### range

上面说的都是等值查询,那么如果是范围查询的情况该是什么样子呢？
索引列会匹配范围内的值(等值匹配)

### index

不需要回表,通过查询二级索引即可获取全部的数据

### all

### 注意事项

#### 二级索引+回表

#### 明确range范围

上面的访问方法中range看起来是执行起来最复杂的一个,下面就是MySQL的一些优化手段

##### 所有搜索条件都可以使用某个索引的情况

直接使用二级索引就可以确定所有查询的值

##### 有的查询条件无法使用索引的情况

```mysql
select * from single_table where key2>100 and common_field='abc'
```

key2>100查询条件可以使用idx_key2来进行匹配,后面的查询条件则无法使用索引。此时将后面的查询条件设置为true,直接根据前面的条件查询到记录。然后在回表的时候再根据common_field的条件进行过滤。

##### 复杂搜索条件下找出范围匹配的区间

复杂条件其实也可以进行化简,能够用聚簇索引的话肯定就会使用聚簇索引,减少回表的操作。

#### 索引合并

一般一次查询只会使用单个二级索引,但是特殊情况下也可能在一个查询中使用到多个二级索引

##### Intersection合并

AND关系
多个二级索引查询的结果**取交集**再回表

###### 适用情况

1. 二级索引等值匹配
2. 主键列范围匹配(主键列指定范围,二级索引等值)

##### Union合并

OR关系
取并集

###### 适用情况

1. 二级索引等值匹配
2. 主键列范围匹配(主键列指定范围,二级索引等值)
3. 取交集的索引合并的搜索条件

##### Sort-Union合并

二级索引范围匹配(这种情况有点玄乎),对主键进行排序。

## 连接的原理

### 连接简介

#### 连接的本质

#### 连接过程

**驱动表**
笛卡尔乘积在多表时的排列组合结果指数级增长,所以就有了左连接和右连接。首先需要明确的是驱动表的概念,就是最先满足查询的条件的表,像左连接就是左边的表就是驱动表。
**被驱动表**
在驱动表中查完数据之后,需要到被驱动表中去找满足连接条件和其他条件的数据,这类表被称为被驱动表。

#### 内连接和外连接

##### 区别

对于内连接来说,驱动表在被驱动表中找不到匹配的记录,那么就不会加入到结果集中。
对于外连接来说,驱动表的记录即使在被驱动表中没有匹配的记录,也仍然需要加入到结果集中

##### where过滤条件与on过滤条件

对于外连接来说,on会将不匹配加入,而where都不会加入

### 连接的原理

#### 嵌套循环连接

驱动表只访问一次,被驱动表访问的次数取决于对驱动表执行单表查询后的结果集中的记录条数,这种方式称之为**嵌套循环连接(Nested-Loop Join)**

#### 使用索引加快查询速度

从驱动表中到被驱动表中查数据的时候相当于一次条件查询,那么这个时候就可以**使用索引**加快查询的速度。

#### 基于块的循环嵌套连接

总结:
1.内连接和外连接
2.MySQL的设计者总想用更少的资源和更快的访问速度来提升查询的效率,把握住这个就是这几章的思想

## MySQL基于成本的优化

### 什么是成本

CPU成本和I/O成本?
从磁盘加载到到内存过程的损耗的时间称为**I/O成本**
读取及检测结果是否满足对应的搜索条件、对结果集进行排序等操作称为**CPU成本**;

### 单表查询的成本

#### 基于成本的优化步骤

在一条单表查询语句真正执行之前,MySQL的查询优化器会找出所有可能使用的方案,然后选择一个成本最低的方案,这个成本最低的方案就是所谓的**执行计划**,过程如下
1.根据搜索条件,找出所有可能使用的索引
2.计算全表扫描的代价
3.计算使用不同索引执行查询的代价
4.对比各种执行方案的代价,找出成本最低的那一个

##### show index

Non_unique 索引列的值是否唯一
Seq_in_index 索引列在索引中的位置
Collation 索引列中的值是按何种排序方式存放的,值为A时代表升序存放
Cardinality 索引列不重复值的数量
Sub_part 对于存储字符串或者字节串来说,只想对前n个字符或字节建立索引

#### 连接查询的成本

**扇出**:从驱动表进行查询后的记录条数称为驱动表的**扇出**,这个概念有什么用呢,肯定跟被驱动表有关系呗

#### 调节成本常数

server层和存储引擎层,在server层进行**连接管理、查询缓存、语法解析和查询优化等操作,在存储引擎层执行具体的数据存取操作。
1.mysql.server_cost表
2.mysql.engine_server表

## InnoDB的统计数据如何收集

上一章中有个index dive的概念,就是从索引的B+树中查询满足条件的索引记录的过程。但是这种情况在某些情况下(书上举的例子是在in中的参数非常多)就会非常慢,还有一种方案就是靠MySQL的统计数据,但是误差非常大。

### 两种不同的统计数据存储方式

1.永久性的统计数据
2.非永久性的统计数据
InnoDB是**以表为单位**来收集和存储统计数据的。我们可以在创建和修改表的时候通过指定
STATS_PERSISTENT属性来指明表的统计数据存储方式:
alter table 表名 Engine=InnoDB,STATS_PERSISTENT=0

### 基于磁盘的永久性统计数据

实际上将这些统计数据存储到了两个表里:
**innodb_table_stasts**  每一条记录对应着一个表的统计数据
**innobb_index_stats**  每一条记录对应着一个索引的统计项的统计数据

## MySQL基于规则的优化

### 条件化简

#### 去除多余的括号

#### 常量传递

#### 等值传递

#### 移除没用的条件

#### 表达式计算

注意:表达式中是常量时才会生效

#### HAVING子句和WHERE子句的合并

如果查询语句中没有出现诸如sum、max等等的聚集函数时,那么优化器就会将where和having子句进行合并

#### 常量表检测

针对主键索引和唯一二级索引的等值匹配查询时生效,如下

```mysql
select * from table1 inner join table2 on table1.column1=table2.column2
where table1.primary_key=1;
```

将会做如下优化

```mysql
select table1表记录的各个字段的常量值,table2.* from table1 inner join table2 on table1表column1列的常量值=table2.column2;
```

### 外连接消除

首先外连接和内连接和区别是什么不用多说。通过where条件不允许被驱动表的列为空,这样就和内连接查询的结果一致。

### 子查询优化

#### 子查询语法

##### 子查询类型

###### 按返回的结果集区分子查询

1. 标量子查询
   返回单一值的子查询称之为**标量子查询**,一行一列的数据
2. 行子查询
   一条记录
3. 列子查询
4. 表子查询
   多条记录

###### 按与外层查询关系来区分子查询

1. 不相关子查询
   子查询单独可以出结果
2. 相关子查询

##### 子查询在布尔表达式中使用

##### 子查询语法注意事项

#### 子查询在MySQL中如何执行

讲在前面,书上先讲了猜想的执行的真实样子

1. 如果是不相关子查询的话,那么就是先执行子查询中的语句，将结果集作为外层查询可能将要用到的数据集。
2. 如果是相关查询，那么先从外层查询中拿出一条数据，用对应的值和子查询的列做关联。
   事实也正是如此,但是MySQL会在此基础上进行优化

##### IN子查询优化

**不直接将不相关子查询的结果集当作外层查询的参数,而是将该结果集写入到一个临时表里**。

1. 该临时表的列就是子查询结果集中的列。
2. 写入临时表的记录会被去重。
3. 如果数据不是大的离谱,那么就会建立基于内存的使用Memory存储引擎的临时表,而且会为该表建立哈希索引;如果过大就会建立基于磁盘的存储引擎。
   上面这种方案被称之为**物化表**,可以将物化表转换为连接
   MySQL设计者又提出**半连接**(semi-join),这是**MySQL内部的一种查询方式**,下面是书上对于半连接的详细描述
   对于s1表的某条记录来说,我们只关心在s2表中是否存在与之匹配的记录，而不关心具体有多少条记录与之匹配,最终的结果集中只保留s1表的记录。
   有5种实现semi-join的策略

###### 总结

1. 如果in子查询符合转换semi-join的条件,查询优化器会优先把该子查询为semi-join,然后从5种执行策略中选择成本更低的一种。
2. 如果in子查询不符合转换为semi-join的条件,那么查询优化器会从下边两种策略选择一种成本更低的方式

* 先将子查询物化之后再查询
* 执行in to exists

##### [NOT] EXISTS子查询的执行

1. 如果不相关,会用true或者false来替换掉exists条件;
2. 如果相关,就只能用一开始的方式来执行，但是会用索引加快

##### 对于派生表的优化

1. 将派生表物化
2. 将派生表和外层的表合并,就是将查询重写为没有派生表的形式

## Explain

### 执行计划输出各列详解

1. table 表名
2. id 每出现一个select就会分配一个id,`<font color="red">`在连接查询的执行计划中,每个表都会对应一条记录,这些记录的id的值是相同的,出现子在前边的表表示驱动表，后边的表表示被驱动表 `</font>`
3. select_type 在整个大查询中扮演了什么角色
4. partitions
5. **type**(重点)对应的是之前的单表访问方法是哪种
6. possible_keys和key 可能用到的索引
7. key_len 当优化器决定使用某个索引进行查询时,该索引记录的最大长度
8. ref 当使用索引列等值匹配的条件去执行查询时,ref列展示的就是与索引列作等值匹配的是什么,比如一个常数或者某个列。
9. **rows** 当全表扫描的方式对某个表执行查询,预计要扫描的索引记录行数。
10. filtered 计算扇出(驱动表中的记录条数)时的一个策略,通过百分比来预测。
11. **extra(重点)** 提供一些额外信息
    * using index:索引覆盖，不需要回表
    * using index condition:搜索条件中出现了索引列，但是不能用到索引
    * using filesort:很多情况下在内存中或者磁盘上无法使用到索引，只能在内存中或者磁盘中进行排序，这种被称为文件排序。
    * using where:全表扫描

### Json格式的执行计划

使用时只需要在原来的语句中加入FORMAT=JSON

```sql
EXPLAIN FORMAT=JSON SELECT * FROM s1 INNER JOIN s2 ON s1.key1 = s2.key2 WHERE s1.co 
```

### Extend EXPLAIN

执行计划的扩展信息

#### Optimizer Trace

explain只提供了部分信息,如果想要查看更加详细的优化过程就得借助optimizer_ trace表
查看变量
show variables like 'optimizer_trace';
enable默认是off,所以需要打开
set optimizer_trace="enabled=on";
//执行自己的查询语句
select * from s1 where
key1 > 'z' and
key2 > 1000000 and
key3 in ('a','b','c') and
common_field='abc';
然后查看optimizer表来观察优化过程
select * from information_schema.OPTIMIZER_TRACE\G .

## InnoDB的Buffer Pool

### 缓存的重要性

**重点：为了提升性能，外部即使访问一条记录也要把整个页的数据加载到内存中,读写访问之后不会立即释放内存。**

### InnoDB的Buffer Pool概览

#### Buffer Pool介绍

MySQL服务器在启动的时候向操作系统申请了一片连续的内存,这块内存就叫做**Buffer Pool**(缓冲池)。

#### Buffer Pool内部组成

InnoDB设计者为每一个缓存页都创建了**控制信息**,书中将每一个页对应的控制信息占用的内存称为一个**控制块**。
`<font color="red">`**控制块和缓存页是一一对应的**,它们都被存放到Buffer Pool中,其中控制快被存放到前面,缓存页被放在后边 `</font>`

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/BufferPool%E6%8E%A7%E5%88%B6%E5%9D%97%E5%92%8C%E9%A1%B520250408.png)

#### free链表的管理

`<font>`用来记录Buffer Pool中哪些缓存页是可用的 `</font>`,可以将所有的空闲页对应的控制块作为一个节点放到一个链表中。
同时有一个**基节点**用来统计free链表的数据,里面包含着头节点地址,尾节点地址和链表中的节点数量等信息。

#### 缓存页的哈希处理

哈希key-value
key就是**表空间号+页号**,value就是对应的**缓存页**;

#### flush链表的管理

将修改的缓存页(脏页)的对应的控制块信息所构成的链表,和free链表相似。

#### LRU链表的管理

##### 缓存不够用

缓存页太多,内存肯定是不够用的,这里就要提到LRU的思想了,也就是LastRecentUsed,最近使用的保留着,old的从内存中删除掉

##### 简单的LRU链表

LRU:Least Recently Used

1. 如果该页不在Buffer Pool中,把该页从磁盘加载到Buffer Pool的缓存页时,就把该缓存页对应的**控制块**作为节点塞到链表的头部
2. 如果该页已经缓存在Buffer Pool中,则将页对应的控制块移动到LRU链表的头部。

##### 划分区域的LRU链表

###### LRU面临的问题:

1. 预读
   可能用到的页面,加载到Buffer Pool中。

- 线性预读
  连续(顺序访问)读取某个区的指定数量(系统变量)的页面,就会触发异步读取下一个区的全部页面到Buffer Pool中,异步不会影响当前工作线程的正常运行。
- 随机预读
  如果缓存了某个区的13个连续的页面,会读取本区中的所有其他页面到Buffer Pool中,是否开启可由系统变量配置。

2. 全表扫描
   上面两种情况都会导致Buffer Pool中大量的页被替换掉

###### 解决方案

将LRU链表分为两部分Yong区域和Old区域innodb_old_blocks_pct系统变量来配置old区域在链表中所占比例。

1. 针对预读的优化
   当磁盘上的某个页面在初次加载到Buffer Pool中的某个缓存页时,该缓存页对应的控制块会被放到old区域的头部
2. 针对全表扫描的优化
   全表扫描的特点是执行频率特别低
   对某个处在old区域内第一次访问会有一个访问时间,后面再次访问时的时间与首次访问时间的差值如果超过某个值就会将其移动至yong区域首部。
3. 更进一步优化
   yong区域中也不是每次访问都会将对应的控制块移动到首部,而是后3/4处的控制块才会移动至首部。

#### 刷新脏页到磁盘

1. 从**LRU链表**的冷数据(old)中刷新一部分页面到磁盘。
2. 从**flush链表**中刷新一部分页面到磁盘。

#### 多个Buffer Pool实例

多线程情况下Buffer Pool的各种链表需要加锁,单一的Buffer Pool可能会影响请求的处理速度。

#### innodb_buffer_pool_chunk_size

Buffer Pool的实例是由若干个chunk(一片连续的内存空间)组成,`<font>`innodb_buffer_pool_size的值只能在服务器启动的时候指定,在服务器运行过程中不可以修改 `</font>`

#### 配置Buffer Pool注意事项

innodb_buffer_pool_size 必须是 innodb_buffer_pool_chunk_size × innodb_buffer_pool_instances 的
倍数(这主要是想保证每一个 Buffer Pool 实例中包含的 chunk 数量相同)

#### 查看Buffer Pool的状态信息

show engine innodb status\G;
常见的几个值
Total memory allocated 向操作系统申请的连续内存空间大小,包括全部控制块、缓存页和碎片的大小
Buffer pool size 代表Buffer pool可以容纳多少缓存页
Free buffers 代表LRU链表中页的数量

#### 总结

1. 磁盘太慢,内存作为缓存很有必要
2. Buffer Pool本质上是InnoDB向操作系统申请的**一段连续的内存空间**
3. Buffer Pool向操作系统申请的连续内存由控制块和缓存页组成,每个控制块和缓存页都是一一对应的,在填充足够多的控制块和缓存页的组合后,Buffer Pool剩余的空间可能不够填充一组控制块和缓存页,这部分空间不能被使用,也被称为**碎片**。
4. InnoDB使用了许多链表来管理Buffer Pool。LRU、Free、Flush
5. free链表中每一个节点都代表一个空闲的缓存页
6. 为了快速定位到某个页是否被加载到Buffer Pool,使用**表空间号+页号**作为key,缓存页作为value,建立哈希表
7. Buffer Pool中被修改的页称为脏页,不是立即刷新，而是加入到flush链表
8. yong区域与old区域,可以通过innodb_old_blocks_pct来调节old区域所占的比例。
9. 通过指定innodb_buffer_pool_instance来控制Buffer Pool实例的个数
10. 5.7.5之后,可以在服务器运行过程中调整Buffer Pool的大小。
11. 查看Buffer Pool状态命令:show engine innodb status\G;

## 事务

### 事务的概念

一组数据库操作,满足上面4个特性。

### 为什么要出现事务

需求就是期望一组操作要么都成功要么都失败

### 事务的特性ACID

原子性
隔离性
一致性 符合现实世界的约束(书上是这么说的,我还没有看其他的)
持久性
AID是手段，D才是我们的目标

### 事务的语法

#### 开启事务

两种方式

1. begin
2. start transaction

#### 提交事务

commit

#### 手动中止事务

rollback

#### 支持事务的存储引擎

InnoDB和NDB存储引擎

#### 自动提交

SHOW VARIABLES LIKE 'autocommit';
默认值是ON,每一条语句都是独立的一个事务。

1. 显式的使用start transaction或者begin开启一个事务
2. 把系统变量autocommit的值设置为OFF

#### 隐式提交

1. 定义或者修改数据库对象的数据定义语言(Data definition language)
2. 隐式使用或修改mysql数据库中的表
   还有其他,这里只要知道某些语句或者操作会触发事务的隐式提交

#### 保存点

savepoint 保存点名称
在事务中添加这条语句即可

### 并发事务带来的问题

#### 脏读

a事务将记录A从20改为19,随后回滚,但是B事务读取到了19

#### 丢失修改

两个事务同时读取到20,然后同时改为19,那么从道理上来说必定有一个事务丢失了修改

#### 不可重复读

a事务读取到记录A将其从20修改为19,b事务一直在读取,但是两次的值分别为19和20

#### 幻读

a事务插入一条记录，b事务在两次分别读取时读到了不同的数据

#### 不可重复读和幻读的区别

幻读强调的是事务b读取到了新数据，而不可重复读强调的是读取的数据记录发生了变更

### 如何解决上述问题

MVCC机制

## redo日志

### 事先说明

因为一条记录刷新一个页面到磁盘有点过于浪费,所以将这个修改操作记录一下。
例如,更新操作
将第0号表空间的100号页面的偏移量为1000处的值更新为2。这就是一条完整的记录,称为redo log。

### redo日志格式

![redolog日志格式](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-12-03%20%E4%B8%8B%E5%8D%886.09.07.png)
各个部分释义

1. type 日志类型
2. space ID 表空间ID
3. page number 页号
4. 该条日志的具体内容

上面这些只是所有redo日志共有的,下面还有一些不同类型redo日志特有的属性。

#### 简单的redo日志类型

说在前面,InnoDB会维护一个**全局变量**,每当向某个包含隐藏的row_id列(没有主键或者唯一索引的时候会有这个列)的表中插入一条记录时,就会把该变量的值当作新新纪录的row_id列的值。每当这个变量的值为**256的倍数**时,就会把该变量的值刷新到**系统表空间的页号为7**的页面中一个称之为**Max Row ID**的属性处。redo log的类型

- MLOG_1BYTE:表示在页面的某个偏移量处写入1个字节的redo日志。
- MLOG_2BYTE:表示在页面的某个偏移量处写入2个字节的redo日志
  后面还有4个字节和8个字节的redo日志。
  不出意外的话肯定还有多个字节的,
- MLOG_WRITE_STRING 表示在页面的某个偏移量处写入一串数据。

**属性**

1. **offset**,上面提到了那么多次偏移量,那么redo日志中肯定还有偏移量的属性。
2. 1字节2字节4字节的还有一个属性就是len,表示具体数据占用的字节数。
   总而言之,redo日志会把事务在执行过程中对数据库所做的修改都记录下来,在之后系统崩溃重启后可以把事务所做的任何修改都恢复出来。

### Mini-Transaction

#### 以组的形式写入redo日志

**页面更改产生的redo相应的日志被记录下来,这些redo日志被InnoDB设计者划分成为了若干个不可分割的组**

1. 更新Max Row ID属性时产生的redo日志时不可分割的
2. 向聚簇索引对应的B+树的页面中插入一条记录时产生的redo日志是不可分割的
3. 向某个二级索引对应的B+树的页面中插入一条记录时产生的redo日志是不可分割的
4. 还有其他的一些对页面的访问操作时产生的redo日志是不可分割的
   上面的不可分割的意思是插入的时候可能会出现页分裂(悲观插入)的情况,所以一个操作会产生多条记录。
   通过MLOG_MULTI_REC_END标志来代表当前redo日志是否为一组redo日志的结尾。

### redo日志的写入过程

#### redo log block

![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-12-05%20%E4%B8%8A%E5%8D%8810.05.51.png)
是不是有点像页的结构,只不过没有那么复杂

#### redo日志缓冲区

写入redo日志时也不能直接写到磁盘上,实际上服务启动时就向操作系统申请了一大片称之为redo log bufferr的连续内存空间。这片内存空间被划分为若干个连续的redo log block,可以通过启动参数innodb_log_buffer_size来指定log buffer的大小。

#### redo日志写入到log buffer

写入的第一个问题就是写入到哪个block的哪个偏移量处
InnoDB提供了一个称之为buf_free的全局变量,该变量指明后续写入的redo日志应该写入到log buffer中的哪个位置
**不同事务可能是并发执行的,所以T1、T2之间的mtr可能是交替执行的**。mtr产生的log buffer交替写入到log buffer

### redo日志文件

#### 刷盘时机

1. log buffer空间不足
2. 事务提交时
3. 后台线程刷
4. 正常关闭服务器时
5. check point

#### redo日志文件组

我的数据库中没有书上的两个文件ib_logfile0和ib_logfile1

1. innodb_log_group_home_dir
   该参数指定了redo日志文件所在的目录,默认值就是当前的数据目录
2. innodb_log_file_size
   指定每个redo日志文件的大小
3. innodb_log_files_in_group
   该参数指定redo日志文件的个数,,默认值为2,最大值为1000

#### redo日志文件格式

前2048个字节,即前4个block用来存储一些管理信息
从2048字节往后用来存储log buffer中的block镜像

### Log Sequeue Number日志序列号】

LSN从8704开始,header+trailer+body的日志序列号会成为新的值。

#### flushed_to_disk_lsn

buf_next_to_write标记当前log buffer中已经有哪些日志被刷新到了磁盘中,书上还提到了flush_to_disk_lsn表示刷新到磁盘的lsn,这个才是重点。

#### lsn值和redo日志偏移量的关系

lsn从8704开始,redo日志偏移量从body开始(跳过header2048)

#### flush链表中的LSN

说在前面,mtr结束时还有一件非常重要的事情要做,就是把在mtr执行过程中可能修改过的页面加入到Buffer Pool的flush链表。
控制块有两个属性oldest_modification(第一次修改该页面mtr开始的lsn值写入这个属性)和newest_modification(每修改一次页面,都会将修改该页面的mtr结束时对应的lsn值写入这个属性) 。

### checkpoint

**redo日志只是为了系统崩溃后恢复用的**,如果对应的脏页已经刷新到了磁盘,那么redo日志也用不到了。
比如说页a被刷新到了磁盘,mtr_1生成的redo日志就可以被覆盖了,所以我们可以进行一个增加checkpoint_lsn的操作,这个过程被称为一次checkpoint。

1. flush链表尾节点,oldest_modification赋值给checkpoint_lsn(之前的都可以删掉);
2. 将checkpoint_lsn和**对应的redo日志文件组偏移量**以及**此次checkpoint的编号写到日志文件的管理信息**。
   每完成一次checkpoint就会有个全局变量checkpoint_no的变量值加1,同时会有一个checkpoint_offset来表示在日志文件组中的偏移量。
   存储到check_point1中还是2中取决于checkpoint_no的值。

#### 批量从flush链表中刷出脏页

#### 查看系统中的各种LSN值

### 崩溃恢复

#### 确定恢复的起点

比较checkpoint1和checkpoint2的checkpoint_no,哪个更大就说明哪个更加接近，作为起点。

#### 确定恢复的终点

使用页中的某个属性来表示当前页中使用了多少字节的空间。

#### 怎么恢复

1. 使用哈希表
   SpaceID+PageNumber
2. 跳过已经刷新到磁盘的
   File Header中有个属性FIlE_PAGE_LSN,就是new_modification的值。

## undo日志

### 事务回滚的需求

懂的都懂
把回滚时所需的东西都记录下来

### 事务id

#### 分配时机

事务分为只读事务和读写事务
只读事务可以修改临时表而读写事务可以修改普通表,这个时候会分配事务id

#### 如何生成

和row_id类似,全局变量,每次加1,当这个值是256的倍数时就会跟新到系统表空间的页号为5的一个称之为Max Trx ID的属性处

#### trx_id隐藏列

和之前的格式串起来了
roll_point指向undo日志版本链

### undo日志格式

undo日志在操作之前生成
undo_no来保证唯一性,存放在系统表空间中
insert、delete和update对应的日志格式不相同
事务提交之后就无法恢复了
书上的例子非常详细

#### insert

#### delete

1. 阶段一 delete_mark
2. 阶段二 加入垃圾链表

#### update

##### 不更新主键

1. 更新列所占用的空间不变就地更新
2. 更新列占用空间变化
   删除掉,这里说的删除是直接加入垃圾链表

##### 更新主键

1. 如果更新主键的话,那么就像delete一样做delete_mark操作(MVCC,为了其他事务能够正常访问)
2. 根据更新后各列的值创建一条新纪录,并将其插入到聚簇索引中

### 通用链表结构

在写入undo日志的时候会使用到许多链表结构,这些列表的节点有通用的属性
Pre Node PageNumber和Pre Node offset指向上一个节点
Next Node PageNumber和Next Node offset指向下一个节点
除此之外,还会有一个基节点,这个结构里面多了个count,表示当前链表的个数

### FILE_PAGE_UNDO_LOG(Undo页面)

由于insert日志和update日志的差别,所以这两种日志记录也是分别存储在不同类型的页中。
那么页面中还会有什么属性呢?(猜测redo页面是否也有这些属性只不过我之前没有注意过)
PAGE_TYPE:页面类型
PAGE_START:页面的什么地方开始存储日志记录,个人觉得是通过offset(页面偏移量)来表示的
PAGE_FREE:可用的日志记录的偏移量

### Undo页面链表

#### 单事务Undo页面链表

按需创建,只有真正用到的时候才会创建

#### 多事务Undo页面链表

InnoDB设计者规定,有4种链表类型
普通表的Insert类型的链表
普通表的Update类型的链表
临时表的Insert类型的链表
临时表的Update类型的链表
那么头节点的位置肯定会有关于整个链表的属性,例如,Segment ID段(每个段对应一个INODE ENTRY结构,通过Segment Header(表空间的时候有提到过)来确定)的id等等。这些属性存放在undo页链表的首个节点。

### Undo日志的写入过程

#### Unod Log Segment Header

页链表首个节点中Segment Header属性,所有的页面在申请的时候都是从这个段中去申请的

#### Undo Log Header

每一次minitranscation都会产生一组undo日志,这些undo日志加入到Undo链表中的时候需要有地方来记录一下这个组的属性,Undo Log Header的作用就在于此。

##### 几个重要的属性

1. trx_undo_trx_id: 事务id
2. trx_undo_trx_no: 事务提交时的顺序号
   其他一些属性就是常见的例如上一组下一组的偏移量

### 重用undo日志

为了实现并发执行(提高效率),会为每个事务都创建链表,如此一来便会产生许多额外数据,浪费空间不说,维护起来也相当麻烦,所以有了重用这个妙手

1. 页链表中只有一个页的链表能重用
2. Insert类型在事务提交之后就可以重用
3. Update类型的会在原来的undo页面后面继续加,这里说的是事务提交之后,原来的记录不能删除是为了保证MVCC

### 回滚段-RollBack Segment

为了管理Undo页链表(数量过多),需要有个地方来集中统一的展示这些信息,于是就有了这么一个概念。

#### RollBack Segment Header页面

undoslot指向页链表的首个页节点
![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-12-16%20%E4%B8%8A%E5%8D%8811.59.09.png)

#### RollBack Segment的分类

通过上面的描述可以知道其实回滚段就是这些RollBack Segment Header页,一个页面只有1024个undoslot,所以会有很多的这种页面
分为系统、普通、临时表(临时表不需要redo日志,但是会有undo日志)

#### 为事务分配Undo日志的详细过程

1. 首先为事务分配一个RollBackHeader页
2. 检查RollBack页中是否有可重用的页链表(放在Insert Undo Cache和Update Unddo Cache中)
   * 如果有的话,那么就将undoslot分配给事务
   * 如果没有的话IS_FILL,那么就新创建一个段,将段的First Page Number给事务

#### 回滚段配置

##### 配置回滚段的数量

##### 配置回滚段的空间

## binlog日志

全称是binary log即二进制文件，上面的undolog和redolog都是在InnoDB提供的日志。

记录了对MySQL数据库执行更改的所有操作，但是不包括SELECT和SHOW这类操作，因为这类操作对数据库本身没有更改，但是，如果更新本身没有导致数据库发生变化，那么该操作可能也会写入二进制日志。

我们来举个例子

```bash
mysql＞UPDATE t SET a=1 WHERE a=2;
Query OK,0 rows affected(0.00 sec)
Rows matched:0 Changed:0 Warnings:0

mysql＞SHOW BINLOG EVENTS IN'mysqld.000008'\G;”
## ....省略中间的记录
***************************3.row***************************
Log_name:mysqld.000008
Pos:199
Event_type:Query
Server_id:1
End_log_pos:303
Info:use'test';UPDATE t SET a=1 WHERE a=2
```

### binlog_format参数

自从MYSQL5.1开始引入了binlog_format参数，该参数可设的值有STATEMENT、ROW和MIXED

#### 1. STATEMENT

记录的是日志的逻辑SQL语句。

#### 2. ROW

二进制日志记录不再是简单的SQL语句，而是记录表的行更改情况。

#### 3. MIXED

默认采用STATEMENT格式，在一些特殊情况下会使用ROW格式

## 事务的隔离级别和MVCC

### 为什么需要隔离级别

#### 并发事务会遇到的问题

脏写: A事务修改了a字段,B事务rollback,A事务的操作数据不见了,这就是脏写
脏读: A事务读到了B事务未提交的数据
不可重复读: A事务针对a执行了几次查询操作,B事务修改了a几次,A事务每次的查询结果都不一样
幻读: A事务同一个查询条件查询了几次,B事务新增了记录,结果每次都能查到新的记录

### 4种隔离级别

有人设计一套SQL标准
read uncommited
read commited
repeated read
serilizable

### MVCC版本链

#### 为什么需要MVCC

首先我们要知道解决各个隔离级别下的并发的问题有两种思路，一种是MVCC，另一种就是锁的方案，但是呢锁的方案会导致并发的性能下降。所以，这个时候MVCC无疑是更加轻量级的选择，但是不是说有了他就可以不用锁，因为它只解决了并发读的问题，但是，如果要并发写入的话，还是需要锁来进行控制。

首先记录中有几个隐藏的字段，trx_id产生当前记录的事务id，row_pointer指向最新一条的undo日志，row_id没有主键id或者唯一索引的时候默认分配的id。
每次对于数据的操作都会有一条undo日志,记录中用roll_pointer指向最新的一条undo日志
![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-12-16%20%E4%B8%8B%E5%8D%883.55.54.png)
从上面的图中能看出来,每条undo日志中也有roll_pointer这个属性,指向上一条的undo日志。
![](https://raw.githubusercontent.com/aryangzhu/blogImage/master/blogImage/images/ReadView结构图_20241120122940.png)

#### 数据可见性算法(比较规则)

首先需要了解一个概念ReadView,这是版本链中一个非常重要的数据结构,有几个重要的属性(可能名称不一定准确):

1. m_ids
   生成ReadView时活跃的事务id列表
2. min_trx_id
   活跃的最小事务id
3. max_trx_id
   再次生成ReadView时应该分配的事务id
4. creator_trx_id
   生成当前ReadView的trx_id

##### 比较规则(可见性算法)

1. 如果访问的trx_id和creator_id相等,说明访问的就是当前版本,可以访问
2. 如果trx_id小于min_trxid,说明之前已经提交,可以访问
3. 如果trx_id大于max_traxid,说明当前记录版本在创建事务之后,不可以访问
4. 如果trx_id在[min,max]之间,trx_id是否在m_ids列表中,如果在的话说明事务trx_id还是活跃的,没有提交,所以不能被访问;如果不在，说明创建ReadView时该版本事务已经被提交，该版本可以被访问
5. 如果当前版本的数据不可见，那么就顺着版本链找到下一个版本的数据，继续按照上面的步骤判断可见性

#### ReadUncommited

直接读取最新的记录就可以

#### Read Committed

Select之前生成一个ReadView
trx_id只有在insert,update,delete的时候才会被分配。

下面的例子更加直观

首先定一个A事务和B事务，分别针对某条记录生成事务id

A事务

```mysql
Transaction 100

BEGIN;

UPDATE hero SET name = '关羽' WHERE number = 1;

UPDATE hero SET name = '张飞' WHERE number = 1;
```

![img](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/mvcc%E8%AF%BB%E5%B7%B2%E6%8F%90%E4%BA%A4%E6%9F%A5%E8%AF%A2120250406.png)

B事务

```mysql
# Transaction 200
BEGIN;
# 更新了一些别的表的记录
# ...
```

再开启一个事务来进行记录的读取

##### 查询动作1

```mysql
# 使用READ COMMITTED隔离级别的事务
BEGIN;
# SELECT1：Transaction 100、200未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'刘备'
```

1.查看到可见版本，即"张飞"这条数据

2.进行规则比较，ReadView的min_trx_id和max_trx_id是100,201,m_ids是[100,200],creator_trx_id是0

3.trx_id是100，处于m_ids中，不可见->"关羽"，处于m_ids中，不可见->"刘备"，可见

事务AB更改

事务A提交

```mysql
# Transaction 100
BEGIN;
UPDATE hero SET name = '关羽' WHERE number = 1;
UPDATE hero SET name = '张飞' WHERE number = 1;
COMMIT;
```

事务B更改

```mysql
# Transaction 200
BEGIN;
# 更新了一些别的表的记录
...
UPDATE hero SET name = '赵云' WHERE number = 1;
UPDATE hero SET name = '诸葛亮' WHERE number = 1;
```

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/mvcc%E8%AF%BB%E5%B7%B2%E6%8F%90%E4%BA%A4%E6%9F%A5%E8%AF%A2220250406.png)

##### 查询动作2

1.生成新的ReadView,min_trx_id和max_trx_id分别是200和201,m_ids是[200],creator_id是0

2.比较可见trx_id和m_ids是同样的，不可见->省略->"张飞"，可见

#### Repeated Read

只有第一次查询的时候生成一个ReadView(对于一个事务来说,事务开启的时候就会生成一个ReadView)

#### Serilizalbe

采用锁的方式

## 锁

上面提到了Serilizable这个隔离级别,就不得不提到锁了

### 几个概念

**锁的结构** trx_id+is_waiting

1. 不加锁
   不在内存中生成锁
2. 获取锁成功
   为记录在内存中创建一个锁,is_waiting为true
3. 获取锁失败
   为记录在内存中创建一个锁,is_waiting为false
   **如何解决上面事务中存在的问题**
4. 通过MVCC读和锁写
5. 读写都加锁

### 解决并发事务带来问题的两种方式

#### 一致性读

指的就是不加锁的读的方式

#### 锁定读

##### 语句

1. 对读取记录加S锁
   ```mysql
   SELECT ... LOCK IN SHARE MODE;
   ```
2. 对读取的记录加X锁
   ```mysql
   SELECT ... FOR UPDATE;
   ```

共享锁和排他锁

共享锁S-shared
拍他锁X-exclude

1. 读操作
   * 对读记录加S锁
   * 对读记录加X锁
2. 写操作
   转换成为对记录加X锁的读操作

### 多粒度锁

提出了**表锁和行锁**的概念,当然这是通用的概念,下面会将MySQL如何实现

IS锁和IX锁是表级锁，它们的提出仅仅是为了快速判断表中是否被上锁，避免遍历表中的记录。

### 细说MySQL的表锁和行锁

不同的存储引擎采用的锁的实现方案是不一样的,下面来看一下InnoDB的锁设计

#### 表锁

1. S锁
2. X锁
   上面的两个锁非常鸡肋,基本上不用到
3. IS锁和IX锁
   上面有提到过,用来判断当前表的记录是否上锁
4. Auto-Inic锁
   新增的时候会设置自增,所以需要保证id的唯一性,也就是说当插入一条记录的时候会将记录加锁从而阻塞别的线程的更改。
5. 还有一个重要的点是如果我们对某个表执行的是DDL语句,其他事务对这个表并发执行诸如select,insert时会阻塞，这个是在Server层使用的**元数据锁(Metadata Locks,MDL),**一般情况下也不会使用表级别的S锁和X锁。

#### 行锁

1. Record Locks
   书上给的名称是正经记录锁,我的理解是针对某条记录(Record)的锁,所以会有S锁和X锁
2. Gap Locks
   不允许在当前记录和上一条记录的区间内插入
   这个锁的提出是为了防止**幻读**(从根上解决,不让你插入)
3. Next-Key Locks
   相当于Record Locks+Gap Locks的功能
4. Insert intention Locks
   等待插入的事务也会生成一个锁叫做插入意向锁,说的是事务在插入记录时会先生成一个插入意向锁,如果记录此时有之前的Gap锁或者Next-key锁,那么is_waiting=true
5. 隐式锁
   新增一条记录之后,其他事务可以对其做修改,这样会产生脏读和脏写的问题这个时候隐藏的trx_id即事务id就发挥了作用
   * 修改的是聚簇索引的记录时(事务B修改),事务A新增,那么B事务会检查记录的trx_id,如果属于活跃事务就会为记录加事务A的锁,然后再加自己的锁并处于等待状态
   * 修改的二级索引, 会使用页里面的某个属性来做判断检查trx_id是否活跃,否则就只能回表执行上面的步骤

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/InnoDB%E4%B8%AD%E7%9A%84%E9%94%81%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E5%9B%BE20250415.png)

上面的图展示了next-key锁如何工作的，对于RR级别来说

![](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/%E7%BE%8E%E5%9B%A2RR%E7%BA%A7%E5%88%AB%E9%94%81%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C20250415.png)

InnoDB将这段数据分为几个区间：

* (negative infinity,5]
* (5,30],
* (30,positive  infinity]

在进行update时，不仅锁住了对应的数据行，也在两边都加了gap锁。这样事务就无法在这两个区间insert进去新的数据了。

#### InnoDB的锁的内存结构

1条记录针对一个事务生成一个锁结构,这样有点过于浪费,所以锁是可以重用的,也就是说可以多条记录公用一个锁结构
![img](https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E6%88%AA%E5%B1%8F2022-12-18%20%E4%B8%8A%E5%8D%8810.04.14.png)

行锁中有3个重要的信息：

1. SpaceID：记录所在的表空间
2. Page Number:记录所在页号。
3. n_bits:有多个比特位，哪条记录被加了锁，相应的比特位就要标记。

#### 死锁场景和解决方案

innoDB有个配置叫做wait_time，可以设置等待时长，如果到达等待时长之后则放弃当前事务。
