webpackJsonp([7],{192:function(e,t,o){o(225);var n=o(10)(o(222),o(239),"data-v-28b618bc",null);n.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/themeManage.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] themeManage.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},222:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),r=o(0),i=o.n(r);t.default={data:function(){var e=this;return{uid:"",productNumber:"",modal1:!1,columns:[{title:"名称",key:"name"},{title:"概述",key:"briefInfo"},{title:"最新修改时间",key:"updateDate"},{title:"排序",key:"sortAction",width:75,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.sortTheme(o)}}},"置顶")])}},{title:"操作",key:"action",width:150,align:"center",render:function(t,o){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.modfifyProduct(o)}}},"修改"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.deleteProduct(o)}}},"删除")])}}],dataArray:[]}},created:function(){this.configData()},methods:{configData:function(){var e=this;n.a.getThemelist().then(function(t){t.forEach(function(t){var o={name:t.attributes.name,briefInfo:t.attributes.brief,updateDate:i()(t.updatedAt.toISOString()).format("LLLL"),onlyId:t.id};e.dataArray.push(o)})},function(t){e.$Message.error("获取数据失败")})},modfifyProduct:function(e){var t=e.row.onlyId;this.$router.push({name:"theme",params:{productId:t}})},deleteProduct:function(e){this.modal1=!0,this.productNumber=e.row.onlyId,this.uid=e.row.onlyId},sortTheme:function(e){var t=this,o=e.row.onlyId;n.a.setFirstTheme(o).then(function(e){t.$Message.success("置顶成功")},function(e){t.$Message.error("置顶失败")})},removeProdcut:function(e){return void this.$Message.error("您没有权限")}}}},225:function(e,t){},239:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("Table",{attrs:{height:"500",columns:e.columns,data:e.dataArray}}),e._v(" "),o("Modal",{attrs:{title:"删除操作"},on:{"on-ok":e.removeProdcut},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[o("p",[e._v("确认将编号为"+e._s(e.productNumber)+"的产品删除吗")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});