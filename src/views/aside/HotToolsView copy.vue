<template>
  <div id="main">
    <!-- 火焰标志及标题 -->
    <div id="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-fire"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
        />
      </svg>
      {{title}}
    </div>
    <!-- 横线 -->
    <div id="line"></div>
    <!-- 物件 -->
    <div id="items">
      <div class="item" v-for="item in toolList" :key="item.id">
        <img :src="item.logo" alt="" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotToolSView",
  data() {
    return {
      toolList: [
        {
          id: 1,
          name: "豆包",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 2,
          name: "LibTV",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 3,
          name: "秒哒",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 4,
          name: "AiPPT",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 5,
          name: "秘塔AI搜索",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 6,
          name: "TRAE编程",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 7,
          name: "堆友Agent",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 8,
          name: "美图设计室",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 9,
          name: "绘蛙AI",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 10,
          name: "Seko",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 11,
          name: "响指HaiSnap",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 12,
          name: "办公小浣熊",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
#main {
  box-shadow: 2px 2px 10px 1px rgba(181, 174, 174, 0.2);
  background-color: white;
  padding: 10px 10px;
  /* border: 1px solid green; */
}
#icon {
  margin: 8px 10px 6px;
  /* border: 1px solid red; */
  font-size: 22px;
}
#line {
  width: 40px;
  height: 3px;
  background-color: #4269e8;
  border-radius: 2px;
  margin-bottom: 12px;
  margin-left: 10px;
}
#items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 8px;
}

.item {
  background-color: rgb(241, 243, 246);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  /* 过渡动画，缓慢变色 */
  transition: all 0.3s ease;
  /* 蓝色边框 */
  border: 1px solid aliceblue;
  cursor: pointer;
  color: #222;
}
/* 悬浮效果 */
.item:hover {
  background-color: #e6edff;
  border: 1px solid blue;
}
.item:hover div {
  color: blue;
}
img {
  border-radius: 100%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  object-fit: cover;
}
.item div {
  font-size: 12px;
  color: #222;
  transition: color 0.3s ease;
}
</style>
