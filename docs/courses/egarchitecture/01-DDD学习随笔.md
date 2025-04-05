---
title: DDD学习随笔
author: Ray
date: 2022/10/22 21:25
categories:
 - 工程架构
tags:
 - DDD
---
# DDD学习随笔

## 从MVC到DDD

首先，MVC是一种优秀的设计模式，但是随着时代的发展一些弊病也逐渐暴露出来。例如在微服务的场景下如果将服务拆分过细的话那么每次开发功能都需要上线一大批的微服务，这样不仅发版风险高，并且和其他团队进行配合的时候需要沟通的成本也高。还有就是随着业务的迭代，各个服务里面的对象也会膨胀。

### DDD是什么

## DDD的概念

### 领域模型与充血模型

![img](https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/ddd%E6%A8%A1%E5%BC%8F%E5%85%85%E8%A1%80%E6%A8%A1%E5%9E%8B20250402.png)

上面这张图我们可以看到一个充血对象将自己的职责纳入到其中，例如，放在过去，AB服务中要是都使用同一个Redis的key，那么就需要在各自的服务中进行RedisKey的拼接。现在，我们将提供Key的功能划分给key所对应的充血模型，AB服务只需要关注自己业务即可。
