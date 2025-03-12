import{_ as p}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as r,D as o,o as t,c,I as d,w as h,k as i,a as _,R as g,b as k,e as m}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const u="/assets/202211012021157.bgWhqDYj.png",I="/assets/202211012022122.RLbcysbW.png",b="/assets/202211012022222.CHaHgS3A.png",D="/assets/202211012025211.IS3h1IKu.png",M=JSON.parse('{"title":"使用 IntelliJ IDEA 进行远程程序调试","description":"","frontmatter":{"title":"使用 IntelliJ IDEA 进行远程程序调试","author":"查尔斯","date":"2022/11/01 20:55","categories":["杂碎逆袭史"],"tags":["IDE","IntelliJ IDEA","Java"]},"headers":[],"relativePath":"categories/fragments/2022/11/01/使用IDEA进行远程程序调试.md","filePath":"categories/fragments/2022/11/01/使用IDEA进行远程程序调试.md","lastUpdated":1741770889000}'),C={name:"categories/fragments/2022/11/01/使用IDEA进行远程程序调试.md"},v=i("h1",{id:"使用-intellij-idea-进行远程程序调试",tabindex:"-1"},[_("使用 IntelliJ IDEA 进行远程程序调试 "),i("a",{class:"header-anchor",href:"#使用-intellij-idea-进行远程程序调试","aria-label":'Permalink to "使用 IntelliJ IDEA 进行远程程序调试"'},"​")],-1),f=g('<p><strong>C：</strong> 今天在测试环境出现了一个 “匪夷所思” 的问题，追踪日志、排查 Feign 日志，修改配置，尝试了很多种办法，均未解决。最终决定对测试环境进行远程程序调试来看看。</p><p>在开发时用 IDE 的断点调试倒是相对便捷，但到了部署好的环境，再使用 IDE 来调试，就要麻烦一些了。下面就跟着笔者来看看使用 IntelliJ IDEA 实现远程 Debug 的步骤吧。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>由于笔者安装了 [Chinese（Simplified）Language Pack / 中文语言包] 插件，所以下方步骤的 IntelliJ IDEA 界面都是中文的，各位同学如果用的是默认语言包，那就参照着看吧。</p></div><h2 id="新增远程调试配置" tabindex="-1">新增远程调试配置 <a class="header-anchor" href="#新增远程调试配置" aria-label="Permalink to &quot;新增远程调试配置&quot;">​</a></h2><p>点开运行程序下拉菜单，点击 [编辑配置...]。</p><p><img src="'+u+'" alt="202211012021157"></p><p>在打开的 [运行/调试配置] 窗口，点击左上角 [+] 号，随后在弹出的 [添加新配置] 下拉菜单中，下拉找到 [远程 JVM 调试]，点击即可添加远程调试配置。</p><p><img src="'+I+'" alt="202211012022122"></p><p>按照下图序号顺序，依次设置好 [名称]、[主机]、[端口]、[JDK 版本]，然后先复制一下下图红框中的 [远程 JVM 的命令行实参]，点击 [确定] 完成远程调试配置添加。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>这里主要就注意一下主机和端口两个配置、主机是你要远程调试的程序所在服务器的 IP/域名，但端口可不是你要远程调试的程序所占用的端口。这个端口是远程调试端口，也不能和程序端口相同。</p></div><p><img src="'+b+`" alt="202211012022222"></p><h2 id="修改启动命令" tabindex="-1">修改启动命令 <a class="header-anchor" href="#修改启动命令" aria-label="Permalink to &quot;修改启动命令&quot;">​</a></h2><p>添加完配置之后，就立刻能开始调试吗？当然不是了，很简单的问题，如果我们只需要在 IntelliJ IDEA 中配置两下就能直接连接程序调试，那 Java 程序的安全性也太低了吧。</p><p>刚才笔者让你复制的 [远程 JVM 的命令行实参]，是 IntelliJ IDEA 基于我们刚才的配置帮我们生成的，我们需要将这个 JVM 命令行参数加到你要远程调试的程序启动命令中。</p><p>例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 你的程序名.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --spring.profiles.active=test</span></span></code></pre></div><p>好了，还差最后一步，把你配置的远程调试端口放开。</p><h2 id="启动远程调试" tabindex="-1">启动远程调试 <a class="header-anchor" href="#启动远程调试" aria-label="Permalink to &quot;启动远程调试&quot;">​</a></h2><p>回到 IDE 中，点击 [Debug 运行] 按钮，如果控制台窗口出现下方提示，那么接下来该怎么加断点，该怎么触发断点，该怎么进行调试就不用笔者过多介绍了吧？</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Connected to the target VM, address: &#39;&#39;xxx:5005&#39;, transport: &#39;socket&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">已连接到目标</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> VM，地址：&#39;&#39;xxx:5005&#39;, 传输: &#39;套接字&#39;&#39;</span></span></code></pre></div><p><img src="`+D+'" alt="202211012025211"></p><p>远程调试完后别忘了把远程调试端口关闭，该删除安全组规则就删除。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>哦对了，笔者这 “匪夷所思” 的问题到底解决了没有呢？当然解决了，而且这个问题不是代码的问题，而是一位远程办公的同事在他本地连接了测试环境数据库（这在笔者项目开发时强调过不允许连接），他的程序一直运行着把测试环境的一些任务数据处理了。</p><p>具体的不多说，因为当你调试时程序运行正常，断开调试再试就出错，而且在你没调试前添加的部分日志埋点也没输出时，其实就应该摒弃所谓的 “不可能”，即：程序没有在你预想的机器上运行。毕竟福尔摩斯有句话：“排除一切不可能的，剩下的即使再不可能，那也是真相”。</p></div>',23);function A(s,y,E,F,J,V){const l=p,n=o("ClientOnly");return t(),c("div",null,[v,d(n,null,{default:h(()=>{var a,e;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=s.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(t(),k(l,{key:0,article:s.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),f])}const S=r(C,[["render",A]]);export{M as __pageData,S as default};
