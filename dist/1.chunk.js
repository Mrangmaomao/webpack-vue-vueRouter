webpackJsonp([1],{171:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(175),a=e(189),c=!1;var o=function(n){c||e(187)},d=e(23)(i.a,a.a,!1,o,null,null);d.options.__file="src\\views\\get_rich.vue",t.default=d.exports},175:function(n,t,e){"use strict";var i=e(188);e.n(i);t.a={data:function(){return{title:"富文本",el:""}},watch:{showCode:function(n,t){}},created:function(){},mounted:function(){this.el=document.querySelector("#rich"),this.closeWrite()},methods:{closeWrite:function(){var n=this.el.contentEditable;this.el.contentEditable="inherit"==n||"false"==n},addBold:function(){},addItalics:function(){},addUnderline:function(){},addBorder:function(){},addDelete:function(){},addSuper:function(){},addSub:function(){},addClean:function(){},addBrush:function(){},addAuto:function(){},addRef:function(){},addTextCopy:function(){},addFontsColor:function(){},addBgColor:function(){},addFutrue:function(){},addCleanText:function(){}}}},187:function(n,t){},188:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var a=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.param=Object.assign(t),this.init()}return i(n,[{key:"init",value:function(){this.el=document.querySelector(this.param.el),this.el.contentEditable=!0}}]),n}();t.default=function(n){return new a(n)}},189:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"richText"},[e("div",[n._v(n._s(n.title)+" ")]),n._v(" "),e("div",{staticClass:"operation"},[e("span",{on:{click:n.closeWrite}},[n._v("关闭")]),n._v(" "),e("span",{on:{click:n.addBold}},[n._v("加粗")]),n._v(" "),e("span",{on:{click:n.addItalics}},[n._v("斜体")]),n._v(" "),e("span",{on:{click:n.addUnderline}},[n._v("下划线")]),n._v(" "),e("span",{on:{click:n.addBorder}},[n._v("字符边框")]),n._v(" "),e("span",{on:{click:n.addDelete}},[n._v("删除线")]),n._v(" "),e("span",{on:{click:n.addSuper}},[n._v("上标")]),n._v(" "),e("span",{on:{click:n.addSub}},[n._v("下标")]),n._v(" "),e("span",{on:{click:n.addClean}},[n._v("清除格式")]),n._v(" "),e("span",{on:{click:n.addBrush}},[n._v("格式刷")]),n._v(" "),e("span",{on:{click:n.addAuto}},[n._v("自动排版")]),n._v(" "),e("span",{on:{click:n.addRef}},[n._v("引用")]),n._v(" "),e("span",{on:{click:n.addTextCopy}},[n._v("纯文本粘贴模式")]),n._v(" "),e("span",{on:{click:n.addFontsColor}},[n._v("字体颜色")]),n._v(" "),e("span",{on:{click:n.addBgColor}},[n._v("背景色")]),n._v(" "),e("span",{on:{click:n.addFutrue}},[n._v("全选")]),n._v(" "),e("span",{on:{click:n.addCleanText}},[n._v("清空文档")])]),n._v(" "),e("div",{attrs:{id:"rich"}})])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};t.a=a}});