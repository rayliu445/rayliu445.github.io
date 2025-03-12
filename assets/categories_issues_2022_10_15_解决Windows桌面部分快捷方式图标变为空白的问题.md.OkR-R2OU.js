import{_ as n}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as r,D as p,o,c as d,I as _,w as l,k as a,a as m,R as w,b as u,e as h}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const g="/assets/202210152119199.SP5rj49w.png",f="/assets/202210152120752.u4JAeLCU.png",W="/assets/202210152132275.Qw6P271e.png",k="/assets/202210152132523.7Jt0VgRP.png",b="/assets/202210152132666.kwEETq84.png",D=JSON.parse('{"title":"解决 Windows 桌面部分快捷方式图标变为空白的问题","description":"","frontmatter":{"title":"解决 Windows 桌面部分快捷方式图标变为空白的问题","author":"查尔斯","date":"2022/10/15 21:10","categories":["Bug万象集"],"tags":["Windows"]},"headers":[],"relativePath":"categories/issues/2022/10/15/解决Windows桌面部分快捷方式图标变为空白的问题.md","filePath":"categories/issues/2022/10/15/解决Windows桌面部分快捷方式图标变为空白的问题.md","lastUpdated":1741770889000}'),C={name:"categories/issues/2022/10/15/解决Windows桌面部分快捷方式图标变为空白的问题.md"},P=a("h1",{id:"解决-windows-桌面部分快捷方式图标变为空白的问题",tabindex:"-1"},[m("解决 Windows 桌面部分快捷方式图标变为空白的问题 "),a("a",{class:"header-anchor",href:"#解决-windows-桌面部分快捷方式图标变为空白的问题","aria-label":'Permalink to "解决 Windows 桌面部分快捷方式图标变为空白的问题"'},"​")],-1),T=w('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p><strong>C：</strong> 今天把电脑系统从 Windows 11 换回了 Windows 10，使用了半个月的 Windows 11 真是一言难尽。</p><p>换完系统就开始安装一些开发应用，安装了一会儿，突然发现桌面上 draw.io 应用快捷方式的图标变为了空白。</p><p><img src="'+g+'" alt="202210152119199"></p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>1、打开本地应用数据存储位置（<code>C:\\Users\\用户名\\AppData\\Local</code>）</p><p>按下 Windows + R 键，在弹出的运行对话框中输入 <code>%localappdata%</code>，回车确定。</p><p><img src="'+f+'" alt="202210152120752"></p><p>2、在打开的本地应用数据存储窗口中，找到并删除 <code>Iconcache.db</code> 文件</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>这是图标缓存文件，实际上我们的操作就是要删除图标缓存，让系统重新生成缓存。</p></div><p><img src="'+W+'" alt="202210152132275"></p><p>3、打开任务管理器</p><p>按下 Windows + X 键，在弹出快捷菜单后，按下 T 键。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>或者按 Ctrl + Alt + Delete 键，这个快捷键大家应该更熟悉。</p></div><p>4、重新启动 <code>Windows 资源管理器</code> 应用</p><p>右键单击 <code>Windows 资源管理器</code>，在弹出的菜单中选择 <code>重新启动</code>，屏幕会刷新一下。</p><p><img src="'+k+'" alt="202210152132523"></p><p>这时候回到桌面，就可以看到 draw.io 快捷方式的图标恢复正常显示了。</p><p><img src="'+b+'" alt="202210152132666"></p>',19);function A(e,V,v,N,$,S){const i=n,c=p("ClientOnly");return o(),d("div",null,[P,_(c,null,{default:l(()=>{var t,s;return[(((t=e.$frontmatter)==null?void 0:t.aside)??!0)&&(((s=e.$frontmatter)==null?void 0:s.showArticleMetadata)??!0)?(o(),u(i,{key:0,article:e.$frontmatter},null,8,["article"])):h("",!0)]}),_:1}),T])}const E=r(C,[["render",A]]);export{D as __pageData,E as default};
