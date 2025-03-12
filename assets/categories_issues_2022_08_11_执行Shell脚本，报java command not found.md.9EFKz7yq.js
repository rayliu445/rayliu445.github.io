import{_ as h}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as p,D as k,o as n,c as d,I as r,w as o,k as t,a as c,R as F,b as g,e as y}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const A="/assets/202208112010100.rCMreawF.png",J=JSON.parse('{"title":"执行Shell脚本，报java: command not found","description":"","frontmatter":{"title":"执行Shell脚本，报java: command not found","author":"查尔斯","date":"2022/08/11 20:19","categories":["Bug万象集"],"tags":["Linux","Shell"]},"headers":[],"relativePath":"categories/issues/2022/08/11/执行Shell脚本，报java command not found.md","filePath":"categories/issues/2022/08/11/执行Shell脚本，报java command not found.md","lastUpdated":1741770889000}'),D={name:"categories/issues/2022/08/11/执行Shell脚本，报java command not found.md"},m=t("h1",{id:"执行shell脚本-报java-command-not-found",tabindex:"-1"},[c("执行Shell脚本，报java: command not found "),t("a",{class:"header-anchor",href:"#执行shell脚本-报java-command-not-found","aria-label":'Permalink to "执行Shell脚本，报java: command not found"'},"​")],-1),u=F('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p><strong>C：</strong> 今天笔者在公司的 dev 环境服务器上，将一个 Java 程序启动脚本做成了一个系统服务。本来是一件很简单的事情，但是在启动服务时，却报错了。</p><p>报的错误也是言简意赅：java: command not found。很直白的告诉了你，它找不到 java 命令。</p><p><img src="'+A+`" alt="202208112010100"></p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>既然是找不到 java 命令，首先要排查的自然是服务器里究竟有没有安装和配置好 Java 环境了，用 <code>java -version</code> 命令检测一下就可以了。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[root@business11 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]# java -version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;1.8.0_202&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Java(TM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) SE Runtime Environment (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">build</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1.8</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.0_202-b08</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Java</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> HotSpot</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">TM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">64</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">-Bit</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Server</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> VM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (build </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25.202</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">-b08,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> mixed</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p>Java 环境是配置好的，那还得是看脚本自身的问题了。其实，这个问题以前印象里也出现过，不过是很久以前初次使用 Shell 脚本的时候了，最终的问题点是因为直接写的脚本内容，没有添加 <code>#!/bin/bash</code> 声明导致的。</p><p>打开脚本内容看了看，这个声明也加着呢。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Java</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 启动脚本内容······</span></span></code></pre></div><h2 id="解决方案1" tabindex="-1">解决方案1 <a class="header-anchor" href="#解决方案1" aria-label="Permalink to &quot;解决方案1&quot;">​</a></h2><p>既然以往的经验不能提供帮助，那就对症下药，提示说找不到 java 命令，那说明它识别不到 Java 环境配置，帮它一把就得了呗。复制一份 Java 环境配置，放在脚本内容前，相当于每次执行这个脚本的时候，先做一次临时环境配置。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果你要使用下方的配置，不要直接复制了事，记得将配置中的 JDK 安装路径，替换为你自己实际的 JDK 安装路径。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">JAVA_HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/java/jdk1.8.0_202</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">CLASSPATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/lib.tools.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PATH</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> CLASSPATH</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> PATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Java</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 启动脚本内容······</span></span></code></pre></div><h2 id="解决方案2" tabindex="-1">解决方案2 <a class="header-anchor" href="#解决方案2" aria-label="Permalink to &quot;解决方案2&quot;">​</a></h2><p>这个问题的根源，其实是因为 <code>/etc/profile</code> 或者 <code>/etc/security/limit.d</code> 这些文件中配置的环境变量仅对通过 pam 登录的用户生效，systemd 系统服务是不读这些配置的，所以这就造成登录到终端时查看环境变量和手动启动应用都一切正常，但是系统服务无法正常启动应用。</p><p>所以，如果想让 systemd 系统服务使用环境变量也可以在编写的服务内指定好环境变量。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Wants</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">network-online.target</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;JAVA_HOME=/opt/disk/java/jdk1.8.0_202&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CLASSPATH=.:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/lib.tools.jar&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;PATH=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$JAVA_HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/bin/bash</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> /opt/disk/xxx/start-schedule.sh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">KillSignal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SIGTERM</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">multi-user.target</span></span></code></pre></div><p>修改完系统服务，别忘了重新加载和重新启动。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> xxx</span></span></code></pre></div>`,20);function C(s,v,_,b,E,B){const l=h,e=k("ClientOnly");return n(),d("div",null,[m,r(e,null,{default:o(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),g(l,{key:0,article:s.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),u])}const x=p(D,[["render",C]]);export{J as __pageData,x as default};
