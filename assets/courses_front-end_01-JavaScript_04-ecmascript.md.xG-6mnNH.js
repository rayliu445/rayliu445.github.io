import{_ as s,o as a,c as i,R as n}from"./chunks/framework.FHZ5yb6k.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"courses/front-end/01-JavaScript/04-ecmascript.md","filePath":"courses/front-end/01-JavaScript/04-ecmascript.md","lastUpdated":1760019641000}'),p={name:"courses/front-end/01-JavaScript/04-ecmascript.md"},l=n(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><a href="https://es6.ruanyifeng.com/#docs" target="_blank" rel="noreferrer">入门教程</a></p><h3 id="es6与javascript的关系" tabindex="-1">ES6与JavaScript的关系 <a class="header-anchor" href="#es6与javascript的关系" aria-label="Permalink to &quot;ES6与JavaScript的关系&quot;">​</a></h3><p>其实就是js这种浏览器脚本语言先出来，然后将其提交给了ECMA组织，希望称为所有浏览器的标准语言，但是因为商标问题，其他厂商不能叫JavaScript，因为这不只是个语言，还是个商标，所以其他厂商知能将其称之为ECMA。</p><h2 id="与es5相比迭代" tabindex="-1">与ES5相比迭代 <a class="header-anchor" href="#与es5相比迭代" aria-label="Permalink to &quot;与ES5相比迭代&quot;">​</a></h2><h3 id="let和const命令" tabindex="-1">let和const命令 <a class="header-anchor" href="#let和const命令" aria-label="Permalink to &quot;let和const命令&quot;">​</a></h3><p>在var的基础上添加了let(块级)和const(常量)</p><p>所谓的块就是{}包裹起来的作用域，以及for(let i=0;i&lt;100;i++)</p><h3 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h3><p>就是同时对多个变量赋值</p><h3 id="字符串的扩展" tabindex="-1">字符串的扩展 <a class="header-anchor" href="#字符串的扩展" aria-label="Permalink to &quot;字符串的扩展&quot;">​</a></h3><p>就是对原来的一些api进行扩展，同时兼容更多编码类型。</p><p>还有添加了模板字符。</p><h3 id="字符串新增的方法" tabindex="-1">字符串新增的方法 <a class="header-anchor" href="#字符串新增的方法" aria-label="Permalink to &quot;字符串新增的方法&quot;">​</a></h3><p>新增了一些api</p><h3 id="正则的扩展" tabindex="-1">正则的扩展 <a class="header-anchor" href="#正则的扩展" aria-label="Permalink to &quot;正则的扩展&quot;">​</a></h3><p>修改了一下es5中的定义，修改了一下函数定义。</p><h2 id="编程风格" tabindex="-1">编程风格 <a class="header-anchor" href="#编程风格" aria-label="Permalink to &quot;编程风格&quot;">​</a></h2><p>主要就是和JavaScript传统编程作以区分。</p><h4 id="块级作用域" tabindex="-1">块级作用域 <a class="header-anchor" href="#块级作用域" aria-label="Permalink to &quot;块级作用域&quot;">​</a></h4><h5 id="let取代var" tabindex="-1">let取代var <a class="header-anchor" href="#let取代var" aria-label="Permalink to &quot;let取代var&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;use strict&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    letx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (leti </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h5 id="全局变量和线程安全" tabindex="-1">全局变量和线程安全 <a class="header-anchor" href="#全局变量和线程安全" aria-label="Permalink to &quot;全局变量和线程安全&quot;">​</a></h5><p>用const代替let来声明全局变量</p><h4 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h4><p>使用单引号或者反引号</p><h4 id="解构赋值-1" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值-1" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h4><h4 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h4><p>对象尽量静态化，如果添加属性不可避免，要使用Object.assign方法</p><h4 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h4><p>使用扩展运算符(...)拷贝数组</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constlen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> items.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constitemsCopy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">leti;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    itemsCopy[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> items[i];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">onstitemsCopy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">items];</span></span></code></pre></div><h4 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h4><p>立即执行的函数可以写成箭头函数的形式</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})();</span></span></code></pre></div><h4 id="map结构" tabindex="-1">Map结构 <a class="header-anchor" href="#map结构" aria-label="Permalink to &quot;Map结构&quot;">​</a></h4><p>注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制</p><h4 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;Class&quot;">​</a></h4><p>总是用Class关键字来取代需要prototype的操作。因为Class的写法更加简洁，更易读。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>// bad</span></span>
<span class="line"><span>function Queue(contents = []) {</span></span>
<span class="line"><span>  this._queue = [...contents];</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Queue.prototype.pop = function() {</span></span>
<span class="line"><span>  const value = this._queue[0];</span></span>
<span class="line"><span>  this._queue.splice(0, 1);</span></span>
<span class="line"><span>  return value;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// good</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Queue {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(contents = []) {</span></span>
<span class="line"><span>    this._queue = [...contents];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pop() {</span></span>
<span class="line"><span>    const value = this._queue[0];</span></span>
<span class="line"><span>    this._queue.splice(0, 1);</span></span>
<span class="line"><span>    return value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>使用extends实现继承</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// bad</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constinherits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;inherits&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">functionPeekableQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(contents) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Queue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, contents);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">inherits</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(PeekableQueue, Queue);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">PeekableQueue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">peek</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    returnthis._queue[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// good</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">classPeekableQueueextendsQueue {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">peek</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    returnthis._queue[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h4 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h4><p>虽然我们在nodes.js中学习了CommonJS的语法，但还是要用import的写法</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// CommonJS 的写法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constmoduleA </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;moduleA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constfunc1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> moduleA.func1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">constfunc2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> moduleA.func2;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// ES6 的写法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> { func1, func2 } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;moduleA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div><p>其次，使用 <code>export</code>取代 <code>module.exports</code>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// commonJS 的写法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">varReact </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">varBreadcrumbs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">createClass</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Breadcrumbs;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// ES6 的写法</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">importReactfrom</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">classBreadcrumbsextendsReact.Component {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">exportdefaultBreadcrumbs;</span></span></code></pre></div><h4 id="eslint的使用" tabindex="-1">ESLint的使用 <a class="header-anchor" href="#eslint的使用" aria-label="Permalink to &quot;ESLint的使用&quot;">​</a></h4><p>vscode中安装插件即可。</p>`,49),e=[l];function t(h,k,r,c,d,o){return a(),i("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
