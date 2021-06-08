<template>
    <div id="userTeam">
        <van-search
                v-model="value"
                shape="round"
                placeholder="请输入用户ID"
                input-align="center"/>
        <div class="userList mt30">
            <div class="userItem">
                <div class="asstes">
                    <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" class="imgUser">
                    <span>张起码</span>
                </div>
                <p @click="dialogLinks"><van-icon name="plus"/>添加</p>
            </div>
            <div class="userItem">
                <div class="asstes">
                    <img src="https://pic2.zhimg.com/50/v2-c6ce10ffbe13f6f141512b7440ebbcb2_s.jpg" alt="" class="imgUser">
                    <span>张笑啥</span>
                </div>
                <p @click="dialogLinks"><van-icon name="plus"/>添加</p>
            </div>
            <div class="userItem">
                <div class="asstes">
                    <img src="https://pic3.zhimg.com/50/v2-8eec876e91556451c12d64601613ddf8_s.jpg" alt="" class="imgUser">
                    <span>刘妮妮</span>
                </div>
                <p @click="dialogLinks"><van-icon name="plus"/>添加</p>
            </div>
        </div>
        <van-dialog v-model:show="show"
                    title="联系方式"
                    :show-cancel-button="false"
                    :show-confirm-button="false">
            <div class="mb30 ml15 mr15 mt15 linksGroup">
                <!--用户必须同意公开手机号、微信号、QQ号等联系方式才可让其它用户获取-->
                <van-button type="success" @click="getLinkFn(1)">手机号<br><span class="linkGold">-3金币</span></van-button>
                <van-button type="success" @click="getLinkFn(2)">微信号<br><span class="linkGold">-2金币</span></van-button>
                <van-button type="success" @click="getLinkFn(3)">QQ号<br><span class="linkGold">-1金币</span></van-button>
            </div>
        </van-dialog>
        <van-overlay v-model:show="loddingshow"  @click="loddingshow = true"  >
            <div class="wrapper" @click.stop>
                <van-loading size="24px">
                    请求中...
                </van-loading>
            </div>
        </van-overlay>
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
    import {Dialog, Toast} from 'vant';
    export default defineComponent({
        setup() {
            const value = ref('');
            const show = ref(false);
            const loddingshow = ref(false);
            const dialogLinks = function(){
                show.value = true;
            };
            const getLinkFn = function(val){
                show.value = false;
                loddingshow.value = true;
                setTimeout(function(){
                    loddingshow.value = false;
                    let name = "",msg='';
                    if(val == 1){
                        name = "手机号";
                        msg = '<b>15600117320</b>'
                    }
                    if(val == 2){
                        name = "微信号";
                        msg = '<b>jop2412</b>'
                    }
                    if(val == 3){
                        name = "QQ号";
                        msg = '<b>1297416879</b>'
                    }
                    Dialog.alert({
                        title: name,
                        confirmButtonText:'复制',
                        allowHtml:true,
                        message: msg,
                        theme: 'round-button'
                    }).then(() => {
                        Toast("复制成功");
                    });
                },1000);
            };
            return {
                value,
                show,
                getLinkFn,
                loddingshow,
                dialogLinks
            }
        },
        components:{
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-overlay{
        z-index: 3;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
    .linksGroup{
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        font-weight: bold;
        .linkGold{
            font-size: 12px;
            color:red;
        }
    }
    .voerlay{
        display: flex;
        justify-items: center;
        align-items: center;
        margin:0px auto;
    }
    .userList{
        overflow: hidden;
        .userItem{
            display: flex;
            justify-content: space-between;
            justify-items: center;
            align-items: center;
            height:45px;
            padding-left:10px;
            padding-right: 10px;
            background-color: #F1F1F1;
            font-size: 14px;
            line-height: 14px;
            margin-top:10px;
            .asstes{
                display: flex;
                justify-items: center;
                align-items: center;
                .imgUser{
                    margin-right: 12px;
                    width:30px;
                    height: 30px;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
