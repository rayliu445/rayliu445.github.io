import{_ as a,o as e,c as r,R as h}from"./chunks/framework.FVQzxbLi.js";const q=JSON.parse('{"title":"01-深入理解Java虚拟机","description":"","frontmatter":{"title":"01-深入理解Java虚拟机","author":"Ray","date":"2020/10/02 21:30","categories":["Java生态"],"tags":["Java","Java基础","JDK","开发环境"]},"headers":[],"relativePath":"courses/java/03-JVM/01-深入理解Java虚拟机.md","filePath":"courses/java/03-JVM/01-深入理解Java虚拟机.md","lastUpdated":1742489594000}'),t={name:"courses/java/03-JVM/01-深入理解Java虚拟机.md"},o=h('<h2 id="一、历史背景" tabindex="-1">一、历史背景 <a class="header-anchor" href="#一、历史背景" aria-label="Permalink to &quot;一、历史背景&quot;">​</a></h2><h3 id="为什么要学习jvm" tabindex="-1">为什么要学习JVM <a class="header-anchor" href="#为什么要学习jvm" aria-label="Permalink to &quot;为什么要学习JVM&quot;">​</a></h3><p>我当年校招的时候买了这本书,但是经常觉得这本书里面的内容晦涩难懂,也可能是我前置知识铺垫的太少。总之,读了好几次都放弃掉了,现在重新捡起习作这个习惯,就从这个老大难开始。</p><h3 id="jvm的发展史" tabindex="-1">JVM的发展史 <a class="header-anchor" href="#jvm的发展史" aria-label="Permalink to &quot;JVM的发展史&quot;">​</a></h3><h2 id="二、自动内存管理" tabindex="-1">二、自动内存管理 <a class="header-anchor" href="#二、自动内存管理" aria-label="Permalink to &quot;二、自动内存管理&quot;">​</a></h2><h3 id="_2-java内存区域于内存溢出异常" tabindex="-1">2. Java内存区域于内存溢出异常 <a class="header-anchor" href="#_2-java内存区域于内存溢出异常" aria-label="Permalink to &quot;2. Java内存区域于内存溢出异常&quot;">​</a></h3><h4 id="_2-1-内存区域-重点" tabindex="-1">2.1 内存区域(重点) <a class="header-anchor" href="#_2-1-内存区域-重点" aria-label="Permalink to &quot;2.1 内存区域(重点)&quot;">​</a></h4><p><img src="https://raw.githubusercontent.com/aryangzhu/blogImage/master/blogImage/imagesJVM%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F20241023.png" alt="内存区域"></p><h5 id="公共" tabindex="-1">公共 <a class="header-anchor" href="#公共" aria-label="Permalink to &quot;公共&quot;">​</a></h5><h6 id="_1-堆" tabindex="-1">1. 堆 <a class="header-anchor" href="#_1-堆" aria-label="Permalink to &quot;1. 堆&quot;">​</a></h6><h6 id="_2-方法区" tabindex="-1">2. 方法区 <a class="header-anchor" href="#_2-方法区" aria-label="Permalink to &quot;2. 方法区&quot;">​</a></h6><h5 id="私有" tabindex="-1">私有 <a class="header-anchor" href="#私有" aria-label="Permalink to &quot;私有&quot;">​</a></h5><h6 id="_1-虚拟机线程栈" tabindex="-1">1. 虚拟机线程栈 <a class="header-anchor" href="#_1-虚拟机线程栈" aria-label="Permalink to &quot;1. 虚拟机线程栈&quot;">​</a></h6><h6 id="_2-本地方法栈" tabindex="-1">2. 本地方法栈 <a class="header-anchor" href="#_2-本地方法栈" aria-label="Permalink to &quot;2. 本地方法栈&quot;">​</a></h6><h6 id="_3-程序计数器" tabindex="-1">3. 程序计数器 <a class="header-anchor" href="#_3-程序计数器" aria-label="Permalink to &quot;3. 程序计数器&quot;">​</a></h6><h4 id="_2-2-常见的内存溢出异常" tabindex="-1">2.2. 常见的内存溢出异常 <a class="header-anchor" href="#_2-2-常见的内存溢出异常" aria-label="Permalink to &quot;2.2. 常见的内存溢出异常&quot;">​</a></h4><ol><li>堆内存溢出</li><li>栈内存溢出</li></ol><h3 id="_3-垃圾收集器与内存分配策略" tabindex="-1">3. 垃圾收集器与内存分配策略 <a class="header-anchor" href="#_3-垃圾收集器与内存分配策略" aria-label="Permalink to &quot;3. 垃圾收集器与内存分配策略&quot;">​</a></h3><h3 id="_4-虚拟机吸能监控、故障处理工具" tabindex="-1">4. 虚拟机吸能监控、故障处理工具 <a class="header-anchor" href="#_4-虚拟机吸能监控、故障处理工具" aria-label="Permalink to &quot;4. 虚拟机吸能监控、故障处理工具&quot;">​</a></h3><h3 id="_5-调优" tabindex="-1">5. 调优 <a class="header-anchor" href="#_5-调优" aria-label="Permalink to &quot;5. 调优&quot;">​</a></h3><h2 id="三、虚拟机执行子系统" tabindex="-1">三、虚拟机执行子系统 <a class="header-anchor" href="#三、虚拟机执行子系统" aria-label="Permalink to &quot;三、虚拟机执行子系统&quot;">​</a></h2><h3 id="_6、类文件结构" tabindex="-1">6、类文件结构 <a class="header-anchor" href="#_6、类文件结构" aria-label="Permalink to &quot;6、类文件结构&quot;">​</a></h3><p>这里给大家推荐一个idea的插件,<strong>jclasslib</strong>，可以更加直观地查看class文件中的结构都有什么。</p><h4 id="class类文件的结构" tabindex="-1">Class类文件的结构 <a class="header-anchor" href="#class类文件的结构" aria-label="Permalink to &quot;Class类文件的结构&quot;">​</a></h4><h5 id="_1-魔数" tabindex="-1">1. 魔数 <a class="header-anchor" href="#_1-魔数" aria-label="Permalink to &quot;1. 魔数&quot;">​</a></h5><h5 id="_2-常量池" tabindex="-1">2. 常量池 <a class="header-anchor" href="#_2-常量池" aria-label="Permalink to &quot;2. 常量池&quot;">​</a></h5><h5 id="_3-访问标志" tabindex="-1">3. 访问标志 <a class="header-anchor" href="#_3-访问标志" aria-label="Permalink to &quot;3. 访问标志&quot;">​</a></h5><h5 id="_4-类索引、父类索引与接口索引集合" tabindex="-1">4. 类索引、父类索引与接口索引集合 <a class="header-anchor" href="#_4-类索引、父类索引与接口索引集合" aria-label="Permalink to &quot;4. 类索引、父类索引与接口索引集合&quot;">​</a></h5><h5 id="_5-字段表集合" tabindex="-1">5. 字段表集合 <a class="header-anchor" href="#_5-字段表集合" aria-label="Permalink to &quot;5. 字段表集合&quot;">​</a></h5><h5 id="_6-方法表集合" tabindex="-1">6. 方法表集合 <a class="header-anchor" href="#_6-方法表集合" aria-label="Permalink to &quot;6. 方法表集合&quot;">​</a></h5><h5 id="_7-属性表集合" tabindex="-1">7. 属性表集合 <a class="header-anchor" href="#_7-属性表集合" aria-label="Permalink to &quot;7. 属性表集合&quot;">​</a></h5><h4 id="字节码指令" tabindex="-1">字节码指令 <a class="header-anchor" href="#字节码指令" aria-label="Permalink to &quot;字节码指令&quot;">​</a></h4><h5 id="_1-字节码与数据类型" tabindex="-1">1. 字节码与数据类型 <a class="header-anchor" href="#_1-字节码与数据类型" aria-label="Permalink to &quot;1. 字节码与数据类型&quot;">​</a></h5><h5 id="_2-加载和存储指令" tabindex="-1">2. 加载和存储指令 <a class="header-anchor" href="#_2-加载和存储指令" aria-label="Permalink to &quot;2. 加载和存储指令&quot;">​</a></h5><h5 id="_3-运算指令" tabindex="-1">3. 运算指令 <a class="header-anchor" href="#_3-运算指令" aria-label="Permalink to &quot;3. 运算指令&quot;">​</a></h5><h5 id="_4-类型转换命令" tabindex="-1">4. 类型转换命令 <a class="header-anchor" href="#_4-类型转换命令" aria-label="Permalink to &quot;4. 类型转换命令&quot;">​</a></h5><h5 id="_5-对象创建与访问指令" tabindex="-1">5. 对象创建与访问指令 <a class="header-anchor" href="#_5-对象创建与访问指令" aria-label="Permalink to &quot;5. 对象创建与访问指令&quot;">​</a></h5><h5 id="_6-操作数栈管理指令" tabindex="-1">6. 操作数栈管理指令 <a class="header-anchor" href="#_6-操作数栈管理指令" aria-label="Permalink to &quot;6. 操作数栈管理指令&quot;">​</a></h5><h5 id="_7-控制转移指令" tabindex="-1">7. 控制转移指令 <a class="header-anchor" href="#_7-控制转移指令" aria-label="Permalink to &quot;7. 控制转移指令&quot;">​</a></h5><h5 id="_8-方法调用和方法返回指令" tabindex="-1">8. 方法调用和方法返回指令 <a class="header-anchor" href="#_8-方法调用和方法返回指令" aria-label="Permalink to &quot;8. 方法调用和方法返回指令&quot;">​</a></h5><h5 id="_9-异常处理指令" tabindex="-1">9. 异常处理指令 <a class="header-anchor" href="#_9-异常处理指令" aria-label="Permalink to &quot;9. 异常处理指令&quot;">​</a></h5><h3 id="_7、类加载机制" tabindex="-1">7、类加载机制 <a class="header-anchor" href="#_7、类加载机制" aria-label="Permalink to &quot;7、类加载机制&quot;">​</a></h3><h4 id="_1-概述" tabindex="-1">1. 概述 <a class="header-anchor" href="#_1-概述" aria-label="Permalink to &quot;1. 概述&quot;">​</a></h4><p>借用书上的一句话，这一块内容主要讲的是class文件中的信息进入到虚拟机中发生什么变化。</p><h4 id="_2-类加载的时机" tabindex="-1">2. 类加载的时机 <a class="header-anchor" href="#_2-类加载的时机" aria-label="Permalink to &quot;2. 类加载的时机&quot;">​</a></h4><p>下图展示了类加载的7个阶段,其中验证、准备和解析统称为连接 <img src="https://raw.githubusercontent.com/aryangzhu/blogImage/master/blogImage/images%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%97%B6%E6%9C%BA20241023.png" alt="类加载时机"></p><h4 id="_3-类加载的过程" tabindex="-1">3. 类加载的过程 <a class="header-anchor" href="#_3-类加载的过程" aria-label="Permalink to &quot;3. 类加载的过程&quot;">​</a></h4><h5 id="_1-加载" tabindex="-1">1. 加载 <a class="header-anchor" href="#_1-加载" aria-label="Permalink to &quot;1. 加载&quot;">​</a></h5><h5 id="_2-验证" tabindex="-1">2. 验证 <a class="header-anchor" href="#_2-验证" aria-label="Permalink to &quot;2. 验证&quot;">​</a></h5><h5 id="_3-准备" tabindex="-1">3. 准备 <a class="header-anchor" href="#_3-准备" aria-label="Permalink to &quot;3. 准备&quot;">​</a></h5><h5 id="_4-解析" tabindex="-1">4. 解析 <a class="header-anchor" href="#_4-解析" aria-label="Permalink to &quot;4. 解析&quot;">​</a></h5><h5 id="_5-初始化" tabindex="-1">5. 初始化 <a class="header-anchor" href="#_5-初始化" aria-label="Permalink to &quot;5. 初始化&quot;">​</a></h5><h4 id="_4-类加载器" tabindex="-1">4. 类加载器 <a class="header-anchor" href="#_4-类加载器" aria-label="Permalink to &quot;4. 类加载器&quot;">​</a></h4><h4 id="_5-java模块化系统" tabindex="-1">5. Java模块化系统 <a class="header-anchor" href="#_5-java模块化系统" aria-label="Permalink to &quot;5. Java模块化系统&quot;">​</a></h4><p>写在最后 最近一直在准备面试,但是简历一直无人问津,索性先沉下心来学学JVM。我也不确定看这玩意儿对面试有没有帮助,说实话很怕花很多时间去研究但是没有收获期望的回报。 参考资料 周志明-《深入理解Java虚拟机》 <a href="https://zhuanlan.zhihu.com/p/98337005" target="_blank" rel="noreferrer">知乎文章</a> 怕什么真理无穷,进一步有进一步的欢喜</p>',55),l=[o];function i(n,d,s,c,_,u){return e(),r("div",null,l)}const m=a(t,[["render",i]]);export{q as __pageData,m as default};
