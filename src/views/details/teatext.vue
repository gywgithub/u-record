<template>
    <div id="teatext" class="pl15 pr15">
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
            const active = ref(0);
            return {
                active
            }
        }
    })
</script>
<style lang="less" scoped>
    #teatext{
        .contentArticle{
            color:#333;
            font-size:14px;
        }
    }
</style>
