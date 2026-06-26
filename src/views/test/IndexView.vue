<template>
    <div id="main">
        <!-- 顶部导航 -->
        <nav-view></nav-view>
        <!-- 搜索 -->
        <search-view></search-view>
        <!-- 热点 -->
        <hot-view></hot-view>
    </div>
</template>

<script>
    import HotView from '../HotView.vue';
    import NavView from '../NavView.vue';
    import SearchView from '../SearchView.vue';
    export default{
        components: {
            NavView,
            SearchView,
            HotView
        }
    }
</script>