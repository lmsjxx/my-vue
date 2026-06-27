<template>
    <div id="home">
        <!-- 菜单组件 -->
        <div class="home-menu my-box my-p15">
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
        background: #F9F9F9;
    }
    .home-menu{
        flex: 1;
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