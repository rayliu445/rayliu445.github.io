import{_ as h}from"./chunks/ArticleMetadata.Sb1DYAHo.js";import{_ as p,D as r,o as e,c as k,I as o,w as d,k as t,a as c,R as u,b as g,e as A}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const f=JSON.parse('{"title":"Spring框架快速入门","description":"","frontmatter":{"title":"Spring框架快速入门","author":"Ray","date":"2022/12/25 14:49","categories":["Spring"],"tags":["Spring"]},"headers":[],"relativePath":"courses/java/04-Spring/01-Spring快速入门.md","filePath":"courses/java/04-Spring/01-Spring快速入门.md","lastUpdated":1742941204000}'),y={name:"courses/java/04-Spring/01-Spring快速入门.md"},m=t("h1",{id:"spring框架快速入门",tabindex:"-1"},[c("Spring框架快速入门 "),t("a",{class:"header-anchor",href:"#spring框架快速入门","aria-label":'Permalink to "Spring框架快速入门"'},"​")],-1),q=u(`<h2 id="spring" tabindex="-1">Spring <a class="header-anchor" href="#spring" aria-label="Permalink to &quot;Spring&quot;">​</a></h2><h3 id="_1-ioc理论推导" tabindex="-1">1.IOC理论推导 <a class="header-anchor" href="#_1-ioc理论推导" aria-label="Permalink to &quot;1.IOC理论推导&quot;">​</a></h3><h3 id="_2-项目创建和配置" tabindex="-1">2.项目创建和配置 <a class="header-anchor" href="#_2-项目创建和配置" aria-label="Permalink to &quot;2.项目创建和配置&quot;">​</a></h3><h3 id="_3-依赖注入-di-denpendency-injection" tabindex="-1">3.依赖注入（DI）denpendency Injection <a class="header-anchor" href="#_3-依赖注入-di-denpendency-injection" aria-label="Permalink to &quot;3.依赖注入（DI）denpendency Injection&quot;">​</a></h3><p>依赖：指的是bean对象的创建依赖于容器，Bean对象的依赖资源</p><p>注入：指的是bean对象所依赖的资源，由容器来设置和装配</p><p>bean的作用域</p><p>1.singleton--容器中只存在一个实例对象</p><p>2.prototype--每次对应该bean请求都会创建一个对象</p><p>3.request--表示在一次请求中对应一个bean实例</p><p>4.session--http Session中对应一个实例，和request一样都是基于web的Spring ApplicationContext情形下有效</p><h3 id="_4-自动装配" tabindex="-1">4.自动装配 <a class="header-anchor" href="#_4-自动装配" aria-label="Permalink to &quot;4.自动装配&quot;">​</a></h3><p>1.在xml中显式配置</p><p>2.在java中显式配置</p><p>3.隐式的bean发现机制和自动装配</p><p>spring的自动装配需要从两个角度来实现，或者说是两个操作 1.组件扫描(componetn scanning)：spring会自动发现应用上下文中所创建的bean。</p><p>2.组件装配(autowiring)：spring自动满足bean之间的依赖，即IOC/DI;</p><p>xml装配可以参考狂神非常清晰</p><p><strong>@Autowired和@Resource都可以用来装配bean，Autowired先byType @Resource先byName</strong></p><p>@Autowired，默认按照类型装配，默认情况下要求依赖对象必须存在，如果允许null值，可以设置required属性为false;</p><p>@Resource，默认按照名称进行装配，名称可以通过name属性进行指定。如果没有指定name属性，当注解写在字段上，默认取字段名进行按照名称查找</p><h3 id="_5-使用注解开发" tabindex="-1">5.使用注解开发 <a class="header-anchor" href="#_5-使用注解开发" aria-label="Permalink to &quot;5.使用注解开发&quot;">​</a></h3><h3 id="_6-静态-动态代理模式" tabindex="-1">6.静态/动态代理模式 <a class="header-anchor" href="#_6-静态-动态代理模式" aria-label="Permalink to &quot;6.静态/动态代理模式&quot;">​</a></h3><h3 id="_7-aop面向切面-oop的拓展" tabindex="-1">7.aop面向切面（oop的拓展） <a class="header-anchor" href="#_7-aop面向切面-oop的拓展" aria-label="Permalink to &quot;7.aop面向切面（oop的拓展）&quot;">​</a></h3><h3 id="_8-整合mybatis" tabindex="-1">8.整合mybatis <a class="header-anchor" href="#_8-整合mybatis" aria-label="Permalink to &quot;8.整合mybatis&quot;">​</a></h3><h3 id="_9-声明式事务" tabindex="-1">9.声明式事务 <a class="header-anchor" href="#_9-声明式事务" aria-label="Permalink to &quot;9.声明式事务&quot;">​</a></h3><h2 id="springmvc" tabindex="-1">SpringMVC <a class="header-anchor" href="#springmvc" aria-label="Permalink to &quot;SpringMVC&quot;">​</a></h2><h3 id="_1-概述" tabindex="-1">1.概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1.概述&quot;">​</a></h3><h3 id="_2-项目创建和配置-1" tabindex="-1">2.项目创建和配置 <a class="header-anchor" href="#_2-项目创建和配置-1" aria-label="Permalink to &quot;2.项目创建和配置&quot;">​</a></h3><h3 id="_3-restful和控制器" tabindex="-1">3.RestFul和控制器 <a class="header-anchor" href="#_3-restful和控制器" aria-label="Permalink to &quot;3.RestFul和控制器&quot;">​</a></h3><h3 id="_4-数据处理和跳转" tabindex="-1">4.数据处理和跳转 <a class="header-anchor" href="#_4-数据处理和跳转" aria-label="Permalink to &quot;4.数据处理和跳转&quot;">​</a></h3><p>结果跳转方式 ModelAndView 页面：{视图解析器}+viewName+{视图解析器后缀} <img src="https://i.loli.net/2021/02/20/xOdKXh7MkzZvgYQ.png" alt="选区_114.png"></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ControllerTest1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> implents Controller{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ModelAndView </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">handleRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletRequest </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">httpServletRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">httpServletResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ModelAndView</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ModelAndView</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addObject</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;TestController1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setViewName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> model;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>ServletAPI 1.通过HttpServletResponse进行输出 2.通过HttpServletResponse实现重定向 3.通过HttpServletResponse实现转发 @Controller public class ResultGo{</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/result/t1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletRequest req,HttpServletResponse rsp) throws IOException{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    rsp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getWriter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;rsp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>} SpringMVC 通过SpringMVC来实现转发和重定向-无视图解析器 转发 return &quot;/index.jsp&quot;; 转发 return &quot;forward:/index.jsp&quot; 重定向 return &quot;redirect:/index.jsp&quot; 有视图解析器 转发 return &quot;test&quot;; 重定向 return &quot;redirect:/index.jsp&quot; 数据处理</p><p>####　处理提交数据--参考狂神的博客</p><p>1.@RequestParam注解 2.提交的是一个对象 数据显示到前端 1.ModelAndView 2.ModelMap</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)String name,ModelMap model){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,name);</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//相当于req.setAttribute(name);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>3.Model</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)String name,Model model){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,name);</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//相当于req.setAttribute(name);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>乱码问题可以自定义一个过滤器</p><h3 id="_5-整合ssm框架" tabindex="-1">5.整合ssm框架 <a class="header-anchor" href="#_5-整合ssm框架" aria-label="Permalink to &quot;5.整合ssm框架&quot;">​</a></h3><h3 id="_6-json交互" tabindex="-1">6.json交互 <a class="header-anchor" href="#_6-json交互" aria-label="Permalink to &quot;6.json交互&quot;">​</a></h3><h3 id="_7-ajax研究" tabindex="-1">7.ajax研究 <a class="header-anchor" href="#_7-ajax研究" aria-label="Permalink to &quot;7.ajax研究&quot;">​</a></h3><h3 id="_8-配置拦截器" tabindex="-1">8.配置拦截器 <a class="header-anchor" href="#_8-配置拦截器" aria-label="Permalink to &quot;8.配置拦截器&quot;">​</a></h3><h3 id="_9-工作常用文件的上传和下载" tabindex="-1">9.工作常用文件的上传和下载 <a class="header-anchor" href="#_9-工作常用文件的上传和下载" aria-label="Permalink to &quot;9.工作常用文件的上传和下载&quot;">​</a></h3><h2 id="mybatis" tabindex="-1">Mybatis <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;Mybatis&quot;">​</a></h2><h3 id="_1-crud操作及配置解析" tabindex="-1">1.CRUD操作及配置解析 <a class="header-anchor" href="#_1-crud操作及配置解析" aria-label="Permalink to &quot;1.CRUD操作及配置解析&quot;">​</a></h3><p>核心配置文件mybatis-config.xml,这个下面包含许多的属性，详情可以参考狂神的笔记 生命周期和作用域 <img src="https://i.loli.net/2021/02/20/FEukKesylBG8Rbh.png" alt="选区_111.png"> SqlSessionFactoryBuilder的作用在于创建SqlSessionFactory,完成后</p><p>失去作用，SqlSessionFactoryBuilder实例的最佳作用域是方法作用域。</p><p>SqlSessionFactory的作用创建SqlSession接口对象，长期存在，同时为了</p><p>避免消耗资源，作为一个单例SqlSession是一个连接对象，存活在一</p><p>个业务请求中。 <img src="https://i.loli.net/2021/02/20/ouO3L4Ie8QNR7iT.png" alt="选区_112.png"></p><h3 id="_2-resultmap及分页" tabindex="-1">2.ResultMap及分页 <a class="header-anchor" href="#_2-resultmap及分页" aria-label="Permalink to &quot;2.ResultMap及分页&quot;">​</a></h3><p>mybatis中内置有日志工厂功能，会按顺序查找。如果一个都没有找到，日志功</p><p>能将禁用</p><p>例如log4j</p><p>1.导入log4j包</p><p>2.配置文件编写</p><p>3.setting设置日志实现</p><p>4.在程序中使用log4j进行输出</p><p>5.查看控制台输出</p><h3 id="_3-使用注解开发" tabindex="-1">3.使用注解开发 <a class="header-anchor" href="#_3-使用注解开发" aria-label="Permalink to &quot;3.使用注解开发&quot;">​</a></h3><h3 id="_4-一对多和多对一处理" tabindex="-1">4.一对多和多对一处理 <a class="header-anchor" href="#_4-一对多和多对一处理" aria-label="Permalink to &quot;4.一对多和多对一处理&quot;">​</a></h3><h3 id="_5-动态sql" tabindex="-1">5.动态SQL <a class="header-anchor" href="#_5-动态sql" aria-label="Permalink to &quot;5.动态SQL&quot;">​</a></h3><h3 id="_6-缓存" tabindex="-1">6.缓存 <a class="header-anchor" href="#_6-缓存" aria-label="Permalink to &quot;6.缓存&quot;">​</a></h3><p>一级缓存默认开启，SqlSession级别</p><p>二级缓存即全局缓存，基于namespace级别的缓存，一个名称空间，对应一个二级缓存</p><h3 id="工作机制" tabindex="-1">工作机制 <a class="header-anchor" href="#工作机制" aria-label="Permalink to &quot;工作机制&quot;">​</a></h3><p>1.一个回话查询到一条数据，这条数据就会被存储在一级缓存中</p><p>2.如果会话关闭，一级失效；开启二级的话，一级缓存中的数据被保存到二级中</p><p>3.新的会话查询信息，就可以从二级缓存中获取内容</p><p>4.不同的mapper查出的数据会放在自己对应的缓存中 <img src="https://i.loli.net/2021/02/20/GCu89qfvhXwdUWP.png" alt="选区_113.png"></p>`,74);function D(a,b,C,_,F,B){const n=h,l=r("ClientOnly");return e(),k("div",null,[m,o(l,null,{default:d(()=>{var s,i;return[(((s=a.$frontmatter)==null?void 0:s.aside)??!0)&&(((i=a.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(e(),g(n,{key:0,article:a.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),q])}const x=p(y,[["render",D]]);export{f as __pageData,x as default};
