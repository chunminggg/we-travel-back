<style scoped>
</style>
<template>
<div class="content">
<Table  :columns="columns" :data="dataArray"></Table>
</div>
</template>
<script>
import network from '../tools/network.js'
    export default{
        data(){
            return {
            columns:[{
                        title: '微信昵称',
                        key: 'nickName'
                    },
                    {
                        title: '手机号',
                        key: 'mobilePhoneNumber'
                    },
                    {
                        title: '加入时间',
                        key: 'createdAt'
                    },
                    {
                       title: '上次登录时间',
                        key: 'updatedAt',
                        
                    },
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
                network.getUsers((data)=>{
                _self.dataArray = data
                },(error)=>{

                })
            }
        }
    }
</script>