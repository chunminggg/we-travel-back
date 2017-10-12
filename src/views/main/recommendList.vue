<style>
/*推荐列表*/
.listView{
    list-style: none;
    padding: 0;
    margin: 0;
}
.sinlgeView{
    position: relative;
    width: 100%;
    margin: 0 0 17px;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    line-height: 20px
}
.detailImageView{
    position: absolute;
    top: 50%;
    margin-top: -68px;
    right: 0;
    width: 150px;
    height: 120px;
}
.detailImage{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    vertical-align: middle;
}
.detailContent{
    padding-right: 160px;
}
.itemDetailView{
    display: flex;
    color: #b4b4b4;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;

}
.itemDetailFlex{
    flex: 1;
}
.titleView{
    display: flex;
    color: red;
}
.nameView{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
}
.smallIcon{
    margin-right: 15px;
}
</style>
<template>
    <div>
        <ul class="listView">
            <li class="sinlgeView" v-for="item in recommendArray">
                <div class="detailImageView">
                    <img :src="item.url" alt="" class="detailImage">
                </div>
                <div class="detailContent">
                    <div class="titleView">
                        <div class="itemDetailFlex">
                            {{item.title}}
                        </div>
                    </div>
                    <div class="dateView">
                        <div class="">
                            {{item.startDate}}
                        </div>
                    </div>
                    <div class="nameView">
                        {{item.name}}
                    </div>
                    <div class="describeView">
                        {{item.describe}}
                    </div>
                    <div class="itemDetailView">
                        <div class="itemDetailFlex">
                            <Icon type="plane" class="smallIcon"></Icon>{{item.place}}出发
                        </div>

                        <div class="itemDetailFlex">
                            <Icon type="eye" class="smallIcon"></Icon>{{item.countNumber}}
                        </div>
                        <div class="itemDetailFlex priceView">
                           <Icon type="social-yen" class="smallIcon"></Icon> {{item.price}}
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['recommendArray'],
    data() {
        return {

        }
    }
}
</script>


