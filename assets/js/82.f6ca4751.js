(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{576:function(t,a,r){"use strict";r.r(a);var s=r(11),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第5章-与http协作的web服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第5章-与http协作的web服务器"}},[t._v("#")]),t._v(" 第5章 与HTTP协作的Web服务器")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-用单台虚拟主机实现多个域名"}},[t._v("1. 用单台虚拟主机实现多个域名")])]),a("li",[a("a",{attrs:{href:"#_2-通信数据转发程序-代理、网关、隧道"}},[t._v("2. 通信数据转发程序：代理、网关、隧道")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-代理"}},[t._v("2.1 代理")])]),a("li",[a("a",{attrs:{href:"#_2-2-网关"}},[t._v("2.2 网关")])]),a("li",[a("a",{attrs:{href:"#_2-3-隧道"}},[t._v("2.3 隧道")])])])]),a("li",[a("a",{attrs:{href:"#_3-保存资源的缓存"}},[t._v("3. 保存资源的缓存")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-1-缓存的有效期限"}},[t._v("3.1 缓存的有效期限")])]),a("li",[a("a",{attrs:{href:"#_3-2-客户端的缓存"}},[t._v("3.2 客户端的缓存")])])])])])]),a("p"),t._v(" "),a("p",[t._v("一台Web服务器可以搭建多个独立名的Web网站，也可作为通信路径上的中转服务器提升传输效率。")]),t._v(" "),a("h2",{attrs:{id:"_1-用单台虚拟主机实现多个域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-用单台虚拟主机实现多个域名"}},[t._v("#")]),t._v(" 1. 用单台虚拟主机实现多个域名")]),t._v(" "),a("p",[t._v("HTTP/1.1规范允许一台HTTP服务器搭建多个Web站点。即使物理层面只有一台服务器，但只要使用虚拟主机的功能，则可以假想已具有多台服务器。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E8%99%9A%E6%8B%9F%E4%B8%BB%E6%9C%BA.png",alt:"虚拟主机"}}),a("br"),t._v("\n互联网上，域名通过DNS服务映射到IP地址之后访问目标网站。所以请求发送到服务器时，已经是以IP地址形式访问了。"),a("br"),t._v("\n所以，如果一台服务器内托管了两个不同的域名，当收到请求时就需要弄清楚究竟要访问哪个域名。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E4%B8%8D%E5%90%8C%E5%9F%9F%E5%90%8D%E8%AF%B7%E6%B1%82.png",alt:"不同域名请求"}}),a("br"),t._v(" "),a("strong",[t._v("因此在发送HTTP请求时，必须在Host首部内完整指定主机名或域名的URI。")])]),t._v(" "),a("h2",{attrs:{id:"_2-通信数据转发程序-代理、网关、隧道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通信数据转发程序-代理、网关、隧道"}},[t._v("#")]),t._v(" 2. 通信数据转发程序：代理、网关、隧道")]),t._v(" "),a("h3",{attrs:{id:"_2-1-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-代理"}},[t._v("#")]),t._v(" 2.1 代理")]),t._v(" "),a("p",[t._v("代理是一种有转发功能的应用程序。它的基本行为就是接收客户端的请求后转发给其他服务器。从源服务器返回的响应经过代理服务器后再传给客户端。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8.png",alt:"代理服务器"}}),a("br"),t._v("\n转发时，需要附加Via首部字段以标记出经过的主机信息。")]),t._v(" "),a("p",[a("strong",[t._v("使用代理服务器理由有")]),t._v("：利用缓存技术减少网络带宽的流量，组织内部针对特定网站的访问控制，以获取访问日志为主要目的，等。")]),t._v(" "),a("h4",{attrs:{id:"缓存代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[t._v("#")]),t._v(" 缓存代理")]),t._v(" "),a("p",[t._v("代理转发响应时，缓存代理（Caching Proxy）会预先将资源的副本（缓存）保存在代理服务器上。"),a("br"),t._v("\n当代理再次接收到对相同资源的请求时，就可以不从源服务器那里获取资源，而将之前缓存的资源作为响应返回。")]),t._v(" "),a("h4",{attrs:{id:"透明代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透明代理"}},[t._v("#")]),t._v(" 透明代理")]),t._v(" "),a("p",[t._v("转发请求或响应时，不对报文做任何加工的代理类型被称为"),a("strong",[t._v("透明代理")]),t._v("。反之，对报文内部进行加工的代理称为非透明代理。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-网关"}},[t._v("#")]),t._v(" 2.2 网关")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E7%BD%91%E5%85%B3.png",alt:"网关"}}),a("br"),t._v("\n网关的工作机制和代理十分相似。而网关能使通信线路上的服务器提供非HTTP协议服务。"),a("br"),t._v("\n利用网关能提高通信的安全性，因为可以在客户端和网关之间的通信线路上加密以确保连接的安全。比如，网关可以连接数据库，可以在购物网站进行信用卡结算时，网关可以和信用卡结算系统联动。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-隧道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-隧道"}},[t._v("#")]),t._v(" 2.3 隧道")]),t._v(" "),a("p",[t._v("隧道可按要求建立起一条与其他服务器的通信线路，届时使用SSL等加密手段进行通信。隧道的目的是确保客户端能与服务器进行安全的通信。"),a("br"),t._v("\n隧道本身不会去解析HTTP请求。隧道会在通信双方断开连接时结束。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E9%9A%A7%E9%81%93.png",alt:"隧道"}})]),t._v(" "),a("h2",{attrs:{id:"_3-保存资源的缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-保存资源的缓存"}},[t._v("#")]),t._v(" 3. 保存资源的缓存")]),t._v(" "),a("p",[t._v("缓存是指代理服务器或客户端本地磁盘内保存的资源副本。利用缓存可减少对源服务器的访问，因此也就节省了通信流量和通信时间。")]),t._v(" "),a("p",[t._v("缓存服务器是代理服务器的一种，并归类在缓存代理类型中。当代理转发从服务器返回的响应时，代理服务器会保存一份资源的副本。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E7%BC%93%E5%AD%981.png",alt:"缓存1"}}),a("br"),t._v(" "),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E7%BC%93%E5%AD%982.png",alt:"缓存2"}}),a("br"),t._v("\n缓存服务器的优势在于利用缓存可避免多次从源服务器转发资源。因此客户端可就近从缓存服务器上获取资源，而源服务器也不必多次处理相同的请求了。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-缓存的有效期限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-缓存的有效期限"}},[t._v("#")]),t._v(" 3.1 缓存的有效期限")]),t._v(" "),a("p",[t._v("缓存服务器并不能保证每次都会返回对同资源的请求。因为这关系到被缓存资源的有效性的问题。"),a("br"),t._v("\n当遇上源服务器上的资源更新时，如果还是使用不变的缓存，那就会演变成返回更新前的‘旧’资源了。"),a("br"),t._v("\n所以，即使存在缓存，也会因为客户端的要求、缓存的有效性等因素，向源服务器确认资源的有效性。若判断缓存失败，缓存服务器将会再次从源服务器上获取‘新’资源。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E7%BC%93%E5%AD%98%E7%9A%84%E6%9C%89%E6%95%88%E6%80%A7.png",alt:"缓存的有效性"}})]),t._v(" "),a("h3",{attrs:{id:"_3-2-客户端的缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-客户端的缓存"}},[t._v("#")]),t._v(" 3.2 客户端的缓存")]),t._v(" "),a("p",[t._v("缓存不仅可以存在于缓存服务器，还可以存在客户端浏览器中。比如Internet Explorer程序会将客户端缓存称为"),a("strong",[t._v("临时网络文件")]),t._v("。")]),t._v(" "),a("p",[t._v("浏览器缓存如果有效，就不必再向服务器请求相同的资源了，可以直接从本地磁盘内读取。")]),t._v(" "),a("p",[t._v("和缓存服务器相同的一点是，当判定缓存过期后，会向源服务器确认资源的有效性。若判断浏览器缓存失效，浏览器会再次请求新资源。\n"),a("img",{attrs:{src:"/images/HTTP%E5%9B%BE%E8%A7%A3/5%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98.png",alt:"客户端缓存"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);