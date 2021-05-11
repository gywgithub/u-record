<template>
    <div id="feedback">
        <!--一个用户最多同时能对10个问题，进行建议或交流-->
        <van-tabs v-model="active">
            <van-tab title="全部" name="a" >
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item  name="1">
                        <template #title>
                            如何购买cpu?
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <h4>已关闭</h4>
                                <!--作者或用户7天内无任何相应，该问答自动关闭-->
                                <p>2016-07-19 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】i5完全够用,办公没问题的</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，我本人想买一个办公的电脑，i5处理器够用吗？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                    <van-collapse-item  name="2">
                        <template #title>
                            如何购买显卡？
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <!--最后一个节点是用户回复的， 则属于作者的未反馈
                               最后一个节点是作者回复的， 则属于用户的未反馈-->
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】GTX1060够用玩lol没问题,大型游戏估计有点吃力</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，玩英雄联盟，GTX1060够用吗？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                    <van-collapse-item  name="3">
                        <template #title>
                            如何购买主板？
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <!--最后一个节点是用户回复的， 则属于用户已反馈
                               最后一个节点是作者回复的， 则属于作者的已反馈-->
                                <h4>【作者】不用谢，记的点赞哦！</h4>
                                <p>2016-07-16 22:10:35</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】S系列 XQB60/70-Q85S</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，您买的三星主板是那个型号啊？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="未反馈" name="b" badge="5">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item  name="1">
                        <template #title>
                            如何购买显卡？
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <!--最后一个节点是用户回复的， 则属于作者的未反馈
                               最后一个节点是作者回复的， 则属于用户的未反馈-->
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】GTX1060够用玩lol没问题,大型游戏估计有点吃力</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，玩英雄联盟，GTX1060够用吗？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="已反馈" name="c" >
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item  name="1">
                        <template #title>
                            如何购买主板？
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <!--最后一个节点是用户回复的， 则属于用户已反馈
                               最后一个节点是作者回复的， 则属于作者的已反馈-->
                                <h4>【作者】不用谢，记的点赞哦！</h4>
                                <p>2016-07-16 22:10:35</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】S系列 XQB60/70-Q85S</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，您买的三星主板是那个型号啊？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="已关闭" name="d">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item  name="1">
                        <template #title>
                            如何购买cpu?
                        </template>
                        <van-steps direction="vertical" :active="0">
                            <van-step>
                                <h4>已关闭</h4>
                                <!--作者或用户7天内无任何相应，该问答自动关闭-->
                                <p>2016-07-19 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】好的，谢谢</h4>
                                <p>2016-07-12 15:30:35</p>
                            </van-step>
                            <van-step>
                                <h4>【作者】i5完全够用,办公没问题的</h4>
                                <p>2016-07-12 12:40:21</p>
                            </van-step>
                            <van-step>
                                <h4>【张三】你好，我本人想买一个办公的电脑，i5处理器够用吗？</h4>
                                <p>2016-07-11 10:00:23</p>
                            </van-step>
                        </van-steps>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
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
            const active = ref('a');
            const activeName = ref('1');
            return {
                active,
                activeName
            }
        }
    })
</script>
<style lang="less" scoped>
    :deep .van-step__title h4{
        line-height: 24px;
    }
    :deep .van-step__title p{
        margin-top:5px;
    }
    #feedback{
        margin-bottom: 60px;
        .contentArticle{
            padding:10px;
            padding-bottom: 80px;
            color:#333;
            font-size:14px;
        }
    }
</style>
