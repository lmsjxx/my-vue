import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import HotDetail from "@/views/HotDetail.vue";

Vue.use(VueRouter)

// 创建路由列表对象
const routes = [{
    path: '/',
    component: HomeView
},
{
    path: '/menu',
    component: MenuView
},
{
    path: '/hot',
    component: HotDetail
}]

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