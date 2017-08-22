<style scoped>
    .product {
        margin-top: 10px;
    }
</style>

<template>
    <div class="content">
        <Input v-model="themeName" placeholder="主题名称(例:巴厘岛)" class="product"></Input>
        <Input v-model="themeBrief" placeholder="主题简介" class="product"></Input>
        <image-upload class="product" @send-image="getImageArray" :uploadList="imageArray"></image-upload>
        <Button type="success" class="product" long @click="submitData">确认提交</Button>
    
    </div>
</template>

<script>
    import imageUpload from './imageUpload'
    import network from '../tools/network.js'
    export default {
        components: {
            imageUpload
        },
        data() {
            return {
                themeName: '',
                themeBrief: '',
                imageArray: [],
                onlyId:''
            }
        },
        created(){
            var _self = this

            if(this.$route.params.productId != undefined){
                _self.onlyId = this.$route.params.productId
                network.getDetailThemm(_self.onlyId).then(data=>{
                    _self.themeName = data.attributes.name
                    _self.themeBrief = data.attributes.brief
                    _self.imageArray = data.attributes.imageArray
                })
            }
        },
        methods:{
            getImageArray(data){
                
                 this.imageArray = data
            },
            submitData(){
                var _self =this
            var dict = {
                'name': _self.themeName,
                'brief':_self.themeBrief,
                'imageArray':_self.imageArray,
                'onlyId':_self.onlyId
            }
            if (!_self.themeName.length) {
                 _self.$Message.error('名称未填写')
                 return
            }
             if (!_self.themeBrief.length) {
                 _self.$Message.error('简称未填写')
                 return
            }
             if (!_self.imageArray.length) {
                 _self.$Message.error('图片至少上传一张')
                 return
            }
            network.uploadTheme(dict,(data)=>{
            _self.$Message.success('上传成功')
            setTimeout(function(){
                _self.$router.go(0)
            },1000)
            },()=>{
            _self.$Message.error('上传失败')
            }) 
            },
    
        }
    }
</script>


