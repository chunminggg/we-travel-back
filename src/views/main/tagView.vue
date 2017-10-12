<style>
/*标签*/

.collection {
    display: inline-block;
    margin: 0 18px 10px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
}

.tagView {
    margin-top: 20px
}

.tagImage {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border: 0;
}

.tagName {
    display: inline-block;
    padding: 0 11px 0 6px;
}

.tagMore {
    display: inline-block;
    margin-top: 7px;
    color: #787878
}
</style>
<template>
    <div class="tagView">
        <a class="collection" v-for="item in tagArray">
            <img class="tagImage" :src="item.url" alt="64">
            <div class="tagName">{{item.name}}</div>
        </a>
        <a class="tagMore">
            更多热门海岛专题
            <Icon type="chevron-right"></Icon>
        </a>
    </div>
</template>
<script>
export default {
    props: ["tagArray"],
    data() {
        return {

        }
    }
}
</script>


