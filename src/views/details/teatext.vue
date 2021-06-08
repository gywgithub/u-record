<template>
    <div id="teatext" class="pl15 pr15">
    <van-icon name="arrow-left" color="#333" size="18" class="prveIco" @click="toPrve"/>

        <van-tabs v-model:active="active" swipeable sticky>
            <van-tab title="张三">
                <div class="contentArticle">
                    <br><h2>首先要搞清楚，自己的用途是什么</h2>
                    <br><br><h3>1.家用，办公室用，要求便宜；</h3>
                    <br><p>这类用户建议买带核心显卡的CPU，因为这样就不用买显卡了，能省下不少钱。</p>
                    <br><p>最便宜的是AMD 速龙200GE，价格400元左右，自带核显，2核4线程，家用办公足够用，玩一些小游戏也是妥妥的，建议搭配A320主板使用；</p>
                    <br><p>英特尔的G5500也很不错，2核4线程，500元左右，但性价比不如AMD速龙200GE高；</p>
                    <br><p>稍微贵一点可以买 4核的AMD 锐龙2200G；700元左右；这个CPU最大的特点是核心显卡特别强，可以100帧玩LOL\DNF等游戏，建议搭配B350主板使用</p>
                    <br><h3>2，游戏发烧友；</h3>
                    <br><p>这类用户建议买核心频率高的CPU，多核多线程起不到太大的作用。
                        装机预算在3000元左右的可以买AMD锐龙1200，4核CPU价格不到500元;
                        装机预算在5000元左右的可以买i5-8400（散片更便宜）或者AMD锐龙2600\2600X;这三个都是中端级别里销量最好的CPU；会超频想省钱就买2600，不会超频就买2600X，i5-8400要买散片才有性价比。</p>
                    <br><p>其实i5-8400、锐龙2600X这个级别的CPU就已经很强了，装机预算在1万元以下的都因该把钱加到显卡上，这样对游戏的提升最大；</p>
                    <br><p>再高级的CPU就是英特尔的天下了，因为英特尔CPU的主频更高，更适合玩游戏；推荐买i7-9700K或者i9-9900K，都是顶级的游戏CPU；</p>
                    <br><h3>3.设计；剪辑；渲染；建模</h3>
                    <br><p>这类用户建议买多核心多线程的CPU；多个核心同时工作大大加快工作渲染的效率；建议选AMD的CPU</p>
                    <br><p>预算不多的可以选AMD锐龙1700，8核16线程，1500元，性价比非常高；
                        如果有更加专业的需求，可以选工作站级别的AMD线程撕裂者系列CPU，比如32核64线程的线程撕裂者2990WX。</p>
                </div>
            </van-tab>
            <van-tab title="李四">
                <div class="contentArticle">
                    <br><h2>处理器（CPU）</h2>
                    <br><p>处理器，就是我们一般最常说的CPU，是英文“Central Processing Unit”的首字母缩写，中文意思就是“中央处理器”。</p>
                    <div><img src="../../assets/cpu.png" alt="" style="width:100%"></div>
                    <br><p>它在电脑里面是干啥的呢？顾名思义，处理器，简单理解就是处理信息的，所有对电脑操作的信息都要经过CPU处理，如用鼠标点击下游戏中的按钮，键盘输入一个字母，都要经过CPU的处理，所有电脑中的资源都由CPU指挥调度安排，它类似于人类的大脑，是电子计算机的最核心配件。一般来讲，一台电脑的性能好不好，速度快不快，主要就看CPU。</p>
                    <br><h3>关于品牌，选择英特尔（Intel）还是AMD？</h3>
                    <br><p>目前消费市场CPU品牌就两家，Intel和AMD，由于历史原因，英特尔目前市场占有率比较高，而且在过去很长的一段时间了里，英特尔一直是绝对霸主的存在，代表最先进的生产力，还曾经出现“i3默秒全”的调侃，意思是说“Intel酷睿i3处理器默认频率秒杀AMD品牌下所有处理器产品，秒了全家”，感觉AMD一直在Intel的阴影里，毕竟最早的时候AMD只是Intel的代工厂。而这一切，在2017年底AMD推出“Ryzen 锐龙”品牌而得以改变，这是AMD翻身甚至全面逆袭的转折点，凭借更先进的工艺和更多的核心，以及超线程技术，AMD正在崛起。</p>
                    <br><p>时至今日，AMD在产品性能层面已经完全可以和Intel正面硬刚了，最新的5000系列产品甚至可以碾压英特尔。AMD已经发展到7nm工艺了，而Intel还在14nm上打磨，不过也确实把14nm的产品打磨的炉火纯青，甚至可以全核上5GHz，并且也都开启了超线程技术，竞争可谓激烈，不过市场有竞争对消费者是好事</p>
                    <br><h3>上面是品牌维度的分析，那么具体如何选择呢？</h3>
                    <br><p>这个要具体情况具体分析，要考虑实际使用需求和预算，“不同需求不同选择”。</p>
                    <br><div><img src="../../assets/cpubuy.png" alt="" style="width:100%"></div>
                    <br><p>选择CPU时不止要考虑CPU，还要考虑到主板的搭配是不是可以发挥它的性能，内存的频率和CPU散热器的影响。</p>
                </div>
            </van-tab>
            <van-tab title="王五">
                <div class="contentArticle">
                    <br><h2>选购常识</h2>
                    <br><br><h3>1.选哪个CPU比较好？</h3>
                    <br><p>这个要先看自己需求和预算，没有需求和预算没办法得出结论，只能简单的说废话“一分钱一分货，一般来讲贵的好”</p>
                    <br><h3>2.要选Intel还是AMD？</h3>
                    <br><p>都可以，如果追求性价比，AMD性价比高一些，如果主要玩游戏，且对价格不敏感，建议选择英特尔Intel，英特尔Intel一般主频较高，一些游戏主要依赖主频，所以高主频的Intel玩游戏更推荐一些。（【更新修正】：AMD5000系列处理器发表后，这个说法反过来了，尤其是游戏性能，AMD的游戏性能暴增，价格也涨了，反而是英特尔成了较弱的那个，同时英特尔变成了性价比之选。所以目前情况是这样的：英特尔，性能弱一点，价格较便宜，AMD性能更强，价格也更贵。）</p>
                    <br><h3>3.CPU的有那些简单的性能分类？</h3>
                    <br><p>3.CPU的系列 (由低性能到高性能)</p>
                    <p>Intel：Celeron(赛扬)、Pentium(奔腾)、Core（酷睿） i3、i5、i7、i9系列</p>
                    <p>AMD：Athlon(速龙)、Ryzen（锐龙） R3、R5、R7、R9 系列</p>
                    <br><h3>4.我要怎么对比两个CPU型号哪个性能强？</h3>
                    <br><p>可以看CPU天梯图，类似于CPU性能排行榜，可以很容易看出哪个型号的CPU更强。</p>
                    <br><p>Tip：电子产品有一个说法是，“买新不买旧”，一般新产品，会用更新的工艺架构，性能更强，功耗更低，比较值得购买。当然有些时候，让一代的性价比很高也可以考虑，但如果是好几代前的老产品，就不要考虑了，很多淘宝商家会卖几年前的i7电脑主机，它的性能可能还不如最新的i3，主要是忽悠小白的，要注意辨别。</p>
                </div>
            </van-tab>
            <van-tab title="李六">示例四</van-tab>
            <van-tab title="陈七">示例五</van-tab>
            <van-tab title="吴八">示例六</van-tab>
            <van-tab title="王九">示例七</van-tab>
            <van-tab title="李六">示例八</van-tab>
            <van-tab title="陈七">示例九</van-tab>
            <van-tab title="查看全部" ></van-tab>
        </van-tabs>
        <div class="h70"></div>
        <van-row class="commBot borTop1">
            <van-col span="8" class="hanndleComm tac br1" @click="toTypeHanndle(2)">
                <van-icon name="star" size="20" :class="isCalled ? 'activeHannel' : ''"/>
                <p class="mt5 mb8" :class="isCalled ? 'activeHannel' : ''">收藏&nbsp;2.4万</p>
            </van-col>
            <van-col span="8" class="hanndleComm tac br1" @click="toTypeHanndle(3)" >
                <van-icon name="chat" size="20"/>
                <p class="mt5 mb8">评论(999+)</p>
            </van-col>
            <van-col span="8" class="hanndleComm tac br1" @click="toTypeHanndle(4)">
                <van-icon name="gem" size="20"/>
                <p class="mt5 mb8">投币&nbsp;369</p>
            </van-col>
        </van-row>
        <van-popup v-model:show="collectShow"
                   round
                   position="bottom"
                   :style="{ height: '40%' }">
            <van-picker
                    show-toolbar
                    title="分类列表"
                    @confirm="confirmCategory"
                    @cancel="cancelCategory"
                    :columns="columns" />
        </van-popup>
        <van-popup v-model:show="show"
                   round
                   position="bottom"
                   class="pb20"
                   :style="{ height: '90%' }">
           <div class="topFixed">
                <i class="van-badge__wrapper van-icon van-icon-close van-popup__close-icon van-popup__close-icon--top-right" role="button" tabindex="0" @click="closeComd"></i>
                <p>全部评论</p>
           </div>
            <div class="topFixedbot" @click="showCommd">
                <van-cell-group>
                    <van-field
                            v-model="value1"
                            rows="1"
                            autosize
                            label=""
                            left-icon=""
                            right-icon="share"
                            type="textarea"
                            placeholder="输入评论"/>
                </van-cell-group>
            </div>
           <div class="h50"></div>
            <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
                <van-list
                        :loading="state.loading"
                        :finished="state.finished"
                        finished-text="没有更多了"
                        style=""
                        @load="onLoad">
                    <van-cell-group>
                        <van-cell v-for="item in state.list" :key="item" :title="item.title">
                            <van-skeleton
                                    title
                                    avatar
                                    :row="3"
                                    :loading="loading">
                                <div class="demo-preview dppb">
                                    <img src="https://pic4.zhimg.com/v2-51f0f2a220b7393f463c4d44c5272056_xs.jpg?source=06d4cd63">
                                    <div class="demo-content">
                                        <div style="border-bottom:1px solid #eee;padding-bottom: 15px;">
                                            <h4>Never GiveUp <van-tag type="primary">用户</van-tag></h4>
                                            <p>年纪越大，越渐渐地明白，中国古人的智慧是无穷的。我常常感觉自己数年的学简直都白上了。可惜，考试制度决定了我们现在大部分孩子们只能学到无用的糟粕罢了。<br/><br/>愚蠢对某些人来说，是他们最喜闻乐见的东西。</p>
                                            <div class="operate-grounp">
                                                <p><van-icon name="good-job-o" class="font18-imp"/>
                                                    &nbsp;&nbsp;
                                                    <van-icon name="chat-o" @click="showCommd" class="font18-imp"/>
                                                </p>
                                                <p class="fc99">2021-05-25</p>
                                            </div>
                                        </div>
                                        <van-skeleton
                                                title
                                                avatar
                                                :row="3"
                                                :loading="loading">
                                            <div class="demo-preview" style="padding-left:0px;">
                                                <img src="https://pic1.zhimg.com/v2-3ce282564a09b373c61706db72bc21eb_s.jpg?source=06d4cd63" style="width:20px;height:20px;">
                                                <div class="demo-content pt0-imp w100">
                                                    <div style="border-bottom:1px solid #eee;padding-bottom: 15px;">
                                                        <h4>哈士奇</h4>
                                                        <p>你是认为取决于个人和时代吗？</p>
                                                        <div class="operate-grounp">
                                                            <p><van-icon name="good-job-o" class="font18-imp"/>
                                                                &nbsp;&nbsp;
                                                                <van-icon name="chat-o" @click="showCommd" class="font18-imp"/>
                                                            </p>
                                                            <p class="fc99">2021-06-15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="demo-preview" style="padding-left:0px;">
                                                <img src="https://pic1.zhimg.com/v2-ca6a6c9b98e4c7682a7c3a6370631e7f_s.jpg?source=06d4cd63" style="width:20px;height:20px;">
                                                <div class="demo-content pt0-imp w100">
                                                    <div style="border-bottom:1px solid #eee;padding-bottom: 15px;">
                                                        <h4>艾达</h4>
                                                        <p>直接起义呢，像朱元璋那样。唯一的办法是做官太绝对了</p>
                                                        <div class="operate-grounp">
                                                            <p><van-icon name="good-job-o" class="font18-imp"/>
                                                                &nbsp;&nbsp;
                                                                <van-icon name="chat-o" @click="showCommd" class="font18-imp"/>
                                                            </p>
                                                            <p class="fc99">2021-06-15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </van-skeleton>
                                    </div>
                                </div>
                                <div class="demo-preview dppb">
                                    <img src="https://pic2.zhimg.com/v2-d8581cdec1d1088827cc63225afc6cad_s.jpg?source=06d4cd63">
                                    <div class="demo-content">
                                        <h4>聊天疲劳 <van-tag type="primary">vip2</van-tag></h4>
                                        <p style="border-bottom:1px solid #eee;padding-bottom: 15px;">现在很多人要求的都是一代实现阶级跨越，否则就满心怨愤，因为我们是新国家新社会……在历史看来，没有新旧之分，都是过程的瞬间。</p>
                                        <van-skeleton
                                                title
                                                avatar
                                                :row="3"
                                                :loading="loading">
                                            <div class="demo-preview" style="padding-left:0px;">
                                                <img src="https://pic4.zhimg.com/v2-3435cadd547958e4a083a75a39e32602_s.jpg?source=06d4cd63" style="width:20px;height:20px;">
                                                <div class="demo-content pt0-imp">
                                                    <h4>西三九</h4>
                                                    <p>是呀，都是普通人，能力也不行，为什么就非想着自己能一飞冲天呢～</p>
                                                </div>
                                            </div>
                                            <div class="demo-preview" style="padding-left:0px;">
                                                <img src="https://pic1.zhimg.com/v2-76ad52b8c0021e2f832a264672397048_s.jpg?source=06d4cd63" style="width:20px;height:20px;">
                                                <div class="demo-content pt0-imp">
                                                    <h4>charliedu</h4>
                                                    <p>现在的小家庭模式不确定性太高了，抗风险能力太弱，出于本能反应，人就会表现出急功近利。可怜呀，这一代人就他一个。</p>
                                                </div>
                                            </div>
                                        </van-skeleton>
                                    </div>
                                </div>
                                <div class="demo-preview">
                                    <img src="https://pic1.zhimg.com/v2-3d3d524044b90cedb50db24659009331_s.jpg?source=06d4cd63">
                                    <div class="demo-content">
                                        <h4>lianjiecai <van-tag type="primary">vip1</van-tag></h4>
                                        <p>我越看越觉得悲哀。中国家长花巨资培养孩子，中国学生勤奋辛苦十几年才有一点可能上中国一流大学。但是其他穷弱国家的穷丑黑矮学渣屌丝却能随随便便轻轻松松地每年领着巨额奖学金上中国一流大学。这巨额奖学金却是中国人辛苦工作交的税。中国警察生三胎被辞退，黑人在中国生三胎却拿到了在中国的居留证。中国不大力培养中国寒门学生，却每年把巨资送给穷弱国家的屌丝差生在中国吃喝嫖赌。</p>
                                    </div>
                                </div>
                                <div class="demo-preview">
                                    <img src="https://pic2.zhimg.com/a9a816b4a_s.jpg?source=06d4cd63">
                                    <div class="demo-content">
                                        <h4>SEEKER <van-tag type="primary">用户</van-tag></h4>
                                        <p>然而几代人的努力实现了阶级阶层的跨越 却又因为时局的变动一夕之间便可再次跌入谷底</p>
                                    </div>
                                </div>
                            </van-skeleton>
                        </van-cell>
                    </van-cell-group>
                </van-list>
            </van-pull-refresh>
        </van-popup>
        <van-popup v-model:show="goldShow"
                   round
                   position="bottom"
                   :style="{ height: '30%' }">
            <div class="pwz" style="">
                <div class="cbFlex">
                    <div class="commBtn fc99" @click="cancelGold">取消</div>
                    <div class="commBtn fc33" @click="conmitGold">确定</div>
                </div>
            </div>
            <swiper
                    :slides-per-view="3"
                    :space-between="50"
                    centered-slides="true"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange">
                <swiper-slide v-for="item in goldList">
                    <div class="commSlide">
                        <div class="commIco">
                            <van-icon name="cash-back-record font55-imp"/>
                            <p>{{item.goldNumber}}金币</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </van-popup>
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
    import { Toast } from 'vant';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper.less';
    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const active = ref(0);
            let isLikeed = ref(false);
            let isCalled = ref(false);
            let show = ref(false);
            let loading = ref(false);
            let collectShow = ref(false);
            const titleName = "全部评论";
            const toTypeHanndle = (val) => {
                // 2:收藏 3:评论 4:投币
                if(val == 2){
                    if(isCalled.value){
                        isCalled.value = false;
                        Toast('取消收藏');
                    }else{
                        collectShow.value = true;
                    }
                }
                if(val == 3){
                    show.value = true;
                }
                if(val == 4){
                    goldShow.value = true;
                }
            };
            const columns = [
                {
                    text: '生活',
                    children: [
                        {
                            text: '做菜',
                        },
                        {
                            text: '跑步',
                        },
                        {
                            text: '备孕',
                        },
                        {
                            text: '买房',
                        },
                    ],
                },
                {
                    text: '事业',
                    children: [
                        {
                            text: '组建团队',
                        },
                        {
                            text: '拓展视野',
                        },
                        {
                            text: '精神食粮',
                        },
                        {
                            text: '高效率沟通',
                        },
                    ],
                },
            ];
            const confirmCategory = function(list){
                Toast("收藏成功");
                isCalled.value = true;
                collectShow.value = false;
            };
            const cancelCategory = function(){
                isCalled.value = false;
                collectShow.value = false;
            };
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
                    for (let i = 0; i < 1; i++) {
                        state.list.push({id:1,title:"如何购买cpu？",keywords:["cpu性能","cpu","cpu类别"],desc:"CPU是计算机的主要设备之一，功能主要是解释计算机指令以及处理计算机软件中的数据。选择CPU时不止要考虑CPU，还要考虑到主板的搭配是不是可以发挥它的性能，内存的频率和CPU散热器的影响。"});
                        state.list.push({id:2,title:"如何购买显卡？",keywords:["显卡","买显卡","显卡品牌"],desc:"显卡是计算机最基本配置、最重要的配件之一，负责主要的图形运算，所以玩大型游戏肯定需要一张强力的显卡，对于从事专业图形设计的人来说显卡也是尤为重要的."});
                    }
                    // 加载状态结束
                    state.loading = false;
                    // 数据全部加载完成
                    if (state.list.length >= 6){
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
            let currGoldObjct = {};
            let onSwiper = (swiper) => {
                console.log(swiper);
            };
            let onSlideChange = (swiper) => {
                currGoldObjct = goldList[swiper.activeIndex];
            };
            let goldShow = ref(false);
            let goldList = [{id:1,goldNumber:1},{id:2,goldNumber:2},{id:3,goldNumber:4},{id:4,goldNumber:6},{id:5,goldNumber:8},{id:6,goldNumber:10},{id:7,goldNumber:20},{id:8,goldNumber:30},{id:9,goldNumber:40},{id:10,goldNumber:50},{id:11,goldNumber:100},{id:12,goldNumber:200},{id:13,goldNumber:500},{id:14,goldNumber:800},{id:15,goldNumber:1000}];
            const cancelGold = () =>{
                goldShow.value = false;
            };
            const conmitGold = () =>{
                goldShow.value = false;
                Toast(`${currGoldObjct.goldNumber}金币投币成功`);
                console.dir(currGoldObjct);
            };
            const toPrve = function(){
                history.back();
            };
            const closeComd = function(){
                show.value = false;
            }
            return {
                active,
                toPrve,
                columns,
                closeComd,
                goldShow,
                cancelGold,
                conmitGold,
                onSwiper,
                goldList,
                onSlideChange,
                onSwiper,
                show,
                collectShow,
                isLikeed,
                isCalled,
                state,
                loading,
                onLoad,
                onRefresh,
                thingList,
                titleName,
                toTypeHanndle,
                confirmCategory,
                cancelCategory,
            }
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-icon{
        vertical-align: bottom;
        margin-top: 3px;
    }
    :deep .van-popup__close-icon--top-right{
        top: 8px;
        right: 16px;
    }
    #teatext{
        .operate-grounp{
            display: flex;
            justify-content:space-between;
        }
        .topFixedbot{
            width: 100%;
            max-height: 80%;
            overflow: scroll;
            z-index: 10;
            background-color: #fff;
            position: fixed;
            left:0px;
            bottom: 0px;
        }
        .topFixed{
            text-align: center;
            height: 45px;
            width: 100%;
            background: #fff;
            line-height: 45px;
            z-index: 10;
            position: fixed;
            border-radius: 30px 30px;
        }
        .prveIco{
            position: fixed;
            left: 8px;
            top: 11px;
            z-index: 888;
        }
        .swiper-container {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            transition: 300ms;
            transform: scale(0.8);
            color: #999;
        }
        .swiper-slide-active,.swiper-slide-duplicate-active{
            transform: scale(1);
            color: #000;
        }
        .font55-imp{
            font-size:40px;
        }
        .pwz{
            position:fixed;
            width:100%;
            z-index: 10;
        }
        .cbFlex{
            display:flex;
            justify-content:space-between;
            align-items: center;
        }
        .commBtn{
            width:20%;
            height:45px;
            text-align: center;
            line-height: 45px;
            font-size:14px;
        }
        .commSlide{
            display:flex;
            justify-content:center;
            align-content:center;
        }
        .commIco{
            width:60px;
            height:60px;
            border-radius: 25px;
        }
        .contentArticle{
            color:#333;
            font-size:14px;
        }
        .activeHannel{
            color:#1989fa;
        }
        .hanndleComm{
            color: #646566;
            font-size: 13px;
            cursor: pointer;
        }
         .commBot{
            position: fixed;
            bottom: 0px;
            left:0px;
            right:0px;
            background-color: #ffffff;
        }
        .borTop1{
            border-top:1px solid #f1f1f1;
        }
        .mb8{
            margin-bottom: 8px;
        }
        .br1{
            border-right: 1px solid #f1f1f1;
        }
        .demo-skeleton ,.demo-preview{
            display: flex;
            padding: 0 16px;
        }
        .dppb{
            padding-bottom: 20px;
            border-bottom:1px solid #e3e3e3;
        }
        .demo-skeleton ,.demo-preview img {
            -webkit-flex-shrink: 0;
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            margin-right: 10px;
            border-radius: 15px;
        }
        .demo-skeleton  ,.demo-content {
            padding-top: 6px;
        }
        .demo-skeleton ,.demo-preview ,.demo-content h3 {
            margin: 0;
            font-size: 18px;
            line-height: 20px;
        }
        .demo-skeleton ,.demo-preview ,.demo-content p {
            margin: 13px 0 0;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>
