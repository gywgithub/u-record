<template>
        <van-nav-bar title="自定义子分类"/>
        <van-grid :gutter="10">
                <van-grid-item v-for="item in sdata" :key="item.keyVal" :icon="item.iconVal" :text="item.textVal" />
        </van-grid>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import {
        defineComponent,
        ref,
        toRef,
        toRefs,
        reactive,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
} from 'vue';
export default defineComponent({
        setup() {
                const route = useRoute();
                onBeforeMount(() => {
                        console.log(route.query) // {name: "阿强呀"}
                });
                const sdata =  reactive([{
                        id:1,
                        keyVal: 1,
                        textVal: '默认',
                        iconVal: 'photo-o'
                },{
                        id:2,
                        keyVal: 2,
                        textVal: '文字',
                        iconVal: 'photo-o'
                },{
                        id:3,
                        keyVal: 3,
                        textVal: '文字',
                        iconVal: 'photo-o'
                },{
                        id:4,
                        keyVal: 4,
                        textVal: '文字',
                        iconVal: 'photo-o'
                },{
                        id:5,
                        keyVal: 5,
                        textVal: '文字',
                        iconVal: 'photo-o'
                },{
                        id:6,
                        keyVal: 6,
                        textVal: '添加',
                        iconVal: 'plus'
                }]);
                return {
                        sdata
                }
        }
})
</script>

<style lang="less" scoped>

</style>
