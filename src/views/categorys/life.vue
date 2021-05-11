<template>
    <!--每个子分类最多免费添加50项，每超出一项收费0.1元/项-->
    <van-nav-bar :title="categoryTitleName"/>
    <van-grid :gutter="10">
        <van-grid-item icon="apps-o" text="默认" @click="defaultCategory"/>
        <van-grid-item v-for="item in sdata"
                       :key="item.keyVal"
                       :icon="item.iconVal"
                       :text="item.textVal"
                       @click="categoryHanndle(item)" />
        <van-grid-item icon="plus" text="添加" @click="addCategoryAlert"/>
    </van-grid>
    <van-dialog
            v-model:show="show"
            title="添加分类"
            @confirm="submitNewCategorys"
            show-cancel-button
            show-confirm-button>
        <van-form @submit="onSubmit">
            <van-field
                    v-model="categoryName"
                    name="分类名称"
                    label="分类名称："
                    placeholder=""
                    :rules="[{ required: true, message: '请填写分类名称' }]"
            />
        </van-form>
    </van-dialog>
    <van-overlay :show="isShowLoading" z-index="10">
        <div class="wrapper">
            <van-loading size="30px" type="spinner" vertical>加载中...</van-loading>
        </div>
    </van-overlay>
</template>

<script>
    import { useRoute, useRouter } from 'vue-router'
    import { Dialog } from 'vant';
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
        components:{
            [Dialog.Component.name]: Dialog.Component,
        },
        setup() {
            const router = useRouter();
            const route = useRoute();
            //cluster-o
            const sdata =  reactive([{
                id:2,
                keyVal: 2,
                textVal: '做菜',
                iconVal: 'send-gift-o'
            },{
                id:3,
                keyVal: 3,
                textVal: '跑步',
                iconVal: 'send-gift-o'
            },{
                id:4,
                keyVal: 4,
                textVal: '备孕',
                iconVal: 'send-gift-o'
            },{
                id:5,
                keyVal: 5,
                textVal: '买房',
                iconVal: 'send-gift-o'
            }]);
            const show = ref(false);
            const categoryName = ref('');
            const categoryTitleName = `${route.query.categoryName}分类`;
            const isShowLoading = ref(false);
            const toList = ()=>{
                router.push({
                    path:'/list',
                    query:{type:'life'}
                })
            };
            return {
                sdata,
                show,
                categoryName,
                categoryTitleName,
                isShowLoading,
                toList
            }
        },
        methods:{
            categoryHanndle(o){
                if(o.childs.length >0 && !o.childs){
                    this.sdata = o.childs;
                    console.dir(this.sdata);
                }else{
                    this.toList();
                }
            },
            submitNewCategorys(){
                console.log("xinfenlei");
            },
            addCategoryAlert(){
                this.show = true;
            },
            defaultCategory(){
                this.toList();
            },
        }
    })
</script>

<style lang="less" scoped>
    :deep .van-field__label{
        width:5em;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
