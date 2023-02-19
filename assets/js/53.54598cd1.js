(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{484:function(t,l,v){"use strict";v.r(l);var e=v(2),_=Object(e.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"regexp-类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#regexp-类型"}},[t._v("#")]),t._v(" RegExp 类型")]),t._v(" "),l("p",[t._v("主要是以下几个方面")]),t._v(" "),l("ul",[l("li",[t._v("创建")]),t._v(" "),l("li",[t._v("元字符")]),t._v(" "),l("li",[t._v("修饰符")]),t._v(" "),l("li",[t._v("属性")]),t._v(" "),l("li",[t._v("方法")])]),t._v(" "),l("h1",{attrs:{id:"创建"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),l("p",[t._v("有两种方法，字面量和构造函数模式")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("字面量")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[t._v('  var reg=/\\d+/g;\n  console.log(reg.test("789456"));//true\n')])])])]),t._v(" "),l("li",[l("p",[t._v("构造函数")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[t._v('  var reg2=new RegExp("\\\\d+","g");\n  console.log(reg2.test("1234444456"));//true\n  console.log(reg2.test("asdsa"));//false\n')])])])])]),t._v(" "),l("h1",{attrs:{id:"元字符"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),l("ul",[l("li",[t._v("单个字符数字\n"),l("ul",[l("li",[t._v(". 匹配除换行符以外的任意字符")]),t._v(" "),l("li",[t._v("[a-zA-Z0-p] 与 [^a-zA-Z0-p] 匹配方括号中的任意字符，前面代^是匹配不在方括号中的任意字符；")]),t._v(" "),l("li",[t._v("\\d 与 \\D\t匹配数字和匹配非数字；")]),t._v(" "),l("li",[t._v("\\w 与 \\W\t匹配字符和匹配非字母")])])]),t._v(" "),l("li",[t._v("空白字符\n"),l("ul",[l("li",[t._v("\\O\t\t匹配null字符")]),t._v(" "),l("li",[t._v("\\b\t\t匹配空格字符")]),t._v(" "),l("li",[t._v("\\f\t\t匹配换页符")]),t._v(" "),l("li",[t._v("\\n\t\t匹配换行符")]),t._v(" "),l("li",[t._v("\\r\t\t匹配回车符")]),t._v(" "),l("li",[t._v("\\s 和 \\S\t\t匹配空白字符，空格、制表符或换行符。大写的S是匹配非空字符")]),t._v(" "),l("li",[t._v("\\t\t\t匹配制表符")])])]),t._v(" "),l("li",[t._v("定位符\n"),l("ul",[l("li",[t._v("^\t\t行首匹配")]),t._v(" "),l("li",[t._v("$\t\t行尾匹配")]),t._v(" "),l("li",[t._v("\\A\t\t只匹配字符串的开始处")]),t._v(" "),l("li",[t._v("\\b \\B\t匹配单词便捷，词在[]内无效，匹配非单词边界")]),t._v(" "),l("li",[t._v("G\t\t匹配当前搜索的开始位置")]),t._v(" "),l("li",[t._v("\\Z \\z\t匹配字符串结束处或行尾，只匹配字符串结束处")])])]),t._v(" "),l("li",[t._v("限定符\n"),l("ul",[l("li",[t._v("x?\t\t匹配0个或一个x")]),t._v(" "),l("li",[t._v("x*\t\t匹配0个或者任意多个x")]),t._v(" "),l("li",[t._v("x+\t\t匹配一个或者多个")]),t._v(" "),l("li",[t._v("x{m,n}\t匹配m-n个x；")])])]),t._v(" "),l("li",[t._v("分组\n"),l("ul",[l("li",[t._v("(?:x)\t\t匹配x但不记录匹配结果（匹配不捕获）")]),t._v(" "),l("li",[t._v("x(?=y)\t\t当x后面接y时匹配x")]),t._v(" "),l("li",[t._v("x(?!y)\t\t当x后不是y时匹配x")])])]),t._v(" "),l("li",[t._v("引用\n"),l("ul",[l("li",[t._v("\\1...\\9\t$1...$9\t\t返回就割在模式匹配期间找到的，最近保存的部分")])])]),t._v(" "),l("li",[t._v("或模式\n"),l("ul",[l("li",[t._v("x|y|z\t\t匹配x或者y或者z")])])])]),t._v(" "),l("h1",{attrs:{id:"修饰符"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),l("p",[t._v("可以记img，这样方便记住；")]),t._v(" "),l("ul",[l("li",[t._v("i \t\t忽略大小写模式")]),t._v(" "),l("li",[t._v("m\t\t多行匹配")]),t._v(" "),l("li",[t._v("g\t\t全局模式")])]),t._v(" "),l("h1",{attrs:{id:"属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),l("ul",[l("li",[t._v("实例属性\n"),l("ul",[l("li",[t._v("global\t\t\t布尔值，检测是走设置g标记")]),t._v(" "),l("li",[t._v("ignoreCase\t\t布尔值，检测是否设置i标记")]),t._v(" "),l("li",[t._v("nultiline\t\t布尔值，检测是否设置了m标记")]),t._v(" "),l("li",[t._v("lastIndex\t\t整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。")]),t._v(" "),l("li",[t._v("source\t\t\t返回正则表达式的字符串表示,按照字面量形式而非传入构造函数中的字符串模式返回。")])])])]),t._v(" "),l("p",[t._v("通过这些属性可以获知一个正则表达式的各方面信息，但却没有多大用处，因为这些信息全都包含在模式声明中")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",[t._v('var pattern1 = /\\[bc\\]at/i;\nconsole.log(pattern1.global); //false\nconsole.log(pattern1.ignoreCase); //true\nconsole.log(pattern1.multiline); //false\nconsole.log(pattern1.lastIndex); //0\nconsole.log(pattern1.source); //"\\[bc\\]at"\nvar pattern2 = new RegExp("\\\\[bc\\\\]at", "i");\nconsole.log(pattern2.global); //false\nconsole.log(pattern2.ignoreCase); //true\nconsole.log(pattern2.multiline); //false\nconsole.log(pattern2.lastIndex); //0\nconsole.log(pattern2.source); //"\\[bc\\]at"\n')])])]),l("p",[t._v("尽管第一个模式使用的是字面量，第二个模式使用了 RegExp 构造函数，但它们的source 属性是相同的。可见， source 属性保存的是规范形式的字符串，即字面量形式所用的字符串。")]),t._v(" "),l("ul",[l("li",[t._v("构造函数属性\n"),l("ul",[l("li",[t._v("$_\t\tinput\t返回最近一次匹配的字符串")]),t._v(" "),l("li",[t._v("$&\t\tlastMatch\t返回最近一次的匹配项")]),t._v(" "),l("li",[t._v("$+\t\tlastParen\t返回最近一次匹配的捕获组")]),t._v(" "),l("li",[t._v("$`\t\tleftContext\t返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符")]),t._v(" "),l("li",[t._v("$'\t\trightContext\t返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符")]),t._v(" "),l("li",[t._v("$*\t\tmultiline\t\t检测表达式是否采用多行匹配m")])])])]),t._v(" "),l("h1",{attrs:{id:"方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("实例方法")]),t._v(" "),l("ul",[l("li",[t._v("test\t在字符串中检测模式匹配，返回true或false")]),t._v(" "),l("li",[t._v("exec\t该方法是专门为捕获组而设计的\n"),l("ul",[l("li",[t._v("功能：正则捕获的数据，一个数组；")]),t._v(" "),l("li",[t._v("参数：要应用模式匹配的字符串")]),t._v(" "),l("li",[t._v("特性：\n"),l("ul",[l("li",[t._v("使用全局标记g；持续查找所有匹配项并返回")]),t._v(" "),l("li",[t._v("不使用全局标记g；始终返回第一个匹配项信息")])])]),t._v(" "),l("li",[t._v("执行的过程\n"),l("ul",[l("li",[t._v("检测字符串参数，获取正则表达式匹配文本")]),t._v(" "),l("li",[t._v("找到匹配文本则返回一个数组\n"),l("ul",[l("li",[t._v("第0个元素：与整个模式匹配的字符串")]),t._v(" "),l("li",[t._v("其他元素：与捕获组匹配的字符串")])])]),t._v(" "),l("li",[t._v("否则返回null")])])]),t._v(" "),l("li",[t._v("派生属性\n"),l("ul",[l("li",[t._v("index\t\t匹配项在字符串中的位置")]),t._v(" "),l("li",[t._v("input\t\t应用正则表达式的字符串")]),t._v(" "),l("li",[t._v("length\t\t返回数组元素的个数")])])])])])]),t._v(" "),l("p",[t._v('var text = "cat, bat, sat, fat";\nvar pattern1 = /.at/;\nvar matches = pattern1.exec(text);\nconsole.log(matches.index); //0\nconsole.log(matches[0]); //cat\nconsole.log(pattern1.lastIndex); //0\nmatches = pattern1.exec(text);\nconsole.log(matches.index); //0\nconsole.log(matches[0]); //cat\nconsole.log(pattern1.lastIndex); //0')]),t._v(" "),l("p",[t._v("var pattern2 = /.at/g;\nvar matches = pattern2.exec(text);\nconsole.log(matches.index); //0\nconsole.log(matches[0]); //cat\nconsole.log(pattern2.lastIndex); //3")]),t._v(" "),l("p",[t._v("matches = pattern2.exec(text);\nconsole.log(matches.index); //5\nconsole.log(matches[0]); //bat\nconsole.log(pattern2.lastIndex); //8")])])]),t._v(" "),l("p",[t._v('第一个模式 pattern1 不是全局模式，因此每次调用 exec() 返回的都是第一个匹配项（ "cat" ）。而第二个模式 pattern2 是全局模式，因此每次调用 exec() 都会返回字符串中的下一个匹配项，直至搜索到字符串末尾为止。此外，还应该注意模式的 lastIndex 属性的变化情况。在全局匹配模式下， lastIndex 的值在每次调用 exec() 后都会增加，而在非全局模式下则始终保持不变。\\')]),t._v(" "),l("blockquote",[l("p",[t._v("IE 的 JavaScript 实现在 lastIndex 属性上存在偏差，即使在非全局模式下，lastIndex 属性每次也会变化。")])]),t._v(" "),l("ul",[l("li",[t._v("字符串方法\n"),l("ul",[l("li",[t._v("match\t\t找到一个或者多个正则表达式的匹配")]),t._v(" "),l("li",[t._v("replace\t替换与正则表达式匹配的子串")]),t._v(" "),l("li",[t._v("search\t\t检索与正则表达式匹配的值")]),t._v(" "),l("li",[t._v("split\t\t把字符串分割为字符串数组")])])])])])}),[],!1,null,null,null);l.default=_.exports}}]);