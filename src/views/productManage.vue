<style scoped>

</style>
<template>
    <div class="content">
        <Table height="500" :columns="columns" :data="dataArray"></Table>
        <Modal v-model="modal1" title="删除操作" @on-ok="removeProdcut">
            <p>确认将编号为{{productNumber}}的产品删除吗</p>
        </Modal>
    
    </div>
</template>
<script>
import network from '../tools/network.js'
export default {
    data() {
        return {
            uid: '',
            productNumber: '',
            modal1: false,
            columns: [
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '编号',
                    key: 'onleyId'
                },
                {
                    title: '价格',
                    key: 'price'
                },
                {
                    title: '开始时间',
                    key: 'startDate',

                }, {
                    title: '排序',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'info',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.setFirst(params)
                                    }
                                }
                            }, '置顶')
                        ]);
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.modfifyProduct(params)
                                    }
                                }
                            }, '修改'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.deleteProduct(params)
                                    }
                                }
                            }, '配置')
                        ]);
                    }
                }
            ],
            dataArray: [],
        }
    },
    created() {
        this.configData()
    },
    methods: {
        configData() {
            var _self = this
            network.getProductList((data) => {
                _self.dataArray = data
            }, (error) => {
                _self.$Message.error('获取数据失败请重试');
            })
        },
        //修改
        modfifyProduct(params) {
            let productId = params.row.uid
            this.$router.push({ name: 'upload', params: { 'productId': productId } })
        },
        //删除
        deleteProduct(params) {
            this.modal1 = true
            this.productNumber = params.row.onleyId
            this.uid = params.row.uid
        },
        removeProdcut(uid) {
            var _self = this
            network.deleteProductWithId(this.uid, () => {

                _self.configData()
            })
        },
        //置顶
        setFirst(params) {
           this.productNumber = params.row.uid
           network.setFirstProduct(this.productNumber).then(data=>{
               this.$Message.success('置顶成功')
           },error=>{
               this.$Message.error('置顶失败')
               
           })
        },
    },

}    
</script>