---
title: grid 网格布局
author: yinuuu
date: 2023-2-19
categories:
  - CSS
tags:
  - CSS
  - grid
sticky: 5
---

## 1 网格布局

grid布局就是网格布局，CSS盒子一般分为块级，行内块，行内元素三种。将其他盒子转为网格布局使用display有两个选项：**grid**，**inline-grid**。

- display:grid; 是将盒子转为块级的网格布局；
- display:inline-grid; 是将盒子转为行内块的网格布局。
## 2 行与列
既然grid主要是处理二维的，那么二维是有许多行与列组成的

- grid-template-columns：定义列
- grid-template-rows：定义行

它们的样式属性都是一样的。可以使用具体的像素值px，可以使用百分比，还可以使用**fr**和**auto**。
fr单位的意思就是和flex布局中的flex-grow的放大因子计算方法类似，都是将剩余空间进行再分配。
auto的意思就是将剩余空间占满。
```css
#box {
    width: 600px;
    height: 600px;
    margin: 10px auto;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px 200px;
}
```
### 2.1 repeat
还可以在**grid-template-columns**和**grid-template-row**中使用repeat函数。
repeat函数的意思就是重复，它有两个参数：

- 第一个参数：重复的次数
- 第二个参数：如果是一个值，就是每次的宽度（高度）。如果是多个值，就是重复的几行或几列。
```css
#box {
    width: 600px;
    height: 600px;
    margin: 10px auto;
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(2,50px 200px);
    grid-template-rows: repeat(3,1fr);
}
```
grid-template-rows: repeat(3,1fr);表示一个3行，每一行为1fr。
grid-template-columns: repeat(2,50px 200px);中的repeat(2,50px 200px);表示重复2次，每一次就是宽为50px和宽为200px的2列。
所以最后就成了3行4列。
### 2.2 gap

- grid-column-gap：列与列之间的距离
- grid-row-gap：行与行之间的距离
```css
#box {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-row-gap:50px;
    grid-column-gap:50px;
}
```
### 2.3 grid-template-areas
通过引用grid-template-area属性指定的网格区域的名称来定义网络模板，重复的网格区域的名称会使内容扩展到这些单元格。（其实就是给每一个单元格一个名字）
```css
#box {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr ;
    grid-template-rows:  1fr 1fr 1fr;
    grid-template-areas: "a b c"
                         "d d d"
                         "e f f";
}
```
### 2.4 grid-line线
定义了行与列之后，网格盒子会自动给我们的每一行与每一列自动添加一条线。
也可以自己给每一条线重新命名。重新命名是在定义行与列的时候定义的。
```css
 #box {
    display: grid;
    grid-template-columns: [line1] 200px [line2] 200px [line3] 200px [line4];
    grid-template-rows: [first] 200px [second] 200px [third] 200px [last];
}
```
## 3 网格使用
### 3.1 默认填充
一般情况下，元素会默认的一行一行的进行填充，且默认填充一个网格。
```css
       #box {
            width: 600px;
            height: 600px;
            margin: 10px auto;
            border: 1px solid red;
            display: grid;
            grid-template-columns:  200px  200px  200px ;
            grid-template-rows: 200px  200px  200px ;
        }
        .item {
            background-color: red;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            box-sizing: border-box;
            padding: 20px;
            background-clip: content-box;
        }
```
### 3.2 使用grid-line填充
指定某个元素在网格中的位置，以及它占用的网格数量。
```css
        .item:nth-child(1) {
            grid-row-start: 1;
            grid-row-end: 4;
            grid-column-start: 1;
            grid-column-end: 2;
        }
        .item:nth-child(2) {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 2;
            grid-column-end: 4;
        }
        .item:nth-child(3) {
           grid-row: 2 / 4;
           grid-column: 2 /4 ;
        }
```
使用grid-row-start个grid-row-end来指定元素的位置与大小。
**grid-row和grid-column**是简写形式。

- grid-row：grid-row-start / grid-row-end;
- grid-column: grid-column-start / grid-column-end;
### 3.3 使用grid-area填充
```css
.item:nth-child(1) { 
  grid-area: d; 
}
```
### 3.4 justify-content与align-content
justify管主轴，align管副轴（和flex一样的）
移动整个网格，就要使用justify-content和align-content，它的属性值有6个：

- start：网格与网格容器的左边/顶部对齐（默认）
- end：网格与网格容器的右边/底部对齐
- center：网格与网格容器的中间对齐
- space-around：在 grid item 之间设置均等宽度/高度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半
- space-between：在 grid item 之间设置均等宽度/高度空白间隙，其外边缘无间隙
- space-evenly：每个 grid item 之间设置均等宽度/高度的空白间隙，包括外边缘

**place-content**属性 设置 align-content 和 justify-content 的简写，如果省略第二个值，则将第一个值同时分配给这两个属性
### 3.5 justify-items与align-items
操作网格里面的所有盒子的大小。（content是操作整个网络，item是操作网格里的子盒子）它的属性有四个：

- start：内容与网格区域的左端/顶端对齐（默认）
- end：内容内容与网格区域的右端/底部对齐
- center：内容位于网格区域的中间/垂直中心位置
- stretch：内容宽度/高度占据整个网格区域空间（当子盒子没有设置具体的宽高才起作用,且为默认）

**place-items**属性 设置 align-items和 justify-items的简写，如果省略第二个值，则将第一个值同时分配给这两个属性
### 3.6 justify-self与align-self
沿着行列轴对齐grid item里面的内容。此属性对单个网格项内的内容生效的。作用和justify-items与align-items一样，就是对象不一样。
justify-items与align-items是在网格容器盒子上面设置的，且对它的所有子盒子都有效；
justify-self与align-self是在网格容器里的子盒子上面设置的，且只对自己有效。
它的属性值和justify-items与align-items也是一样的，start、end、center、stretch。
**place-self**属性设置 align-self 和justify-self 的简写形式，如果省略第二个值，则将第一个值同时分配给这两个属性
