webpackJsonp([3],{186:function(e,t,i){i(244);var n=i(9)(i(220),i(266),"data-v-f485e014",null);n.options.__file="/Users/neo-mac/Desktop/杂七杂八/we-travel-back/src/views/newsUpload.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] newsUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},194:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(10);t.default={props:["uploadList"],data:function(){return{visible:!1,imgName:""}},created:function(){},methods:{handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e,t){this.uploadList.splice(t,1)},handleSuccess:function(e,t){},handleProcess:function(e,t,i){},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(e){var t=this;return n.a.uploadImage(e,function(e){t.uploadList.push({url:e.attributes.url}),t.$emit("send-image",t.uploadList)}),!1}}}},195:function(e,t){},196:function(e,t,i){i(195);var n=i(9)(i(194),i(197),null,null);n.options.__file="/Users/neo-mac/Desktop/杂七杂八/we-travel-back/src/views/imageUpload.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] imageUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},197:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:e.imgName}}):e._e()]),e._v(" "),i("Upload",{attrs:{multiple:"",type:"drag","show-upload-list":!0,format:["jpg","jpeg","png"],"on-progress":e.handleProcess,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,action:"http://upload.qiniu.com/"}},[i("div",{staticStyle:{padding:"20px 0"}},[i("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),i("p",[e._v("点击或将文件拖拽到这里上传")])],1)]),e._v(" "),e._l(e.uploadList,function(t,n){return i("div",{staticClass:"demo-upload-list"},[i("img",{attrs:{src:t.url}}),e._v(" "),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){e.handleView(t.url)}}}),e._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){e.handleRemove(t,n)}}})],1)])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},198:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(11),o=(i.n(n),i(205)),s=i.n(o);i(200),i(201);t.default={props:["richContent","richIndex"],components:{imageUpload:s.a},data:function(){return{editorOption:{placeholder:this.richContent.placeHolder,imageImport:!0,imageResize:{displaySize:!0}},content:this.richContent.content,imageArray:[]}},watch:{richContent:function(e,t){this.content=e.content}},methods:{richTextChange:function(e,t,i){this.$emit("send-text",{content:this.content,index:this.richIndex})},getImageArray:function(e){var t=e,i=this.$refs.richContent.quill.getLength();this.$refs.richContent.quill.insertEmbed(i,"image",t)},imgClick:function(){}},computed:{editor:function(){return this.$refs.firstEditor.quill}},mounted:function(){}}},199:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(10);t.default={props:["uploadList"],data:function(){return{visible:!1,imgName:""}},created:function(){},methods:{handleView:function(e){this.imgName=e,this.visible=!0},handleRemove:function(e,t){this.uploadList.splice(t,1)},handleSuccess:function(e,t){},handleProcess:function(e,t,i){},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确"})},handleMaxSize:function(e){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+e.name+" 太大，不能超过 2M。"})},handleBeforeUpload:function(e){var t=this;return n.a.uploadImage(e,function(e){t.uploadList.push({url:e.attributes.url}),t.$emit("send-image",e.attributes.url)}),!1}}}},200:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();!function(){function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(this,e),this.quill=t,this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}o(e,[{key:"handleDrop",value:function(e){e.preventDefault(),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length&&this.readFiles(e.dataTransfer.files,this.insert.bind(this))}},{key:"handlePaste",value:function(e){var t=this;e.clipboardData&&e.clipboardData.items&&e.clipboardData.items.length&&this.readFiles(e.clipboardData.items,function(e){t.quill.getSelection()||setTimeout(function(){return t.insert(e)},0)})}},{key:"insert",value:function(e){var t=(this.quill.getSelection()||{}).index||this.quill.getLength();this.quill.insertEmbed(t,"image",e,"user")}},{key:"readFiles",value:function(e,t){[].forEach.call(e,function(e){if(e.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)){var i=new FileReader;i.onload=function(e){t(e.target.result)};var n=e.getAsFile?e.getAsFile():e;n instanceof Blob&&i.readAsDataURL(n)}})}}])}()},201:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();!function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this.quill=t,this.options=i,this.handleClick=this.handleClick.bind(this),this.handleMousedown=this.handleMousedown.bind(this),this.handleMouseup=this.handleMouseup.bind(this),this.handleDrag=this.handleDrag.bind(this),this.checkImage=this.checkImage.bind(this),this.boxes=[],document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1)}o(e,[{key:"handleClick",value:function(e){if(e.target&&e.target.tagName&&"IMG"==e.target.tagName.toUpperCase()){if(this.img===e.target)return;this.img&&this.hide(),this.show(e.target)}else this.img&&this.hide()}},{key:"show",value:function(e){this.img=e,this.showResizers(),this.showSizeDisplay();var t=this.img.getBoundingClientRect();this.positionBoxes(t),this.positionSizeDisplay(t)}},{key:"hide",value:function(){this.hideResizers(),this.hideSizeDisplay(),this.img=void 0}},{key:"showResizers",value:function(){this.setUserSelect("none"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),this.addBox("nwse-resize"),this.addBox("nesw-resize"),document.addEventListener("keyup",this.checkImage,!0),this.quill.root.addEventListener("input",this.checkImage,!0)}},{key:"hideResizers",value:function(){document.removeEventListener("keyup",this.checkImage),this.quill.root.removeEventListener("input",this.checkImage),this.setUserSelect(""),this.setCursor(""),this.boxes.forEach(function(e){return document.body.removeChild(e)}),this.dragBox=void 0,this.dragStartX=void 0,this.preDragWidth=void 0,this.boxes=[]}},{key:"addBox",value:function(e){var t=document.createElement("div"),i={position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",zIndex:9,cursor:e};this.extend(t.style,i,this.options.handleStyles||{}),t.addEventListener("mousedown",this.handleMousedown,!1),document.body.appendChild(t),this.boxes.push(t)}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return i.forEach(function(t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}),e}},{key:"positionBoxes",value:function(e){var t=this;[{left:e.left-6,top:e.top-6},{left:e.left+e.width-6,top:e.top-6},{left:e.left+e.width-6,top:e.top+e.height-6},{left:e.left-6,top:e.top+e.height-6}].forEach(function(e,i){t.extend(t.boxes[i].style,{top:Math.round(e.top+window.pageYOffset)+"px",left:Math.round(e.left+window.pageXOffset)+"px"})})}},{key:"handleMousedown",value:function(e){this.dragBox=e.target,this.dragStartX=e.clientX,this.preDragWidth=this.img.width||this.img.naturalWidth,this.setCursor(this.dragBox.style.cursor),document.addEventListener("mousemove",this.handleDrag,!1),document.addEventListener("mouseup",this.handleMouseup,!1)}},{key:"handleMouseup",value:function(){this.setCursor(""),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleMouseup)}},{key:"handleDrag",value:function(e){if(this.img){this.dragBox==this.boxes[0]||this.dragBox==this.boxes[3]?this.img.width=Math.round(this.preDragWidth-e.clientX-this.dragStartX):this.img.width=Math.round(this.preDragWidth+e.clientX-this.dragStartX);var t=this.img.getBoundingClientRect();this.positionBoxes(t),this.positionSizeDisplay(t)}}},{key:"setUserSelect",value:function(e){var t=this;["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(i){t.quill.root.style[i]=e,document.documentElement.style[i]=e})}},{key:"setCursor",value:function(e){[document.body,this.img,this.quill.root].forEach(function(t){return t.style.cursor=e})}},{key:"checkImage",value:function(){this.img&&this.hide()}},{key:"showSizeDisplay",value:function(){if(this.options.displaySize){this.display=document.createElement("div");var e={position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"};this.extend(this.display.style,e,this.options.displayStyles||{}),document.body.appendChild(this.display)}}},{key:"hideSizeDisplay",value:function(){document.body.removeChild(this.display),this.display=void 0}},{key:"positionSizeDisplay",value:function(e){if(this.display&&this.img){var t=this.getCurrentSize();if(this.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30){var i=this.display.getBoundingClientRect();this.extend(this.display.style,{left:Math.round(e.left+e.width+window.pageXOffset-i.width-8)+"px",top:Math.round(e.top+e.height+window.pageYOffset-i.height-8)+"px"})}else this.extend(this.display.style,{left:Math.round(e.left+e.width+window.pageXOffset+8)+"px",top:Math.round(e.top+e.height+window.pageYOffset+8)+"px"})}}},{key:"getCurrentSize",value:function(){return[this.img.width,Math.round(this.img.width/this.img.naturalWidth*this.img.naturalHeight)]}}])}()},202:function(e,t){},203:function(e,t){},204:function(e,t,i){i(202);var n=i(9)(i(198),i(206),null,null);n.options.__file="/Users/neo-mac/Desktop/杂七杂八/we-travel-back/src/views/richEditor.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] richEditor.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},205:function(e,t,i){i(203);var n=i(9)(i(199),i(207),null,null);n.options.__file="/Users/neo-mac/Desktop/杂七杂八/we-travel-back/src/views/richImageUpload.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] richImageUpload.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},206:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("quill-editor",{ref:"richContent",attrs:{options:e.editorOption},on:{change:e.richTextChange},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),i("image-upload",{staticClass:"product",attrs:{uploadList:e.imageArray},on:{"send-image":e.getImageArray}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},207:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Modal",{attrs:{title:"查看图片"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:e.imgName}}):e._e()]),e._v(" "),i("Upload",{attrs:{multiple:"",type:"drag","show-upload-list":!0,format:["jpg","jpeg","png"],"on-progress":e.handleProcess,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,action:"http://upload.qiniu.com/"}},[i("div",{staticStyle:{padding:"20px 0"}},[i("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),i("p",[e._v("点击或将文件拖拽到这里上传")])],1)])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},220:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(196),o=i.n(n),s=i(10),r=i(204),a=i.n(r);t.default={components:{imageUpload:o.a,richEditor:a.a},data:function(){return{richItems:[{content:"",placeHolder:"文章详情"}],articleName:"",articleAuthor:"",imageArray:[]}},created:function(){var e=this;e.productId=this.$route.params.productId,s.a.getArticleDetail(e.productId,"Article",function(t){e.richItems=t.detailContent,e.imageArray=t.imageArray,e.articleAuthor=t.describe,e.articleName=t.name},function(t){e.$Message.error("获取信息失败,请重试")})},methods:{getRichTextArray:function(e){this.richItems[e.index].content=e.content},getImageArray:function(e){this.imageArray=e},submitData:function(){var e=this,t={startDate:e.productStartDate,name:e.articleName,author:e.articleAuthor,imageArray:e.imageArray,detailContent:e.richItems};this.imageArray.length||e.$Message.error("请上传图片至少一张"),s.a.uploadArticle(e.productId,t,function(){e.$Message.success("保存成功"),setTimeout(function(){e.$router.go(0)},1e3)})}}}},244:function(e,t){},266:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h2",[e._v("产品发布")]),e._v(" "),i("Input",{staticClass:"product",attrs:{placeholder:""},model:{value:e.articleName,callback:function(t){e.articleName=t},expression:"articleName"}},[i("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("文章名称")])]),e._v(" "),i("Input",{staticClass:"product",attrs:{placeholder:""},model:{value:e.articleAuthor,callback:function(t){e.articleAuthor=t},expression:"articleAuthor"}},[i("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("文章作者")])]),e._v(" "),i("Alert",{staticClass:"myAlert",attrs:{type:"warning"}},[e._v("文章指定滚动图（至少传一张)")]),e._v(" "),i("image-upload",{staticClass:"product imageUpload",attrs:{uploadList:e.imageArray},on:{"send-image":e.getImageArray}}),e._v(" "),e._l(e.richItems,function(t,n){return i("div",{staticClass:"myProduct"},[i("Alert",[e._v(e._s(t.placeHolder))]),e._v(" "),i("rich-editor",{staticClass:"product",attrs:{richContent:t,richIndex:n},on:{"send-text":e.getRichTextArray}})],1)}),e._v(" "),i("Button",{staticClass:"product",attrs:{type:"success",long:""},on:{click:e.submitData}},[e._v("确认提交")])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0}});