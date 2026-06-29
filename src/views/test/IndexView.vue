<template>
  <div id="main">
    <!-- 顶部导航
    <nav-view></nav-view> -->
    <!-- 搜索 -->
    <search-view></search-view>
    <!-- 热点 -->
    <hot-view></hot-view>
    <!-- AI工具栏 -->
    <AiToolPanelList />
    <!-- AI对应工具栏 -->
    <more-tools-outside></more-tools-outside>
  </div>
</template>

<script>
import HotView from "../HotView.vue";
import NavView from "../NavView.vue";
import SearchView from "../SearchView.vue";
import AiToolPanelList from "./AiToolPanelList.vue";
import MoreToolsOutside from "../main/MoreToolsOutside.vue";

export default {
  components: {
    NavView,
    SearchView,
    HotView,
    AiToolPanelList,
    MoreToolsOutside,
  },
  data() {
    return {
      
    };
  },
};
</script>
