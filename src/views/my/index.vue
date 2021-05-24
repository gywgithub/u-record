<template>
    <div id="my" class="systemBgColor">
        <van-row>
            <van-col span="8" offset="8" class="tac mt30">
                <van-image
                    round
                    width="100px"
                    height="100px"
                    fit="cover"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            </van-col>
        </van-row>
        <van-row class="mt15">
            <van-col span="24" class="tac fwb font20">
                <p>Harvey</p>
                <p class="idStyle">用户ID:5856245 &nbsp;&nbsp;<span @click="copyUserId">复制</span></p>
            </van-col>
        </van-row>
        <van-grid class="mt20">
            <van-grid-item @click="toTarbarPage(1)" icon="bar-chart-o" text="稍后观看" />
            <van-grid-item @click="toTarbarPage(2)" icon="star-o" text="我的收藏" />
            <van-grid-item @click="toTarbarPage(3)" icon="newspaper-o" text="我的文章" />
            <van-grid-item @click="toTarbarPage(4)" icon="records" text="我的随笔" />
        </van-grid>
        <van-row class="mt20">
            <van-col span="24">
                <div class="van-cell">
                    <i class="van-icon van-icon-friends-o van-cell__left-icon"></i>
                    <div class="van-cell__title" @click="toRoutePage(1)"><span>发起团队</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
                <div class="van-cell">
                    <i class="van-icon van-icon-user-circle-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>个人信息</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
                <div class="van-cell">
                    <i class="van-icon van-icon-balance-list-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>我的钱包</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
                <div class="van-cell">
                    <i class="van-icon van-icon-gold-coin-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>充值中心</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
                <div class="van-cell">
                    <i class="van-icon van-icon-setting-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>系统设置</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
<!--                <div class="van-cell">-->
<!--                    <i class="van-icon van-icon-location-o van-cell__left-icon"></i>-->
<!--                    <div class="van-cell__title"><span>关于我们</span></div>-->
<!--                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>-->
<!--                </div>-->
            </van-col>
        </van-row>
        <van-row class="h40 mt35" gutter="10">
            <van-col span="8" class="tac font14 lh40  systemPresetBgColor">建议与反馈</van-col>
            <van-col span="8" class="tac font14 lh40 bd3f1 systemPresetBgColor">关于我们</van-col>
            <van-col span="8" class="tac font14 lh40  systemPresetBgColor">退出登录</van-col>
        </van-row>
        <van-swipe-cell>
            <template #left>
                123123123
                <van-button square type="primary" text="选择"/>
            </template>
            <van-cell :border="false" title="单元格" value="内容"/>
            <template #right>
                423423
                <van-button square type="danger" text="删除"/>
                <van-button square type="primary" text="收藏"/>
            </template>
        </van-swipe-cell>
<!--        <van-row class="mt10">-->
<!--            <van-col span="6" offset="9">-->
<!--                <img src="@/assets/elephant.png" alt="" class="icoElephant">-->
<!--            </van-col>-->
<!--        </van-row>-->
    </div>
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
    import { Toast } from 'vant';
    export default defineComponent({
        setup() {
            const router = useRouter();
            let copyUserId = function(){
                Toast("复制成功");
            };
            const toRoutePage = function(val){
                if(val == 1){
                    router.push({
                        path:'/userTeam',
                        query:{name:''}
                    })
                }
            };
            const toTarbarPage = function(val){
                if(val == 1){
                    router.push({
                        path:'/seeLater',
                        query:{name:''}
                    })
                }
            };
            return {
                copyUserId,
                toTarbarPage,
                toRoutePage
            }
        }
    })
</script>
<style lang="less" scoped>
    #my{
        height:100%;
        .bd3f1{
            border-left: 3px solid #F1F1F1;
            border-right: 3px solid #F1F1F1;
        }
        .icoElephant{
            width:100%;
            height:80px;
        }
        .idStyle{
            font-size:13px;
            margin-top: 5px;
            color:#d6d6d6;
            span{
                font-size:12px;
                color:#999;
            }
        }
    }
</style>
