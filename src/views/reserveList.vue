<template>
    <div class="content">
        <Table height="500" :columns="columns" :data="dataArray"></Table>
    </div>
</template>
<script>
import network from '../tools/network.js'
export default {
    data() {
        return {
            columns: [
                {
                    title: '客户名称',
                    key: 'name'
                },
                {
                    title: '预定人数',
                    key: 'peopleCount'
                },
                {
                    title: '电话',
                    key: 'phoneNumber'
                },
                {
                    title: '产品编号',
                    key: 'productNumber',

                },
                {
                    title: '产品名称',
                    key: 'productName'
                }],
            dataArray: [],


        }
    },
    created(){
        var _self = this
        network.getUnReserveList((data)=>{
            if(data.length)
            _self.dataArray = data
            
        },(error)=>{

        })
    },
    methods: {

    },
}
</script>
<style>

</style>


