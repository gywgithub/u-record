import { createApp } from "vue";
import App from "./App.vue";
import router from './route'
import './styles/index.css'
import './styles/indexImp.css'
import './common/reset.css'
import {
    Col,
    Row,
    Uploader,
    SwipeCell,
    Sticky,
    Overlay,
    Popover,
    Picker,
    Skeleton,
    Button,
    ShareSheet,
    Form,
    Field,
    Toast,
    Tabbar,
    TabbarItem,
    NavBar,
    Grid,
    Tag,
    Popup,
    Dialog,
    Loading,
    List,
    PullRefresh,
    Collapse,
    CollapseItem,
    Step,
    Steps,
    Icon,
    Search,
    Switch,
    Tab,
    Tabs,
    Image as VanImage,
    GridItem
} from 'vant';
import 'vant/lib/index.css';
const instace = createApp(App);
//vant UI库组件
instace.use(Button)
       .use(Form)
       .use(Col)
       .use(Row)
       .use(ShareSheet)
       .use(Uploader)
       .use(SwipeCell)
       .use(Sticky)
       .use(Overlay)
       .use(Popover)
       .use(Picker)
       .use(Skeleton)
       .use(Toast)
       .use(Field)
       .use(Tabbar)
       .use(NavBar)
       .use(Grid)
       .use(Tag)
       .use(GridItem)
       .use(Popup)
       .use(Dialog)
       .use(Loading)
       .use(List)
       .use(PullRefresh)
       .use(Collapse)
       .use(CollapseItem)
       .use(VanImage)
       .use(Step)
       .use(Steps)
       .use(Icon)
       .use(Search)
       .use(Switch)
       .use(Tab)
       .use(Tabs)
       .use(TabbarItem);
//路由
instace.use(router);
//前置路由守卫
router.beforeEach((to,from)=>{
    //vue-router4.0中将next取消了，可写可不写，return false取消导航，undefined或者是return true验证导航通过
    if(to.meta.isTabbar){
        document.getElementById("tabbar").style.display = "block";
    }else{
        document.getElementById("tabbar").style.display = "none";
    }
});
//后置路由守卫
router.afterEach((to,from)=>{

});
//挂载程序
instace.mount('#app');
