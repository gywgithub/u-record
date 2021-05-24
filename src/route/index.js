import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Recommend',
        component: () => import('../views/categorys/recommend.vue'),
        meta:{
            isAuth : false,
            isTabbar : true //是否显示主菜单
        }
    },
    {
        path: '/seeLater',
        name: 'SeeLater',
        component: () => import('../views/seeLater/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/amusement',
        name: 'Amusement',
        component: () => import('../views/amusementArea/recommend.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/userTeam',
        name: 'UserTeam',
        component: () => import('../views/team/userTeam.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/amusementDetail',
        name: 'AmusementDetail',
        component: () => import('../views/amusementArea/amusementDetail.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/editor',
        name: 'Editor',
        component: () => import('../views/framework/editor.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: () => import('../views/feedback/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/categorys',
        name: 'Categorys',
        component: () => import('../views/categorys/categorys.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/regiter',
        name: 'Regiter',
        component: () => import('../views/regiter/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/workCategorys',
        name: 'WorkCategorys',
        component: () => import('../views/categorys/work.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/lifeCategorys',
        name: 'LifeCategorys',
        component: () => import('../views/categorys/life.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/careerCategorys',
        name: 'CareerCategorys',
        component: () => import('../views/categorys/career.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },{
        path: '/diaryCategorys',
        name: 'DiaryCategorys',
        component: () => import('../views/categorys/diary.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },{
        path: '/recommendCategorys',
        name: 'RecommendCategorys',
        component: () => import('../views/categorys/recommend.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    },
    {
        path: '/list',
        name: 'List',
        component: () => import('../views/list/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/childList',
        name: 'ChildList',
        component: () => import('../views/childList/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/details/index.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/teatext',
        name: 'Teatext',
        component: () => import('../views/details/teatext.vue'),
        meta:{
            isAuth : false,
            isTabbar : false
        }
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: () => import('../views/details/timeline.vue'),
        meta:{
            isAuth : false,
            isTabbar : true
        }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            el: '#app',
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
});

export default router
