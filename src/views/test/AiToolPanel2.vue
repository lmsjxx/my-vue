<template>
  <div id="aiToolPanel">
    <!-- 分类标题标签 -->
    <div class="ToolTitle">
      <span class="title-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-fire"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
          /></svg
      ></span>
      {{ myData.groupTitle }}
    </div>

    <!-- 工具卡片网格容器 -->
    <div class="contain-wrap">
      <div class="tool-card" v-for="item in myData.aiToolList" :key="item.id">
        <img
          :src="item.icon"
          class="card-image"
          alt=""
          @error="$event.target.src = '/icons/default.png'"
        />
        <div class="card-info">
          <div class="card-title">{{ item.name }}</div>
          <div class="card-text">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myData"],
};
</script>

<style lang="scss" scoped>
#aiToolPanel {
  width: 100%;
  padding: 12px 0;
}

// 顶部蓝色圆角标题标签（和截图样式对齐）
.ToolTitle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #5961f9;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 999px;
  margin-bottom: 20px;

  .title-icon {
    font-size: 18px;
  }
}

// 卡片外层网格布局：一行6个、自动换行、间距统一
.contain-wrap {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  width: 100%;
}

// 单个工具卡片（白色圆角、柔和阴影、hover上浮）
.tool-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 12px;
  //   border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.24s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(66, 107, 255, 0.12);
  }
}

// 图标尺寸
.card-image {
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

// 文字区域自适应
.card-info {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 16px;
  font-weight: 500;
  color: #1d2129;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text {
  font-size: 13px;
  color: #86909c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
