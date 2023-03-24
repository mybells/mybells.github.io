(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{531:function(a,o,n){"use strict";n.r(o);var e=n(11),r=Object(e.a)({},(function(){var a=this,o=a._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"_3-yarn-lock、package-lock-json、npm-shrinkwrap-json的理解"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-yarn-lock、package-lock-json、npm-shrinkwrap-json的理解"}},[a._v("#")]),a._v(" 3. yarn.lock、package-lock.json、npm-shrinkwrap.json的理解")]),a._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#_1-先说下yarn下载包的流程"}},[a._v("1. 先说下yarn下载包的流程")])]),o("li",[o("a",{attrs:{href:"#_2-npm-shrinkwrap-json-与-package-lock-json的区别与联系"}},[a._v("2. npm-shrinkwrap.json 与 package-lock.json的区别与联系")]),o("ul",[o("li",[o("a",{attrs:{href:"#从npm版本看"}},[a._v("从npm版本看")])]),o("li",[o("a",{attrs:{href:"#从npm处理机制来看"}},[a._v("从npm处理机制来看")])]),o("li",[o("a",{attrs:{href:"#从文件更新来看"}},[a._v("从文件更新来看")])]),o("li",[o("a",{attrs:{href:"#从发布包来看"}},[a._v("从发布包来看")])])])]),o("li",[o("a",{attrs:{href:"#_3-解释与实践"}},[a._v("3. 解释与实践")])]),o("li",[o("a",{attrs:{href:"#_4-yarn-lock文件的作用-自己理解的-如有错误请指出"}},[a._v("4. yarn.lock文件的作用（自己理解的，如有错误请指出）")])]),o("li",[o("a",{attrs:{href:"#_5-相关链接"}},[a._v("5. 相关链接")])])])]),o("p"),a._v(" "),o("h2",{attrs:{id:"_1-先说下yarn下载包的流程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-先说下yarn下载包的流程"}},[a._v("#")]),a._v(" 1. 先说下yarn下载包的流程")]),a._v(" "),o("p",[a._v("第一次，首先执行"),o("code",[a._v("yarn install")]),a._v("，会按照语义版本控制规则（在下面会解释）下载最新的依赖包并且构建为依赖关系树，也就是把共有的部分提取出来。然后生成"),o("code",[a._v("yarn.lock")]),a._v("文件。并且生成本地缓存。"),o("br"),a._v("\n以后执行"),o("code",[a._v("yarn install")]),a._v("会先对比"),o("code",[a._v("package.json")]),a._v("版本号和"),o("code",[a._v("yarn.lock")]),a._v("版本号是否一致。分两种情况："),o("br"),a._v("\n（1）如果不一致会根据package中的版本号以及语义版本控制规则去下载最新的包，并更新至"),o("code",[a._v("yarn.lock")]),a._v("。"),o("br"),a._v("\n（2）如果一致，会根据lock查看缓存进行复制，没有缓存就按照路径下载，注意：这里"),o("strong",[a._v("不会理会package实际包的版本是否有更新")]),a._v("。这个比如删除"),o("code",[a._v("node_moudles")]),a._v("后再执行"),o("code",[a._v("yarn install")]),a._v("会复制缓存，而不是重新下载，同时也会根据"),o("code",[a._v("yarn.lock")]),a._v("文件中依赖的相互关系生成依赖树，版本也和package中的相同。")]),a._v(" "),o("p",[a._v("npm5中是 如果改了"),o("code",[a._v("package.json")]),a._v("，且"),o("code",[a._v("package.json")]),a._v("和"),o("code",[a._v("package-lock.json")]),a._v("文件中包版本号不一致，那么执行"),o("code",[a._v("npm i")]),a._v("时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。如果两者是同一状态，那么执行"),o("code",[a._v("npm i")]),a._v("都会根据lock下载，不会理会package实际包的版本是否有新。和yarn是一样的。")]),a._v(" "),o("h2",{attrs:{id:"_2-npm-shrinkwrap-json-与-package-lock-json的区别与联系"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-npm-shrinkwrap-json-与-package-lock-json的区别与联系"}},[a._v("#")]),a._v(" 2. npm-shrinkwrap.json 与 package-lock.json的区别与联系")]),a._v(" "),o("h3",{attrs:{id:"从npm版本看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从npm版本看"}},[a._v("#")]),a._v(" 从npm版本看")]),a._v(" "),o("p",[o("code",[a._v("package-lock.json")]),a._v("是npm5的新特性，也不向前兼容，如果npm版本是4或以下，那得用"),o("code",[a._v("npm-shrinkwrap.json")])]),a._v(" "),o("h3",{attrs:{id:"从npm处理机制来看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从npm处理机制来看"}},[a._v("#")]),a._v(" 从npm处理机制来看")]),a._v(" "),o("ul",[o("li",[a._v("在一个项目里，如果本身不存在这两个文件，那么在运行"),o("code",[a._v("npm install")]),a._v("时，会自动生成一个"),o("code",[a._v("package-lock.json")]),a._v("，或者在初始化一个项目"),o("code",[a._v("npm init")]),a._v("时，也会生成"),o("code",[a._v("package-lock.json")]),a._v("，安装信息会依据该文件进行，而不是单纯按照"),o("code",[a._v("package.json")]),a._v("，这两个文件的优先级都比"),o("code",[a._v("package.json")]),a._v("高")]),a._v(" "),o("li",[a._v("如果项目两个文件都存在，那么安装的依赖是依据"),o("code",[a._v("npm-shrinkwrap.json")]),a._v("来的，而忽略"),o("code",[a._v("package-lock.json")])]),a._v(" "),o("li",[a._v("运行命令"),o("code",[a._v("npm shrinkwrap")]),a._v("后，如果项目里不存在package-lock.json，那么会新建一个"),o("code",[a._v("npm-shrinkwrap.json")]),a._v("文件，如果存在"),o("code",[a._v("package-lock.json")]),a._v("，那么会把"),o("code",[a._v("package-lock.json")]),a._v("重命名为"),o("code",[a._v("npm-shrinkwrap.json")])])]),a._v(" "),o("h3",{attrs:{id:"从文件更新来看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从文件更新来看"}},[a._v("#")]),a._v(" 从文件更新来看")]),a._v(" "),o("p",[o("code",[a._v("npm-shrinkwrap.json")]),a._v("只会在运行"),o("code",[a._v("npm shrinkwrap")]),a._v("才会创建/更新\n"),o("code",[a._v("package-lock.json")]),a._v("会在修改"),o("code",[a._v("pacakge.json")]),a._v("或者"),o("code",[a._v("node_modules")]),a._v("时就会自动产生或更新了。")]),a._v(" "),o("h3",{attrs:{id:"从发布包来看"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从发布包来看"}},[a._v("#")]),a._v(" 从发布包来看")]),a._v(" "),o("p",[o("code",[a._v("package-lock.json")]),a._v("不会在发布包中出现，就算出现了，也会遭到npm的无视。\n"),o("code",[a._v("npm-shrinkwrap.json")]),a._v("可以在发布包中出现")]),a._v(" "),o("h2",{attrs:{id:"_3-解释与实践"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-解释与实践"}},[a._v("#")]),a._v(" 3. 解释与实践")]),a._v(" "),o("p",[a._v("项目"),o("code",[a._v("package.json")]),a._v("中包版本号前如果有"),o("code",[a._v("^ ~")]),a._v("之类的会按照"),o("a",{attrs:{href:"https://yarn.bootcss.com/docs/dependency-versions/",target:"_blank",rel:"noopener noreferrer"}},[a._v("语义版本控制规则"),o("OutboundLink")],1),a._v("（也可以看下这个博客"),o("a",{attrs:{href:"https://blog.csdn.net/ZQ_KING/article/details/81560075",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/ZQ_KING/article/details/81560075"),o("OutboundLink")],1),a._v("）安装规则下最高版本的包（只限定于没有lock文件时候。如果有lock文件会根据lock文件中的下载路径下载，当然你可以在有lock文件情况下"),o("code",[a._v("yarn upgrade vue")]),a._v("，就会按照语义规则下最高版本的包下载）。但是"),o("code",[a._v("package.json")]),a._v("中的对应包的版本号没变，只改变了"),o("code",[a._v("yarn.lock")]),a._v("中对应包的部分信息和"),o("code",[a._v("node_moudles")]),a._v("中的对应包。")]),a._v(" "),o("p",[a._v("比如拿vue这个包来说，现在最高版本号是"),o("code",[a._v("2.6.10")]),a._v("，我"),o("code",[a._v("package.json")]),a._v("文件中版本号是"),o("code",[a._v("^2.6.6")]),a._v("，当"),o("code",[a._v("yarn install")]),a._v("时，它会下载"),o("code",[a._v(">=2.6.6")]),a._v(" "),o("code",[a._v("<3.0.0")]),a._v("间最大的就是"),o("code",[a._v("2.6.10")]),a._v("版本号的vue包（只限定于没有lock文件）。它会先更新"),o("code",[a._v("node_moudles")]),a._v("然后更新"),o("code",[a._v("yarn.lock")]),a._v("中vue包内容。下载完成后"),o("code",[a._v("package.json")]),a._v("中vue版本号还是"),o("code",[a._v("vue : ^2.6.6")]),a._v("，更新"),o("code",[a._v("yarn.lock")]),a._v("文件中vue包的详细信息为：")]),a._v(" "),o("p",[o("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190820002931326.png",alt:"在这里插入图片描述"}})]),a._v(" "),o("p",[a._v("实际上"),o("code",[a._v("node_moudles")]),a._v("中下载的是"),o("code",[a._v("2.6.10")]),a._v("版本的。所以说提不提交"),o("code",[a._v("yarn.lock")]),a._v("到代码托管平台是有争议的，因为提交了可能依赖会有地雷，不提交依赖关系可能会出错，一般来说是应该提交的。可以看这个（"),o("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22934066",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么我不使用 shrinkwrap（lock）"),o("OutboundLink")],1),a._v("）")]),a._v(" "),o("h2",{attrs:{id:"_4-yarn-lock文件的作用-自己理解的-如有错误请指出"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-yarn-lock文件的作用-自己理解的-如有错误请指出"}},[a._v("#")]),a._v(" 4. yarn.lock文件的作用（自己理解的，如有错误请指出）")]),a._v(" "),o("p",[o("code",[a._v("yarn.lock")]),a._v("是为了维护树关系，保证依赖间的相互关系，和包的下载路径。如果改了"),o("code",[a._v("package.json")]),a._v("版本号，且"),o("code",[a._v("package.json")]),a._v("和lock文件版本号不同，那么执行"),o("code",[a._v("yarn install")]),a._v("时，会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。这也是"),o("code",[a._v("yarn.lock")]),a._v("提交到代码托管平台的原因。因为安装依赖时会按照lock中下载路径走，并且不需要重新生成依赖关系树了，其他机器"),o("code",[a._v("yarn install")]),a._v("时包间依赖关系和版本就不会出现的错误。npm中"),o("code",[a._v("npm install")]),a._v("有可能会因为包间的版本不同导致版本和依赖错误（除非有package.lock.json文件）。")]),a._v(" "),o("p",[a._v("总的来说"),o("code",[a._v("yarn.lock")]),a._v("和"),o("code",[a._v("package-lock.json")]),a._v("起的作用相同。只不过yarn是默认的，npm到5以后才会出现lock。两者确定包间的依赖关系算法也不同，总之yarn就是为了弥补npm的缺陷而出现的。")]),a._v(" "),o("h2",{attrs:{id:"_5-相关链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-相关链接"}},[a._v("#")]),a._v(" 5. 相关链接")]),a._v(" "),o("p",[a._v("yarn："),o("br"),a._v(" "),o("a",{attrs:{href:"https://yarn.bootcss.com/docs/dependency-versions/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://yarn.bootcss.com/docs/dependency-versions/"),o("OutboundLink")],1),a._v("（版本范围规则）\n"),o("a",{attrs:{href:"https://yarn.bootcss.com/blog/2016/11/24/lockfiles-for-all/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://yarn.bootcss.com/blog/2016/11/24/lockfiles-for-all/"),o("OutboundLink")],1),a._v("（yarn.lock文件应该提交到托管平台上）\n"),o("a",{attrs:{href:"https://yarn.bootcss.com/blog/2016/11/24/lockfiles-for-all/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://yarn.bootcss.com/docs/yarn-lock/"),o("OutboundLink")],1),a._v("（yarn.lock文件解释）")]),a._v(" "),o("p",[a._v("npm："),o("br"),a._v(" "),o("a",{attrs:{href:"https://www.zhihu.com/question/264560841",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.zhihu.com/question/264560841"),o("OutboundLink")],1),a._v("（package-lock.json 需要写进 .gitignore 吗？）\n"),o("a",{attrs:{href:"https://juejin.im/post/5c53bea8e51d457fbe226efb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://juejin.im/post/5c53bea8e51d457fbe226efb"),o("OutboundLink")],1),a._v("（对npm包精准控制之npm-shrinkwrap.json与package-lock.json）\n"),o("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22934066",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://zhuanlan.zhihu.com/p/22934066"),o("OutboundLink")],1),a._v("（为什么我不使用 shrinkwrap（lock））")]),a._v(" "),o("p",[a._v("夜里因为这个睡不着，导致第二天还睡过头了只能请假。最后，觉得有帮助的点个赞o~~")])])}),[],!1,null,null,null);o.default=r.exports}}]);