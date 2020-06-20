(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(s,a,n){"use strict";n.r(a);var t=n(42),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"搭建指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建指南"}},[s._v("#")]),s._v(" 搭建指南")]),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("ul",[n("li",[s._v("需要node环境和npm支持，如果不会安装npm请转到："),n("a",{attrs:{href:"https://www.npmjs.cn/getting-started/installing-node/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装指引"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"安装初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装初始化"}},[s._v("#")]),s._v(" 安装初始化")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("全局安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("创建个文件夹作为目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-blog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("项目初始化,初始化后会生成一个package.json文件")])]),s._v(" "),n("li",[n("p",[s._v("在当前目录中创建一个docs目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-blog\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("首页内容书写")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("   ---\n home: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n heroImage: /img/logo.jpg\n actionText: 为生活加油 →\n actionLink: /moulian/\n features:\n - title: 何以为家\n details: 生而不养，何以为家。我要控告我的父母，因为他们生下了我。\n - title: 赞恩.阿尔.拉菲亚\n details: 我曾经以为我们长大了，就会变成好人，受人尊敬和爱戴。但是上帝不想让我们变成那样，他要我们当地毯，供人踩踏。\n - title: 希望\n details: 笑一个，赞恩，这张照片将用在你的身份证上，而不是死亡证明上。\n footer: MIT Licensed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Copyright © "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-present Evan You\n   ---\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"核心配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心配置"}},[s._v("#")]),s._v(" 核心配置")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("在docs目录下创建.vuepress目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .vuepress\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要存放配置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("新建总配置文件config.js")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .vuepress\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" config.js\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("在config.js中加入内容")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("module.exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'迦百农'")]),s._v(",\n  description: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'愿每一个孩子都被温柔以待'")]),s._v(",\n  head: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rel: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),s._v(", href: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/img/logo.jpg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  markdown: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      lineNumbers: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  themeConfig: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      nav: require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./nav'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n      sidebar: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),s._v(",\n      sidebar: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/guide/'")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                title:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新手指南'")]),s._v(",\n                collapsable: true,\n                children:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/guide/notes/one'")]),s._v(",\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                title:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'赞恩.阿尔.拉菲亚'")]),s._v(",\n                collapsable: true,\n                children:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/guide/notes/two'")]),s._v(",\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      sidebarDepth: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(",\n      lastUpdated: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Last Updated'")]),s._v(",\n      searchMaxSuggestoins: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(",\n      serviceWorker: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          updatePopup: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              message: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"有新的内容."')]),s._v(",\n              buttonText: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'更新'")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      editLinks: true,\n      editLinkText: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'在 GitHub 上编辑此页 ！'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  vuepress dev docs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);