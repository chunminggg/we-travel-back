webpackJsonp([5],{184:function(e,t,o){o(233);var n=o(10)(o(214),o(247),null,null);n.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/mainScroll.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] mainScroll.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},194:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(6);t.default={props:["uploadList"],data:function(){return{visible:!1,imgName:""}},created:function(){},methods:{handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e,t){this.uploadList.splice(t,1)},handleSuccess:function(e,t){},handleProcess:function(e,t,o){},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(e){var t=this;return n.a.uploadImage(e,function(e){t.uploadList.push({url:e.attributes.url}),t.$emit("send-image",t.uploadList)}),!1}}}},195:function(e,t){},196:function(e,t,o){o(195);var n=o(10)(o(194),o(197),null,null);n.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/imageUpload.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] imageUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},197:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?o("img",{staticStyle:{width:"100%"},attrs:{src:e.imgName}}):e._e()]),e._v(" "),o("Upload",{attrs:{multiple:"",type:"drag","show-upload-list":!0,format:["jpg","jpeg","png"],"on-progress":e.handleProcess,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,action:"http://upload.qiniu.com/"}},[o("div",{staticStyle:{padding:"20px 0"}},[o("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),o("p",[e._v("点击或将文件拖拽到这里上传")])],1)]),e._v(" "),e._l(e.uploadList,function(t,n){return o("div",{staticClass:"demo-upload-list"},[o("img",{attrs:{src:t.url}}),e._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(o){e.handleView(t.url)}}}),e._v(" "),o("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(o){e.handleRemove(t,n)}}})],1)])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},214:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(196),i=o.n(n),a=o(6);t.default={components:{imageUpload:i.a},data:function(){return{imageArray:[]}},created:function(){var e=this;a.a.getMainScroll(function(t){e.imageArray=t[0].imageArray})},methods:{submitData:function(){var e=this,t={imageArray:e.imageArray};a.a.uploadMainScroll(t,function(t){e.$Message.success("保存成功")})},getImageArray:function(e){this.imageArray=e}}}},233:function(e,t){},247:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("image-upload",{staticClass:"product",attrs:{uploadList:e.imageArray},on:{"send-image":e.getImageArray}}),e._v(" "),o("Button",{staticClass:"product",attrs:{type:"success",long:""},on:{click:e.submitData}},[e._v("确认提交")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});