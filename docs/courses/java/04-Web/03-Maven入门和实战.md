---
title: 03-Maven入门和实战
author: Ray
date: 2022/10/02 21:30
categories:
 - Java生态
tags:
 - Java
 - JavaWeb
---
# Maven入门和实战

## 入门

这里不多做赘述，直接看网上教程即可

## 进阶

### BOM管理

不知道大家有没有遇到过这种情况

```bash
->parent
    ->module1
    ->module2
```

这种就是我们项目中最常用的结构了，一个父模块下面有好多个子模块

1. 为什么不用声明版本号
   这个问题不知道大家有没有疑惑,就是子模块中直接导入的没有版本声明，居然不报错
   ```xml
   <dependency>
   	<groupId>com.alibaba.cloud</groupId>
           <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
   </dependency>
   ```

我的猜想是父模块中导入了就不用管，但是事实不是这样，父pom中并没有引入这个依赖

然后我看到父模块中有这个配置

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.3.12.RELEASE</version> <!-- 示例版本 -->
</parent>
```

点击进入spring-boot-starter-parent中很多的版本properties，我猜想是不是在这里。

```xml
<properties>
    <activemq.version>5.16.5</activemq.version>
    <antlr2.version>2.7.7</antlr2.version>
    <appengine-sdk.version>1.9.98</appengine-sdk.version>
    <artemis.version>2.19.1</artemis.version>
    <aspectj.version>1.9.7</aspectj.version>
    <assertj.version>3.22.0</assertj.version>
    <atomikos.version>4.0.6</atomikos.version>
    <awaitility.version>4.2.0</awaitility.version>
</properties>
```

很可惜，也没有，这里就很沮丧了，再回到根pom中，发现了下面的配置

```xml
<dependencyManagement>
    <dependencies>
        <!-- 关键点：导入 Spring Cloud 的 BOM -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version> <!-- 版本变量在更外层定义 -->
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

它比其他的配置要多type和scope标签，通过deepseek解答了我的疑问。

BOM 文件本质上是一个 **超级菜单** ，里面定义了某个生态系统中所有组件的**推荐搭配版本**

当您在父POM中通过 `<scope>import</scope>` 导入BOM后：

#### 工作流程

1. **导入套餐** ：`import` 相当于把这份"菜单"全部复制到您项目的 `<dependencyManagement>` 中
2. **自动匹配** ：当子模块声明依赖时，Maven会：

* 先检查BOM里有没有这个依赖
* 如果有就直接采用BOM指定的版本
* 如果没有才会去仓库找最新版

### 冲突依赖解决

#### 优先级

这个应该是我们工作中时常会遇到的问题，版本间的依赖冲突，下面是deepseek给出的处理优先级

| 冲突类型                                   | 建议处理优先级 | 处理方式 |
| ------------------------------------------ | -------------- | -------- |
| 不同大版本的核心库（如Spring 4.x vs 5.x）  | 🔴 高          | 必须解决 |
| 不同小版本的通用库（如Guava 20.0 vs 30.0） | 🟠 中          | 建议统一 |
| 测试库版本不一致（如JUnit 4.12 vs 4.13）   | 🟢 低          | 可暂缓   |
| 未被实际使用的传递依赖                     | ⚪ 无关        | 可忽略   |

#### 解决方案

##### 版本锁定(推荐)

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.12.3</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

##### 排除特定传递依赖

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>problematic-lib</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.conflict</groupId>
            <artifactId>bad-version</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

实际场景

在根pom中import的版本号，但是在子模块中又重新导入了一次，这个里面也有bom文件，所以要采用第二种方式进行排除
