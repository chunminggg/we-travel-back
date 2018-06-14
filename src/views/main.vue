<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.srollView {
    width: 100%;
    height: 300px;
}

.container {
    margin-left: 20%;
    width: 60%;
}
</style>
<template>
    <div class="layout">
        <main-navitor></main-navitor>
        <div class="container">
            <div class="srollView">
                <main-scroll :scroll-array="scrollArray"></main-scroll>
            </div>
            <div class="detail">
                <Row>
                    <Col span="24">
                    <tag-view :tag-array="islandArray"></tag-view>
                    <recommend-list :recommend-array="recommendArray"></recommend-list>
                    </Col>
                   
                </Row>
            </div>

        </div>
        <div style="height: 200px"></div>
        <div class="layout-copy">
            2011-2016 &copy; 超想去旅行
        </div>
    </div>
</template>
<script>
import network from '../tools/network.js'
import mainScroll from './main/mainScroll'
import mainNavitor from './main/mainNavitor'
import tagView from './main/tagView'
import recommendList from './main/recommendList'
import AV from 'leancloud-storage';
export default {
    components: {
        mainScroll,
        mainNavitor,
        tagView,
        recommendList,
    },
    data() {
        return {
            scrollArray: [],
            islandArray:[],
            recommendArray:[],
        }
    },
    methods:{
      
    },
    created() {
        let that = this
        network.getScrollView().then(data => {
            that.scrollArray = data[0]._serverData.imageArray
        })
        network.getAllIsland(11).then(data=>{
            that.islandArray = data.map(item=>{
                return {
                    name:item.attributes.name,
                    url:item.attributes.imageArray[0].url
                }
            })
        })
        network.getRecommenList().then(data=>{
            that.recommendArray = data.map(item=>{
                item = item.attributes
                return {
                    name: item.name,
                    title:item.onleyId||'暂无描述',
                    place:item.place,
                    price:item.price,
                    startDate:item.startDate,
                    describe:item.describe,
                    url:item.imageArray[0].url,
                    countNumber:item.countNumber
                }
            })
        })
    },
}
</script>