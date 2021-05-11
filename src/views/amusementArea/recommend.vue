<template>
    <!-- 模糊搜索 ，关键词  >  title标题-->
    <van-search
            v-model="value"
            label=""
            placeholder="请输入搜索关键词">
    </van-search>
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list
                :loading="state.loading"
                :finished="state.finished"
                finished-text="没有更多了"
                style="margin-bottom: 60px;background-color: #F1F1F1;"
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
            const value = ref('');
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
                    for (let i = 0; i < 2; i++) {
                        state.list.push({id:1,title:"有哪些你珍藏了许久的话？",nickName:"你在说笑吗",imgUrl:"https://pic3.zhimg.com/50/v2-8eec876e91556451c12d64601613ddf8_s.jpg",signature:"一个积极向上⬆️的美少女 好物V❤️Aixun_940412",keywords:["句子","情话","珍藏的句子"],desc:"1.你没理解我的那些瞬间,我从来没怪过你,你也可以永远长不大,可我不能永远没有安全感。 2.你不来找我 我也没办法说想你。3.很多事情我能想通 也能接受 但我很难过"});
                        state.list.push({id:2,title:"一个精英的诞生，家庭因素有多大？",nickName:"非非非常喜欢德约",imgUrl:"https://pic2.zhimg.com/50/v2-c6ce10ffbe13f6f141512b7440ebbcb2_s.jpg",signature:"一个积极向上⬆️的美少女 好物V❤️Aixun_940412",keywords:["显卡","买显卡","显卡品牌"],desc:"很多人有个误区，他们说现在的社会“上升通道逐渐关闭”、“阶层日益固化”，是社会病了。但其实，这才是社会原本的常态。中国过去的两千年里，大部分时间都是如此。西方"});
                        state.list.push({id:3,title:"北京有哪些深藏不露的餐馆？",nickName:"不疯魔不成活",imgUrl:"https://img01.yzcdn.cn/vant/cat.jpeg",signature:"一个积极向上⬆️的美少女 好物V❤️Aixun_940412",keywords:["主板"],desc:"（本答案只涉及北京东边区域，西边的北京对我来说就是外国。）只推荐平价，TRB这种虽然知道的不算太多也不算太少，但还是以后写在“北京壕餐厅”这样的问题里吧"});
                        state.list.push({id:4,title:"有哪些比较好吃的泡面/方便面推荐？",nickName:"露露思密达",imgUrl:"https://pic3.zhimg.com/50/v2-932345ead83ad103c950ed40ccf33abf_s.jpg",signature:"一个积极向上⬆️的美少女 好物V❤️Aixun_940412",keywords:["27寸显示器","色域","ips"],desc:"本泡面达人激动地张牙舞爪！！！是时候给大伙儿掏出我TOP5的泡面清单了！！温馨提醒：为了维持大家与舍友之间的友好关系，保持相亲相爱、杜绝刀光剑影，不建议在夜深人静时悄咪咪吃以下10款泡面。"});
                    }
                    // 加载状态结束
                    state.loading = false;
                    // 数据全部加载完成
                    if (state.list.length >= 36){
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
                value,
                onLoad,
                onRefresh,
                showShare,
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
    .setFontSize{
        font-size:26px;
    }
    .categoryList{
        display: flex;
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
