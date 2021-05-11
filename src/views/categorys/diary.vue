<template>
    <div id="diary">
        <van-row>
            <van-col span="22" offset="1">
                <van-form  class="mt15">
                    <h4 class="titleTxt">标题</h4>
                    <van-field v-model="value"
                               label=""
                               class="titleStyle mt20"
                               placeholder="40字内" />
                    <h4 class="titleTxt mt30">内容</h4>
                    <van-cell-group>
                        <van-field
                                v-model="message"
                                rows="5"
                                label=""
                                show-word-limit
                                autosize
                                maxlength="2000"
                                type="textarea"
                                class="textareaStyle mt20"
                                placeholder="请输入"/>
                    </van-cell-group>
                </van-form>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="22" offset="1">
                <h4 class="titleTxt mt30">所属分类</h4>
                <van-field
                        readonly
                        clickable
                        center
                        label=""
                        class="categoryStyle mt20"
                        :value="state.valueCategory"
                        :placeholder="state.valueCategory"
                        @click="state.showPicker = true"/>
                <van-popup v-model:show="state.showPicker" round position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="columns"
                            @cancel="state.showPicker = false"
                            @confirm="onConfirm"
                            @change="onChange"
                    />
                </van-popup>
                <h4 class="titleTxt mt30">上传图片</h4>
                <van-uploader
                        class="mt20"
                        v-model="fileList"
                        multiple
                        max-count="3" />
            </van-col>
        </van-row>
        <van-row class="mt20 mb20">
            <van-col span="22" offset="1">
                <van-button type="primary" round size="large">提交</van-button>
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
    import { useRoute, useRouter } from 'vue-router'
    import { Toast } from 'vant'
    export default defineComponent({
        setup() {
            const message = ref('');
            const value = ref('');
            const fileList = ref([{url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg'}]);
            const columns = ref(['默认', '战争历史']);
            let state = reactive({
                valueCategory: '默认',
                showPicker: false
            });
            const onConfirm = (value) => {
                state.showPicker = false;
                state.valueCategory = value;
                console.dir(state.valueCategory);
            };
            const onChange = (value) => {
            };
            return {
                fileList,
                state,
                columns,
                onConfirm,
                onChange,
                message,
                value
            };
        }
    })
</script>
<style lang="less" scoped>
    .textareaStyle{
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .titleStyle{
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .categoryStyle{
        border:1px solid #ccc;
        border-radius: 5px;
    }
    .titleTxt{
        font-size: 15px;
        color: #666;
        font-weight: 700;
    }
</style>
