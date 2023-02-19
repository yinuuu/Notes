---
title: JavaScript DOM
author: yinuuu
date: 2023-2-19
categories:
  - JavaScript
tags:
  - DOM
  - JavaScript
sticky: 2
---

### 常用的DOM操作
getElementById // 按照 id 查询 
getElementsByTagName // 按照标签名查询
getElementsByClassName // 按照类名查询 
querySelectorAll // 按照 css 选择器查询
createElement // 创建新节点
innerHTML // 节点内容
appendChild // 添加新节点
removeChild // 删除节点
insertBefore（_,_） // 交换节点内容 
### 一、HTML DOM（文档对象模型）
#### 1、HTML DOM
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）
通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应
#### 2、查找 HTML 元素
```javascript
// 通过id 查找id="main"的元素，然后查找id="main"元素中所有<p>元素
var x=document.getElementById("main");
var y=x.getElementsByTagName("p");

// 通过类名找到HTML元素
var x=document.getElementsByClassName("intro");
```
### 二、改变HTML
```javascript
// 1. 改变HTML输出流
document.getElementById("p1").innerHTML="新文本!";

// 2. 改变HTML内容
document.getElementById(id).innerHTML=新的 HTML

// 3. 改变 HTML 属性
document.getElementById(id).attribute=新属性值

// 4.改变 HTML 样式
document.getElementById(id).style.property=新样式
```
### 三、DOM事件
#### 1、onload 和 onunload 事件
**onload** 和 **onunload** 事件会在用户进入或离开页面时被触发。
**onload** 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。
**onload** 和 **onunload** 事件可用于处理 **cookie**。
#### 2、onchange 事件
**onchange** 事件常结合对输入字段的验证来使用。
#### 3、onmouseover 和 onmouseout 事件
**onmouseover** 和 **onmouseout** 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。
#### 4、onmousedown、onmouseup 以及 onclick 事件
**onmousedown**, **onmouseup** 以及 **onclick** 构成了鼠标点击事件的所有部分。
首先当点击鼠标按钮时，会触发 **onmousedown** 事件；
当释放鼠标按钮时，会触发 **onmouseup** 事件；
最后，当完成鼠标点击时，会触发 **onclick** 事件。
#### 5、onfocus
获取输入焦点 
### 四、EventListener
#### 1、addEventListener() 方法
addEventListener() 方法用于向指定元素添加事件句柄。
addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。
语法：element.addEventListener(event, function, useCapture);
第一个参数是事件的类型 (如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
注意：不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。
```javascript
// 在用户点击按钮时触发监听事件：
document.getElementById("myBtn").addEventListener("click", displayDate);
```
#### 2、添加事件句柄
```javascript
// 向原元素添加事件句柄
element.addEventListener("click", function(){ alert("Hello World!"); });

// 向同一个元素中添加多个事件句柄
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);

// 向 Window 对象添加事件句柄
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = sometext;
});

// 传递参数
element.addEventListener("click", function(){ myFunction(p1, p2); });
```
#### 3、removeEventListener() 方法
removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:
```javascript
element.removeEventListener("mousemove", myFunction);
```
### 五、DOM元素（节点）
#### 1、创建新的 HTML 元素 (节点) - appendChild()
要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。
```javascript
// 1. 创建 <p> 元素:
var para = document.createElement("p");

// 2.为 <p> 元素创建一个新的文本节点：
var node = document.createTextNode("这是一个新的段落。");

// 3.将文本节点添加到 <p> 元素中:
para.appendChild(node);

// 1.查找已存在的元素
var element = document.getElementById("div1");

// 2.添加到已存在的元素中:
element.appendChild(para);
```
#### 2、创建新的 HTML 元素 (节点) - insertBefore()
**appendChild()** 方法，它用于添加新元素到尾部。
**insertBefore()** 方法，将新元素添加到开始位置。
#### 3、移除已存在的元素-removeChild()
要移除一个元素，你需要知道该元素的父元素。
```javascript
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
```
#### 4、替换 HTML 元素 - replaceChild()
 replaceChild() 方法来替换 HTML DOM 中的元素。
```javascript
<div id="div1">
	<p id="p1">这是一个段落。</p>
	<p id="p2">这是另外一个段落。</p>
</div>
 
<script>
	var para = document.createElement("p");
	var node = document.createTextNode("这是一个新的段落。");
	para.appendChild(node);
 
	var parent = document.getElementById("div1");
	var child = document.getElementById("p1");
	parent.replaceChild(para, child);
</script>
```
### 六、Collection与NodeList 
#### 1、HTMLCollection 对象
**getElementsByTagName()** 方法返回 HTMLCollection 对象。
HTMLCollection 对象类似包含 HTML 元素的一个数组。
#### 2、NodeList 
**getElementsByClassName()**）返回的是 NodeList 对象，而不是 HTMLCollection 对象。
所有浏览器的 **childNodes** 属性返回的是 NodeList 对象。
大部分浏览器的 **querySelectorAll()** 返回 NodeList 对象。
#### 3、Collection与NodeList 区别
HTMLCollection 是 HTML 元素的集合。
NodeList 是一个文档节点的集合。
NodeList 与 HTMLCollection 有很多类似的地方。
NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。
NodeList 与 HTMLCollection 都有 length 属性。
HTMLCollection 元素可以通过 name，id 或索引来获取。
NodeList 只能通过索引来获取。
只有 NodeList 对象有包含属性节点和文本节点。
#### 4、注意
**节点列表不是一个数组！**
节点列表看起来可能是一个数组，但其实不是。可以像数组一样，使用索引来获取元素。
节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。
