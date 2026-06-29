<template>
    <div id="MoreTools">
        <!-- 更多工具页 -->
        <SearchView></SearchView>
        {{ this.$route.query.id }}
        <router-view></router-view>
    </div>
</template>

<script>
import NavView from '../NavView.vue';
import SearchView from '../SearchView.vue';

export default{
    components:{
        NavView,
        SearchView
    }
}
</script>

<style lang="scss" scoped>

</style>