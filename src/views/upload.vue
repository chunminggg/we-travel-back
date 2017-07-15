<style scoped>
    .product {
        margin-top: 10px;
    }
</style>

<template>
    <div class="content">
        <h2>产品发布</h2>
        <Input v-model="productNumber" placeholder="产品编号" class="product"></Input>
        <Input v-model="productName" placeholder="产品名称" class="product"></Input>
        <Input v-model="productPlace" placeholder="出发城市" class="product"></Input>
        <Input v-model="productPrice" placeholder="产品价格" class="product"></Input>
        <Input v-model="productDes" placeholder="产品描述" class="product" type="textarea"></Input>
        <Select v-model="productTypeSelected" class="product" placeholder="请选择产品类型">
            <Option v-for="item in productTypes" :value="item.value" :key="item">{{ item.label }}</Option>
        </Select>
    
        <Date-picker v-model="productStartDate" class="product" type="date" placeholder="选择出发日期"></Date-picker>
    
        <Date-picker v-model="productEndDate" class="product" type="date" placeholder="选择结束日期"></Date-picker>
    
        <image-upload class="product" @send-image="getImageArray" :uploadList="imageArray"></image-upload>
        <Button type="success" long @click="submitData">确认提交</Button>
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
                productId:'',
                //产品编号
                productNumber: '',
                //产品名称
                productName: '',
                //产品描述
                productDes: '',
                //产品价格
                productPrice: '',
                // 出发城市
                productPlace: '',
                productStartDate: '',
                productEndDate: '',
                //日期格式设置
                dateOption1: {
                    disabledDate(date) {
                        return date && date.valueOf() < Date.now() - 86400000
                    }
                },
                dateOption2: {
                    disabledDate(date) {
                        return date && date.valueOf() < Date.now() - 86400000
                    }
                },
                productTypes: [{
                        value: 1,
                        label: '巴厘岛'
                    },
                    {
                        value: 2,
                        label: '沙巴岛'
                    },
                    {
                        value: 3,
                        label: '芽庄'
                    },
                    {
                        value: 4,
                        label: '马尔代夫'
                    },
                    {
                        value: 5,
                        label: '普吉岛'
                    },
                    {
                        value: 6,
                        label: '长滩岛'
                    }
                ],
                productTypeSelected: '',
                imageArray: [],
    
            }
        },
        created(){
            var _self = this
            _self.productId = this.$route.params.productId
            network.getTodoDetail(_self.productId,'Product',(data)=>{
                _self.productNumber = data.onleyId
                _self.productPlace = data.place
                _self.productDes = data.describe
                _self.productName = data.name
                _self.productPrice = data.price
                _self.imageArray  = data.imageArray
                _self.productStartDate = data.startDate
                _self.productEndDate = data.endDate
                _self.productTypeSelected = data.type
            },(error)=>{
                _self.$Message.error('获取信息失败,请重试')
            })
        },
        methods: {
            getImageArray(data) {
    
    
                this.imageArray = data
            },
            submitData() {
                var _self = this
                var dict = {
                    startDate: _self.productStartDate,
                    endDate: _self.productEndDate,
                    name: _self.productName,
                    describe: _self.productDes,
                    type: _self.productTypeSelected,
                    place: _self.productPlace,
                    onleyId: _self.productNumber,
                    price: _self.productPrice,
                    imageArray: _self.imageArray
                }
    
                network.uploadProdut(_self.productId,dict, function() {
                    _self.$Message.success('保存成功');
                    setTimeout(function() {
                        _self.$router.go(0)
                    }, 1000)
                })
            }
        }
    }
</script>


