(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{514:function(a,t,r){"use strict";r.r(t);var s=r(11),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_4-javascript-array-mdn总结-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-javascript-array-mdn总结-1"}},[a._v("#")]),a._v(" 4. Javascript Array MDN总结（1）")]),a._v(" "),t("h3",{attrs:{id:"数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),t("p",[a._v("数组只能用整数作为数组元素的索引，而不能用字符串。后者称为关联数组。使用非整数并通过方括号或点号来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的属性集合上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。")]),a._v(" "),t("h3",{attrs:{id:"迭代方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代方法"}},[a._v("#")]),a._v(" 迭代方法")]),a._v(" "),t("p",[a._v("在众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。"),t("strong",[a._v("在每一个数组元素都分别执行完回调函数之前，数组的length属性会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响")]),a._v("。总之，"),t("strong",[a._v("不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做")]),a._v("。\n"),t("img",{attrs:{src:"/images/Javascript/array1.png",alt:"array1"}})]),a._v(" "),t("h3",{attrs:{id:"浏览器兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[a._v("#")]),a._v(" 浏览器兼容性")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/Javascript/array2.png",alt:"array2"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);