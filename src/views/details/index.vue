<template>
    <van-nav-bar
            title="标题"
            left-arrow
            @click-left="prevPage"/>
    <van-steps direction="vertical" :active="0">
        <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
        </van-step>
    </van-steps>
</template>
<script>
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
    import { useRoute, useRouter } from 'vue-router'
    export default defineComponent({
        setup() {
            const router = useRouter();
            const prevPage = ()=>{
                router.push({
                    path:'/list',
                    query:{name:'阿强'}
                })
            };
            return {
                prevPage
            }
        }
    })
</script>
<style lang="less" scoped></style>
