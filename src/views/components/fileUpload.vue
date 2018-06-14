<style>
.demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
<template>
<div>
  <Modal title="查看图片" v-model="visible">
        <img :src='imgName' v-if="visible" style="width: 100%">
    </Modal>
<Upload
        multiple
        type="drag"
        :show-upload-list="true"
        :on-progress="handleProcess"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        action="http://upload.qiniu.com/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
    </Upload>
<div class="" v-for="(item,index) in uploadList" :key="index">
           <a :href="item.url" target="_blank">{{item.name}}</a>
    </div>
</div>

</template>
<script>
import network from '../../tools/network.js'
export default{
    props:['uploadList'],
    data(){
        return {
            // uploadList:[],
            visible:false,
            imgName:'',
        }
    },
    created(){
    },
    methods:{
        handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file,index) {
                // 从 upload 实例删除数据
              this.uploadList.splice(index,1)
            },
            handleSuccess (res, file) {
               
            },
            handleProcess(event, file, fileList){
            
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    // desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload (file) {
                var _self = this
                
                network.uploadImage(file,function(data){
                    
                    _self.uploadList.push({url:data.attributes.url,name:data.attributes.name})
                    
                    _self.$emit('send-image',_self.uploadList)
                
                })
                return false
            }
    }
}    
</script>