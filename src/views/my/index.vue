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
            </van-col>
        </van-row>
        <van-cell title="我的象币" icon="balance-list-o">
            <template #right-icon>
                <van-cell title="单元格" is-link />
            </template>
        </van-cell>
        <van-row class="mt20">
            <van-col span="24">
                <div class="van-cell">
                    <i class="van-icon van-icon-user-circle-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>个人信息</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
                <div class="van-cell">
                    <i class="van-icon van-icon-balance-list-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>我的象币</span></div>
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
                <div class="van-cell">
                    <i class="van-icon van-icon-location-o van-cell__left-icon"></i>
                    <div class="van-cell__title"><span>关于我们</span></div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>
            </van-col>
        </van-row>
        <van-row class="h40 mt35" gutter="10">
            <van-col span="8" class="tac font14 lh40  systemPresetBgColor">意见反馈</van-col>
            <van-col span="8" class="tac font14 lh40 bd3f1 systemPresetBgColor">关于我们</van-col>
            <van-col span="8" class="tac font14 lh40  systemPresetBgColor">退出登录</van-col>
        </van-row>
        <van-row class="mt10">
            <van-col span="6" offset="9">
                <img src="@/assets/elephant.png" alt="" class="icoElephant">
            </van-col>
        </van-row>
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
    export default defineComponent({
        setup() {
            const id = ref(1);
            return {
                id
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
    }
</style>
