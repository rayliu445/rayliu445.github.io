---
title: 01-MyBatis源码
author: 查尔斯
date: 2026/01/09 09:00:00
categories:
 - Mybatis
tags:
 - Mybatis
showArticleMetadata: false
editLink: false
lastUpdated: false
showComment: false
---
# MyBatis源码

## 背景

优秀的文章推荐

[JDBC规范(JDBC 4.2 规范中文版本)](https://github.com/waylau/jdbc-specification/blob/master/2.Goals.md)

[Mybatis初始化讲解](https://www.cnblogs.com/ZhangZiSheng001/p/12704076.html)

## MyBatis 启动初始化和查询执行流程

我们总要知道需要从哪里看吧，总不能像个无头苍蝇一样瞎看，否则就是在感动自己，看上去点了点源码，实际上啥也没学到。现在有了AI，可以让AI帮忙圈出重点

### 启动初始化流程

#### 1. **SqlSessionFactory 创建阶段**

- **[SqlSessionFactoryBuilder.build()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/SqlSessionFactoryBuilder.java#L32-L98)** → 读取配置文件
- **[XMLConfigBuilder.parse()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/builder/xml/XMLConfigBuilder.java#L100-L105)** → 解析 mybatis-config.xml
- **[Configuration](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/Configuration.java#L102-L1199)** → 构建配置对象，初始化各种注册表

#### 2. **Mapper 解析阶段**

- **[MapperRegistry.addMapper()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperRegistry.java#L60-L73)** → 注册 Mapper 接口
- **[MapperAnnotationBuilder.parse()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/builder/annotation/MapperAnnotationBuilder.java#L135-L152)** → 解析 Mapper 注解
- **[XMLMapperBuilder.parse()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/builder/xml/XMLMapperBuilder.java#L85-L104)** → 解析 XML 映射文件
- **[MappedStatement](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/mapping/MappedStatement.java#L34-L357)** → 创建映射语句对象

### Mapper 查询执行完整流程

#### 1. **Mapper 接口调用**

- **[MapperProxy.invoke()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperProxy.java#L59-L82)** → Mapper 接口的动态代理入口
- **[MapperMethod.execute()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperMethod.java#L51-L159)** → 解析方法签名，执行相应操作

#### 2. **查询执行阶段**

- **[SqlSession.selectList()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/defaults/DefaultSqlSession.java#L123-L133)** → 通过 SqlSession 执行查询
- **[BaseExecutor.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L126-L157)** → 执行器基类查询方法
- **[CachingExecutor.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/CachingExecutor.java#L58-L85)** → 如果启用二级缓存，先检查缓存

#### 3. **SQL 准备阶段**

- **[BaseExecutor.createCacheKey()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L238-L279)** → 创建查询缓存键
- **[BaseExecutor.queryFromDatabase()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L334-L347)** → 从数据库查询
- **[SimpleExecutor.doQuery()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/SimpleExecutor.java#L63-L74)** → 执行具体查询

#### 4. **Statement 创建和执行**

- **[Configuration.newStatementHandler()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/Configuration.java#L660-L672)** → 创建语句处理器
- **[PreparedStatementHandler.prepare()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/statement/PreparedStatementHandler.java#L41-L59)** → 准备 PreparedStatement
- **[PreparedStatementHandler.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/statement/PreparedStatementHandler.java#L61-L77)** → 执行查询

#### 5. **结果处理阶段**

- **[DefaultResultSetHandler.handleResultSets()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/DefaultResultSetHandler.java#L119-L171)** → 处理结果集
- **[DefaultResultSetHandler.handleResultSet()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/DefaultResultSetHandler.java#L173-L216)** → 处理单个结果集
- **[DefaultResultSetHandler.getRowValue()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/DefaultResultSetHandler.java#L551-L584)** → 从结果行创建对象
- **[DefaultResultSetHandler.applyAutomaticMappings()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/DefaultResultSetHandler.java#L586-L632)** → 自动映射结果到对象

### 完整线路图

```
Mapper 接口调用
    ↓
[MapperProxy.invoke()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperProxy.java#L59-L82)
    ↓
[MapperMethod.execute()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperMethod.java#L51-L159)
    ↓
[SqlSession.selectList()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/defaults/DefaultSqlSession.java#L123-L133)
    ↓
[CachingExecutor.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/CachingExecutor.java#L58-L85)
    ↓
[BaseExecutor.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L126-L157)
    ↓
[SimpleExecutor.doQuery()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/SimpleExecutor.java#L63-L74)
    ↓
[PreparedStatementHandler.query()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/statement/PreparedStatementHandler.java#L61-L77)
    ↓
[DefaultResultSetHandler.handleResultSets()](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/DefaultResultSetHandler.java#L119-L171)
    ↓
返回结果对象
```

### 关键类和切入点

- **启动入口**: [SqlSessionFactoryBuilder](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/session/SqlSessionFactoryBuilder.java#L32-L98) → [XMLConfigBuilder](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/builder/xml/XMLConfigBuilder.java#L53-L442)
- **执行入口**: [MapperProxy](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperProxy.java#L34-L120) → [MapperMethod](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/binding/MapperMethod.java#L46-L385)
- **执行核心**: [BaseExecutor](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L47-L375) → [StatementHandler](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/statement/StatementHandler.java#L30-L48) → [ResultSetHandler](file:///Users/liulei/IdeaProjects/mybatis-3/src/main/java/org/apache/ibatis/executor/resultset/ResultSetHandler.java#L27-L35)
