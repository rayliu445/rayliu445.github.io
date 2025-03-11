(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{347:function(t,a,s){"use strict";s.r(a);var n=s(25),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("写在前面，这个系列参考《java核心技术卷》，我之前学习的知识没有系统化，导致很多细节只知其然，而且很多技术对我来说难以上手，究其原因就是基础不牢(为什么之前不做笔记呢，我就是一铁憨憨)，所以这个也相当于补票。大多数内容其实就是书上的知识，不喜勿喷。")]),t._v(" "),a("h2",{attrs:{id:"一个简单的java应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的java应用程序"}},[t._v("#")]),t._v(" 一个简单的Java应用程序")]),t._v(" "),a("h2",{attrs:{id:"命令行运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行运行"}},[t._v("#")]),t._v(" 命令行运行")]),t._v(" "),a("p",[t._v("1.打开终端\n2.进入corejava/v1ch02/Welcome目录(也就是当前.java文件的根目录)\n3.shell脚本命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("javac Welcome.java\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" Welcome\n")])])]),a("p",[t._v("javac程序是一个Java编译器,它将文件Welcome.java编译成Welcome.class。java程序启动Java虚拟机，虚拟机执行编译器编译到类文件中的字节码。")]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("p",[t._v("就是用来说明我们这部分代码用来做什么，在复杂的系统中尤为重要")]),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("h3",{attrs:{id:"八个基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八个基本类型"}},[t._v("#")]),t._v(" 八个基本类型")]),t._v(" "),a("h4",{attrs:{id:"布尔类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔类型"}},[t._v("#")]),t._v(" 布尔类型")]),t._v(" "),a("p",[t._v("boolean/1")]),t._v(" "),a("h4",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),a("p",[t._v("byte/8\nshort/16\nint/32\nlong/64\nint最常用,如果想要表示较大的数字时应当使用long。byte和short类型主要应用于特定的场合,例如,底层的文件处理或者存储空间很宝贵时的大数组。\n在Java中,整形的范围与运行Java代码的机器无关。从而在各个平台之间能够完美移植。")]),t._v(" "),a("h4",{attrs:{id:"char类型和unicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#char类型和unicode"}},[t._v("#")]),t._v(" char类型和Unicode")]),t._v(" "),a("p",[t._v("char/16")]),t._v(" "),a("h5",{attrs:{id:"unicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[t._v("#")]),t._v(" Unicode")]),t._v(" "),a("p",[t._v("想要弄清楚char类型,就必须了解Unicode编码机制。Unicode打破了传统字符编码机制的限制。早在Unicode出现之前,就已经有许多中不同的标准:美国的ASCII、中国的GB18030等。这时出现了两个问题:\n1.对于任意给定的代码值,不同的编码方案对应不同的字母;\n2.采用大字符集的语言其编码长度有可能不同。例如,有些常用的字符采用单字节编码,而另一些需要两个或者多个字节。\n设计Unicode就是为了解决这些问题,刚开始进行统一工作时,人们认为两个字节的代码宽度足以应付所有字符。Java中设计时采用的16位字符集,那时其他大部分语言只有8位。")]),t._v(" "),a("p",[t._v("但是后来由于加入了大量的中文、日文和韩语中的表意文字。Unicode字符超过了65535的限制,16位的char类型已经不能满足所有Unicode字符的需要了。")]),t._v(" "),a("p",[t._v("java5中引入了"),a("strong",[t._v("码点")]),t._v("。码点(code point)是指与一个编码表中的"),a("strong",[t._v("某个字符对应的代码值")]),t._v("。在Unicode标准中,码点采用十六进制书写,并加上前缀U+,例如U+0041就是拉丁字母A的码点。Unicode的码点共分为17个"),a("strong",[t._v("代码平面")]),t._v(",第一个称为"),a("strong",[t._v("基本多语言平面")]),t._v(",从U+0000到U+FFFF的“经典”Unicode代码;其余的从U+1000到U+10FFFF,包括辅助字符。\nUTF-16编码采用不同长度的编码表示所有的Unicode码点。在基本多语言平面中,每个字符使用16位表示,通常称为"),a("strong",[t._v("code unit(代码单元)")]),t._v(",而辅助字符编码为一对连续的代码单元。采用这种编码对表示的各个值落入基本多语言平面中未用的2048个值范围内,通常称之为"),a("strong",[t._v("替代区域(surrogate area)")]),t._v("(如果一个代码单元超过了基本多语言的范围,那么就说明它是辅助字符的第一个代码单元),很容易区分一个代码单元是一个字符的编码还是辅助字符的第一部分或第二部分。\n书上的建议是不要在程序中使用char类型,我持怀疑态度。")]),t._v(" "),a("h4",{attrs:{id:"浮点类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点类型"}},[t._v("#")]),t._v(" 浮点类型")]),t._v(" "),a("p",[t._v("float/32\ndouble/64")]),t._v(" "),a("h4",{attrs:{id:"缓存池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存池"}},[t._v("#")]),t._v(" 缓存池")]),t._v(" "),a("p",[t._v("new Integer(123)新建一个对象。\nInteger.valueOf(123)会使用"),a("strong",[t._v("缓存池")]),t._v("中的对象,"),a("strong",[t._v("多次调用会取得同一个对象的引用")]),t._v("。Java8中缓存池的大小为-128~127。编译器会在"),a("strong",[t._v("缓冲池范围内的基本类型")]),t._v("自动装箱调用valueOf()方法，因此多个Integer实例使用自动装箱来创建并且值相同，那么就会引用相同的对象。")]),t._v(" "),a("h2",{attrs:{id:"变量与常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量与常量"}},[t._v("#")]),t._v(" 变量与常量")]),t._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("h3",{attrs:{id:"算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符"}},[t._v("#")]),t._v(" 算术运算符")]),t._v(" "),a("h3",{attrs:{id:"数学函数与常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学函数与常量"}},[t._v("#")]),t._v(" 数学函数与常量")]),t._v(" "),a("h3",{attrs:{id:"数值类型之间的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值类型之间的转换"}},[t._v("#")]),t._v(" 数值类型之间的转换")]),t._v(" "),a("h3",{attrs:{id:"强制类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制类型转换"}},[t._v("#")]),t._v(" 强制类型转换")]),t._v(" "),a("h3",{attrs:{id:"结合赋值和运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合赋值和运算符"}},[t._v("#")]),t._v(" 结合赋值和运算符")]),t._v(" "),a("h3",{attrs:{id:"自增与自减运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自增与自减运算符"}},[t._v("#")]),t._v(" 自增与自减运算符")]),t._v(" "),a("h3",{attrs:{id:"关系和boolean运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系和boolean运算符"}},[t._v("#")]),t._v(" 关系和boolean运算符")]),t._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" & | ^ ~")]),t._v(" "),a("p",[t._v("处理整型数据时,可以完成对组成整数的位的操作,这意味着可以使用掩码技术得到整数的各个位。\n& and | or ^ xor ~ not都是按位模式处理。书上的例子是把整数中不想要的位给他掩掉:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fourthBitFromRight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个是用来取得从右往左的第4位的1(很难想到会有这种场景),套路就是利用&并使用适当的2的幂。")]),t._v(" "),a("h4",{attrs:{id:"和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和"}},[t._v("#")]),t._v(" >>和<<")]),t._v(" "),a("p",[t._v(">>和<<可以将"),a("strong",[t._v("位模式(以某种选定的进制)"),a("strong",[t._v("左移或右移(从最右边的位开始算起),需要建立位模式来")]),t._v("完成位掩码")]),t._v("时,这两个运算符很方便。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fourthBitFromRight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("#####　>>>\n>>>运算符会用0填充高位,这与>>不同,他会用符号位来填充高位(0001和1001)。")]),t._v(" "),a("h3",{attrs:{id:"括号和运算符级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#括号和运算符级别"}},[t._v("#")]),t._v(" 括号和运算符级别")]),t._v(" "),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("p",[t._v("从改变上讲,Java字符串就是由"),a("strong",[t._v("Unicode字符序列")]),t._v('构成。例如,字符串"Java\\u2122"由5个Unicode字符J、a、v、a和tm构成。Java没有内置的'),a("strong",[t._v("字符串类型")]),t._v(",而是在标准Java类库中提供了一个预定义类,很自然地叫做String。每个用双引号括起来的字符串都是String类的一个实例:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子串"}},[t._v("#")]),t._v(" 子串")]),t._v(" "),a("p",[t._v("String类的subString方法可以从一个较大的字符串中提取出一个子串。例如:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("第二个参数是不想复制的第一个位置。")]),t._v(" "),a("h3",{attrs:{id:"拼接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拼接"}},[t._v("#")]),t._v(" 拼接")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" expletive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Expltive"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PG13")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deleted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expletive"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PG13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"不可变字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可变字符串"}},[t._v("#")]),t._v(" 不可变字符串")]),t._v(" "),a("p",[t._v("为什么叫做不可变字符串?\n因为不能修改字符串中的单个字符,例如不能将greeting的后两位字符修改为'p'和'!'。\n也就是说这个字符串永远包含这几个字符,所以你不能做修改,那么要怎么做修改呢？")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greetin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v('很明显,子串是一个新串子再与"p!"进行拼接。\n同时我们可以修改Sting类型变量的引用地址,将其指向新的地址。\nString被声明为'),a("strong",[t._v("final")]),t._v("，意味着不能够再被继承。同时内部声明为final，数组初始化之后就就不能引用其他数组(基本数据类型被final修饰之后只能进行一次赋值操作)。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("对于这里我们需要清楚的是String的地址@533，其中char [] value的地址为@535，执行完第二行代码之后value的地址为@537。\n"),a("strong",[t._v("不可变的好处")]),t._v("\n1.作为哈希值的存储容器非常便利(哈希值不变，只进行一次计算便可得到结果)\n2.String Pool的需要\n3.安全性得到保证，网络传输过程不会被修改\n4.不可变性天生具备线程安全的特点")]),t._v(" "),a("h3",{attrs:{id:"检测字符串是否相等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测字符串是否相等"}},[t._v("#")]),t._v(" 检测字符串是否相等")]),t._v(" "),a("p",[t._v("使用equals检测两个字符串是否相等。对于表达式:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("来看下面这个例子")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//probably true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//probably false；")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果虚拟机中始终将相同的字符串共享,就可以使用==运算符检测是否相等。但实际上只有"),a("strong",[t._v("字符串字面量")]),t._v("是共享的,而**+或subString()**等操作得到的字符串并不共享(也就是说会使用新的地址)。所以,千万不要使用==运算符测试字符串的相等性。")]),t._v(" "),a("h3",{attrs:{id:"空串与null串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空串与null串"}},[t._v("#")]),t._v(" 空串与Null串")]),t._v(" "),a("p",[t._v('String类型的变量可以是"",也可以是null,最常用的就是检测一个字符串时候为空')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h3",{attrs:{id:"码点与代码单元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#码点与代码单元"}},[t._v("#")]),t._v(" 码点与代码单元")]),t._v(" "),a("p",[t._v("码点就是编码表中对应的代码值,而码元就是代码单元也就是用UTF-16的编码表示一个Unicode的代码单元。")]),t._v(" "),a("p",[t._v("返回代码单元数量。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" greeting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我们知道Unicode编码中辅助字符是由两个代码单元组成的,所以当返回特殊字符时数量会多一个。")]),t._v(" "),a("p",[t._v("返回实际长度即码点数量")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cpCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("codePoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("返回码元")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("返回码点")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offsetByCodePoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"string-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-api"}},[t._v("#")]),t._v(" String API")]),t._v(" "),a("h4",{attrs:{id:"java-lang-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-lang-string"}},[t._v("#")]),t._v(" java.lang.String")]),t._v(" "),a("h5",{attrs:{id:"char-charat-int-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#char-charat-int-index"}},[t._v("#")]),t._v(" char charAt(int index)")]),t._v(" "),a("p",[t._v("返回给定位置的代码单元。除非对底层代码单元感兴趣,否则不需要调用这个方法。")]),t._v(" "),a("h5",{attrs:{id:"int-codepointat-int-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-codepointat-int-index"}},[t._v("#")]),t._v(" int codePointAt(int index)")]),t._v(" "),a("p",[t._v("返回从给定位置开始的码点。")]),t._v(" "),a("h5",{attrs:{id:"int-offset-int-startindex-int-cpcount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-offset-int-startindex-int-cpcount"}},[t._v("#")]),t._v(" int offset(int startIndex,int cpCount)")]),t._v(" "),a("p",[t._v("返回从startIndex码点开始,cpCount个码点后的码点索引。")]),t._v(" "),a("h5",{attrs:{id:"boolean-empty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-empty"}},[t._v("#")]),t._v(" boolean empty()")]),t._v(" "),a("h5",{attrs:{id:"boolean-equals-string-other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-equals-string-other"}},[t._v("#")]),t._v(" boolean equals(String other)")]),t._v(" "),a("h5",{attrs:{id:"int-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-length"}},[t._v("#")]),t._v(" int length()")]),t._v(" "),a("h5",{attrs:{id:"int-codepointcount-int-startindex-int-endindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-codepointcount-int-startindex-int-endindex"}},[t._v("#")]),t._v(" int codePointCount(int startIndex,int endIndex)")]),t._v(" "),a("p",[t._v("返回startIndex和endIndex-1之间的码点个数")]),t._v(" "),a("h5",{attrs:{id:"string-replace-charsequence-oldstring-charsequence-newstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-replace-charsequence-oldstring-charsequence-newstring"}},[t._v("#")]),t._v(" String replace(CharSequence oldString,CharSequence newString)")]),t._v(" "),a("p",[t._v("返回一个新字符串。这个字符串用newString代替原始字符串中所有的oldString。")]),t._v(" "),a("p",[t._v("String subString(int beginIndex)")]),t._v(" "),a("h5",{attrs:{id:"string-substring-int-beginindex-int-endindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-substring-int-beginindex-int-endindex"}},[t._v("#")]),t._v(" String subString(int beginIndex,int endIndex)")]),t._v(" "),a("p",[t._v("返回一个新字符串。")]),t._v(" "),a("p",[t._v("String toLowerCase()")]),t._v(" "),a("h5",{attrs:{id:"string-touppercase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-touppercase"}},[t._v("#")]),t._v(" String toUpperCase()")]),t._v(" "),a("p",[t._v("返回一个新字符串,将大小写进行转换。")]),t._v(" "),a("p",[t._v("String trim()")]),t._v(" "),a("p",[t._v("删除字符串开头和结尾的空格。")]),t._v(" "),a("h5",{attrs:{id:"string-join-charsequence-delimiter-charsequence-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-join-charsequence-delimiter-charsequence-elements"}},[t._v("#")]),t._v(" String join(CharSequence delimiter,CharSequence ...elements)")]),t._v(" "),a("p",[t._v("返回一个新的字符串,用给定的定界符连接所有元素。")]),t._v(" "),a("h3",{attrs:{id:"阅读文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阅读文档"}},[t._v("#")]),t._v(" 阅读文档")]),t._v(" "),a("h3",{attrs:{id:"构建字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建字符串"}},[t._v("#")]),t._v(" 构建字符串")]),t._v(" "),a("h2",{attrs:{id:"输入与输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入与输出"}},[t._v("#")]),t._v(" 输入与输出")]),t._v(" "),a("h3",{attrs:{id:"读取输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取输入"}},[t._v("#")]),t._v(" 读取输入")]),t._v(" "),a("p",[t._v("想要通过控制台输入,"),a("strong",[t._v('首先需要构造与"标准输入流"System.in相关联的Scanner对象')])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scanner")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("例如，读取一个整数")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"How old are you?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"常用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用api"}},[t._v("#")]),t._v(" 常用API")]),t._v(" "),a("h4",{attrs:{id:"java-util-scanner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-util-scanner"}},[t._v("#")]),t._v(" java.util.Scanner")]),t._v(" "),a("h5",{attrs:{id:"scanner-inputstream-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanner-inputstream-in"}},[t._v("#")]),t._v(" Scanner(InputStream in)")]),t._v(" "),a("p",[t._v("用给定的输入流创建一个对象")]),t._v(" "),a("h5",{attrs:{id:"int-nextint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-nextint"}},[t._v("#")]),t._v(" int nextInt();")]),t._v(" "),a("p",[t._v("读取输入一个整数")]),t._v(" "),a("h5",{attrs:{id:"string-nextline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-nextline"}},[t._v("#")]),t._v(" String nextLine();")]),t._v(" "),a("p",[t._v("读取输入的一行内容")]),t._v(" "),a("h5",{attrs:{id:"string-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-next"}},[t._v("#")]),t._v(" String next();")]),t._v(" "),a("p",[t._v("读取下一个单词(以空格为分割符)")]),t._v(" "),a("h5",{attrs:{id:"double-nextdouble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-nextdouble"}},[t._v("#")]),t._v(" double nextDouble()")]),t._v(" "),a("p",[t._v("整数或浮点数的字符序列")]),t._v(" "),a("h5",{attrs:{id:"boolean-hasnext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-hasnext"}},[t._v("#")]),t._v(" boolean hasNext()")]),t._v(" "),a("p",[t._v("检验输入中是否还有其他单词")]),t._v(" "),a("h5",{attrs:{id:"boolean-hasnextdouble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-hasnextdouble"}},[t._v("#")]),t._v(" boolean hasNextDouble()")]),t._v(" "),a("p",[t._v("检测是否还有下一个整数或者浮点数的字符序列")]),t._v(" "),a("h3",{attrs:{id:"格式化与输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化与输出"}},[t._v("#")]),t._v(" 格式化与输出")]),t._v(" "),a("p",[t._v("可以使用System.out.print(x),这条命令"),a("strong",[t._v("将以x的类型所允许的最大非0数位个数打印输出x")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello word"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Java5中沿用了C语言函数库中的printf方法。例如,调用")]),t._v(" "),a("p",[t._v('System.ou.printf("%8.2f",x);')]),t._v(" "),a("p",[t._v("会以一个"),a("strong",[t._v("字段宽度")]),t._v("打印x:包括8个字符,另外精度为小数点后2个字符。")]),t._v(" "),a("p",[t._v("每一个以%字符开始的格式说明符都用相应的参数替换。")]),t._v(" "),a("p",[t._v("用于printf的转换符")]),t._v(" "),a("p",[t._v("d")]),t._v(" "),a("p",[t._v("x")]),t._v(" "),a("p",[t._v("o")]),t._v(" "),a("p",[t._v("f")]),t._v(" "),a("p",[t._v("e")]),t._v(" "),a("p",[t._v("g")]),t._v(" "),a("p",[t._v("a")]),t._v(" "),a("p",[t._v("s")]),t._v(" "),a("p",[t._v("c")]),t._v(" "),a("p",[t._v("h")]),t._v(" "),a("p",[t._v("tx")]),t._v(" "),a("p",[t._v("b")]),t._v(" "),a("p",[t._v("%")]),t._v(" "),a("p",[t._v("n")]),t._v(" "),a("p",[t._v("另外,还可以指定控制格式化输出外观的各种标志。例如,逗号标志可以增加分组分隔符。例如,")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%,.2f"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("用于printf的标志")]),t._v(" "),a("p",[t._v("空格")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("p",[t._v("(")]),t._v(" "),a("p",[t._v(",")]),t._v(" "),a("p",[t._v("(对于f格式)")]),t._v(" "),a("p",[t._v("(对于x或o格式)")]),t._v(" "),a("p",[t._v("$")]),t._v(" "),a("p",[t._v("<")]),t._v(" "),a("p",[t._v("可以使用静态的String.format方法创建一个格式化的字符串,而不打印输出:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,%s. Next year,you‘ll be %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("我们来看一下printf中格式说明的语法图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/aryangzhu/picture/raw/master/java/%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E%E7%AC%A6%E8%AF%AD%E6%B3%95.jpg",alt:""}})]),t._v(" "),a("p",[t._v("argument index-参数索引(如果有的话后面就得加$)")]),t._v(" "),a("p",[t._v("flag-标志")]),t._v(" "),a("p",[t._v("width-宽度")]),t._v(" "),a("p",[t._v("precession-精确度")]),t._v(" "),a("p",[t._v("conversion character-转换符(如果没有和.组成的话那么就和t组成另一中形式)")]),t._v(" "),a("h3",{attrs:{id:"文件输入与输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件输入与输出"}},[t._v("#")]),t._v(" 文件输入与输出")]),t._v(" "),a("p",[t._v("想要读取一个文件,需要构造一个Scanner对象,如下所示:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scanner")]),t._v(" in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myfile.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF_8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("想要写入文件,就需要构造一个PrintWriter对象。在构造器(constructor)中,需要提供文件名和字符编码:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintWriter")]),t._v(" out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrintWriter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myfile.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF_8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"控制流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制流程"}},[t._v("#")]),t._v(" 控制流程")]),t._v(" "),a("h3",{attrs:{id:"块作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块作用域"}},[t._v("#")]),t._v(" 块作用域")]),t._v(" "),a("h3",{attrs:{id:"条件语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件语句"}},[t._v("#")]),t._v(" 条件语句")]),t._v(" "),a("h3",{attrs:{id:"循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),a("h3",{attrs:{id:"确定循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定循环"}},[t._v("#")]),t._v(" 确定循环")]),t._v(" "),a("h3",{attrs:{id:"多重选择-switch语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多重选择-switch语句"}},[t._v("#")]),t._v(" 多重选择:switch语句")]),t._v(" "),a("h3",{attrs:{id:"中断流程控制语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中断流程控制语句"}},[t._v("#")]),t._v(" 中断流程控制语句")]),t._v(" "),a("h2",{attrs:{id:"大数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数"}},[t._v("#")]),t._v(" 大数")]),t._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),a("h3",{attrs:{id:"声明数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明数组"}},[t._v("#")]),t._v(" 声明数组")]),t._v(" "),a("h3",{attrs:{id:"访问数组元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问数组元素"}},[t._v("#")]),t._v(" 访问数组元素")]),t._v(" "),a("h3",{attrs:{id:"for-each循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-each循环"}},[t._v("#")]),t._v(" for each循环")]),t._v(" "),a("h3",{attrs:{id:"数组拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组拷贝"}},[t._v("#")]),t._v(" 数组拷贝")]),t._v(" "),a("h3",{attrs:{id:"命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[t._v("#")]),t._v(" 命令行参数")]),t._v(" "),a("h3",{attrs:{id:"数组排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组排序"}},[t._v("#")]),t._v(" 数组排序")]),t._v(" "),a("h3",{attrs:{id:"多维数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多维数组"}},[t._v("#")]),t._v(" 多维数组")]),t._v(" "),a("h3",{attrs:{id:"不规则数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不规则数组"}},[t._v("#")]),t._v(" 不规则数组")])])}),[],!1,null,null,null);a.default=r.exports}}]);