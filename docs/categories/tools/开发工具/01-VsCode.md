---
title: VS Code 使用技巧
date: 2026/07/22
categories:
 - 工具
tags:
 - VSCode
 - 编辑器
 - 开发工具
---
# 我的 VS Code 深度配置与实战技巧

> 用 VS Code 好几年了，从最开始当个高级记事本用，到现在几乎离不开它。这篇文章不讲那些官方文档里抄来的基础介绍，纯粹分享我实际沉淀下来的一套配置和使用心得——哪些扩展真正留下来了、哪些设置帮我省了时间、以及一些你可能不知道但巨好用的操作。希望能给你一些实在的参考。

---

## 一、必改的几项设置

这几项是我每换一台机器、重装一次系统后，第一时间会改掉的。它们不花哨，但每天都能用上。

### 关掉预览模式

VS Code 默认点文件是预览（单标签、标题栏斜体），一旦点另一个文件就会被替换掉。我建议关掉它：

```json
"workbench.editor.enablePreview": false
```

这样每次点击文件都会实实在在开一个新标签，不用再担心刚看到一半的内容被覆盖。

### 自动保存

```json
"files.autoSave": "onFocusChange"
```

窗口失焦就自动保存——切出去回消息、看浏览器、开终端，都不用手动按 `Cmd+S`。这个习惯一旦养成就回不去了。

### 资源管理器别挤在一起

```json
"explorer.compactFolders": false
```

VS Code 默认会把单子文件夹和父级折叠成一行显示，目录一深根本看不清层级。关掉这个选项后，目录结构一目了然。

### 终端环境变量隔离

```json
"terminal.integrated.inheritEnv": false
```

如果你像我一样用 `nvm`、`goenv` 管理多版本语言，这个配置能避免终端继承 VS Code 启动时的 PATH，防止版本冲突。打开终端时是新环境，干净利落。

### Git 智能提交

```json
{
  "git.enableSmartCommit": true,
  "git.confirmSync": false
}
```

改了代码后不用先 `git add`，直接 `Cmd+Enter` 就能提交。同步也不弹确认框，少点一次鼠标。

---

## 二、扩展推荐——这些年我用下来真正留下的

扩展装了一大堆，但真正留在我 `settings.json` 里的，都是经过实战检验的。这里按使用场景分类，只说我觉得值得装的。

### 多语言开发

我日常接触 Java、Go、Python、C++、Vue，VS Code 对它们的支持已经非常成熟。

**Java**：直接装 `vscjava.vscode-java-pack` 扩展包，包含了语言服务、调试器、Maven/Gradle 管理、单元测试运行，写 Spring Boot 项目完全够用。再配合 `java.saveActions.organizeImports` 自动整理 import，基本不用手动管导包。

**Go**：官方 `golang.go` 一个就够，开箱即用。

**Python**：`ms-python.python` + `ms-python.vscode-pylance` 是标准组合，Pylance 的类型推断和补全比纯 Python 扩展强一大截。调试用 `ms-python.debugpy`。

**C/C++**：`ms-vscode.cpptools-extension-pack` 覆盖了调试、IntelliSense、主题，加上 `jeff-hykin.better-cpp-syntax` 替换默认语法高亮，色彩更丰富，代码结构更好读。如果有 CMake 项目，`ms-vscode.cmake-tools` 自动识别 CMakeLists.txt，省去手动配置。

**Solidity**：合约开发用 `juanblanco.solidity` + `hosho.solidity-debugger`，写 Solidity 时的补全和调试体验不输 Remix。

**Vue**：Vue 3 项目果断用 `Vue.volar`，不要再装 Vetur 了——Volar 的性能和类型推导好太多。不过如果还在维护 Vue 2 的老项目，Vetur 还是有必要的。

### 前端日常


| 扩展                                               | 为什么值得装                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| `dbaeumer.vscode-eslint`                           | 前端标配，配合`maggie.eslint-rules-zh-plugin` 看中文规则说明，对新手友好 |
| `formulahendry.auto-close-tag` / `auto-rename-tag` | 写 HTML/JSX 时自动闭合和同步重命名标签，少打很多字符                     |
| `christian-kohler.path-intellisense`               | 引入文件时自动补全路径，减少路径写错的低级 bug                           |

### Markdown 写作——我投入最多的部分

我经常用 Markdown 写博客和技术文档，这几款扩展组合起来体验很好：

- **`zaaack.markdown-editor`**：WYSIWYG（所见即所得）编辑器，写 md 文件时默认用它，边写边看效果，不需要在编辑和预览之间来回切。
- **`shd101wyy.markdown-preview-enhanced`**：当需要看最终渲染效果时，用它预览——支持 PlantUML、Mermaid、LaTeX 数学公式。我把主题设成了 `one-dark.css`，和编辑器风格统一。
- **`hediet.vscode-drawio`**：直接在 VS Code 里创建和编辑 `.drawio` 图表，画架构图不用单独开 draw.io 网站。
- **`spades.vs-picgo`**：写作时截了图，一键上传到 GitHub 图床并自动生成 Markdown 图片链接。我配置了自定义输出格式为 `![](url)`，贴到文章里直接能用。

PicGo 配置参考：

```json
{
  "picgo.picBed.current": "github",
  "picgo.picBed.github.repo": "aryangzhu/blogImage",
  "picgo.picBed.github.path": "blogImage/images/"
}
```

用法：`Cmd+Shift+P` → `PicGo: Upload Image`。

### 数据库管理——告别 Navicat

`cweijan.vscode-database-client2` 让我在 VS Code 里直接连 MySQL、PostgreSQL、Redis，日常查数据、看表结构、跑 SQL 都够用。不用为了查一条记录就打开 Navicat 或 DataGrip，省资源也省切换成本。

### 接口调试——替代 Postman

`humao.rest-client` 是我最推荐大家尝试的扩展之一。在项目里建一个 `.http` 文件，写好请求头和数据，点击 `Send Request` 就能直接调接口。好处是请求可以跟着代码一起提交到 Git，团队成员打开就能用，不用互相发 Postman 导出文件。

```http
### 用户列表
GET https://api.example.com/users
Authorization: Bearer {{token}}
```

### Git 辅助

- **`mhutchie.git-graph`**：可视化提交历史，分支合并一目了然，比 VS Code 自带的 Git 视图好用。
- **`warming.annotate-with-git-blame`**：在行尾显示最后修改人和提交时间，读代码时能快速判断某行代码的来龙去脉。
- **`xyz.local-history`**：本地文件历史版本管理，即使忘了 commit 也能找回之前的版本。对我这种经常改完又后悔的人太有用了。

### AI 辅助

我同时装了多个 AI 扩展，各有侧重：

- **`vizards.deepseek-v4-for-copilot`**：把 DeepSeek V4 模型接入 VS Code Copilot，代码补全质量不错，尤其适合中文场景。
- **`Lingma`（通义灵码）**：国内 AI 编程助手，对中文技术栈的理解更好，支持阿里云生态。
- **`anthropic.claude-code`**：Claude Code 集成，适合需要深度推理的复杂任务。
- **`roo-cline`**：自定义 AI Agent，可以配置让它执行 Git 命令、编译等操作，相当于一个能听懂自然语言的自动化脚本工具。

### 其他实用工具

- **`liwenkun.translation`**：选中代码中的单词，一键翻译，看英文文档时配合使用。
- **`ccagml.vscode-leetcode-problem-rating`**：在 VS Code 里刷 LeetCode，配置中文版端点，还能看每道题的难度评级，不用打开网页。
- **`codezombiech.gitignore`**：右键一键生成 `.gitignore`，支持各种语言模板。
- **`ms-azuretools.vscode-containers`**：Dev Containers，用 Docker 做隔离开发环境，团队统一环境神器。

---

## 三、真正能提升效率的操作技巧

### 快捷键——每天用几百次的几组

VS Code 的快捷键非常多，但说实话大多数人记不住那么多。以下是我每天肌肉记忆级别在用的，值得刻意练习一下：


| 快捷键           | 作用               | 我的使用场景                             |
| ---------------- | ------------------ | ---------------------------------------- |
| `Cmd+P`          | 快速打开文件       | 不碰文件树，直接搜文件名，一天能用几百次 |
| `Cmd+Shift+P`    | 命令面板           | 所有操作入口，装的新扩展功能也在这里找   |
| `Cmd+Shift+K`    | 删除整行           | 替代一直按退格键                         |
| `Option+Up/Down` | 上下移动整行       | 调整代码顺序，比剪切粘贴快得多           |
| `Cmd+D`          | 选中下一个相同单词 | 批量重命名变量，不用全局替换             |
| `Cmd+B`          | 切换侧边栏         | 专注写代码时藏起来，需要时再调出         |
| `Cmd+J`          | 切换底部面板       | 终端、输出、问题面板之间的快速切换       |

### Markdown 写作流

我的博客和笔记都在 VS Code 里完成，流程是这样的：

1. 写内容时用 `zaaack.markdown-editor` 的所见即所得模式，实时看到排版效果
2. 需要插入图片时，截图后用 PicGo 上传，自动生成 Markdown 链接
3. 需要画架构图时，新建 `.drawio` 文件，画完直接放回文章里引用
4. 有 LaTeX 公式需求时，切到 `markdown-preview-enhanced` 预览确认渲染效果

整套流程不用离开编辑器，写作状态不会被频繁打断。

### 用 Code Runner 快速验证代码

有时候只是想跑一小段代码验证想法，不用建项目、不用找 main 函数。装好 `code-runner` 并配置 `"code-runner.runInTerminal": true` 后，选中代码右键 `Run Code` 就行。支持 JS/TS/Python/Java/C++ 等主流语言。

### 用 Git Graph 做代码审查

接手别人代码或 review PR 时，`Git Graph` 的分支可视化非常直观。配合 `git.blame` 行内标注，一眼就能看出某行代码是谁在什么时候写的，问问题也能直接找到当事人。

### 本地历史——最后的救命稻草

`local-history` 会在你每次保存文件时自动创建一份历史版本。有时候改了一堆东西，`Cmd+Z` 已经回不去了，但又不小心关了文件——这时候去 `~/.local-history/` 下就能找到之前的版本。这功能已经救我好几次了。

---

## 四、AI 与自动化配置

### MCP 工具自动授权

让 VS Code 的 AI 功能自动访问一些常用资源，省去每次手动确认：

```json
{
  "chat.tools.urls.autoApprove": {
    "https://code.visualstudio.com": true,
    "https://github.com/microsoft/vscode/wiki/*": true,
    "https://*.ticktick.com": true
  }
}
```

### Java 自动整理导入

```json
"java.saveActions.organizeImports": true
```

保存文件时自动整理 import，删除未使用的引用、排序已有导入。写 Java 时保持代码整洁，不需要手动去管导包。

---

## 五、最后说几句

VS Code 之所以强大，不是因为哪个单一功能特别惊艳，而是它几乎覆盖了一个开发者从编码、调试、写文档到做演示的全流程。这篇文章里推荐的都是我自己在用的东西，不一定适合所有人——比如如果你不做 Java 开发，那 Java 扩展包对你就是多余的。

建议你把这里列出的扩展和配置当作一个起点，挑自己用得上的试试，用不上的就跳过。好的工具应该是顺手而不是负担。
