import{_ as s}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as n,D as d,o as i,c,I as u,w as b,k as e,a as p,R as l,b as q,e as m}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const I=JSON.parse('{"title":"Redis快速入门","description":"","frontmatter":{"title":"Redis快速入门","author":"Ray","date":"2023/6/22 21:21","categories":["中间件生态"],"tags":["Redis"]},"headers":[],"relativePath":"courses/middleware/01-缓存中间件/Redis快速入门.md","filePath":"courses/middleware/01-缓存中间件/Redis快速入门.md","lastUpdated":1742944483000}'),f={name:"courses/middleware/01-缓存中间件/Redis快速入门.md"},k=e("h1",{id:"redis快速入门",tabindex:"-1"},[p("Redis快速入门 "),e("a",{class:"header-anchor",href:"#redis快速入门","aria-label":'Permalink to "Redis快速入门"'},"​")],-1),x=l('<h2 id="历史发展" tabindex="-1">历史发展 <a class="header-anchor" href="#历史发展" aria-label="Permalink to &quot;历史发展&quot;">​</a></h2><h3 id="mysql单机演变" tabindex="-1">MySQL单机演变 <a class="header-anchor" href="#mysql单机演变" aria-label="Permalink to &quot;MySQL单机演变&quot;">​</a></h3><p>单机读写压力，主要是读压力，所以需要多台服务器。</p><h3 id="当今企业架构" tabindex="-1">当今企业架构 <a class="header-anchor" href="#当今企业架构" aria-label="Permalink to &quot;当今企业架构&quot;">​</a></h3><p>数据服务也是以集群形式存在</p><h3 id="nosql" tabindex="-1">NoSQL <a class="header-anchor" href="#nosql" aria-label="Permalink to &quot;NoSQL&quot;">​</a></h3><h4 id="键值" tabindex="-1">键值 <a class="header-anchor" href="#键值" aria-label="Permalink to &quot;键值&quot;">​</a></h4><h4 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h4><h4 id="图" tabindex="-1">图 <a class="header-anchor" href="#图" aria-label="Permalink to &quot;图&quot;">​</a></h4><p>社交、搜索</p><h4 id="列数据" tabindex="-1">列数据 <a class="header-anchor" href="#列数据" aria-label="Permalink to &quot;列数据&quot;">​</a></h4><h3 id="阿里巴巴的架构演进" tabindex="-1">阿里巴巴的架构演进 <a class="header-anchor" href="#阿里巴巴的架构演进" aria-label="Permalink to &quot;阿里巴巴的架构演进&quot;">​</a></h3><h2 id="redis简介" tabindex="-1">Redis简介 <a class="header-anchor" href="#redis简介" aria-label="Permalink to &quot;Redis简介&quot;">​</a></h2><p>key-value存储系统，非关系型数据库，由ANSI C (动态C语言)编写。</p><h3 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h3><h2 id="安装redis" tabindex="-1">安装Redis <a class="header-anchor" href="#安装redis" aria-label="Permalink to &quot;安装Redis&quot;">​</a></h2><h3 id="ubuntu18-04安装" tabindex="-1">ubuntu18.04安装 <a class="header-anchor" href="#ubuntu18-04安装" aria-label="Permalink to &quot;ubuntu18.04安装&quot;">​</a></h3><p>直接参照菜鸟教程即可</p><h3 id="redis下的配置文件redis-conf" tabindex="-1">Redis下的配置文件redis.conf <a class="header-anchor" href="#redis下的配置文件redis-conf" aria-label="Permalink to &quot;Redis下的配置文件redis.conf&quot;">​</a></h3><p>在启动时需要使用命令redis-server xxx.conf xxx.conf就是我们的配置文件，后面尝试主从复制时需要复制一份<strong>原文件</strong>(单机伪集群) 我将这个文件放在了/usr/local/bin目录下 通过 nstat -ntlp|grep 6379来查看端口号 通过 ps -f|grep redis</p><h3 id="性能测试redis-benchmark" tabindex="-1">性能测试redis-benchmark <a class="header-anchor" href="#性能测试redis-benchmark" aria-label="Permalink to &quot;性能测试redis-benchmark&quot;">​</a></h3><p>redis-benchmark -n 10000 -q</p><h3 id="远程连接" tabindex="-1">远程连接 <a class="header-anchor" href="#远程连接" aria-label="Permalink to &quot;远程连接&quot;">​</a></h3><p>redis-cli -h host -p port -a password</p><h2 id="redis-数据类型" tabindex="-1">Redis 数据类型 <a class="header-anchor" href="#redis-数据类型" aria-label="Permalink to &quot;Redis 数据类型&quot;">​</a></h2><h3 id="键" tabindex="-1">键 <a class="header-anchor" href="#键" aria-label="Permalink to &quot;键&quot;">​</a></h3><h4 id="选择数据库" tabindex="-1">选择数据库 <a class="header-anchor" href="#选择数据库" aria-label="Permalink to &quot;选择数据库&quot;">​</a></h4><p>默认有16个数据库，select index</p><h4 id="查看当前数据库大小" tabindex="-1">查看当前数据库大小 <a class="header-anchor" href="#查看当前数据库大小" aria-label="Permalink to &quot;查看当前数据库大小&quot;">​</a></h4><p>dbsize</p><h4 id="清楚当前数据库" tabindex="-1">清楚当前数据库 <a class="header-anchor" href="#清楚当前数据库" aria-label="Permalink to &quot;清楚当前数据库&quot;">​</a></h4><p>清空当前数据库 flushdb|清空所有数据库 flushall</p><h4 id="检查是否存在" tabindex="-1">检查是否存在 <a class="header-anchor" href="#检查是否存在" aria-label="Permalink to &quot;检查是否存在&quot;">​</a></h4><p>EXIST key</p><h4 id="查看所有键" tabindex="-1">查看所有键 <a class="header-anchor" href="#查看所有键" aria-label="Permalink to &quot;查看所有键&quot;">​</a></h4><p>key *</p><h4 id="删除key" tabindex="-1">删除key <a class="header-anchor" href="#删除key" aria-label="Permalink to &quot;删除key&quot;">​</a></h4><p>del key1</p><h4 id="设置失效时间" tabindex="-1">设置失效时间 <a class="header-anchor" href="#设置失效时间" aria-label="Permalink to &quot;设置失效时间&quot;">​</a></h4><p>expire key 10</p><h4 id="查看当前key的剩余时间" tabindex="-1">查看当前key的剩余时间 <a class="header-anchor" href="#查看当前key的剩余时间" aria-label="Permalink to &quot;查看当前key的剩余时间&quot;">​</a></h4><p>ttl key</p><h4 id="查看指定key的类型" tabindex="-1">查看指定key的类型 <a class="header-anchor" href="#查看指定key的类型" aria-label="Permalink to &quot;查看指定key的类型&quot;">​</a></h4><p>type key</p><h3 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h3><h4 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h4><ol><li>计数器</li><li>统计多单位的数量</li><li>粉丝数</li><li>对象缓存存储</li></ol><h4 id="设置值" tabindex="-1">设置值 <a class="header-anchor" href="#设置值" aria-label="Permalink to &quot;设置值&quot;">​</a></h4><p>set k1 v1</p><h4 id="获得值" tabindex="-1">获得值 <a class="header-anchor" href="#获得值" aria-label="Permalink to &quot;获得值&quot;">​</a></h4><p>get k1</p><h4 id="追加字符串" tabindex="-1">追加字符串 <a class="header-anchor" href="#追加字符串" aria-label="Permalink to &quot;追加字符串&quot;">​</a></h4><p>append k1 hello 如果不存在就相当于set</p><h4 id="获取字符串长度" tabindex="-1">获取字符串长度 <a class="header-anchor" href="#获取字符串长度" aria-label="Permalink to &quot;获取字符串长度&quot;">​</a></h4><p>strlen k1</p><h4 id="自增和自减" tabindex="-1">自增和自减 <a class="header-anchor" href="#自增和自减" aria-label="Permalink to &quot;自增和自减&quot;">​</a></h4><p>incr views|decr views</p><h4 id="设置步长自增自减" tabindex="-1">设置步长自增自减 <a class="header-anchor" href="#设置步长自增自减" aria-label="Permalink to &quot;设置步长自增自减&quot;">​</a></h4><p>incrby views 10| decrby views 10</p><h4 id="截取字符串" tabindex="-1">截取字符串 <a class="header-anchor" href="#截取字符串" aria-label="Permalink to &quot;截取字符串&quot;">​</a></h4><p>getrang k1 0 3(获取字符串[0,3]的元素)</p><h4 id="替换指定位置开始的字符串" tabindex="-1">替换指定位置开始的字符串 <a class="header-anchor" href="#替换指定位置开始的字符串" aria-label="Permalink to &quot;替换指定位置开始的字符串&quot;">​</a></h4><p>setrange k1 1 xxx(下标从0开始，同时后面的字符不会被替换)</p><h4 id="设置过期时间-set-with-expire" tabindex="-1">设置过期时间(set with expire) <a class="header-anchor" href="#设置过期时间-set-with-expire" aria-label="Permalink to &quot;设置过期时间(set with expire)&quot;">​</a></h4><p>setex k3 30 hello</p><h4 id="不存在在设置-set-if-not-exist-分布式锁经常会用到" tabindex="-1">不存在在设置(set if not exist),分布式锁经常会用到 <a class="header-anchor" href="#不存在在设置-set-if-not-exist-分布式锁经常会用到" aria-label="Permalink to &quot;不存在在设置(set if not exist),分布式锁经常会用到&quot;">​</a></h4><p>setnx mykey mongodb</p><h4 id="批量设置多个值-mulit-set" tabindex="-1">批量设置多个值(mulit set) <a class="header-anchor" href="#批量设置多个值-mulit-set" aria-label="Permalink to &quot;批量设置多个值(mulit set)&quot;">​</a></h4><p>mset k1 v1 k2 v2</p><h4 id="批量获取多个值" tabindex="-1">批量获取多个值 <a class="header-anchor" href="#批量获取多个值" aria-label="Permalink to &quot;批量获取多个值&quot;">​</a></h4><p>mget k1 k2</p><h4 id="批量设置原子操作-并发中的情况" tabindex="-1">批量设置原子操作(并发中的情况) <a class="header-anchor" href="#批量设置原子操作-并发中的情况" aria-label="Permalink to &quot;批量设置原子操作(并发中的情况)&quot;">​</a></h4><p>msetnx k1 v1 k4 v4</p><h4 id="设置对象" tabindex="-1">设置对象 <a class="header-anchor" href="#设置对象" aria-label="Permalink to &quot;设置对象&quot;">​</a></h4>',74),P=e("p",{field:""},"set user:1{name:张三,age:13} 采用的是user:{id}:",-1),y=l('<h4 id="getset-先获取再存储" tabindex="-1">getset 先获取再存储 <a class="header-anchor" href="#getset-先获取再存储" aria-label="Permalink to &quot;getset 先获取再存储&quot;">​</a></h4><p>如果存在则返回原来的值并且设置新的值</p><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><p>可以将List用作栈、队列、阻塞队列</p><h4 id="lpush-添加一个或者多个值" tabindex="-1">lpush 添加一个或者多个值 <a class="header-anchor" href="#lpush-添加一个或者多个值" aria-label="Permalink to &quot;lpush 添加一个或者多个值&quot;">​</a></h4><p>lpush list one lpush list two</p><h4 id="rpush-从右边插入" tabindex="-1">rpush 从右边插入 <a class="header-anchor" href="#rpush-从右边插入" aria-label="Permalink to &quot;rpush 从右边插入&quot;">​</a></h4><h4 id="lrange-获取区间的值" tabindex="-1">lrange 获取区间的值 <a class="header-anchor" href="#lrange-获取区间的值" aria-label="Permalink to &quot;lrange 获取区间的值&quot;">​</a></h4><h5 id="lrange-0-1-获取所有的值" tabindex="-1">lrange 0 -1 获取所有的值 <a class="header-anchor" href="#lrange-0-1-获取所有的值" aria-label="Permalink to &quot;lrange 0 -1 获取所有的值&quot;">​</a></h5><h5 id="lrange-0-3-指定区间" tabindex="-1">lrange 0 3 指定区间 <a class="header-anchor" href="#lrange-0-3-指定区间" aria-label="Permalink to &quot;lrange 0 3 指定区间&quot;">​</a></h5><h4 id="lpop-移出list的第一个元素" tabindex="-1">lpop 移出list的第一个元素 <a class="header-anchor" href="#lpop-移出list的第一个元素" aria-label="Permalink to &quot;lpop 移出list的第一个元素&quot;">​</a></h4><p>lpop list</p><h4 id="rpop-从右边移出list的最后一个元素" tabindex="-1">rpop 从右边移出list的最后一个元素 <a class="header-anchor" href="#rpop-从右边移出list的最后一个元素" aria-label="Permalink to &quot;rpop 从右边移出list的最后一个元素&quot;">​</a></h4><h4 id="lindex-list-根据下标获取元素" tabindex="-1">lindex list 根据下标获取元素 <a class="header-anchor" href="#lindex-list-根据下标获取元素" aria-label="Permalink to &quot;lindex list 根据下标获取元素&quot;">​</a></h4><p>lindex list 0</p><h4 id="llen-list-获取长度" tabindex="-1">llen list 获取长度 <a class="header-anchor" href="#llen-list-获取长度" aria-label="Permalink to &quot;llen list 获取长度&quot;">​</a></h4><h4 id="lrem-删除指定个数的value" tabindex="-1">lrem 删除指定个数的value <a class="header-anchor" href="#lrem-删除指定个数的value" aria-label="Permalink to &quot;lrem 删除指定个数的value&quot;">​</a></h4><p>lrem list 1 one</p><h4 id="ltrim-截取指定长度的元素" tabindex="-1">ltrim 截取指定长度的元素 <a class="header-anchor" href="#ltrim-截取指定长度的元素" aria-label="Permalink to &quot;ltrim 截取指定长度的元素&quot;">​</a></h4><p>ltrim list 1 2 通过下标截取指定的长度,只剩下截取的元素</p><h4 id="rpoplpush-list1-list2-移除列表的最后一个元素-将他移动到新的列表中" tabindex="-1">rpoplpush list1 list2 移除列表的最后一个元素，将他移动到新的列表中 <a class="header-anchor" href="#rpoplpush-list1-list2-移除列表的最后一个元素-将他移动到新的列表中" aria-label="Permalink to &quot;rpoplpush list1 list2 移除列表的最后一个元素，将他移动到新的列表中&quot;">​</a></h4><h4 id="lset-更新list当中存在的元素" tabindex="-1">lset 更新list当中存在的元素 <a class="header-anchor" href="#lset-更新list当中存在的元素" aria-label="Permalink to &quot;lset 更新list当中存在的元素&quot;">​</a></h4><p>list list 0 item 根据下标来更新</p><h4 id="insert-list-before-b-xxx指定位置插入" tabindex="-1">insert list before b xxx指定位置插入 <a class="header-anchor" href="#insert-list-before-b-xxx指定位置插入" aria-label="Permalink to &quot;insert list before b xxx指定位置插入&quot;">​</a></h4><h3 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h3><h4 id="添加元素" tabindex="-1">添加元素 <a class="header-anchor" href="#添加元素" aria-label="Permalink to &quot;添加元素&quot;">​</a></h4><p>sadd myset ...</p><h4 id="查看集合中元素-smembers" tabindex="-1">查看集合中元素 smembers <a class="header-anchor" href="#查看集合中元素-smembers" aria-label="Permalink to &quot;查看集合中元素 smembers&quot;">​</a></h4><p>查看是否存在某个元素 smember myset hello</p><h4 id="查看个数" tabindex="-1">查看个数 <a class="header-anchor" href="#查看个数" aria-label="Permalink to &quot;查看个数&quot;">​</a></h4><p>scard myset</p><h4 id="随机获取集合中的元素" tabindex="-1">随机获取集合中的元素 <a class="header-anchor" href="#随机获取集合中的元素" aria-label="Permalink to &quot;随机获取集合中的元素&quot;">​</a></h4><p>sranmember myset 1</p><h4 id="随机删除集合中的元素" tabindex="-1">随机删除集合中的元素 <a class="header-anchor" href="#随机删除集合中的元素" aria-label="Permalink to &quot;随机删除集合中的元素&quot;">​</a></h4><p>spop myset 1</p><h4 id="移动指定元素" tabindex="-1">移动指定元素 <a class="header-anchor" href="#移动指定元素" aria-label="Permalink to &quot;移动指定元素&quot;">​</a></h4><p>smove myset myset1 a</p><h4 id="差集-交集-并集sdiff-sinter-sunion" tabindex="-1">差集/交集/并集SDIFF/SINTER/SUNION <a class="header-anchor" href="#差集-交集-并集sdiff-sinter-sunion" aria-label="Permalink to &quot;差集/交集/并集SDIFF/SINTER/SUNION&quot;">​</a></h4><h3 id="zset-sorted-set" tabindex="-1">Zset(sorted set) <a class="header-anchor" href="#zset-sorted-set" aria-label="Permalink to &quot;Zset(sorted set)&quot;">​</a></h3><h4 id="添加元素-1" tabindex="-1">添加元素 <a class="header-anchor" href="#添加元素-1" aria-label="Permalink to &quot;添加元素&quot;">​</a></h4><p>zadd myset 1 one 2 two 3 three</p><h4 id="获取所有元素" tabindex="-1">获取所有元素 <a class="header-anchor" href="#获取所有元素" aria-label="Permalink to &quot;获取所有元素&quot;">​</a></h4><p>zrange myset 0 -1</p><h4 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h4><p>zrevrangebyscore key max in withscores limit offset count</p><h5 id="从大到小" tabindex="-1">从大到小 <a class="header-anchor" href="#从大到小" aria-label="Permalink to &quot;从大到小&quot;">​</a></h5><p>zrevrangebyscore salary +inf -inf ## zrevrangebyscore</p><h5 id="显示全部用户并且附带成绩" tabindex="-1">显示全部用户并且附带成绩 <a class="header-anchor" href="#显示全部用户并且附带成绩" aria-label="Permalink to &quot;显示全部用户并且附带成绩&quot;">​</a></h5><p>zrevrangebyscore salary +inf -inf withscores</p><h4 id="升-降序" tabindex="-1">升/降序 <a class="header-anchor" href="#升-降序" aria-label="Permalink to &quot;升/降序&quot;">​</a></h4><p>zrange myzset 0 -1/zrevrange myset 0 -1</p><h4 id="获取指定区间元素个数" tabindex="-1">获取指定区间元素个数 <a class="header-anchor" href="#获取指定区间元素个数" aria-label="Permalink to &quot;获取指定区间元素个数&quot;">​</a></h4><p>zcount myzset 1 4</p><h3 id="哈希-hash" tabindex="-1">哈希(Hash) <a class="header-anchor" href="#哈希-hash" aria-label="Permalink to &quot;哈希(Hash)&quot;">​</a></h3><h4 id="设置字段值" tabindex="-1">设置字段值 <a class="header-anchor" href="#设置字段值" aria-label="Permalink to &quot;设置字段值&quot;">​</a></h4><p>hset myhash field2 value2</p><h5 id="设置多个字段值" tabindex="-1">设置多个字段值 <a class="header-anchor" href="#设置多个字段值" aria-label="Permalink to &quot;设置多个字段值&quot;">​</a></h5><p>hmset myhash field2 value2 field3 value3</p><h4 id="获取多个指定的字段值" tabindex="-1">获取多个指定的字段值 <a class="header-anchor" href="#获取多个指定的字段值" aria-label="Permalink to &quot;获取多个指定的字段值&quot;">​</a></h4><p>hmget myhash field1 field2</p><h4 id="获取全部的值" tabindex="-1">获取全部的值 <a class="header-anchor" href="#获取全部的值" aria-label="Permalink to &quot;获取全部的值&quot;">​</a></h4><p>hgetall myhash</p><h4 id="删除指定的键" tabindex="-1">删除指定的键 <a class="header-anchor" href="#删除指定的键" aria-label="Permalink to &quot;删除指定的键&quot;">​</a></h4><p>hdel myhash field1</p><h4 id="获取键值对的个数" tabindex="-1">获取键值对的个数 <a class="header-anchor" href="#获取键值对的个数" aria-label="Permalink to &quot;获取键值对的个数&quot;">​</a></h4><p>hlen myhash</p><h4 id="判断hash中指定字段是否存在" tabindex="-1">判断hash中指定字段是否存在 <a class="header-anchor" href="#判断hash中指定字段是否存在" aria-label="Permalink to &quot;判断hash中指定字段是否存在&quot;">​</a></h4><p>hexists myhash field1</p><h4 id="获取所有的key-value" tabindex="-1">获取所有的key/value <a class="header-anchor" href="#获取所有的key-value" aria-label="Permalink to &quot;获取所有的key/value&quot;">​</a></h4><p>hkeys/hvals</p><h3 id="_3种特殊的数据结构" tabindex="-1">3种特殊的数据结构 <a class="header-anchor" href="#_3种特殊的数据结构" aria-label="Permalink to &quot;3种特殊的数据结构&quot;">​</a></h3><h4 id="geospatial地理位置" tabindex="-1">geospatial地理位置 <a class="header-anchor" href="#geospatial地理位置" aria-label="Permalink to &quot;geospatial地理位置&quot;">​</a></h4><h4 id="hyperloger基数统计" tabindex="-1">Hyperloger基数统计 <a class="header-anchor" href="#hyperloger基数统计" aria-label="Permalink to &quot;Hyperloger基数统计&quot;">​</a></h4><p>基数在有穷集中就是个数，来源于无穷集(知乎)。 用途:网站的UV</p><h4 id="bitmaps位存储" tabindex="-1">Bitmaps位存储 <a class="header-anchor" href="#bitmaps位存储" aria-label="Permalink to &quot;Bitmaps位存储&quot;">​</a></h4><p>用途:统计用户信息，活跃/不活跃等。本质上就是以二进制0和1来进行判断。</p><h2 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h2><p>Redis没有事务的隔离级别这个概念。Redis单条命令是原子性的但是事务并不是原子性的。</p><h4 id="开启与执行" tabindex="-1">开启与执行 <a class="header-anchor" href="#开启与执行" aria-label="Permalink to &quot;开启与执行&quot;">​</a></h4><p>multi 开启 set ... exec 执行</p><h4 id="开启与取消" tabindex="-1">开启与取消 <a class="header-anchor" href="#开启与取消" aria-label="Permalink to &quot;开启与取消&quot;">​</a></h4><p>multi 开启 set ... discard 取消 编译型异常(代码本身有问题) 事务不会执行 运行时异常 异常的这一行不会执行，其他的照常执行</p><h2 id="redis实现乐观锁" tabindex="-1">Redis实现乐观锁 <a class="header-anchor" href="#redis实现乐观锁" aria-label="Permalink to &quot;Redis实现乐观锁&quot;">​</a></h2><h4 id="乐观锁" tabindex="-1">乐观锁 <a class="header-anchor" href="#乐观锁" aria-label="Permalink to &quot;乐观锁&quot;">​</a></h4><ol><li>认为什么时候都不会有问题,更新数据的时候去判断一下,在此期间是否有人修改过这个数据</li><li>获取version</li><li>更新的时候比较version</li></ol><h4 id="悲观锁" tabindex="-1">悲观锁 <a class="header-anchor" href="#悲观锁" aria-label="Permalink to &quot;悲观锁&quot;">​</a></h4><h2 id="redis-conf配置" tabindex="-1">redis.conf配置 <a class="header-anchor" href="#redis-conf配置" aria-label="Permalink to &quot;redis.conf配置&quot;">​</a></h2><h3 id="基本配置" tabindex="-1">基本配置 <a class="header-anchor" href="#基本配置" aria-label="Permalink to &quot;基本配置&quot;">​</a></h3><h3 id="快照配置" tabindex="-1">快照配置 <a class="header-anchor" href="#快照配置" aria-label="Permalink to &quot;快照配置&quot;">​</a></h3><h3 id="主从配置" tabindex="-1">主从配置 <a class="header-anchor" href="#主从配置" aria-label="Permalink to &quot;主从配置&quot;">​</a></h3><h3 id="持久化操作" tabindex="-1">持久化操作 <a class="header-anchor" href="#持久化操作" aria-label="Permalink to &quot;持久化操作&quot;">​</a></h3><h4 id="rdb-redis-database" tabindex="-1">RDB(Redis Database) <a class="header-anchor" href="#rdb-redis-database" aria-label="Permalink to &quot;RDB(Redis Database)&quot;">​</a></h4><p><img src="https://raw.githubusercontent.com/aryangzhu/blogImage/master/RDB.png" alt=""></p><h4 id="触发机制" tabindex="-1">触发机制 <a class="header-anchor" href="#触发机制" aria-label="Permalink to &quot;触发机制&quot;">​</a></h4><p>save时触发rdb规则 flushall触发rdb规则 退出redis触发rdb规则 备份的快照 dump.rdb <strong>恢复时只需要将备份放在redis的启动目录下就可以</strong></p>',95);function g(a,_,v,R,S,w){const h=s,o=d("ClientOnly");return i(),c("div",null,[k,u(o,null,{default:b(()=>{var r,t;return[(((r=a.$frontmatter)==null?void 0:r.aside)??!0)&&(((t=a.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(i(),q(h,{key:0,article:a.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),x,P,y])}const C=n(f,[["render",g]]);export{I as __pageData,C as default};
