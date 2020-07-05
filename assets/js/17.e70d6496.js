(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{498:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ast抽象语法树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast抽象语法树"}},[t._v("#")]),t._v(" AST抽象语法树")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("每种语言都有很多解析器，使用方式和生成的结果各不相同，开发者可以根据需要选择合适的解析器。(总结就是前端的任何一种语言都可以转化成可以描述的json)")]),t._v(" "),s("p",[t._v("常见的语言转换器：\n"),s("strong",[t._v("JavaScript")])]),t._v(" "),s("ul",[s("li",[t._v("最知名的当属babylon，因为他是babel的御用解析器，一般JavaScript的AST这个库比较常用")]),t._v(" "),s("li",[t._v("acron:babylon就是从这个库fork来的")])]),t._v(" "),s("p",[s("strong",[t._v("HTML")])]),t._v(" "),s("ul",[s("li",[t._v("htmlparser2：比较常用")]),t._v(" "),s("li",[t._v("parse5：不太好用，还需要配合jsdom这个类库")])]),t._v(" "),s("p",[s("strong",[t._v("CSS")])]),t._v(" "),s("ul",[s("li",[t._v("cssom、csstree等")]),t._v(" "),s("li",[t._v("less/sass")])]),t._v(" "),s("p",[s("strong",[t._v("XML")])]),t._v(" "),s("ul",[s("li",[t._v("Xmldom")])]),t._v(" "),s("p",[t._v("虚拟dom")]),t._v(" "),s("ul",[s("li",[t._v("snabbdom")])]),t._v(" "),s("p",[s("strong",[t._v("注意：个人观点，我们常说的虚拟dom其实也是一种解析器，主要是解决js与html的依赖关系。")])]),t._v(" "),s("h2",{attrs:{id:"常见的语法树转换工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的语法树转换工具"}},[t._v("#")]),t._v(" 常见的语法树转换工具")]),t._v(" "),s("p",[t._v("babel-parser，recast，esprima")]),t._v(" "),s("p",[t._v("Babel为当前最流行的代码JavaScript编译器了，其使用的JavaScript解析器为"),s("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Ftree%2Fmaster%2Fpackages%2Fbabel-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-parser"),s("OutboundLink")],1),t._v("，最初是从"),s("code",[t._v("Acorn")]),t._v(" 项目"),s("code",[t._v("fork")]),t._v("出来的。Acorn 非常快，易于使用，并且针对非标准特性(以及那些未来的标准特性) 设计了一个基于插件的架构。"),s("code",[t._v("esprima")]),t._v("的实现也是基于Acorn的。\n "),s("code",[t._v("recast")]),t._v(" 是基于 "),s("code",[t._v("@babel/core")]),t._v("、"),s("code",[t._v("@babel/parser")]),t._v(" 、"),s("code",[t._v("@babel/types")]),t._v("等包进行封装开发的。")]),t._v(" "),s("p",[s("strong",[t._v("总结：基本上都来源于 Acorn ，接下来我们主要分析baber-paser。")]),t._v("\n**")]),t._v(" "),s("h2",{attrs:{id:"babel-运行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-运行阶段"}},[t._v("#")]),t._v(" Babel 运行阶段")]),t._v(" "),s("p",[t._v("三个重要的步骤。")]),t._v(" "),s("h3",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("p",[t._v("首先需要将 JavaScript 字符串经过词法分析、语法分析后，转换为计算机更易处理的表现形式，称之为“抽象语法树(AST)”，这个步骤我们使用了 "),s("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabylon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babylon"),s("OutboundLink")],1),t._v(" 解析器。")]),t._v(" "),s("h3",{attrs:{id:"转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[t._v("#")]),t._v(" 转换")]),t._v(" "),s("p",[t._v("当 JavaScript 从字符串转换为 AST 后，我们就能更方便地对其进行浏览、分析和有规律的修改，根据我们的需求，将其转换为新的 AST，"),s("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fbabel-traverse",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-traverse"),s("OutboundLink")],1),t._v(" 是一个很好的转换工具，使得我们能够很便利的操作 AST 。")]),t._v(" "),s("h3",{attrs:{id:"生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成"}},[t._v("#")]),t._v(" 生成")]),t._v(" "),s("p",[t._v("最后，我们将修改完的 AST 进行反向处理，生成 JavaScript 字符串，整个转换过程也就完成了，这一步当中，我们使用到了 "),s("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fbabel-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-generator"),s("OutboundLink")],1),t._v(" 模块。")]),t._v(" "),s("h2",{attrs:{id:"什么是ast"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是ast"}},[t._v("#")]),t._v(" 什么是AST")]),t._v(" "),s("p",[t._v("之前听过一句话：“如果你能熟练地操作 AST ，那么你真的可以为所欲为。”，当时并不理解其含义，直到真正了解 AST 后，才发现 AST 对编程语言的重要性是不可估量的。\n在计算机科学中，抽象语法树（abstract syntax tree 或者缩写为 AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。树上的每个节点都表示源代码中的一种结构。")]),t._v(" "),s("blockquote",[s("p",[t._v("之所以说语法是「抽象」的，是因为这里的语法并不会表示出真实语法中出现的每个细节。")])]),t._v(" "),s("p",[t._v("JavaScript 程序一般是由一系列字符组成的，我们可以使用匹配的字符（[], {}, ()），成对的字符（'', \"\"）和缩进让程序解析起来更加简单，但是对计算机来说，这些字符在内存中仅仅是个数值，并不能处理这些高级问题，所以我们需要找到一种方式，将其转换成计算机能理解的结构。\n我们简单看下面的代码：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("将其转换为 AST 会是怎样的呢，我们使用 "),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fastexplorer.net%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("astexplorer"),s("OutboundLink")],1),t._v(" 在线 AST 转换工具，可以得到以下树结构：\n"),s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/119800/1568258889191-a4c4beee-b9c1-4714-809f-67105b2de665.png#align=left&display=inline&height=833&name=image.png&originHeight=833&originWidth=657&size=65588&status=done&width=657",alt:"image.png"}}),t._v("\njson 结构如下：\n"),s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/119800/1568258918878-0e871e63-4a82-4651-b88d-47a234d3c7a3.png#align=left&display=inline&height=527&name=image.png&originHeight=527&originWidth=398&size=45062&status=done&width=398",alt:"image.png"}})]),t._v(" "),s("p",[t._v("为了更形象表述，我们将其转换为更直观的结构图形：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/119800/1568259273516-2320e685-3222-4595-b3ba-b955988f75b5.png#align=left&display=inline&height=870&name=image.png&originHeight=870&originWidth=1104&size=172433&status=done&width=1104",alt:"image.png"}})]),t._v(" "),s("p",[t._v("AST 的根节点都是 Program ，这个例子中包含了两部分：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("一个变量申明(VariableDeclarator)，将标识符(Identifier) a 赋值为数值(NumericLiteral) 3。")])]),t._v(" "),s("li",[s("p",[t._v("一个二元表达式语句(BinaryExpression)，描述为标志符(Identifier)为 a，操作符(operator) + 和数值(NumericLiteral) 5。")])])]),t._v(" "),s("p",[t._v("这只是一个简单的例子，在实际开发中，AST 将会是一个巨型节点树，将字符串形式的源代码转换成树状的结构，计算机便能更方便地处理，我们使用的 Babel 插件，也就是对 AST 进行插入/移动/替换/删除节点，创建成新的 AST ，再将 AST 转换为字符串源代码，这便是 Babel 插件的原理，之所以能够“为所欲为”，其原因就是可以将原始代码按照指定逻辑转换为你想要的代码。")]),t._v(" "),s("p",[t._v("很多时候我们不明白这个代表什么含义：VariableDeclarator,Identifier，这个有篇文章"),s("a",{attrs:{href:"https://juejin.im/post/5c8d3c48f265da2d8763bdaf?utm_source=gold_browser_extension#heading-32",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript抽象语法树AST"),s("OutboundLink")],1),t._v("，都解释了单词对应含义。(或者babel的"),s("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("p",[s("strong",[t._v("例如")])]),t._v(" "),s("h3",{attrs:{id:"variabledeclarator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variabledeclarator"}},[t._v("#")]),t._v(" VariableDeclarator")]),t._v(" "),s("p",[t._v("变量声明，kind 属性表示是什么类型的声明，因为 ES6 引入了 const/let。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VariableDeclaration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Declaration "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VariableDeclaration"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    declarations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" VariableDeclarator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    kind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"const"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"identifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifier"}},[t._v("#")]),t._v(" Identifier")]),t._v(" "),s("p",[t._v("标识符，就是我们写 JS 时自定义的名称，如变量名，函数名，属性名，都归为标识符。相应的接口是这样的：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Identifier")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Identifier'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"怎么使用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么使用？"}},[t._v("#")]),t._v(" 怎么使用？")]),t._v(" "),s("p",[t._v("简单案例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("parse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/types'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" traverse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/traverse'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" generate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/generator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let a=2;[1,2].push((val)=>{console.log(val)})"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callee'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMemberExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callee'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callee'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path.remove()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("VariableDeclaration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'var'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'var a = 2;\\n[1, 2].push(val => {});'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rawMappings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("总结：菜鸟千万不要尝试使用抽象语法改变代码，否者可能你的代码讲不是你的代码。")]),t._v(" "),s("p",[t._v("有兴趣可以看这个"),s("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-babel-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5d102eba6fb9a07f0052e55b?utm_source=gold_browser_extension#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过开发 Babel 插件来理解什么是抽象语法树（AST）"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c8d3c48f265da2d8763bdaf?utm_source=gold_browser_extension#heading-25",target:"_blank",rel:"noopener noreferrer"}},[t._v("高级前端基础-JavaScript抽象语法树AST"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("**")])])}),[],!1,null,null,null);a.default=e.exports}}]);