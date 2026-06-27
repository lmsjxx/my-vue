<template>
  <div id="main">
    <!-- 火焰标志及标题 -->
    <div id="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-collection"
        viewBox="0 0 16 16"
      >
        <path
          d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
        />
      </svg>
      最新收录
    </div>
    <!-- 横线 -->
    <div id="line"></div>
    <!-- 物件 -->
    <div id="items">
      <div class="item" v-for="item in recordList" :key="item.id">
        <img :src="item.logo" alt="" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewRecordView",
  data() {
    return {
      recordList: [
        {
          id: 1,
          name: "kevvee",
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
      ],
    };
  },
};
</script>

<style scoped>
#main {
  background-color: white;
  padding: 10px 10px;
  /* border: 1px solid green; */
  box-shadow: 2px 2px 10px 1px rgba(181, 174, 174, 0.2);
  margin-top: 10px;
  border-radius: 2px;
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
  transition: all 0.3s ease;
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
