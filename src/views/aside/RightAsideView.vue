<template>
  <!-- 侧边栏容器，滚动固定 -->
  <div class="right-aside" >
    <div class="aside-card">
      <!-- 按顺序：热门工具 → 最新收录 → 最新文章 -->
      <HotToolsView />
      <NewRecordView />
      <NewArticleView />
    </div>
  </div>
</template>

<script>
// 导入三个子组件
import HotToolsView from "./HotToolsView.vue";
import NewRecordView from "./NewRecordView.vue";
import NewArticleView from "./NewArticleView.vue";

export default {
  name: "RightAsideView",
  components: {
    HotToolsView,
    NewRecordView,
    NewArticleView
  }
}
</script>

<style scoped>
/* .aside-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
} */
 .aside-card{
  /* border: 1px solid green; */
 }
 .right-aside{
    width:300px;
    position:sticky;
    top:20px;
 }
</style>