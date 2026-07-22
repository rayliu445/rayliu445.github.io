---
title: IDEA 的使用技巧
date: 2026/07/22
categories:
 - 工具
tags:
 - IDEA
 - Java
 - 开发工具
 - JetBrains
---
# 我的 IntelliJ IDEA 配置与插件清单

> 从 Eclipse 转到 IntelliJ IDEA 已经好几年了，当初听人说 "用过就回不去" 还不信，现在嘛……只能说真香。这篇文章不是官方文档搬运，纯粹是我自己日常使用的配置和插件记录，希望能给同样用 IDEA 的你一些参考。

---

## 一、我装了哪些 JetBrains 家的 IDE

说起来有点多，但每个都有明确的用途：


| IDE                        | 主要用途                                        |
| -------------------------- | ----------------------------------------------- |
| **IntelliJ IDEA Ultimate** | Java / Spring Boot 主力开发（日常待的时间最长） |
| **GoLand**                 | Go 微服务和工具开发                             |
| **PyCharm**                | Python 数据处理、脚本编写                       |
| **DataGrip**               | 数据库查询和管理，查数据、写 SQL 都在这里       |

同一个账号下这几个 IDE 的配置和快捷键是通用的，切换起来没什么割裂感。

---

## 二、一些我觉得值得改的设置

### 主题与外观

颜色主题用的 **Dark**（经典暗色），也是 JetBrains 默认的，看久了不累。新 UI（New UI）我已经开了——`ide.experimental.ui = true`，界面更清爽，图标更简洁，推荐试试。

### JVM 内存

```text
-Xmx6096m
```

我给了 6G 左右。IDEA 本身比较吃内存，特别是打开多个大项目的时候，默认的 2G 会频繁触发 GC 导致卡顿。如果你的机器内存够（16G+），建议至少给 4G。

> 设置位置：`Help → Edit Custom VM Options`

### 编辑器行为

```xml
<option name="ADD_UNAMBIGIOUS_IMPORTS_ON_THE_FLY" value="true" />
```

**自动添加明确的导入**。写代码时如果引用了一个类且没有歧义，IDEA 会自动帮你加上 import 语句。不用每次都手动 `Alt+Enter` 去选，写起代码来流畅很多。

### 语言和地区

我切到了中文界面。不是说英文不好，而是有些配置项和报错信息用中文看确实更快，尤其是一些比较偏门的选项——英文单词认识但不知道对应哪个功能的情况还挺常见的。

### 退出确认

```xml
<option name="confirmExit" value="false" />
```

关掉退出确认。IDEA 启动本来就不慢，万一不小心按到 Quit 也不会耽误事。

### Git 配置

打开即可，没啥可折腾的——Git 凭据助手开了就行。提交、推送、拉取这些 IDEA 默认就做得很好。

---

## 三、插件篇——哪些我装了并且一直在用

以下是 `~Library/Application Support/JetBrains/IntelliJIdea2024.3/plugins/` 里真实存在且我日常在用的插件，按场景分类说说为什么装它们。

### 🌱 Java / Spring 生态


| 插件                               | 为什么装                                                                                                                                        |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **MybatisX**                       | 写 MyBatis 项目必备。Mapper 接口和 XML 文件之间可以互相跳转，还能一键生成代码。配合`Free MyBatis Tool` 一起用，找 SQL、看参数映射基本不用切文件 |
| **MavenHelper**                    | 右侧栏直接运行 Maven 命令、查看依赖树、排除冲突依赖。排查依赖冲突时比在终端敲`mvn dependency:tree` 快太多了                                     |
| **GenerateAllSetter**              | 一个 Bean 有十几个字段需要 set 的时候，一键生成所有 setter 调用。写单元测试或组装数据时能省不少重复劳动                                         |
| **Generate All Getter And Setter** | 看名字就知道了，生成类字段的 getter/setter                                                                                                      |
| **pojo2json**                      | 根据 POJO 类的字段结构快速生成 JSON 示例，写接口文档或者构造测试数据的时候很方便                                                                |
| **jclasslib**                      | 看`.class` 文件的字节码信息，研究 JVM、分析编译结果时偶尔会用                                                                                   |
| **Lombook Plugin**                 | 自带捆绑的，不用说了，用 Lombok 就得装它                                                                                                        |

### 🌐 微服务 & 分布式


| 插件                                   | 为什么装                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **spring-dubbo**                       | Dubbo 服务开发支持，接口定义和消费者、提供者之间的跳转                                                 |
| **spring-websocket**                   | WebSocket 端点开发辅助                                                                                 |
| **bigdatatools-flink**                 | Flink 开发支持。我在做实时计算相关项目时会用到，DataStream API 和 SQL 作业都能在 IDEA 里直接开发和调试 |
| **bigdatatools-core / metastore-core** | 大数据工具集，Hive Metastore 连接和表结构浏览                                                          |
| **visualizer_plugin**                  | 数据可视化辅助                                                                                         |

### 🔧 日常效率


| 插件                       | 为什么装                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| **TranslationPlugin**      | 选中代码或英文注释，一键翻译。看英文文档或源码注释时配合使用                                  |
| **GrepConsole**            | 控制台日志过滤和染色。日志一多的时候用关键词高亮或过滤，找问题比肉眼在一堆日志里翻快很多      |
| **leetcode-editor**        | 在 IDEA 里刷 LeetCode，配置好账号直接在编辑器里做题、调试、提交                               |
| **Apipost-idea-plugin-v2** | API 调试插件，相当于在 IDEA 里集成了一个轻量版的 Postman。写完接口直接在 IDE 里调，不用切工具 |
| **SequencePluginR**        | 时序图生成，根据代码执行流程自动生成时序图                                                    |

### 🤖 AI 辅助


| 插件                             | 为什么装                                                                                                                                                                                                             |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lingma-jetbrains**（通义灵码） | 这是我现在主要的 AI 编程助手。用的 Qwen3 Coder 模型，对中文理解和国内技术栈（Spring Boot、MyBatis、Dubbo 等）的支持比 GitHub Copilot 更对味。我大部分项目都切到了 agent 模式，它可以直接读项目上下文做代码生成和修改 |

> 补充一句：我之前也试过 GitHub Copilot，但通义灵码在 Spring 生态下的表现确实更好一些——比如让它生成 Mapper XML、写 Service 实现这类常见操作，基本不用改就能直接用。

### 📦 其他


| 插件                 | 为什么装                                                                             |
| -------------------- | ------------------------------------------------------------------------------------ |
| **IntelliVuePlugin** | Vue 文件支持。虽然 IDEA Ultimate 自带 JavaScript 和 Vue 支持，但这个插件补了一些细节 |
| **jboss-drools**     | 规则引擎开发，做风控或规则平台项目时用                                               |
| **ant**              | 自带捆绑，偶尔跑 legacy 项目时用到                                                   |

---

## 四、我的 IDEA 日常开发流

### 项目结构

我本机 IDE 项目大概有 100 多个，主要分这几类：

- **Spring Boot 微服务项目**：`big-market*`、`hfq-*`、`user-growth` 等，大部分是 DDD 架构
- **框架源码学习**：`mybatis-3`、`spring-cloud-openfeign`、`mini-spring`、`small-spring`、`nacos-examples`、`redisson` 等
- **算法与面试**：`algorithm-tutorial`、`fucking-algorithm`、NowCoder
- **前端项目**：`vue-admin-template`、`vue-element-admin`、`mall-admin-web`
- **Go 项目** 在 GoLand 里，Java 项目在 IDEA 里，分工明确

### 快捷键记忆

IDEA 的快捷键非常多，但如果你记住下面这几组，日常开发就足够流畅了：


| 快捷键           | 作用                                 | 替代了什么             |
| ---------------- | ------------------------------------ | ---------------------- |
| `Shift+Shift`    | 全局搜索（文件、类、配置、操作）     | 几乎所有的菜单点击     |
| `Cmd+N / Ctrl+N` | 搜索类文件                           | 不用在项目树里翻       |
| `Cmd+E`          | 最近打开的文件                       | 快速切换               |
| `Double Shift`   | Search Everywhere                    | 任何东西都能搜         |
| `Option+Enter`   | 显示建议操作（快速修复、自动导入等） | 最常用的一个键         |
| `Cmd+Option+L`   | 格式化代码                           | 写完代码顺手按一下     |
| `Cmd+Shift+F`    | 全局搜索文本                         | 找关键词               |
| `Ctrl+Option+O`  | 优化 import                          | 删除未使用的 import    |
| `Cmd+B`          | 跳转到定义                           | 看源码                 |
| `Option+Up`      | 选中代码块                           | 逐级扩大选中范围       |
| `Cmd+[ / Cmd+]`  | 光标后退 / 前进                      | 看完源码回到之前的位置 |
| `F2`             | 跳到下一个错误                       | 编译报错时快速定位     |

### 调试技巧

IDEA 的调试器是我觉得比 VS Code 强的地方之一。几个我常用的：

- **条件断点**：右键断点设置条件，比如 `i > 100 && user.getName().equals("admin")`，只在满足条件时停下来
- **求值表达式**（`Option+F8`）：在断点停下时可以执行任意代码，修改当前变量值
- **Drop Frame**：把执行栈回退到上一帧，相当于"时光倒流"，可以重新走一遍流程
- **Show Library Stack Frames**：我打开了这个选项，看源码时能看到完整的调用栈

### MyBatis 代码生成配置

我装 MybatisX 时顺便配了一组关键字映射，让它在生成 SQL 语句时能匹配实际的方法名：


| 操作 | 匹配关键字                                                          |
| ---- | ------------------------------------------------------------------- |
| 插入 | `add`、`insert`、`new`                                              |
| 删除 | `cancel`、`del`                                                     |
| 更新 | `update`、`modify`、`set`                                           |
| 查询 | `search`、`select`、`find`、`get`、`query`、`count`、`list`、`look` |

这样方法名叫 `findByUserId` 时自动生成 `select` 语句，`addUser` 时自动生成 `insert`——不用手动去 XML 里写，减少重复劳动。

---

## 五、关于 JetBrains 全家桶

除了 IDEA，我还用：

- **GoLand** —— 写 Go 微服务，和 IDEA 共享快捷键和 UI，切换基本零学习成本
- **PyCharm** —— Python 脚本和数据分析
- **DataGrip** —— 所有数据库操作都在这里，智能补全 SQL、看执行计划、导出数据都很顺手。以前用 Navicat，转到 DataGrip 后回不去了

这几个 IDE 共用一套 Keymap 设置，在 IDEA 里配好快捷键后，其他 IDE 自动同步，体验一致。

---

## 六、最后说几句

IntelliJ IDEA 对我来说更像一个"Java 开发的瑞士军刀"——插件生态丰富、调试器强大、重构工具靠谱。不过它也确实重（内存吃得多，启动慢），如果你只是写个简单的脚本或者前端页面，VS Code 可能是更轻量的选择。

但如果你的主力语言是 Java，特别是做 Spring Boot 微服务开发，那 IDEA 值得认真配置起来。花点时间把插件和快捷键调顺手之后，每天的编码效率提升是很明显的。

这篇文章列的都是我实际在用的，不一定适合每一个人的场景——挑有用的试试，不需要的跳过就好。
