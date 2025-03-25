import{_ as s,o as i,c as a,R as n}from"./chunks/framework.FVQzxbLi.js";const o=JSON.parse('{"title":"RabbitMQ快速入门","description":"","frontmatter":{"title":"RabbitMQ快速入门","author":"Ray","date":"2024/3/1 21:21","categories":["中间件生态"],"tags":["RabbitMQ"]},"headers":[],"relativePath":"courses/middleware/定时任务/01-xxljob快速入门.md","filePath":"courses/middleware/定时任务/01-xxljob快速入门.md","lastUpdated":1742944330000}'),l={name:"courses/middleware/定时任务/01-xxljob快速入门.md"},h=n(`<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>分布式任务执行框架</p><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>官网的提供的案例非常容易上手，强烈推荐，大家可以自行搜索，不做赘述</p><h3 id="编写job" tabindex="-1">编写Job <a class="header-anchor" href="#编写job" aria-label="Permalink to &quot;编写Job&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MyJobHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IUserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> userService;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * xxl-job-core最新版本2.1.2中@JobHandler注解已过时，取而代之的是@XxlJob注解，也不需要去继承IJobHandler类。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> param</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  调度平台接收的参数信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">XxlJob</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;syncUser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ReturnT&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">syncUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">param</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;---------------&gt;&gt;参数为</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">param);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        XxlJobLogger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;xxl-job启动成功 ，欢迎使用xxl-job同步数据 。。。 syncUser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        List</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">userList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> userService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">userList</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        userList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(System.out</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">::</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">println);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ReturnT.SUCCESS;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h3 id="配置执行器" tabindex="-1">配置执行器 <a class="header-anchor" href="#配置执行器" aria-label="Permalink to &quot;配置执行器&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> LoggerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(XxlJobConfig.class);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.admin.addresses}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> adminAddresses;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.accessToken}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> accessToken;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.appname}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> appname;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.address}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> address;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.ip}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ip;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.port}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> port;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.logpath}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> logPath;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;\${xxl.job.executor.logretentiondays}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> logRetentionDays;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> XxlJobSpringExecutor </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">xxlJobExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; xxl-job config init.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        XxlJobSpringExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> xxlJobSpringExecutor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> XxlJobSpringExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAdminAddresses</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(adminAddresses);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAppname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(appname);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(address);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setIp</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ip);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(port);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setAccessToken</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(accessToken);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setLogPath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(logPath);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        xxlJobSpringExecutor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setLogRetentionDays</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(logRetentionDays);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> xxlJobSpringExecutor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span></code></pre></div><h3 id="配置任务-名称、handler以及执行周期" tabindex="-1">配置任务(名称、Handler以及执行周期) <a class="header-anchor" href="#配置任务-名称、handler以及执行周期" aria-label="Permalink to &quot;配置任务(名称、Handler以及执行周期)&quot;">​</a></h3><p>这里我们需要去可视化界面添加调度规则 <img src="https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/xxljob%E6%B7%BB%E5%8A%A0%E8%B0%83%E5%BA%A6%E8%A7%84%E5%88%9920250326.png" alt=""></p>`,11),t=[h];function p(k,e,r,d,g,A){return i(),a("div",null,t)}const y=s(l,[["render",p]]);export{o as __pageData,y as default};
