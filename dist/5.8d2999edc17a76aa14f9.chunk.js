webpackJsonp([5],{192:function(e,t,o){o(239);var a=o(10)(o(230),o(261),"data-v-4d585cf7",null);a.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/theme.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] theme.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},195:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(6);t.default={props:["uploadList"],data:function(){return{visible:!1,imgName:""}},created:function(){},methods:{handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e,t){this.uploadList.splice(t,1)},handleSuccess:function(e,t){},handleProcess:function(e,t,o){},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(e){var t=this;return a.a.uploadImage(e,function(e){t.uploadList.push({url:e.attributes.url}),t.$emit("send-image",t.uploadList)}),!1}}}},196:function(e,t){},197:function(e,t,o){o(196);var a=o(10)(o(195),o(198),null,null);a.options.__file="/Users/miaobingliang/Desktop/超想去旅行/we-travel-back/src/views/imageUpload.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] imageUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},198:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?o("img",{staticStyle:{width:"100%"},attrs:{src:e.imgName}}):e._e()]),e._v(" "),o("Upload",{attrs:{multiple:"",type:"drag","show-upload-list":!0,format:["jpg","jpeg","png"],"on-progress":e.handleProcess,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,action:"http://upload.qiniu.com/"}},[o("div",{staticStyle:{padding:"20px 0"}},[o("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),o("p",[e._v("点击或将文件拖拽到这里上传")])],1)]),e._v(" "),e._l(e.uploadList,function(t,a){return o("div",{key:a,staticClass:"demo-upload-list"},[o("img",{attrs:{src:t.url}}),e._v(" "),o("div",{staticClass:"demo-upload-list-cover"},[o("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(o){e.handleView(t.url)}}}),e._v(" "),o("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(o){e.handleRemove(t,a)}}})],1)])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},230:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(197),r=o.n(a),i=o(6);t.default={components:{imageUpload:r.a},data:function(){return{themeName:"",themeBrief:"",imageArray:[],onlyId:""}},created:function(){var e=this;void 0!=this.$route.params.productId&&(e.onlyId=this.$route.params.productId,i.a.getDetailThemm(e.onlyId).then(function(t){e.themeName=t.attributes.name,e.themeBrief=t.attributes.brief,e.imageArray=t.attributes.imageArray}))},methods:{getImageArray:function(e){this.imageArray=e},submitData:function(){var e=this,t={name:e.themeName,brief:e.themeBrief,imageArray:e.imageArray,onlyId:e.onlyId};return e.themeName.length?e.themeBrief.length?e.imageArray.length?void i.a.uploadTheme(t,function(t){e.$Message.success("上传成功"),setTimeout(function(){e.$router.go(0)},1e3)},function(){e.$Message.error("上传失败")}):void e.$Message.error("图片至少上传一张"):void e.$Message.error("简称未填写"):void e.$Message.error("名称未填写")}}}},239:function(e,t){},261:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("Input",{staticClass:"product",attrs:{placeholder:"主题名称(例:巴厘岛)"},model:{value:e.themeName,callback:function(t){e.themeName=t},expression:"themeName"}}),e._v(" "),o("Input",{staticClass:"product",attrs:{placeholder:"主题简介"},model:{value:e.themeBrief,callback:function(t){e.themeBrief=t},expression:"themeBrief"}}),e._v(" "),o("image-upload",{staticClass:"product",attrs:{uploadList:e.imageArray},on:{"send-image":e.getImageArray}}),e._v(" "),o("Button",{staticClass:"product",attrs:{type:"success",long:""},on:{click:e.submitData}},[e._v("确认提交")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});