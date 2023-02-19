---
title: position 定位
author: codinglin
date: 2023-2-19
categories:
  - CSS
tags:
  - CSS
  - position
sticky: 7
---

### 一、static 定位

HTML元素的默认值，即没有定位，遵循正常的文档对象。
静态定位的元素不会受到top，bottom，left，right影响。
```css
div.static {
    position: static;
    border: 3px solid #73ad21;
}
```
### 二、fixed定位
元素的位置现相对于浏览器窗口是固定位置。
即使窗口是滚动的它也不会移动。
```css
p.fixed {
    position:fixed;
    top:30px;
    right:5px;
}
```
**注意：**fixed定位使元素的位置与文档流无关，因此不占据空间。
fixed定位元素和其他元素重叠。
### 三、relative 定位
相对定位元素的定位使相对其他正常位置。
移动相对定位元素，但它原本所占空间不会改变。
相对定位元素经常被用来作为绝对定位元素的容器块。
```css
h2.pos_left {
    position:relative;
    left:-20px;
}
h2.pos_right {
    position:relative;
    left:20px;
}
```
### 四、absolute 定位
绝对定位的元素位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于
```css
h2{
    position:absolute;
    left:100px;
    top:150px;
}
```
absolute 定位使元素的位置与文档流无关，因此不占据空间。
absolute 定位的元素和其他元素重叠。
### 五、sticky 定位
**position： sticky;**基于用户的滚动位置定位。
粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。
它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。
元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
```css
div.sticky {
    position: -webkit-sticky;     /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```
### 六、重叠的元素
元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）
一个元素可以有正数或负数的堆叠顺序：
```css
img {
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
```
