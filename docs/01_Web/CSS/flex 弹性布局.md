---
title: flex 弹性布局
author: codinglin
date: 2023-2-19
categories:
  - CSS
tags:
  - CSS
  - flex
sticky: 4
---

### 1 布局方式

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

- display: flex; 将对象作为弹性伸缩盒展示，用于块级元素；
- display: inline-flex; 将对象作为弹性伸缩盒展示，用于行内元素。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672839660213-2ddbc785-1d19-42a6-85d8-9fb5c8444ce7.png#averageHue=%23f3e5c2&clientId=u3088e60a-b3f0-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ucabd4ead&margin=%5Bobject%20Object%5D&name=image.png&originHeight=333&originWidth=563&originalType=url&ratio=1&rotation=0&showTitle=false&size=30867&status=done&style=none&taskId=uf0032db2-722d-436c-bebc-650cab79aaa&title=)
### 2 容器属性
#### 2.1 flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向）
```css
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

- row：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴在垂直方向，起点在上沿。
- column-reverse：主轴在垂直方向，起点在下沿。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878476299-7cda7641-15f8-4247-9680-eac8c29938a5.png#averageHue=%23f9eadb&clientId=ufb99905c-4b59-4&crop=0&crop=0&crop=1&crop=1&id=qGmta&name=image.png&originHeight=397&originWidth=1515&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34750&status=done&style=none&taskId=ue6a03a91-07ea-4c08-bcdb-8d44f26a065&title=)
#### 2.2 flex-wrap属性
弹性元素永远沿主轴排列，那么如果主轴排不下，通过`flex-wrap`决定容器内项目是否可换行。
默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩。
```css
.box {
    flex: nowrap | wrap | wrap-reverse;
}
```

- nowrap：不换行（默认）。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。
#### 2.3 flex-flow属性
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```
#### 2.4 justify-content属性
justify-content属性定义了项目在主轴上的对齐方式。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start：左对齐（默认）。
- flex-end：右对齐。
- center：居中。
- space-between：两端对齐，项目之间的间隔都相等
- space-around： 每个项目两侧的间隔相等。所以，项目之间的间隔比项目边距的间隔大一倍。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878634036-a67400ff-1400-4aac-80a0-319f9fa8a7e8.png#averageHue=%23c79ab0&clientId=uaa063611-f242-4&crop=0&crop=0&crop=1&crop=1&id=di01B&name=image.png&originHeight=720&originWidth=603&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47839&status=done&style=none&taskId=ua27aef58-b11c-4cfa-a8d6-0d636c3f894&title=)
#### 2.5 align-items属性
align-items属性定义项目在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
#### 2.6 align-content属性
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878661916-4e943fba-3e2e-4ac9-afc5-ea0238de3555.png#averageHue=%23c58f8d&clientId=uaad01305-6c03-4&crop=0&crop=0&crop=1&crop=1&id=NtPOf&name=image.png&originHeight=748&originWidth=591&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61930&status=done&style=none&taskId=ud1903ebd-81aa-4220-ab17-26d4db78a39&title=)
### 3 项目属性
#### 3.1 order属性
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item {
  order: <integer>;
}
```
#### 3.2 flex-grow属性
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
#### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878721865-1481e371-470e-4450-b9bf-89f693035dbc.png#averageHue=%23f5caad&clientId=ue75c2a5e-6525-4&crop=0&crop=0&crop=1&crop=1&id=hvB7w&name=image.png&originHeight=175&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49908&status=done&style=none&taskId=ucfaebc4d-d36a-4ebf-a9e7-443744449ef&title=)
#### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878750082-9e356dcf-cb8c-4ed7-b1a2-6db33ebbae0b.png#averageHue=%23f5c9ab&clientId=uae8d21d5-6dd2-4&crop=0&crop=0&crop=1&crop=1&id=Be0jE&name=image.png&originHeight=164&originWidth=809&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50177&status=done&style=none&taskId=ud0ca60f3-75e5-43f6-a64a-023535eebb9&title=)
弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论`flex-grow`是什么值都不会生效
#### 3.3 flex-shrink属性
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
#### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878807524-bd333b7a-c142-4dd2-b1a3-8cbb1ddb296c.png#averageHue=%23f6cfb4&clientId=ude6c86fc-b93f-4&crop=0&crop=0&crop=1&crop=1&id=XDFUm&name=image.png&originHeight=177&originWidth=793&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84425&status=done&style=none&taskId=u2700db3a-5bed-44e6-8bb2-2f495ac370f&title=)
如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小
如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小
在容器宽度有剩余时，`flex-shrink`也是不会生效的
#### 3.4 flex-basis属性
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
#### 3.5 flex属性
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
#### 3.6 align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34857722/1672878876731-1575fe72-a772-45b8-8b6c-a9a120847ba9.png#averageHue=%23e1e0cd&clientId=ubfab8511-9218-4&crop=0&crop=0&crop=1&crop=1&id=A1VgV&name=image.png&originHeight=371&originWidth=701&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27714&status=done&style=none&taskId=u30e0099c-8250-40a0-a315-bd92d18915b&title=)
### 4 应用场景
在以前的文章中，我们能够通过`flex`简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过`flex`完成，这里就不再展开代码的演示。
包括现在在移动端、小程序这边的开发，都建议使用`flex`进行布局。
