import{_ as s,o as a,c as i,R as n}from"./chunks/framework.FVQzxbLi.js";const F=JSON.parse('{"title":"09-多线程-JavaGuide版","description":"","frontmatter":{"title":"09-多线程-JavaGuide版","author":"Ray","date":"2020/10/02 21:30","categories":["Java生态"],"tags":["Java","Java基础","JDK","开发环境"]},"headers":[],"relativePath":"courses/java/01-Java语法入门/09-多线程-JavaGuide版.md","filePath":"courses/java/01-Java语法入门/09-多线程-JavaGuide版.md","lastUpdated":1743947440000}'),t={name:"courses/java/01-Java语法入门/09-多线程-JavaGuide版.md"},h=n(`<h2 id="什么是进程和线程" tabindex="-1">什么是进程和线程 <a class="header-anchor" href="#什么是进程和线程" aria-label="Permalink to &quot;什么是进程和线程&quot;">​</a></h2><h3 id="进程" tabindex="-1">进程 <a class="header-anchor" href="#进程" aria-label="Permalink to &quot;进程&quot;">​</a></h3><p>进程是程序的<strong>一次****执行过程</strong>,<strong>是系统运行程序的基本单位</strong>(任务管理器看到的说明程序正在运行),因此进程是<strong>动态的</strong>。系统运行程序即是一个进程从创建,运行到消亡的过程。 在Java中,我们启动main函数就是启动了一个JVM的进程,main函数所在的线程就是这个进程中的主线程。</p><h3 id="线程" tabindex="-1">线程 <a class="header-anchor" href="#线程" aria-label="Permalink to &quot;线程&quot;">​</a></h3><p>线程是比进程更小的<strong>执行单位</strong>。<strong>一个进程在其执行的过程中可以产生多个线程</strong>。与进程不同的是同类的多个线程<strong>共享</strong>进程的<strong>堆</strong>和<strong>方法区</strong>资源,但是每个线程之间切换工作时,负担要比进程小得多,也正因为如此,线程也被称作轻量级进程。 Java程序天生就是多线程程序,我们可以通过JMX来看一下一个普通的Java程序有哪些线程,代码如下:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MutiThread</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        //获取Java线程管理MXBean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ThreadMXBean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> threadMXBean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ManagementFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getThreadMXBean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        //不需要获取同步的minitor和synchronizer信息,仅获取线程和线程堆栈信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        ThreadInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">threadInfos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">threadMXBean.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">dumpAllSThreads</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        //遍历线程信息,仅打印线程ID和线程名称信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ThreadInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> threadInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">threadInfo){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;[&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">threadInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getThredId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;]&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">threadInfo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getThreadName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>上述程序输出如下(输出内容不同)：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Attach</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Listener</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> //添加事件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Signal</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Dispatcher</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  //分发处理给JVM信号的线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Finalizer</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> //调用对象的</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> finalize</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 方法的线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Reference</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Handler</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> //清除</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> reference</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> //main</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 线程,程序入口</span></span></code></pre></div><p>从上面的输出内容可以看出:<strong>一个Java程序的运行是main线程和多个其他线程同时运行</strong>。</p><h2 id="简要描述线程与进程的关系-区别以及优缺点" tabindex="-1">简要描述线程与进程的关系,区别以及优缺点 <a class="header-anchor" href="#简要描述线程与进程的关系-区别以及优缺点" aria-label="Permalink to &quot;简要描述线程与进程的关系,区别以及优缺点&quot;">​</a></h2><h3 id="图解进程和线程的关系" tabindex="-1">图解进程和线程的关系 <a class="header-anchor" href="#图解进程和线程的关系" aria-label="Permalink to &quot;图解进程和线程的关系&quot;">​</a></h3><p>这里用一下Guide的图片</p><p><img src="https://raw.githubusercontent.com/rayliu445/blogImage/master/blogImage/java%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F20250406.png" alt=""><img src="https://gitee.com/aryangzhu/picture/raw/master/java/Java%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.png" alt="img"> 从上面的图片可以看到,JDK1.8之后,方法区变为了<strong>元空间</strong>,但是每个线程有自己的程序计数器、虚拟机栈和本地方法栈。 线程是进程的<strong>更小执行单位</strong>,线程执行开销小,但不利于资源的保护管理,因为执行时会相互影响。</p><h3 id="为什么程序计数器是私有的" tabindex="-1">为什么程序计数器是私有的？ <a class="header-anchor" href="#为什么程序计数器是私有的" aria-label="Permalink to &quot;为什么程序计数器是私有的？&quot;">​</a></h3><p>程序计数器主要有两个作用:</p><ol><li><strong>字节码解释器通过改变程序计数器来来依次读取指令</strong>,从而实现代码的流程控制,如:顺序执行、选择、循环、异常处理(说实话不是很明白)</li><li>在多线程的情况下,<strong>程序计数器用于记录当前线程执行的位置</strong>,从而当线程被切换回来的时候能够知道该线程上次运行到了什么位置。</li></ol><p>需要注意的是,如果执行的是native方法,那么程序计数器记录的是undefined地址,只有执行的是Java代码时程序技术器记录的才是<strong>下一条指令的地址</strong>。 程序计数器的私有主要是为了<strong>线程切换后能回复到正确的执行位置</strong>。</p><h3 id="为什么虚拟机栈和本地方法栈是私有的" tabindex="-1">为什么虚拟机栈和本地方法栈是私有的？ <a class="header-anchor" href="#为什么虚拟机栈和本地方法栈是私有的" aria-label="Permalink to &quot;为什么虚拟机栈和本地方法栈是私有的？&quot;">​</a></h3><p>虚拟机栈:每个Java方法在执行的同时会创建一个<strong>栈帧</strong>用于存储<strong>局部变量表、操作数栈、常量池引用</strong>等信息。从方法调用直至执行完成的过程,就对应着一个栈帧在Java虚拟机栈中入栈和出栈的过程。</p><h3 id="堆和方法区" tabindex="-1">堆和方法区 <a class="header-anchor" href="#堆和方法区" aria-label="Permalink to &quot;堆和方法区&quot;">​</a></h3><p>堆和方法区是所有线程共享的资源,其中堆是进程中最大的一块内存,主要用于存放新创建的对象(几乎所有的对象都在这里分配内存),方法区用于存放已经被加载的类信息、常量、静态变量、及时编译器后的代码等数据。</p><h3 id="并发与并行" tabindex="-1">并发与并行 <a class="header-anchor" href="#并发与并行" aria-label="Permalink to &quot;并发与并行&quot;">​</a></h3><p>并发:多个<strong>作业</strong>在同一<strong>时间段内</strong>执行。</p><p>并行:多个<strong>作业</strong>在同一时刻执行。</p><h3 id="为什么要使用多线程" tabindex="-1">为什么要使用多线程 <a class="header-anchor" href="#为什么要使用多线程" aria-label="Permalink to &quot;为什么要使用多线程&quot;">​</a></h3><p>单核时代:如果Java进程中只有一个线程,那么例如IO阻塞时整个进程将被阻塞。而使用多线程的话,那么当一个线程被IO阻塞时,其他线程还可以继续使用CPU。</p><p>多核时代:如果只有一个线程的话,那么无论系统有几个CPU,只有一个会被用到。而创建多个线程,这些线程可被映射到底层的多个CPU上执行,在任务中的多线程没有资源竞争的情况下,任务的执行效率会有显著性的提高,约等于单核执行时间/CPU核心数。</p><h3 id="多线程可能带来的问题" tabindex="-1">多线程可能带来的问题 <a class="header-anchor" href="#多线程可能带来的问题" aria-label="Permalink to &quot;多线程可能带来的问题&quot;">​</a></h3><p>并发编程的目的就是为了能提高程序的执行效率提高程序运行速度,但是并发编程并不总是能提高程序运行速度的,而且并发编程可能会遇到很多问题,比如:内存泄露、死锁、线程不安全等。</p><h3 id="线程的生命周期和状态" tabindex="-1">线程的生命周期和状态 <a class="header-anchor" href="#线程的生命周期和状态" aria-label="Permalink to &quot;线程的生命周期和状态&quot;">​</a></h3><p>Java线程的6种状态</p><p>new <strong>初始状态</strong>,线程被构建,但是还没有调用start()方法。</p><p>runnable 运行状态,Java线程将操作系统中的就绪和运行两种状态笼统地称作&quot;运行中&quot;。</p><p>blocked 阻塞状态,表示线程阻塞</p><p>waiting 等待状态,表示线程进入等待状态,进入该线程表示当前线程需要等待其他线程做出一些特定动作(通知或中断)</p><p>time_waiting 超时等待,该状态不同于waiting，它是可以在指定的时间内自行返回的。</p><p>terminate 终止状态,表示当前线程已经执行完毕。</p><p><img src="https://raw.githubusercontent.com/aryangzhu/blogImage/master/%E9%80%89%E5%8C%BA_037.png" alt=""></p><h3 id="什么是上下文切换" tabindex="-1">什么是上下文切换 <a class="header-anchor" href="#什么是上下文切换" aria-label="Permalink to &quot;什么是上下文切换&quot;">​</a></h3><p>线程在执行过程中会有自己的<strong>运行条件和状态</strong>(也称上下文),比如上下文所说到的程序计数器,栈信息等。当出现如下情况的时候,<strong>线程会从占用CPU状态中退出</strong>。</p><p>1.主动让出CPU,比如调用了sleep()、wait()等。</p><p>2.时间片用完,因为操作系统要防止一个线程或进程长时间占用CPU导致其他线程或者进程饿死。</p><p>3.调用了<strong>阻塞类型的系统中断</strong>,比如请求IO,线程被阻塞。</p><p>4.被终止或结束运行。</p><p>前三种都会发生线程切换,线程切换意味着需要保存当前线程的上下文,<strong>留待线程下次占用CPU的时候恢复现场</strong>,并加载下一个将要占用CPU的线程上下文。这就是所谓的<strong>上下文切换</strong>。</p><p>上下文切换是线代操作系统的基本功能,因其每次需要保存信息,这将会占用CPU,内存等系统资源进行处理,也就意味着效率会有一定损耗,如果频繁切换会造成整体效率低下。</p>`,46),e=[h];function l(p,r,k,d,o,g){return a(),i("div",null,e)}const D=s(t,[["render",l]]);export{F as __pageData,D as default};
