<template>
    <!--每个子分类最多免费添加50项，每超出一项收费0.1元/项-->
    <van-tabs v-model="active">
        <!--收藏分类最多二级分类-->
        <van-tab title="收藏分类" name="a" >
            <van-grid :gutter="10" class="mt20">
                <van-grid-item icon="apps-o" text="默认" @click="defaultCategory"/>
                <van-grid-item v-for="item in sdata"
                               :key="item.keyVal"
                               :icon="item.iconVal"
                               :text="item.textVal"
                               @click="categoryHanndle(item)" />
                <van-grid-item icon="plus" text="添加" @click="addCategoryAlert"/>
            </van-grid>
        </van-tab>
        <van-tab title="随笔分类" name="b" >
            <!--随笔分类最多一级分类-->
            <van-grid :gutter="10" class="mt20">
                <van-grid-item icon="apps-o" text="默认"/>
                <van-grid-item v-for="item in sbdata"
                               :key="item.keyVal"
                               :icon="item.iconVal"
                               :text="item.textVal"
                               @click="toEssayDesc(item)" />
                <van-grid-item icon="plus" text="添加" @click="addCategoryAlert"/>
            </van-grid>
        </van-tab>
    </van-tabs>
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
    import {Dialog, Toast} from 'vant';
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
            const sdata =  reactive([{
                id:2,
                keyVal: 2,
                textVal: '生活',
                iconVal: 'goods-collect-o'
            },{
                id:3,
                keyVal: 3,
                textVal: '事业',
                iconVal: 'thumb-circle-o'
            }]);
            const sbdata =  reactive([{
                id:44,
                keyVal: 44,
                textVal: '战争历史',
                iconVal: 'aim'
            }]);
            const show = ref(false);
            const categoryName = ref('');
            const active = ref('a');
            const isShowLoading = ref(false);
            const router = useRouter();
            const toList = ()=>{
                router.push({
                    path:'/list',
                    query:{type:'life'}
                })
            };
            const toLifeCategorys = ()=>{
                router.push({
                    path:'/lifeCategorys',
                    query:{categoryName:'生活'}
                })
            };
            const toCareerCategorys = ()=>{
                router.push({
                    path:'/careerCategorys',
                    query:{categoryName:'事业'}
                })
            };
            return {
                sdata,
                sbdata,
                show,
                active,
                categoryName,
                isShowLoading,
                toLifeCategorys,
                toCareerCategorys,
                toList
            }
        },
        methods:{
            categoryHanndle(o){
                let type = o.keyVal;
                if(type == 2){
                    this.toLifeCategorys();
                }
                if(type == 3){
                    this.toCareerCategorys();
                }
            },
            toEssayDesc(){
                Toast("跳转分类列表");
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
