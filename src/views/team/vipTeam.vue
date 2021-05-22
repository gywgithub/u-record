<template>
    <div id="vipTeam">
        <p> {{ id }} </p>
    </div>
</template>
<script lang="ts">
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
            const id = ref(1)

            console.log('setup')

            onBeforeMount(() => {
                console.log('onBeforeMount')
            })
            onMounted(() => {
                console.log('onMounted')
            })
            onBeforeUpdate(() => {
                console.log('onBeforeUpdate')
            })
            onUpdated(() => {
                console.log('onUpdated')
            })
            onBeforeUnmount(() => {
                console.log('onBeforeUnmount')
            })
            onUnmounted(() => {
                console.log('onUnmounted')
            })

            return {
                id
            }
        }
    })
</script>
<style lang="less" scoped></style>
