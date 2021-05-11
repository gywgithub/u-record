<template>
    <van-form>
        <van-field
                v-model="loginInfomation.username"
                name="账户"
                label="账户"
                placeholder="手机号/邮箱"
                :rules="[{ required: true, message: '请填写账户' }]"/>
        <van-field
                v-model="loginInfomation.password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"/>
        <div style="margin: 16px;">
            <van-button round block type="info" class="sub-btn" @click="submitLogin">提交</van-button>
        </div>
    </van-form>
</template>

<script>
    /*
    * @ reactive和ref的异同？
    * 1：都是定义响应式数据的函数
    * 2：reactive适用代理引用类型值的值，自带深度监听功能，ref则适用基本类型值，不带深度监听
    * 3：ref取值要val.value 例：let bol = ref(false) ; console.log(bol.value);
    *
    * @toRef和toRefs和ref的区别？
    * 1：ref是拷贝行为  数据改变，ui不变
    * 2：toRef和toRefs是引用指针增加  数据改变，ui会变
    * 3：toRef是修改某个对象的单个属性，toRef 修改某个对象的多个属性
    *
    * */
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
    import user from '@/controller/user'
    import {Toast} from "vant";
    export default defineComponent({
        components:{

        },
        setup(){
            const loginInfomation =  reactive({
                username: '',
                password: ''
            });
            const router = useRouter();
            const toLogin = ()=>{
                router.push({
                    path:'/login',
                    query:{}
                })
            };
            return {
                toLogin,
                loginInfomation
            }
        },
        methods:{
            submitLogin() {
                let params = {
                    "mobile" : this.loginInfomation.username,
                    "password" : this.loginInfomation.password,
                    "profession" : "web前端"
                };
                user.regiter(params).then((res) =>{
                    if(res.code == '200'){
                        this.toLogin();
                    }else{
                        Toast(res.msg);
                    }
                });
            }
        }
    })
</script>

<style lang="less">
    .sub-btn{
        color: #fff;
        background-color: #1989fa;
        border: 1px solid #1989fa;
    }
</style>
