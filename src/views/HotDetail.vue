<template>
  <div id="hotData">
    <div class="breadcrumb">
      <span>首页</span>
      <span>·</span>
      <span>AI快讯</span>
      <span>·</span>
      <span>每日AI快讯热闻</span>
    </div>
    {{ $route.query.imgid }}

    <!-- 左右分栏容器 -->
    <div class="layout-wrap">
      <!-- 左侧资讯主体 -->
      <div class="left-main">
        <div class="news-card">
          <h1 class="card-title">每日AI快讯热闻</h1>
          <div class="card-meta">
            <div class="meta-left">
              <span class="meta-item">☰ AI快讯</span>
              <span class="meta-item">⏱ 3天前更新</span>
              <span class="meta-item">👥 AI小集</span>
            </div>
            <div class="meta-right">
              <span class="meta-item">💬 76</span>
              <span class="meta-item">👍 1591</span>
            </div>
          </div>

          <hr class="divider" />

          <div class="banner-box">
            <img
              src="https://ai-bot.cn/wp-content/uploads/2024/07/daily-ai-news-image02.png "
              alt="每日AI快讯"
            />
          </div>

          <p class="desc-text">
            AI工具集每个工作日实时更新 AI 行业的最新资讯、新闻、热点、融资、产品动态、爆料等，让你随时了解人工智能领域最新趋势、更新突破和热门大事件。
            加入<a href="#">AI交流群</a>，获取最新一手信息！
          </p>

          <div class="date-line">
            <span class="date-tag">6月18·周四</span>
          </div>

          <div class="news-item">
            <h3 class="item-title">阿里全面开放世界模型 HappyOyster 快乐生蚝 1.0</h3>
            <p class="item-content">
              阿里云上线可实时交互的开放式世界模型产品 <a href="#">HappyOyster 1.0（快乐生蚝 1.0）</a>，用户一句话可生成完整、可探索、可互动的数字世界。产品基于原生多模态架构，支持多模态输入与音视频联合生成，区别于传统一次性渲染流程，可在生成过程中持续接收用户指令并实时响应。
            </p>
            <p class="item-source">来源: IT之家</p>
          </div>

          <div class="news-item">
            <h3 class="item-title">阿里全面开放世界模型 HappyOyster 快乐生蚝 1.0</h3>
            <p class="item-content">
              阿里云上线可实时交互的开放式世界模型产品 <a href="#">HappyOyster 1.0（快乐生蚝 1.0）</a>，用户一句话可生成完整、可探索、可互动的数字世界。产品基于原生多模态架构，支持多模态输入与音视频联合生成，区别于传统一次性渲染流程，可在生成过程中持续接收用户指令并实时响应。
            </p>
            <p class="item-source">来源: IT之家</p>
          </div>
          <div class="news-item">
            <h3 class="item-title">阿里全面开放世界模型 HappyOyster 快乐生蚝 1.0</h3>
            <p class="item-content">
              阿里云上线可实时交互的开放式世界模型产品 <a href="#">HappyOyster 1.0（快乐生蚝 1.0）</a>，用户一句话可生成完整、可探索、可互动的数字世界。产品基于原生多模态架构，支持多模态输入与音视频联合生成，区别于传统一次性渲染流程，可在生成过程中持续接收用户指令并实时响应。
            </p>
            <p class="item-source">来源: IT之家</p>
          </div>
          <div class="news-item">
            <h3 class="item-title">阿里全面开放世界模型 HappyOyster 快乐生蚝 1.0</h3>
            <p class="item-content">
              阿里云上线可实时交互的开放式世界模型产品 <a href="#">HappyOyster 1.0（快乐生蚝 1.0）</a>，用户一句话可生成完整、可探索、可互动的数字世界。产品基于原生多模态架构，支持多模态输入与音视频联合生成，区别于传统一次性渲染流程，可在生成过程中持续接收用户指令并实时响应。
            </p>
            <p class="item-source">来源: IT之家</p>
          </div>
          <div class="news-item">
            <h3 class="item-title">阿里全面开放世界模型 HappyOyster 快乐生蚝 1.0</h3>
            <p class="item-content">
              阿里云上线可实时交互的开放式世界模型产品 <a href="#">HappyOyster 1.0（快乐生蚝 1.0）</a>，用户一句话可生成完整、可探索、可互动的数字世界。产品基于原生多模态架构，支持多模态输入与音视频联合生成，区别于传统一次性渲染流程，可在生成过程中持续接收用户指令并实时响应。
            </p>
            <p class="item-source">来源: IT之家</p>
          </div>
        </div>
      </div>

      <!-- 引入右侧边栏总组件 -->
      <RightAsideView />
    </div>
  </div>
</template>

<script>
// 导入右侧边栏组件
import RightAsideView from './aside/RightAsideView.vue';

export default {
  name: "HotData",
  components: {
    RightAsideView
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
/* 末尾新增分栏样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#hotData {
  padding: 80px;
  background: #f8f9fa;
  min-height: 100vh;
}
/* 面包屑 */
.breadcrumb {
  margin-bottom: 24px;
  font-size: 14px;
  color: #666;
}
.breadcrumb span {
  margin: 0 4px;
}
/* 白色卡片主体 */
.news-card {
  background: #ffffff;
  padding: 32px;
  border-radius: 8px;
  border: 2px solid red;
}
.card-title {
  font-size: 32px;
  color: #222;
  margin-bottom: 20px;
}
/* 顶部元信息行 */
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}
.meta-left, .meta-right {
  display: flex;
  gap: 24px;
}
/* 分割线 */
.divider {
  border: none;
  border-bottom: 1px solid #eee;
  margin: 20px 0;
}
/* 横幅图片 */
.banner-box img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 24px;
  display: block;
}
/* 简介文字 */
.desc-text {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 32px;
}
.desc-text a {
  color: #3468d9;
  text-decoration: none;
}
/* 日期竖线标签 */
.date-line {
  border-left: 2px solid #dce0e8;
  padding-left: 16px;
  margin-bottom: 28px;
}
.date-tag {
  display: inline-block;
  background: #5478f0;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 15px;
}
/* 单条资讯 */
.news-item {
  padding-left: 28px;
  position: relative;
}
.news-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5478f0;
}
.item-title {
  font-size: 20px;
  color: #111;
  margin-bottom: 14px;
}
.item-content {
  font-size: 15px;
  line-height: 1.7;
  color: #444;
  margin-bottom: 10px;
}
.item-content a {
  color: #3468d9;
  text-decoration: none;
}
.item-source {
  font-size: 13px;
  color: #777;
}

/* 新增左右分栏样式 */
.layout-wrap {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.left-main {
  flex: 1;
}
</style>