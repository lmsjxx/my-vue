<template>
    <div id="home">
        <!-- 菜单组件 -->
        <div class="home-menu my-box my-p15">
            <h1>
                <router-link to="/home">
                    <img src="https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-logo-black.png" style="width:220px">
                </router-link>
            </h1>
            <menu-view></menu-view>
        </div>
        
        <!-- 单页面应用的右侧渲染区域 -->
        <div class="home-wrapper my-box my-p15">
            <!-- <index-view></index-view> -->
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import MenuView from '../MenuView.vue';
import Wrapper from './Wrapper.vue';

export default {
    name: 'home',
    components :{
        MenuView,
        Wrapper,
    }
}
</script>

<style lang="scss" scoped>
    #home{
    display: flex;
    margin: 20px;
    background: #ffffff;
    // 父容器禁止滚动截断sticky
    overflow: visible;
}
.home-menu{
    flex: 1;
    position: sticky;
    top: 20px; // 和外层margin对齐，顶部预留20px不贴边
    align-self: flex-start; // flex布局关键：只让自身高度自适应，不拉伸填满父级
    height: calc(100vh - 40px); // 可视高度减去上下margin，不溢出屏幕
    overflow-y: auto; // 菜单内容过长内部滚动
}
.home-wrapper{
    flex: 5;
}
.my-box{
     border: 1px solid blue;
}
.my-p15{
    padding: 15px;
}
</style>