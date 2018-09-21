ES6
常量---作用域—箭头函数—默认参数---对象代理



前端开发所需掌握知识点概要：
HTML&CSS：
	对Web标准的理解（结构、表现、行为）、浏览器内核、渲染原理、依赖管理、兼容性、CSS语法、层次关系，常用属性、布局、选择器、权重、盒模型、Hack、CSS预处理器、
	CSS3、Flexbox、CSS Modules、Document flow、BFC、HTML5（离线 & 存储、Histoy,多媒体、WebGL\SVG\Canvas）；		
JavaScript：
    数据类型、运算、对象、Function、继承、闭包、作用域、事件、Prototype、RegExp、JSON、Ajax、DOM、BOM、
    内存泄漏、跨域、异步请求、模板引擎、模块化、Flux、同构、算法、ECMAScript6、Nodejs、HTTP、

其他：
    主流MVVM框架(React\Vue\Angular)、Hybrid App\React Native\Weex、TypeScript、RESTFul、WEB安全、前端工程化、依赖管理、性能优化、
    重构、团队协作、可维护、易用性、SEO、UED、前端技术选型、快速学习能力等；
作为一名前端工程师，无论工作年头长短都应该掌握的知识点：

	1、DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。

	2、DOM操作 ——如何添加、移除、移动、复制、创建和查找节点等。

	3、事件 —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别。

	4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误。

	5、严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义。

	6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型

	7、块级元素与行内元素 —— 怎么用CSS控制它们、以及如何合理的使用它们

	8、浮动元素 ——怎么使用它们、它们有什么问题以及怎么解决这些问题。

	9、HTML与XHTML ——二者有什么区别，你觉得应该使用哪一个并说出理由。

	10、JSON —— 作用、用途、设计结构。
Html
Hapertext markup language
超文本标记语言
<html lang=”en”>
<!—lang=”en”  告诉浏览器搜索引擎爬虫，网页是关于什么的内容-->
<head>
<meta charset=”utf-8”>
<title>网页标题</title>
</head>
<body>
	Life is shit! !!
</body>
</html>
空格：文字分隔符
Html编码符
&nbsp;空格
&lt; 小于
&gt; 大于
单标签
<meta>
换行符  <br/>
分割线   <hr/>

ol -----type=”1” 1/a/A/i/I   start=”1”   reserved=”reversed”
ul------type=”desc”   square/circle 
<img src=”” alt=”” title=””> 
Src: url:  1.

<a href=””></a>
ａｎｃｈｏｒ――锚
１.	超链接
２.	锚点
３.	打电话
４.	发邮件
５.	协议限定符　　　


浏览器组成：
（1）shell部分
（2）内核部分：渲染引擎（语法规则和渲染）---html css 绘制渲染
				Js引擎
				其他模块（异步等）
Js特点
1．	解释性语言
2．	单线程
3．	ESMASCRIPT  --ES
4．	BOM DOM  
Js 执行队列---单线程
Js 轮转时间片
Js 三大部分（esmascript bom dom）

IE              trident
Chrome         webkit/blink
Firefox          gecko
Opera           presto
Safari            webkit

变量，值类型，运算符
比较运算符，逻辑运算符，条件语句，循环语句

函数，小练习，作用域上。
函数
１.	定义
      函数声明
      函数表达式
２.	组成形式
	函数名称
	参数
			实参  arguments    [s.s.s]    
			形参   
	返回值
作用域精解
重复—>偶合======高内聚 ，低偶合
１.	写一个函数，功能是告知你所选定的小动物的叫声。
２.	写一个函数实现加法计
３.	定义一组函数，输入数字，逆转并输出汉字形式。
４.	写一个函数，实现n的阶乘。
５.	写一个函数，实现斐波那契数列。
６.	要求输入一串低于10位的 数字，输出这串数字的中文大写。
Eg:input 10000 output 壹万
Eg:input1001010 output 一百万壹仟零壹拾
递归 ，预编译
Js三部曲
１.	语法分析
２.	预编译
函数声明整体提升
变量 声明提升
预编译发生在函数执行的前一刻
（1）创建AO对象{
}（2）找形参和变量声明，值为undefined
（3）实参和形参统一
（4）函数声明，值为函数体。
３.	解释执行 
作用域精解
每个
AO  

立即执行函
--针对初始化功能的函数---执行完就被释放
执行期上下文
仿百度登陆
对象
创建对象：
（1）var 0bj={}   对象字面量、对象直接量
（2）构造函数：  系统自带构造函数  object()
					自定义构造函数  


构造函数原理:     必须有new object()
(1)	在函数体最前面隐式的添加  var this={}
(2)	执行this.xxx=xxx
(3)	隐式的返回this   return this；
包装类
原始值不能有属性和方法，进行包装后就有了
new  Number();
new  String()
new   Boolean();


