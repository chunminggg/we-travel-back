webpackJsonp([8],{183:function(e,t,n){n(234);var r=n(7)(n(216),n(254),null,null);r.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/reserveList.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] reserveList.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8);t.default={data:function(){return{columns:[{title:"客户名称",key:"name"},{title:"预定人数",key:"peopleCount"},{title:"电话",key:"phoneNumber"},{title:"提交时间",key:"createdAt"},{title:"产品编号",key:"productNumber"},{title:"产品名称",key:"productName"}],dataArray:[]}},created:function(){var e=this;r.a.getUnReserveList(function(t){t.length&&(e.dataArray=t)},function(e){})},methods:{}}},234:function(e,t){},254:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("Table",{attrs:{height:"500",columns:e.columns,data:e.dataArray}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});