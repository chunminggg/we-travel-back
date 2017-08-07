<template>
    <div class="content">
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
            imageArray: [],
        }

    },
    created(){
        var _self = this
    network.getMainScroll((data)=>{
        _self.imageArray = data[0].imageArray
    })
    },
    methods: {
        submitData() {
            var _self = this,
                dict = {
                    'imageArray':_self.imageArray
                }
        network.uploadMainScroll(dict,(data)=>{
           _self.$Message.success('保存成功')
        })
        },
        getImageArray(data){
        this.imageArray = data
        },
    }
}
</script>
<style>

</style>


