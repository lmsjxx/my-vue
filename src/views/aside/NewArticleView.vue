<template>
  <div class="article-wrap">
    <h3 class="aside-title">最新文章</h3>
    <ul class="article-list">
      <li v-for="item in articleList" :key="item.id">
        <p class="article-text">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewArticleView",
  data() {
    return {
      articleList: [
        { id: 1, title: "2026主流开源大模型对比测评" },
        { id: 2, title: "本地部署AI模型完整教程" },
        { id: 3, title: "AI变现实用思路汇总" },
        { id: 4, title: "提示词工程进阶写作技巧" },
        { id: 5, title: "AI绘画关键词万能模板" }
      ]
    }
  }
}
</script>

<style scoped>
.aside-title {
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin: 24px 0 12px;
  color: #222;
}
.article-list {
  list-style: none;
}
.article-text {
  font-size: 14px;
  line-height: 1.6;
  padding: 6px 0;
  color: #444;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.article-text:hover {
  color: #5478f0;
}
</style>
