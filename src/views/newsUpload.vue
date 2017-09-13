<style scoped>
.product {
    margin-top: 10px;
}

.myAlert {
    margin-top: 30px;
}

.imageUpload {
    margin-bottom: 30px
}
</style>

<template>
    <div class="content">
        <h2>产品发布</h2>
        <Input v-model="articleName" placeholder="" class="product">
        <span slot="prepend">文章名称</span>
        </Input>
        <Input v-model="articleAuthor" placeholder="" class="product">
        <span slot="prepend">文章作者</span>
        </Input>
       
        
        <Alert class="myAlert" type="warning">文章指定滚动图（至少传一张)</Alert>
        <image-upload class="product imageUpload" @send-image="getImageArray" :uploadList="imageArray">

        </image-upload>
        <div v-for="(richItem, index) in richItems" class="myProduct">
            <Alert>{{richItem.placeHolder}}</Alert>
            <rich-editor class="product" :richContent="richItem" :richIndex="index" @send-text="getRichTextArray"></rich-editor>
        </div>

        <Button type="success" long @click="submitData" class="product">确认提交</Button>
    </div>
</template>

<script>
import imageUpload from './imageUpload'
import network from '../tools/network.js'
import richEditor from './richEditor'

export default {
    components: {
        imageUpload,
        richEditor,

    },
    data() {
        return {
            richItems: [{ content: '', placeHolder: "文章详情" }],
            articleName:'',
            articleAuthor:'',
            imageArray: [],

        }
    },
    created() {
        var _self = this
        _self.productId = this.$route.params.productId
        network.getArticleDetail(_self.productId, 'Article', (data) => {
            _self.richItems = data.detailContent
            _self.imageArray = data.imageArray
            _self.articleAuthor = data.describe
            _self.articleName = data.name
        }, (error) => {
            _self.$Message.error('获取信息失败,请重试')
        })
    },
    methods: {
        getRichTextArray(data) {
            this.richItems[data.index].content = data.content
        },
        getImageArray(data) {
            this.imageArray = data
        },
        submitData() {
            var _self = this
            var dict = {
                startDate: _self.productStartDate,
                // endDate: _self.productEndDate,
                name: _self.articleName,
                author: _self.articleAuthor,
                imageArray: _self.imageArray,
                detailContent: _self.richItems,
            }
            if (!this.imageArray.length) {
                _self.$Message.error('请上传图片至少一张');
            }
            
            network.uploadArticle(_self.productId, dict, function() {
                _self.$Message.success('保存成功');
                setTimeout(function() {
                    _self.$router.go(0)
                }, 1000)
            })
        }
    }
}
</script>


