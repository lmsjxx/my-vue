<template>
  <div id="aiToolPanel">
    <!-- 顶部标题行容器，用来左右分布 -->
    <div class="header-wrap">
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
        AI写作工具
      </div>
      <!-- 右侧更多工具 -->
      <span @click="jump(myData)" id="moreToolsButton">更多工具》》</span>
    </div>

    <!-- 工具卡片网格容器 6列5行最多30个 -->
    <div class="contain-wrap">
      <!-- slice(0,30) 只截取前30条数据 -->
      <div class="tool-card" v-for="item in myData.toolList.slice(0, 30)" :key="item.id">
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
  props:["myData"],
  methods:{
    jump(object){
        this.$router.push({
        path: "/home/moreTools",
        query: {
          id: object.id,
        },
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#aiToolPanel {
  width: 100%;
  padding: 12px 0;
}

// 头部弹性容器，左右对齐
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

// 顶部蓝色圆角标题标签
.ToolTitle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #5961F9;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 999px;

  .title-icon {
    font-size: 18px;
  }
}

// 6列网格，最多5行=30格
.contain-wrap {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* 限制最大行数5行，超出隐藏 */
  grid-template-rows: repeat(5, auto);
  overflow: hidden;
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

// 更多工具按钮样式
#moreToolsButton {
  color: #5961F9;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #3a44e8;
  }
}

// 响应式可选
@media screen and (max-width: 1400px) {
  .contain-wrap {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, auto);
  }
}
@media screen and (max-width: 992px) {
  .contain-wrap {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, auto);
  }
}
@media screen and (max-width: 640px) {
  .contain-wrap {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(15, auto);
  }
}
</style>