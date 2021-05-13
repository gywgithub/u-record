<template>
    <router-view />
    <van-tabbar id="tabbar" v-model="active" placeholder safe-area-inset-bottom class="">
        <van-tabbar-item icon="tv-o" @click="toTypePage(2)">娱乐</van-tabbar-item>
        <van-tabbar-item icon="chat-o" @click="toTypePage(1)" dot>消息</van-tabbar-item>
        <van-tabbar-item icon="apps-o" @click="toTypePage(0)">推荐</van-tabbar-item>
        <van-tabbar-item icon="records" @click="toTypePage(4)">随笔</van-tabbar-item>
        <van-tabbar-item icon="contact" @click="toTypePage(3)">我的</van-tabbar-item>
    </van-tabbar>
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
import {useRoute,useRouter} from 'vue-router'
export default defineComponent({
  name: "App",
  components: {

  },
  setup(){
      const tabbara = reactive({
          active: 2
      });
      const router = useRouter();
      const toWorkCategorys = () =>{
          router.push({
              path:'/my',
              query:{name:''}
          })
      };
      const toLifeCategorys = ()=>{
          router.push({
              path:'/feedback',
              query:{name:''}
          })
      };
      const toCareerCategorys = ()=>{
          router.push({
              path:'/careerCategorys',
              query:{name:''}
          })
      };
      const toDiaryCategorys = ()=>{
          router.push({
              path:'/diaryCategorys',
              query:{name:''}
          })
      };
      const toRecommendCategorys = ()=>{
          router.push({
              path:'/recommendCategorys',
              query:{name:''}
          })
      };
      const toAmusement = ()=>{
          router.push({
              path:'/amusement',
              query:{name:''}
          })
      };
      return {
          toWorkCategorys,
          toLifeCategorys,
          toCareerCategorys,
          toDiaryCategorys,
          toRecommendCategorys,
          toAmusement,
          ...toRefs(tabbara)
      }
  },
  methods:{
      toTypePage(type) {
          if(type == 0){
              this.toRecommendCategorys();
          }
          if(type == 1){
              this.toLifeCategorys();
          }
          if(type == 2){
              this.toAmusement();
          }
          if(type == 3){
              this.toWorkCategorys();
          }
          if(type == 3){
              this.toWorkCategorys();
          }
          if(type == 4){
              this.toDiaryCategorys();
          }
      },
  }
});
</script>

<style lang="less" scoped>
#app{
    height:100%;
}
</style>
