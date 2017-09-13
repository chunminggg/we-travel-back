<style scoped>
.header {
    margin-bottom: 30px;
    margin-top: 20px
}
</style>
<template>
    <div class="content">
        <Table height="500" :columns="columns" :data="dataArray"></Table>
        <Modal v-model="modal1" title="删除操作" @on-ok="removeProdcut">
            <p>确认将编号为{{productNumber}}的文章删除吗</p>
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
            //显示类型过滤
            showTypeSelected: 0,
            showTypes: [{ label: '全部', value: 0 }],
            columns: [
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '作者',
                    key: 'onleyId'
                },
                {
                    title: '创建时间',
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
        this.congfigChooseType()
    },
    methods: {
        configData() {
            var _self = this

            network.getArticleList((data) => {
                _self.dataArray = data

            }, (error) => {
                _self.$Message.error('获取数据失败请重试');
            })

        },
        congfigChooseType() {
            var _self = this
            network.getThemelist().then(data => {
                if (data.length) {
                    _self.showTypes = [{ label: '全部', value: 0 }]
                    // _self.showTypes.push({ label: '全部', value: 0 })
                    // _self.showTypeSelected = 0
                    data.forEach(obj => {
                        _self.showTypes.push({ label: obj.attributes.name, value: obj.attributes.type })
                    })
                }
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
        //选中值改变
        showTypeChange(myValue) {
            var _self = this
            if (myValue == 0) {
                _self.configData()
            }
            else {
                network.getDetailItemList(myValue).then(data => {
                    var netDataArray = [];
                    for (var model of data) {
                        // model.attributes.endDate = model.attributes.endDate.toISOString().slice(0, 10)
                        // model.attributes.startDate = model.attributes.startDate.toISOString().slice(0, 10)
                        model.attributes.uid = model.id;
                        netDataArray.push(model.attributes);
                    }
                    _self.dataArray = netDataArray
                }, (error) => {


                });


            }
        },
        //置顶
        setFirst(params) {
            this.productNumber = params.row.uid
            network.setFirstProduct(this.productNumber).then(data => {
                this.$Message.success('置顶成功')
            }, error => {
                this.$Message.error('置顶失败')

            })
        },
    },

}    
</script>