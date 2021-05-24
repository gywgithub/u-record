<template>
    <div class="fixTabbar">
        <van-dropdown-menu active-color="#1989fa" class="btbor1">
            <van-dropdown-item v-model="valueMenu1" class="brbor1" :options="option1" @change="getDyChildMenu(option1[valueMenu1],1)"/>
            <van-dropdown-item v-model="valueMenu2" :options="option2" @change="getDyChildMenu(option2[valueMenu2],2)"/>
        </van-dropdown-menu>
    </div>
    <div class="h50"></div>
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list
                :loading="state.loading"
                :finished="state.finished"
                finished-text=""
                style="background-color: #F1F1F1;"
                @load="onLoad">
            <van-cell-group>
                <van-cell v-for="item in state.list" :key="item" :title="item.title" @click="toAmusementDetail(item)">
                    <div class="thingWarp">
                        <p class="thingTitle">{{item.title}}</p>
                        <div class="thingInfo">
                            <van-image round
                                       width="20px"
                                       height="20px"
                                       :src="item.imgUrl"/>
                            <span class="thingInfoStyle">{{item.nickName}}</span>
                            <div class="moreHanndle" @click.stop="showShare = true"><van-icon name="ellipsis" /></div>
                        </div>
                        <p class="thingBrief">{{item.desc}}</p>
                        <div class="thingInfo mt14">
                            <span class="thingInfoHanndle"><span>5689&nbsp;赞同</span></span>
                            <span class="thingInfoHanndle"><span>&nbsp;&nbsp;•&nbsp;&nbsp;1.2&nbsp;万条评论</span></span>
                        </div>
                    </div>
                </van-cell>
            </van-cell-group>
        </van-list>
    </van-pull-refresh>
    <van-share-sheet
            v-model:show="showShare"
            title=""
            :options="optionsDownSelect"
            @select="onOpenDownSelect"/>
    <van-overlay v-model:show="loddingshow"  @click="loddingshow = true"  >
        <div class="wrapper" @click.stop>
            <van-loading size="24px">
                请求中...
            </van-loading>
        </div>
    </van-overlay>
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
    import { Toast,Popover } from 'vant'
    export default defineComponent({
        setup() {
            let  valueMenu1 = ref(0);
            let  valueMenu2 = ref(0);
            const loddingshow = ref(false);
            let  getDyChildMenu = function(item,type){
                if(type == 2){ console.log(item.text); return;}
                valueMenu2.value = 0;
                loddingshow.value = true;
                if(item.text == "默认" || item.text == "生活"){
                    Object.assign(option2,[
                        { id:1 , text: '默认', value: 0 },
                        { id:2 , text: '做菜', value: 1 },
                        { id:3 , text: '跑步', value: 2 },
                        { id:4 , text: '备孕', value: 3 },
                        { id:5 , text: '买房', value: 4 }
                    ]);
                }
                if(item.text == "事业"){
                    Object.assign(option2,[
                        { id:1 , text: '默认', value: 0 },
                        { id:2 , text: '组建团队', value: 1 },
                        { id:3 , text: '拓展视野', value: 2 },
                        { id:4 , text: '精神食粮', value: 3 },
                        { id:5 , text: '高效率沟通', value: 4 }
                    ]);
                }
                setTimeout(function(){
                    loddingshow.value = false;
                },1000)
            };
            let stateMenu = reactive({
                value1: 0,
                value2: 'a',
            });
            let option1 = reactive([
                { id:1 , text: '默认', value: 0 },
                { id:2 , text: '生活', value: 1 },
                { id:3 , text: '事业', value: 2 },
            ]);
            let option2 = reactive([
                { id:1 , text: '默认', value: 0 },
                { id:2 , text: '做菜', value: 1 },
                { id:3 , text: '跑步', value: 3 },
                { id:4 , text: '备孕', value: 4 },
                { id:5 , text: '买房', value: 5 }
            ]);
            const showShare = ref(false);
            const optionsDownSelect = [
                [
                    { name: '稍后看', icon: 'http://mym.youmias.com/static/img/books.png?v=12' },
                    { name: '复制链接', icon: 'link' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: 'QQ', icon: 'qq' },
                ]
            ];
            const onOpenDownSelect = (option) => {
                showShare.value = false;
            };
            const router = useRouter();
            const thingList = ref([]);
            const state = reactive({
                list: thingList,
                loading: false,
                finished: false,
                refreshing: false,
            });
            const toAmusementDetail = (item) =>{
                router.push({
                    path:'/amusementDetail',
                    query:{problemName:item.title,detailType:item.id}
                })
            };
            const onLoad = () => {
                state.loading = true;
                // 异步更新数据
                setTimeout(() => {
                    if(state.refreshing) {
                        state.list = [];
                        state.refreshing = false;
                    }
                    for (let i = 0; i < 1; i++) {
                        state.list.push({id:1,title:"有哪些你珍藏了许久的话？",nickName:"你在说笑吗",imgUrl:"https://pic3.zhimg.com/50/v2-8eec876e91556451c12d64601613ddf8_s.jpg",signature:"一个积极向上⬆️的美少女 好物V❤️Aixun_940412",keywords:["句子","情话","珍藏的句子"],desc:"1.你没理解我的那些瞬间,我从来没怪过你,你也可以永远长不大,可我不能永远没有安全感。 2.你不来找我 我也没办法说想你。3.很多事情我能想通 也能接受 但我很难过"});
                    }
                    // 加载状态结束
                    state.loading = false;
                    // 数据全部加载完成
                    if (state.list.length >= 2){
                        state.finished = true;
                    }
                }, 1000);
            };
            const onRefresh = () => {
                // 清空列表数据
                state.finished = false;
                //重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                state.loading = true;
                onLoad();
            };
            return {
                state,
                onLoad,
                onRefresh,
                stateMenu,
                loddingshow,
                showShare,
                valueMenu1,
                valueMenu2,
                getDyChildMenu,
                option1,
                option2,
                optionsDownSelect,
                onOpenDownSelect,
                toAmusementDetail
            };
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-icon {
        vertical-align: top;
    }
    :deep .van-popover__wrapper {
        margin-right:10px;
    }
    :deep .van-dropdown-menu__item:first-child{
        border-right: 1px solid #F1F1F1;
    }
    .van-overlay{
        z-index: 10;
    }
    .fixTabbar{
        position: fixed;
        width:100%;
        height:50px;
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
    .setFontSize{
        font-size:26px;
    }
    .categoryList{
        display: flex;
    }
    .btbor1{
        border-bottom: 1px solid #F1F1F1;
    }
    .thingWarp{
        overflow: hidden;
        height:160px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        background-color:#FFFFFF;
        color: #333;
        font-size:15px;
        .mt14{
            margin-top:14px;
        }
    }
    .thingkeyword{
        font-size: 12px;
        color: #1989fa;
        margin-top: 10px;
        .keywordMl10{
            margin-left:6px;
        }
    }
    .thingTitle{
        margin-top:10px;
        margin-bottom: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:2; //显示的行
    }
    .thingInfo{
        display: flex;
        margin-bottom: 15px;
        align-items: center;
        position: relative;
    }
    .thingInfoStyle{
        margin-left:9px;
        font-size: 12px;
        color: #999;
    }
    .moreHanndle{
        font-size: 20px;
        color: #999;
        position: absolute;
        right: 0px;
    }
    .thingInfoHanndle{
        font-size: 14px;
        color: #999;
        span{
            line-height: 14px;
        }
    }
    .thingBrief{
        font-size:12px;
        color:#666;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp:2; //显示的行
        line-height: 20px;
    }
</style>
