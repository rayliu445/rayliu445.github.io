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

```
d={'Michael':95,'Bob':75,'Tracy':85}
d['Michael']
```

判断key是否存在 xxx in d->True|False，like Java中的containsKey

key不存在指定默认值 d.get('xxx',-1)，like Java中的getOrDefault(xxx,-1)

##### 浅谈python中的可变与不可变

字符串、整数等都是不可变的，其实就是key的内存地址地址在变量重新赋值之后会发生改变，原来内存中的变量不会发生改变，不变的key才能保证hash(key)的结果每次都是一致的，不然dict内部就会发生混乱。

#### set

tuple用()，而set用{}

### 条件分支& 循环&模式匹配

##### 条件分支

if...elif..

#### 循环

for x in xxx

while ...

#### 模式匹配

match xxx case 'A':....
