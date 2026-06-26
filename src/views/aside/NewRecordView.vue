<template>
  <div class="record-wrap">
    <h3 class="aside-title">最新收录</h3>
    <ul class="record-list">
      <li v-for="item in recordList" :key="item.id">
        <span class="record-name">{{ item.title }}</span>
        <span class="record-time">{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewRecordView",
  data() {
    return {
      recordList: [
        { id: 1, title: "HappyOyster世界模型", time: "06-27" },
        { id: 2, title: "AI一键PPT生成工具", time: "06-26" },
        { id: 3, title: "本地离线语音大模型", time: "06-25" },
        { id: 4, title: "AI抠图免安装网页版", time: "06-24" },
        { id: 5, title: "多模态知识库助手", time: "06-23" }
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
.record-list {
  list-style: none;
}
.record-list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}
.record-name {
  font-size: 14px;
  color: #3468d9;
}
.record-time {
  font-size: 12px;
  color: #999;
}
</style>