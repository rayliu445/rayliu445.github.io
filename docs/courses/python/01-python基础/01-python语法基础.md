# Python3学习笔记

## 简介

## 历史发展

## 安装和环境配置

## 第一个Python程序

## 语法基础

### 数据类型和变量

#### 1.整数

正常数值不多做赘述，这里提一下'0xa5b4c3d2'这种16进制的数，知道就可以

#### 2.浮点数

大一点的浮点数，1.23x10^9就是 `1.23e9`

#### 3. 布尔值

True和False

逻辑运算和算术运算

```python
if age >= 18:
    print('adult')
else:
    print('teenager')

```

and or not

#### 4.字符串

用单引号'或者双引号"括起来的任意文本

注：

1.转义字符

和java语言一样，python中也有要转义的字符\\,比如

```python
'I\'m \"OK\"!'
```

再复习一下各种转义吧，和Java有很多相同的

\\n表示换行，\t表示制表符，字符\\表示本身要转义，所以用

```python
\\
```

表示的字符就是\\

2.行内字符串

'''...'''

##### 编码

###### 1.ascii编码

最早出现的编码，但是只有英文

###### 2.unicode

上面的ascii没有其他语言的编码，unicode编码就是将所有语言都统一编码到一套编码表里。

ascii通常是一个字节(8位)，unicode通常是两个字节(16位)

计算机内存中使用的是unicode编码，当我们从计算机硬盘或者读取的是编码就是unicode，如果我们指定了别的编码和解码方式，那么就要将内存中的字符转换为指定的，例如utf-8编码

###### 3.utf-8

汉字 `中`已经超出了ASCII编码的范围，用Unicode编码是十进制的 `20013`，二进制的 `0100111000101101`。来看下另一个例子，'A'在ASCII编码中的二进制编码是01000001，但是为了在unicode中和其他编码的位制保持一致，所以就用来0来补位，补位后的进制是00000000 01000001，问题就又来了，很明显明明ASCII编码就已经能够表示A了，补位后会造成空间浪费，所以就有了可变长的utf8编码。UTF-8编码把一个Unicode字符根据不同的数字大小编码成1-6个字节

ASCII(古早)->Unicode(统一多语言)->UTF-8(英文字符节省空间)

注：python3之后字符串是以Unicode编码的，也就是说Python字符串支持多语言(Java也是)

x = b'ABC'

##### 常用API

1.ord('A')获取字符的整数表示

2.chr('中')把编码转换为对应的字符

3.len

##### 格式化

python中的格式化和C语言是一致的，用%实现

```java
占位符｜替换内容
%d    整数
%f    浮点数
%s    字符串
%x    十六进制整数
```

```python
print('%2d-%02d' % (3, 1))
print('%.2f' % 3.1415926)
```

注：%%代表转义后的%

##### format()和f-string

通过format也可以格式化

```python
'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)

```

这里的{1:.1f}%代表第1个占位符，浮点数保留1位小数

```python
print(f'The area of a circle with radius {r} is {s:.2f}')
```

这里的r和s都是需要自己定义的

#### 5.变量

##### 动态语言与静态语言

```python
a = 123 # a是整数
print(a)
a = 'ABC' # a变为字符串
print(a)
```

上面的a变量可以赋值多种数据类型，本身类型不固定的语言称之为动态语言，静态语言则相反，比如java

```java
int a=123;
a="ABC";//错误：不能把字符串赋给整型变量
```

#### 常量

python没有任何机制来保证常量

#### 动态语言与静态语言

上面变量有提到过

### list和tuple

#### list

list和其他语言大差不差

xxx=['a'.,'b',123]，其中元素的类型可以不一致

#### tuple

一种有序列表叫做元组，和list的区别是一旦初始化就不能修改，比如下面的例子

```java
classmates = ('Michael', 'Bob', 'Tracy')
```

这个tuple不能变了，它也没有append()，insert()这样的方法

### dict和set

#### dict

```python
d={'Michael':95,'Bob':75,'Tracy':85}
d['Michael']
```

判断key是否存在 xxx in d->True|False，like Java中的containsKey

key不存在指定默认值 d.get('xxx',-1)，like Java中的getOrDefault(xxx,-1)

##### 浅谈python中的可变与不可变

字符串、整数等都是不可变的，其实就是key的内存地址地址在变量重新赋值之后会发生改变，原来内存中的变量不会发生改变，不变的key才能保证hash(key)的结果每次都是一致的，不然dict内部就会发生混乱。

#### set

tuple用()，而set用{}

```
s={1,1,2,2,3,3}
```

如果输出之后那么就会变成{1,2,3}，去重了重复元素

### 条件分支& 循环&模式匹配

##### 条件分支

常见使用方式

if xxx:do sth else: do sth

if xxx: do sth elif xxx: do sth

#### 循环

for x in xxx

这里的xxx是一个Itreator的对象，和Iterable有区别，等到迭代器的时候再展开讲讲

while xxx:

    do sth

#### 模式匹配

match xxx case 'A':do sth case 'B':do sth

这块儿复杂匹配有点麻烦，等到用的时候可以再细看

## 函数

### 调用函数

#### 常见数据类型转换

```python
int('123')
int(12.34)
float('12.34')
str(1.23)
str(100)
bool(1)
bool('')

```

### 定义函数

#### 普通函数

```python
def my_abs(x):
    if x>=0:
        return x
    else:
        return -x

```

#### 空函数

```python
def pop():
    pass
```

#### 参数检查

调用函数时，如果参数个数不对，Python解释器会自动检查出来，并抛出TypeError，就像下面这样

```
>>> my_abs(1, 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: my_abs() takes 1 positional argument but 2 were given

```

这里廖老师的例子还是蛮有趣的，分别调用abs('A')自己和内置实现的abs，观察抛出的错误有何差别，**注意:参数个数不同的话那么解释器会检查出来，但是参数类型不对就要我们自己来做检查了**

#### 返回多个值

```python
def my_method(x,y,step,angle=0)
    return x,y
```

### 函数的参数

#### 位置参数

```python
def power(x,n):
    s=1
    while n>0:
        n=n-1
        s=s*x
    return s
```

#### 默认参数

```python
def power(x,n=2):
    s=1
    while n>0:
        n=n-1
        s=s*x
    return s
```

这里在方法中加入了n=2就是默认参数

```python
def enroll(name,gender,age=6,city='Beijing'):
    pass
```

注:参数中有多个参数时，既可以按照顺序提供默认参数(就像这样调用enroll('Bob','M',7))，也可以不按照顺序提供部分默认参数(enroll('Adam','M',city='Tianjin'))，当不按顺序提供部分默认参数时，需要把参数名写上。

**注:默认参数必须要指向不可变对象**

#### 可变参数

在参数前面可以加一个*号，为什么需要可变参数，有时候我们传入的参数的个数是不一定的，所以就有了这个特性。

```python
def calc(*numbers):
    sum=0
    for n in numbers:
        sum=sum+n*n
    return sum
```

将传入的参数转变为了tuple

#### 关键字参数

关键字参数允许你传入0个或任意个含有参数名的参数，这些关键字参数在函数内部自动组装为一个dict。

```python
def person(name,age,**kw):
    print('name:',name,'age:',age,'other:',kw)
```

```python
extra={'city':'Beijing','job':'Engineer'}
person('Jack',24,**extra)
```

\*\*extra表示把这个dict的所有key-value用关键字参数传入到函数的\*\*kw参数，注意这里获得的是dict是extra的一份拷贝，对kw的改动不会影响到函数外的extra。

#### 命名关键字参数

就是在关键字参数中指定参数的名称，*之后的参数调用的时候必须要参数名称

```python
def person(name, age, *, city, job):
    print(name, age, city, job)
```

调用方式

```python
person('zhangsan',17,city='beijing',job='soft engineer')
```

命名关键字参数可以有缺省值，从而简化调用:

```python
def person(name,age,*,city='Beijing',job):
    print(name,age,city,job)
```

#### 参数组合

上面的5种类型的参数可以组合使用，但是**参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字和关键字参数**

### 函数递归

和其他语言一样，就是在内部调用自身本身。

## 高级特性

### 切片

```python
L=['Michcel','Sarah','Tracy','Bob']
```

1.从头取值L[0:3]，从头开始取的话也可以L[:3]

2.倒数取数L[-1],取倒数第一个元素，同理L[-2]取倒数第二个元素，L[-2:]倒数第二个开始到最后一个

3.步长L[:10:2]从头开始前10个数，每两个取一个数

4.复制操作L[:]就是复制出来一个list

5.tuple和string类型也可以使用切片(0,1,2,3,4,5)[:3]和'ABCDEFG'[::2]

### 迭代

#### 可迭代对象

判断一个对象是可迭代对象

```python
from collections.abc import Iterable
isInstance('abc',Iterable)
```

list、string和dict这些都是可迭代对象，字符串也是

for xxx in xxx :print(xxx)

上面的for循环语法，只要是可迭代对象，for循环就可以正常运行

```python
for i,value in enumerate(['A','B','C']):
    print(i,value)
```

### 列表生成式

顾名思义就是生成一个列表，当然暴力写法可以，这里探讨的是python内置的一个功能

```python
x*x for x in range(1,11)
```

x*x就是最终以什么表达式处理x然后输出

range(1,11)就是我们圈定的范围

```python
>>> [x * x for x in range(1, 11) if x % 2 == 0]
[4, 16, 36, 64, 100]

```

后面这个只能是筛选的功能(你想有了一个条件才能筛选一部分出来，if else如果包含全部的集合那么就不能筛选)，并不能将当前x做转换，如果要做转换的话那么就需要将表达式前置

```python
[x if x%2 ==0 else -x for x in range(1,11)]
```

列表生成式也可以使用两个变量来生成list:

```python
d={'x':'A','y':'B','z':'C'}
[k + '=' + v for k, v in d.items()]
```

### 生成器

用的时候才生成，这样就可以减少内存的压力，这就是生成器的本质

简单的用法，生成时用()括起来

```python
g=(x*x for x in range(10))
next(g)
```

#### yield关键字

fib函数的使用

```python
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        print(b)
        a, b = b, a + b
        n = n + 1
    return 'done'

```

```python
def fib(max):
    n,a,b=0,0,1
    while n<max:
        yield b
        a,b=b,a+b
        n=n+1
    return 'done'
```

如果一个函数包含了yield关键字，那么这个函数就不再是一个普通函数，而是一个generator函数，调用之后会返回一个generator

**注：包含yield关键字之后调用之后，如果遇到yield关键字那么就会返回，再次执行时就会从上次返回的yield关键字处继续执行，yield并无特殊语义，它作为一个标志点生效**

### 迭代器

for循环的数据类型有以下几种：

一种是集合数据类型，还有一种是generator，包括生成器和带yield的generator function。这些可以直接作用于for循环的对象统称为**可迭代对象**：Iterable。

**迭代器对象Iterator**：**可以被next()函数调用并不断返回下一个值的对象称为迭代器**

生成器都是Iterator对象，但是list、dict、str虽然是Iterable，却不是Iterator。

## 函数式编程

### 高阶函数

#### map/reduce

map()接收两个参数，一个是函数，一个是Iterable,map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回。

#### filter

filter()函数也接收一个函数和一个序列，不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃元素。


### 返回函数

### 匿名函数

### 装饰器

### 偏函数
