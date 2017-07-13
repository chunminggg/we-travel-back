<style scoped>
    .product {
        margin-top: 10px;
    }
</style>

<template>
    <div class="content">
        <Input v-model="themeName" placeholder="主题名称(例:巴厘岛)" class="product"></Input>
        <Input v-model="themeBrief" placeholder="主题简介" class="product"></Input>
        <image-upload class="product" @send-image="getImageArray"></image-upload>
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
                'imageArray':_self.imageArray
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


