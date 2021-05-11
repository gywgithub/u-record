<template>
    <div id="timeline">
        <!-- 模糊搜索，搜索内容是标题； 如：如何购买cpu？-->
        <van-search
                v-model="value"
                placeholder="搜索关键词"/>
        <van-collapse
                v-model="activeName"
                is-link="false"
                right-icon="star-o"
                accordion>
            <van-collapse-item title="如何购买cpu？" name="1">
                <p @click="toTextPage">CPU是计算机的主要设备之一，功能主要是解释计算机指令以及处理计算机软件中的数据。选择CPU时不止要考虑CPU，还要考虑到主板的搭配是不是可以发挥它的性能，内存的频率和CPU散热器的影响。</p>
                <!--展示当前问题的子级问题，最多10条  获得金币最多的回答 > 收藏最多 >  喜欢最多 > 浏览次数最多 >  创建时间-->
                <p class="linkUrl">家用，办公CPU如何选？</p>
                <p class="linkUrl">CPU购买盒装还是散片？</p>
            </van-collapse-item>
            <van-collapse-item title="如何购买显卡？" name="2">
                <p>显卡是计算机最基本配置、最重要的配件之一，负责主要的图形运算，所以玩大型游戏肯定需要一张强力的显卡，对于从事专业图形设计的人来说显卡也是尤为重要的.</p>
                <p class="linkUrl">显卡的主要用途是什么？</p>
                <p class="linkUrl">生产显卡的主要厂家有哪些？</p>
                <p class="linkUrl">显卡买A卡好，还是N卡好？</p>
            </van-collapse-item>
            <van-collapse-item title="如何购买主板？" name="3">
                <!-- 获得金币最多的回答 > 收藏最多 >  喜欢最多 > 浏览次数最多 >  创建时间 -->
                <p data-rule="这条内容获取规则如上">主板一定是根据CPU来选择的，本文的目的就是教小白如何选择适合自己CPU的主板。</p>
                <p class="linkUrl">主板主流品牌有哪些？</p>
                <p class="linkUrl">主板芯片组如何选？</p>
                <p class="linkUrl">主板版型如何选？</p>
            </van-collapse-item>
            <van-collapse-item title="如何购买显示器？" name="4">
                <p>电脑显示器得益于手机屏幕技术进步，这几年层出不穷的新技术也逐步提高了使用者对屏幕的要求，一台好的显示器不但可以提高我们的工作效率，还可以进一步提高我们游戏体验</p>
                <p class="linkUrl">广色域显示器有哪些优点？</p>
                <p class="linkUrl">分辨率和 PPI的区别？</p>
                <p class="linkUrl">专业电竞游戏对刷新率, 响应时间合格线？</p>
                <p class="linkUrl">面板类型分类？</p>
                <p class="linkUrl">为什么用 NTSC 描述显示器色域是不专业的？</p>
            </van-collapse-item>
        </van-collapse>
<!--        <div class="timelineGrounp">-->
<!--            <p class="timelineTitle">如何购买cpu？</p>-->
<!--            <p>显卡是计算机最基本配置、最重要的配件之一，负责主要的图形运算，所以玩大型游戏肯定需要一张强力的显卡，对于从事专业图形设计的人来说显卡也是尤为重要的.</p>-->
<!--        </div>-->
<!--        <div class="cascade">-->
<!--                <li>如何组装电脑？</li>-->
<!--                <li>如何自己装机？</li>-->
<!--        </div>-->
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
    export default defineComponent({
        setup() {
            const id = ref(1);
            const activeName = ref('1');
            const value = ref('');
            const childActiveName = ref(['1']);
            const active = ref(0);
            const active2 = ref(9);
            const router = useRouter();
            const toTextPage = ()=>{
                router.push({
                    path:'/teatext',
                    query:{name:'阿强'}
                })
            };
            return {
                id,
                value,
                active,
                active2,
                activeName,
                childActiveName,
                toTextPage
            }
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-steps {
        overflow: hidden;
        background-color: #f2f2f2;
    }
    :deep .van-cell__title span{
        font-size: 15px;
        color: #333;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    #timeline{
        height:100%;
        background-color: #f2f2f2;
    }
    .linkUrl{
        margin-top:10px;
        color: #1989fa;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    .timelineGrounp{
        background-color:#fff;
        border-radius: 10px;
        .timelineTitle{
            font-size:18px;
            color:#333;
            font-weight: 500;
            margin-bottom: 18px;
        }
        p{
            font-size:14px;
            color:#666;
        }
    }
    .cascade{
        padding-left: 24px;
        margin-top: 18px;
        ul{
            list-style:disc;
        }
    }
</style>
