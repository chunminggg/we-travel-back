webpackJsonp([10],{188:function(t,e,o){o(233);var n=o(9)(o(222),o(255),"data-v-467d310a",null);n.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/productStatis.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] productStatis.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},222:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(10);e.default={data:function(){var t=this;return{uid:"",productNumber:"",modal1:!1,showTypeSelected:0,showTypes:[{label:"全部",value:0}],columns:[{title:"名称",key:"name"},{title:"点击次数",key:"countNumber"},{title:"编号",key:"onleyId"},{title:"价格",key:"price"},{title:"排序",key:"action",width:150,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.setFirst(o)}}},"置顶")])}},{title:"操作",key:"action",width:150,align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{},on:{click:function(){t.modfifyProduct(o)}}},"修改")])}}],dataArray:[]}},created:function(){this.configData(),this.congfigChooseType()},methods:{configData:function(){var t=this;n.a.getProductList(function(e){t.dataArray=e},function(e){t.$Message.error("获取数据失败请重试")})},congfigChooseType:function(){var t=this;n.a.getThemelist().then(function(e){e.length&&(t.showTypes=[{label:"全部",value:0}],e.forEach(function(e){t.showTypes.push({label:e.attributes.name,value:e.attributes.type})}))})},modfifyProduct:function(t){var e=t.row.uid;this.$router.push({name:"upload",params:{productId:e}})},deleteProduct:function(t){this.modal1=!0,this.productNumber=t.row.onleyId,this.uid=t.row.uid},removeProdcut:function(t){var e=this;n.a.deleteProductWithId(this.uid,function(){e.configData()})},showTypeChange:function(t){var e=this;0==t?e.configData():n.a.getDetailItemList(t).then(function(t){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;u.attributes.uid=u.id,o.push(u.attributes)}}catch(t){r=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}e.dataArray=o},function(t){})},setFirst:function(t){var e=this;this.productNumber=t.row.uid,n.a.setFirstProduct(this.productNumber).then(function(t){e.$Message.success("首页置顶成功")},function(t){e.$Message.error("置顶失败")})}}}},233:function(t,e){},255:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("div",{staticClass:"header",staticStyle:{"margin-top":"20px"}},[o("Row",[o("Col",{attrs:{span:"2"}},[o("h4",{staticStyle:{"margin-top":"10px"}},[t._v("显示过滤：")])]),t._v(" "),o("Col",{attrs:{span:"8"}},[o("Select",{staticStyle:{width:"200px"},on:{"on-change":t.showTypeChange},model:{value:t.showTypeSelected,callback:function(e){t.showTypeSelected=e},expression:"showTypeSelected"}},t._l(t.showTypes,function(e){return o("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),o("Table",{attrs:{height:"500",columns:t.columns,data:t.dataArray}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});