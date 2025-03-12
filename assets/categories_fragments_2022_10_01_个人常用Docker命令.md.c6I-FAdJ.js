import{_ as r}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as o,D as e,o as l,c,k as n,a as t,I as h,w as g,R as F,b as y,e as u}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const w=JSON.parse('{"title":"个人常用 Docker 命令","description":"","frontmatter":{"title":"个人常用 Docker 命令","author":"查尔斯","date":"2022/10/01 22:33","isTop":true,"categories":["杂碎逆袭史"],"tags":["Docker"]},"headers":[],"relativePath":"categories/fragments/2022/10/01/个人常用Docker命令.md","filePath":"categories/fragments/2022/10/01/个人常用Docker命令.md","lastUpdated":1741770889000}'),m={name:"categories/fragments/2022/10/01/个人常用Docker命令.md"},D={id:"个人常用-docker-命令",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#个人常用-docker-命令","aria-label":'Permalink to "个人常用 Docker 命令 <Badge text="持续更新" type="warning" />"'},"​",-1),C=F(`<h2 id="镜像相关" tabindex="-1">镜像相关 <a class="header-anchor" href="#镜像相关" aria-label="Permalink to &quot;镜像相关&quot;">​</a></h2><h3 id="查看本地镜像列表" tabindex="-1">查看本地镜像列表 <a class="header-anchor" href="#查看本地镜像列表" aria-label="Permalink to &quot;查看本地镜像列表&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> images</span></span></code></pre></div><h3 id="从记录中心查询镜像" tabindex="-1">从记录中心查询镜像 <a class="header-anchor" href="#从记录中心查询镜像" aria-label="Permalink to &quot;从记录中心查询镜像&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像关键词</span></span></code></pre></div><h3 id="从记录中心拉取镜像到本地" tabindex="-1">从记录中心拉取镜像到本地 <a class="header-anchor" href="#从记录中心拉取镜像到本地" aria-label="Permalink to &quot;从记录中心拉取镜像到本地&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p><p>例如：docker pull tomcat:8.5.0 拉取的就是 8.5.0 版本的 tomcat 镜像，而 docker pull tomcat -&gt; 拉取的实际是 docker pull tomcat:latest，这个 latest 是跟随记录中心中的最新版本变化的，无法确定当前拉取的是哪一个版本。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span></span></code></pre></div><h3 id="删除本地镜像" tabindex="-1">删除本地镜像 <a class="header-anchor" href="#删除本地镜像" aria-label="Permalink to &quot;删除本地镜像&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 删除指定镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rmi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像ID/镜像名称</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [镜像ID/镜像名称...]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 删除所有镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rmi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> images </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-q</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rmi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> images </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-q</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p><code>q</code> 是 quiet 的意思，加上这个参数后，docker images 输出的就不是镜像详细列表了，而是镜像 ID 列表，通常用于编写脚本时使用。</p><p>所以，上方删除所有镜像的命令实际是 docker rmi 镜像ID1 镜像ID2...</p></div><h3 id="从-dockerfile-创建镜像" tabindex="-1">从 Dockerfile 创建镜像 <a class="header-anchor" href="#从-dockerfile-创建镜像" aria-label="Permalink to &quot;从 Dockerfile 创建镜像&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Dockerfile文件路径</span></span></code></pre></div><h3 id="将本地镜像导出为-tar-文件" tabindex="-1">将本地镜像导出为 tar 文件 <a class="header-anchor" href="#将本地镜像导出为-tar-文件" aria-label="Permalink to &quot;将本地镜像导出为 tar 文件&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -o/-output</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 文件路径.tar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span></span></code></pre></div><h3 id="从-tar-文件导入为本地镜像" tabindex="-1">从 tar 文件导入为本地镜像 <a class="header-anchor" href="#从-tar-文件导入为本地镜像" aria-label="Permalink to &quot;从 tar 文件导入为本地镜像&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> load</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i/-input</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 文件路径.tar</span></span></code></pre></div><h2 id="容器相关" tabindex="-1">容器相关 <a class="header-anchor" href="#容器相关" aria-label="Permalink to &quot;容器相关&quot;">​</a></h2><h3 id="查看容器列表" tabindex="-1">查看容器列表 <a class="header-anchor" href="#查看容器列表" aria-label="Permalink to &quot;查看容器列表&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 查看正在运行的容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 查看全部容器（包含已经停止的）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 模糊查询容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-a] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器关键词</span></span></code></pre></div><h3 id="创建容器并运行" tabindex="-1">创建容器并运行 <a class="header-anchor" href="#创建容器并运行" aria-label="Permalink to &quot;创建容器并运行&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p><p>如果本地不存在该版本的镜像，则会先从记录中心拉取到本地。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -d 指定容器在后台运行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --name 指定容器名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -m 限定容器内存大小</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --restart 指定重新启动方式，always 表示始终重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -e 指定环境变量配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -p 指定容器和宿主机的网络端口映射</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -v 指定容器和宿主机的目录挂载</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --network 指定容器使用的网络</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --network-alias 指定容器在网络中的别名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">容器名称</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[-m </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxxm]</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--restart=always </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">环境变量名=环境变量值]</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[-p </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">宿主机端口:容器内部端口]</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[-v </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">宿主机目录:容器内部目录]</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[--network </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">网络名称</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --network-alias</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 网络别名]</span></span></code></pre></div><h3 id="停止容器" tabindex="-1">停止容器 <a class="header-anchor" href="#停止容器" aria-label="Permalink to &quot;停止容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 停止指定容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [容器ID/容器名称...]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 停止所有容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-aq</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-aq</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p><code>q</code> 是 quiet 的意思，加上这个参数后，docker ps 输出的就不是容器详细列表了，而是容器 ID 列表，通常用于编写脚本时使用。</p><p>所以，上方停止所有容器的命令实际是 docker stop 容器1ID 容器2ID...</p></div><h3 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to &quot;启动容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span></span></code></pre></div><h3 id="重启容器" tabindex="-1">重启容器 <a class="header-anchor" href="#重启容器" aria-label="Permalink to &quot;重启容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span></span></code></pre></div><h3 id="删除容器" tabindex="-1">删除容器 <a class="header-anchor" href="#删除容器" aria-label="Permalink to &quot;删除容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 删除指定容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [容器ID/容器名称...]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 删除所有容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-aq</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-aq</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p><code>q</code> 是 quiet 的意思，加上这个参数后，docker ps 输出的就不是容器详细列表了，而是容器 ID 列表，通常用于编写脚本时使用。</p><p>所以，上方删除所有容器的命令实际是 docker rm 容器1ID 容器2ID...</p></div><h3 id="进入容器内部" tabindex="-1">进入容器内部 <a class="header-anchor" href="#进入容器内部" aria-label="Permalink to &quot;进入容器内部&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sh</span></span></code></pre></div><h3 id="从容器内部退出" tabindex="-1">从容器内部退出 <a class="header-anchor" href="#从容器内部退出" aria-label="Permalink to &quot;从容器内部退出&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">exit</span></span></code></pre></div><h3 id="向容器内拷贝文件" tabindex="-1">向容器内拷贝文件 <a class="header-anchor" href="#向容器内拷贝文件" aria-label="Permalink to &quot;向容器内拷贝文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 宿主机内文件路径</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器名称:容器内文件路径</span></span></code></pre></div><h3 id="查看容器日志" tabindex="-1">查看容器日志 <a class="header-anchor" href="#查看容器日志" aria-label="Permalink to &quot;查看容器日志&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -f/--flow 跟踪日志输出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -t/--timestamps 显示时间戳</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -n/--tail 从日志末尾显示的行数，默认为 all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --since 自某个时间之后的日志</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 例如：--since &quot;2022-09-30&quot; 表示显示2022年9月30日后的日志</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 例如：--since 30m 表示显示最近 30 分钟内的日志</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># --until 某个时间之前的日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-t] [-n 行数] [--since 开始时间] [--until 结束时间] 容器ID/容器名称</span></span></code></pre></div><h3 id="备份容器为本地镜像" tabindex="-1">备份容器为本地镜像 <a class="header-anchor" href="#备份容器为本地镜像" aria-label="Permalink to &quot;备份容器为本地镜像&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> commit</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-a </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;作者&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-m </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;信息&quot;]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span></span></code></pre></div><h3 id="将容器导出为-tar-gz-文件" tabindex="-1">将容器导出为 tar.gz 文件 <a class="header-anchor" href="#将容器导出为-tar-gz-文件" aria-label="Permalink to &quot;将容器导出为 tar.gz 文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器ID/容器名称</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 文件路径.tar.gz</span></span></code></pre></div><h3 id="将-tar-gz-文件导入为镜像" tabindex="-1">将 tar.gz 文件导入为镜像 <a class="header-anchor" href="#将-tar-gz-文件导入为镜像" aria-label="Permalink to &quot;将 tar.gz 文件导入为镜像&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果镜像名称后不指定 <strong>标签/版本</strong> ，则会默认使用最新版本（latest）。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 文件路径.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 镜像名称[:标签/版本]</span></span></code></pre></div><h2 id="网络相关" tabindex="-1">网络相关 <a class="header-anchor" href="#网络相关" aria-label="Permalink to &quot;网络相关&quot;">​</a></h2><h3 id="查看网络列表" tabindex="-1">查看网络列表 <a class="header-anchor" href="#查看网络列表" aria-label="Permalink to &quot;查看网络列表&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ls</span></span></code></pre></div><h3 id="创建-bridge-网络" tabindex="-1">创建 bridge 网络 <a class="header-anchor" href="#创建-bridge-网络" aria-label="Permalink to &quot;创建 bridge 网络&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 网络名称</span></span></code></pre></div><h3 id="删除网络" tabindex="-1">删除网络 <a class="header-anchor" href="#删除网络" aria-label="Permalink to &quot;删除网络&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 网络ID/网络名称</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="查看-docker-版本" tabindex="-1">查看 docker 版本 <a class="header-anchor" href="#查看-docker-版本" aria-label="Permalink to &quot;查看 docker 版本&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span></span></code></pre></div><h3 id="查看-docker-信息" tabindex="-1">查看 docker 信息 <a class="header-anchor" href="#查看-docker-信息" aria-label="Permalink to &quot;查看 docker 信息&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> info</span></span></code></pre></div><h2 id="docker-compose命令" tabindex="-1">docker-compose命令 <a class="header-anchor" href="#docker-compose命令" aria-label="Permalink to &quot;docker-compose命令&quot;">​</a></h2><h3 id="启动并后台运行所有的服务" tabindex="-1">启动并后台运行所有的服务 <a class="header-anchor" href="#启动并后台运行所有的服务" aria-label="Permalink to &quot;启动并后台运行所有的服务&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span></span></code></pre></div><h3 id="停止并删除容器、网络、卷、镜像" tabindex="-1">停止并删除容器、网络、卷、镜像 <a class="header-anchor" href="#停止并删除容器、网络、卷、镜像" aria-label="Permalink to &quot;停止并删除容器、网络、卷、镜像&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> down</span></span></code></pre></div><h3 id="列出项目中目前的所有容器" tabindex="-1">列出项目中目前的所有容器 <a class="header-anchor" href="#列出项目中目前的所有容器" aria-label="Permalink to &quot;列出项目中目前的所有容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps</span></span></code></pre></div><h3 id="停止容器-1" tabindex="-1">停止容器 <a class="header-anchor" href="#停止容器-1" aria-label="Permalink to &quot;停止容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器名</span></span></code></pre></div><h3 id="启动容器-1" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器-1" aria-label="Permalink to &quot;启动容器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 容器名</span></span></code></pre></div><h3 id="修改-yml-文件后-重新启动并后台运行" tabindex="-1">修改 yml 文件后，重新启动并后台运行 <a class="header-anchor" href="#修改-yml-文件后-重新启动并后台运行" aria-label="Permalink to &quot;修改 yml 文件后，重新启动并后台运行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --force-recreate</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span></span></code></pre></div>`,76);function v(s,q,f,A,x,_){const p=e("Badge"),k=r,d=e("ClientOnly");return l(),c("div",null,[n("h1",D,[t("个人常用 Docker 命令 "),h(p,{text:"持续更新",type:"warning"}),t(),b]),h(d,null,{default:g(()=>{var a,i;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((i=s.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(l(),y(k,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),C])}const E=o(m,[["render",v]]);export{w as __pageData,E as default};
