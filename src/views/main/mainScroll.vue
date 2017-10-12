<style>
img {
    height: 300px;
    width: 100%;
}

</style>
<template>
    <div class="">
        <Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
            <CarouselItem v-for="item in scrollArray">
                <img :src="item.url" alt="">
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
    props: ['scrollArray'],
    data() {
        return {
            value3: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                dots: 'inside',
                trigger: 'click',
                arrow: 'hover'
            }
        }
    },
}
</script>

