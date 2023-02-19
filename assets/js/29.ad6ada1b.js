(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{457:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"常用的dom操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的dom操作"}},[t._v("#")]),t._v(" 常用的DOM操作")]),t._v(" "),s("p",[t._v("getElementById // 按照 id 查询\ngetElementsByTagName // 按照标签名查询\ngetElementsByClassName // 按照类名查询\nquerySelectorAll // 按照 css 选择器查询\ncreateElement // 创建新节点\ninnerHTML // 节点内容\nappendChild // 添加新节点\nremoveChild // 删除节点\ninsertBefore（"),s("em",[t._v(",")]),t._v("） // 交换节点内容")]),t._v(" "),s("h3",{attrs:{id:"一、html-dom-文档对象模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、html-dom-文档对象模型"}},[t._v("#")]),t._v(" 一、HTML DOM（文档对象模型）")]),t._v(" "),s("h4",{attrs:{id:"_1、html-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、html-dom"}},[t._v("#")]),t._v(" 1、HTML DOM")]),t._v(" "),s("p",[t._v("当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）\n通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。")]),t._v(" "),s("ul",[s("li",[t._v("JavaScript 能够改变页面中的所有 HTML 元素")]),t._v(" "),s("li",[t._v("JavaScript 能够改变页面中的所有 HTML 属性")]),t._v(" "),s("li",[t._v("JavaScript 能够改变页面中的所有 CSS 样式")]),t._v(" "),s("li",[t._v("JavaScript 能够对页面中的所有事件做出反应")])]),t._v(" "),s("h4",{attrs:{id:"_2、查找-html-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查找-html-元素"}},[t._v("#")]),t._v(" 2、查找 HTML 元素")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 通过id 查找id="main"的元素，然后查找id="main"元素中所有<p>元素')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过类名找到HTML元素")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"intro"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"二、改变html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、改变html"}},[t._v("#")]),t._v(" 二、改变HTML")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 改变HTML输出流")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新文本!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 改变HTML内容")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("新的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 改变 HTML 属性")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attribute"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("新属性值\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.改变 HTML 样式")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("新样式\n")])])]),s("h3",{attrs:{id:"三、dom事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、dom事件"}},[t._v("#")]),t._v(" 三、DOM事件")]),t._v(" "),s("h4",{attrs:{id:"_1、onload-和-onunload-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、onload-和-onunload-事件"}},[t._v("#")]),t._v(" 1、onload 和 onunload 事件")]),t._v(" "),s("p",[s("strong",[t._v("onload")]),t._v(" 和 "),s("strong",[t._v("onunload")]),t._v(" 事件会在用户进入或离开页面时被触发。\n"),s("strong",[t._v("onload")]),t._v(" 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。\n"),s("strong",[t._v("onload")]),t._v(" 和 "),s("strong",[t._v("onunload")]),t._v(" 事件可用于处理 "),s("strong",[t._v("cookie")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"_2、onchange-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、onchange-事件"}},[t._v("#")]),t._v(" 2、onchange 事件")]),t._v(" "),s("p",[s("strong",[t._v("onchange")]),t._v(" 事件常结合对输入字段的验证来使用。")]),t._v(" "),s("h4",{attrs:{id:"_3、onmouseover-和-onmouseout-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、onmouseover-和-onmouseout-事件"}},[t._v("#")]),t._v(" 3、onmouseover 和 onmouseout 事件")]),t._v(" "),s("p",[s("strong",[t._v("onmouseover")]),t._v(" 和 "),s("strong",[t._v("onmouseout")]),t._v(" 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。")]),t._v(" "),s("h4",{attrs:{id:"_4、onmousedown、onmouseup-以及-onclick-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、onmousedown、onmouseup-以及-onclick-事件"}},[t._v("#")]),t._v(" 4、onmousedown、onmouseup 以及 onclick 事件")]),t._v(" "),s("p",[s("strong",[t._v("onmousedown")]),t._v(", "),s("strong",[t._v("onmouseup")]),t._v(" 以及 "),s("strong",[t._v("onclick")]),t._v(" 构成了鼠标点击事件的所有部分。\n首先当点击鼠标按钮时，会触发 "),s("strong",[t._v("onmousedown")]),t._v(" 事件；\n当释放鼠标按钮时，会触发 "),s("strong",[t._v("onmouseup")]),t._v(" 事件；\n最后，当完成鼠标点击时，会触发 "),s("strong",[t._v("onclick")]),t._v(" 事件。")]),t._v(" "),s("h4",{attrs:{id:"_5、onfocus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、onfocus"}},[t._v("#")]),t._v(" 5、onfocus")]),t._v(" "),s("p",[t._v("获取输入焦点")]),t._v(" "),s("h3",{attrs:{id:"四、eventlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、eventlistener"}},[t._v("#")]),t._v(" 四、EventListener")]),t._v(" "),s("h4",{attrs:{id:"_1、addeventlistener-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、addeventlistener-方法"}},[t._v("#")]),t._v(" 1、addEventListener() 方法")]),t._v(" "),s("p",[t._v('addEventListener() 方法用于向指定元素添加事件句柄。\naddEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。\n语法：element.addEventListener(event, function, useCapture);\n第一个参数是事件的类型 (如 "click" 或 "mousedown").\n第二个参数是事件触发后调用的函数。\n第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。\n注意：不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。')]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在用户点击按钮时触发监听事件：")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myBtn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" displayDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2、添加事件句柄"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加事件句柄"}},[t._v("#")]),t._v(" 2、添加事件句柄")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向原元素添加事件句柄")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向同一个元素中添加多个事件句柄")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mouseover"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mySecondFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mouseout"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myThirdFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向 Window 对象添加事件句柄")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sometext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递参数")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3、removeeventlistener-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、removeeventlistener-方法"}},[t._v("#")]),t._v(" 3、removeEventListener() 方法")]),t._v(" "),s("p",[t._v("removeEventListener() 方法移除由 addEventListener() 方法添加的事件句柄:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mousemove"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"五、dom元素-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、dom元素-节点"}},[t._v("#")]),t._v(" 五、DOM元素（节点）")]),t._v(" "),s("h4",{attrs:{id:"_1、创建新的-html-元素-节点-appendchild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建新的-html-元素-节点-appendchild"}},[t._v("#")]),t._v(" 1、创建新的 HTML 元素 (节点) - appendChild()")]),t._v(" "),s("p",[t._v("要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 创建 <p> 元素:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" para "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.为 <p> 元素创建一个新的文本节点：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是一个新的段落。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.将文本节点添加到 <p> 元素中:")]),t._v("\npara"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.查找已存在的元素")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.添加到已存在的元素中:")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("para"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2、创建新的-html-元素-节点-insertbefore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建新的-html-元素-节点-insertbefore"}},[t._v("#")]),t._v(" 2、创建新的 HTML 元素 (节点) - insertBefore()")]),t._v(" "),s("p",[s("strong",[t._v("appendChild()")]),t._v(" 方法，它用于添加新元素到尾部。\n"),s("strong",[t._v("insertBefore()")]),t._v(" 方法，将新元素添加到开始位置。")]),t._v(" "),s("h4",{attrs:{id:"_3、移除已存在的元素-removechild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、移除已存在的元素-removechild"}},[t._v("#")]),t._v(" 3、移除已存在的元素-removeChild()")]),t._v(" "),s("p",[t._v("要移除一个元素，你需要知道该元素的父元素。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" child "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_4、替换-html-元素-replacechild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、替换-html-元素-replacechild"}},[t._v("#")]),t._v(" 4、替换 HTML 元素 - replaceChild()")]),t._v(" "),s("p",[t._v("replaceChild() 方法来替换 HTML DOM 中的元素。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是一个段落。"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("这是另外一个段落。"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" para "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是一个新的段落。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tpara"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" child "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("para"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"六、collection与nodelist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、collection与nodelist"}},[t._v("#")]),t._v(" 六、Collection与NodeList")]),t._v(" "),s("h4",{attrs:{id:"_1、htmlcollection-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、htmlcollection-对象"}},[t._v("#")]),t._v(" 1、HTMLCollection 对象")]),t._v(" "),s("p",[s("strong",[t._v("getElementsByTagName()")]),t._v(" 方法返回 HTMLCollection 对象。\nHTMLCollection 对象类似包含 HTML 元素的一个数组。")]),t._v(" "),s("h4",{attrs:{id:"_2、nodelist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、nodelist"}},[t._v("#")]),t._v(" 2、NodeList")]),t._v(" "),s("p",[s("strong",[t._v("getElementsByClassName()")]),t._v("）返回的是 NodeList 对象，而不是 HTMLCollection 对象。\n所有浏览器的 "),s("strong",[t._v("childNodes")]),t._v(" 属性返回的是 NodeList 对象。\n大部分浏览器的 "),s("strong",[t._v("querySelectorAll()")]),t._v(" 返回 NodeList 对象。")]),t._v(" "),s("h4",{attrs:{id:"_3、collection与nodelist-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、collection与nodelist-区别"}},[t._v("#")]),t._v(" 3、Collection与NodeList 区别")]),t._v(" "),s("p",[t._v("HTMLCollection 是 HTML 元素的集合。\nNodeList 是一个文档节点的集合。\nNodeList 与 HTMLCollection 有很多类似的地方。\nNodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。\nNodeList 与 HTMLCollection 都有 length 属性。\nHTMLCollection 元素可以通过 name，id 或索引来获取。\nNodeList 只能通过索引来获取。\n只有 NodeList 对象有包含属性节点和文本节点。")]),t._v(" "),s("h4",{attrs:{id:"_4、注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、注意"}},[t._v("#")]),t._v(" 4、注意")]),t._v(" "),s("p",[s("strong",[t._v("节点列表不是一个数组！")]),t._v("\n节点列表看起来可能是一个数组，但其实不是。可以像数组一样，使用索引来获取元素。\n节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。")])])}),[],!1,null,null,null);s.default=e.exports}}]);