<template>
    <!-- 精确搜索 ，关键词 >  title标题-->
    <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            action-text="筛选"
            @search="onSearch"
            @cancel="onCancel"
    />
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list
                :loading="state.loading"
                :finished="state.finished"
                finished-text="没有更多了"
                style="margin-bottom: 60px;background-color: #F1F1F1;"
                @load="onLoad">
            <van-cell v-for="item in state.list" :key="item" :title="item" @click="toDetailPage(item)">
                <div class="thingWarp">
                    <p class="thingTitle">{{item.title}}</p>
                    <div class="thingInfo">
                        <van-image round
                                width="15px"
                                height="15px"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
                        <span class="thingInfoStyle">生活 • 标签一</span>
                    </div>
                    <p class="thingBrief">{{item.desc}}</p>
<!--                    <p class="thingkeyword">关键词-->
<!--                        <span class="keywordMl10" v-for="citem in item.keywords" :key="citem">-->
<!--                            {{citem}}-->
<!--                        </span>-->
<!--                    </p>-->
                    <div class="thingInfo mt14">
                        <span class="thingInfoHanndle"><van-icon name="star-o"/>&nbsp;<span>325</span></span>
                        <span class="thingInfoHanndle">&nbsp;&nbsp;&nbsp;<van-icon name="balance-o"/>&nbsp;<span>56</span></span>
                        <span class="thingInfoHanndle">&nbsp;&nbsp;&nbsp;<van-icon name="like-o"/>&nbsp;<span>626</span></span>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </van-pull-refresh>
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
    import { Toast } from 'vant'
    export default defineComponent({
        setup() {
            const activeName = ref('1');
            const value = ref('');
            const checked = ref(true);
            const onSearch = () => Toast("搜索关键词");
            const onCancel = () => Toast('筛选');
            const thingList = ref([]);
            const state = reactive({
                list: thingList,
                loading: false,
                finished: false,
                refreshing: false,
            });
            const onLoad = () => {
                state.loading = true;
                // 异步更新数据
                setTimeout(() => {
                    if(state.refreshing) {
                        state.list = [];
                        state.refreshing = false;
                    }
                    for (let i = 0; i < 2; i++) {
                        state.list.push({id:1,title:"如何购买cpu？",keywords:["cpu性能","cpu","cpu类别"],desc:"CPU是计算机的主要设备之一，功能主要是解释计算机指令以及处理计算机软件中的数据。选择CPU时不止要考虑CPU，还要考虑到主板的搭配是不是可以发挥它的性能，内存的频率和CPU散热器的影响。"});
                        state.list.push({id:2,title:"如何购买显卡？",keywords:["显卡","买显卡","显卡品牌"],desc:"显卡是计算机最基本配置、最重要的配件之一，负责主要的图形运算，所以玩大型游戏肯定需要一张强力的显卡，对于从事专业图形设计的人来说显卡也是尤为重要的."});
                        state.list.push({id:3,title:"如何购买主板？",keywords:["主板"],desc:"主板一定是根据CPU来选择的，本文的目的就是教小白如何选择适合自己CPU的主板。"});
                        state.list.push({id:4,title:"如何购买显示器？",keywords:["27寸显示器","色域","ips"],desc:"电脑显示器得益于手机屏幕技术进步，这几年层出不穷的新技术也逐步提高了使用者对屏幕的要求，一台好的显示器不但可以提高我们的工作效率，还可以进一步提高我们游戏体验"});
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
            onMounted(() => {
                console.log('onMounted')
            });
            const router = useRouter();
            const toDetailPage = (item)=>{
                console.log(item);
                router.push({
                    path:'/timeline',
                    query:{name:'阿强'}
                })
            };
            return {
                state,
                value,
                onLoad,
                onRefresh,
                onSearch,
                onCancel,
                activeName,
                checked,
                toDetailPage
            };
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-icon {
        vertical-align: top;
    }
    .thingWarp{
        overflow: hidden;
        height:150px;
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
        vertical-align: middle;
        margin-bottom: 15px;
    }
    .thingInfoStyle{
        margin-left:9px;
        font-size: 12px;
        color: #999;
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
    }
</style>
