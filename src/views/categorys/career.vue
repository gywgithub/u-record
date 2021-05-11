<template>
    <!--每个子分类最多免费添加50项，每超出一项收费0.1元/项-->
    <van-nav-bar :title="categoryTitleName"/>
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
                console.log(route.query)
            });
            const categoryTitleName = `${route.query.categoryName}分类`;
            const sdata =  reactive([{
                id:1,
                keyVal: 1,
                textVal: '默认',
                iconVal: 'apps-o'
            },{
                id:2,
                keyVal: 2,
                textVal: '组建团队',
                iconVal: 'send-gift-o'
            },{
                id:3,
                keyVal: 3,
                textVal: '拓展视野',
                iconVal: 'send-gift-o'
            },{
                id:4,
                keyVal: 4,
                textVal: '精神食粮',
                iconVal: 'send-gift-o'
            },{
                id:5,
                keyVal: 5,
                textVal: '高效率沟通',
                iconVal: 'send-gift-o'
            },{
                id:6,
                keyVal: 6,
                textVal: '添加',
                iconVal: 'plus'
            }]);
            return {
                sdata,
                categoryTitleName
            }
        }
    })
</script>

<style lang="less" scoped>

</style>
