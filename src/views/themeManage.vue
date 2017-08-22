<style scoped>
</style>
<template>
<div class="content">
<Table height="500" :columns="columns" :data="dataArray"></Table>
    <Modal
        v-model="modal1"
        title="删除操作"
        @on-ok="removeProdcut">
        <p>确认将编号为{{productNumber}}的产品删除吗</p>
    </Modal>
      
</div>
</template>
<script>
import network from '../tools/network.js'
import moment from 'moment'
export default{
    data(){
        return {
            uid:'',
            productNumber:'',
            modal1:false,
            columns:[
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '概述',
                        key: 'briefInfo'
                    },
                    {
                       title: '最新修改时间',
                        key: 'updateDate',
                        
                    }, {
                        title: '排序',
                        key: 'sortAction',
                        width: 75,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.sortTheme(params)
                                        }
                                    }
                                }, '置顶'),
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
                                }, '删除')
                            ]);
                        }
                    }
                ],
            dataArray:[],
        }
    },
    created(){
       this.configData()
    },
    methods:{
        configData(){
            
        var _self = this
        network.getThemelist().then(data=>{

            data.forEach(obj=>{
                let dict = {
                name:obj.attributes.name,
                briefInfo:obj.attributes.brief,
                updateDate:moment(obj.updatedAt.toISOString()).format('LLLL'),
                onlyId:obj.id
            }
            _self.dataArray.push(dict)
            })
        },error=>{
            _self.$Message.error('获取数据失败')
        })
        },
        //修改
        modfifyProduct(params){
            //  this.$Message.error('您没有权限')
            // return
            let productId = params.row.onlyId

            this.$router.push({name:'theme',params:{'productId':productId}})
        },
        //删除
        deleteProduct(params){

           this.modal1 = true
           this.productNumber = params.row.onlyId
           this.uid = params.row.onlyId
        },
        //置顶
        sortTheme(params){
            var _self = this
            let uid = params.row.onlyId
            network.setFirstTheme(uid).then(data=>{
                _self.$Message.success('置顶成功')
            },error=>{
                _self.$Message.error('置顶失败') 
            })
        },
        removeProdcut(uid){
            this.$Message.error('您没有权限')
            return
            var _self = this
            network.deleteProductWithId(this.uid,()=>{
                
                _self.configData()
                
                
                
            })
        },
    },
    
}    
</script>