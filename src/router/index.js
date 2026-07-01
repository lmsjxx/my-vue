import Home from "@/views/test/Home.vue";
import Wrapper from "@/views/test/Wrapper.vue";
import IndexView from "@/views/test/IndexView.vue";
import HotDetail from "@/views/HotDetail.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import FooterCopyright from "@/views/FooterCopyright.vue";
import MoreTools from "@/views/main/MoreTools.vue";
import Write from "@/views/main/Write.vue";
import AIOfficeTool from "@/views/test/AIOfficeTool.vue";


Vue.use(VueRouter)
Vue.component('FooterCopyright',FooterCopyright)

// 解决重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}



// 创建路由列表对象
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'layout',
                component: Wrapper,
            },
            {
                path: 'AIOfficeTool',
                component:AIOfficeTool
            },
            {
                path: '',
                component: IndexView
            },
            {
                path: 'HotDetail',
                component: HotDetail
            },
            // 更多工具界面三级路由
            {
                path: 'moreTools',
                component:MoreTools,
                children:[
                    {
                        path:"",
                        component:Write
                    },

                ]
            }
        ]
    }
]

// 创建路由对象
const router = new VueRouter({
    // 默认使用的是hash模式，在url后先以#作为请求标记，再拼接路由(请求路径)
    // 示例: http://localhost:3000/#/menu
    // history
    // 示例: http://localhost:300/menu
    mode: 'history',
    // 路由列表
    routes: routes
})

export default router