<template>
  <div id="main">
    <!-- 火焰标志及标题 -->
    <div id="icon">🔥 热门工具</div>
    <!-- 横线 -->
    <div id="line"></div>
    <!-- 物件 -->
     <div id="items">
        <div class="item" v-for="item in toolList" :key="item.id">
            <img :src="item.logo" alt="">
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
        { id: 1, name: "豆包", logo: "https://picsum.photos/id/64/40/40" },
        { id: 2, name: "LibTV", logo: "https://picsum.photos/id/60/40/40" },
        { id: 3, name: "秒哒", logo: "https://picsum.photos/id/62/40/40" },
        { id: 4, name: "AiPPT", logo: "https://picsum.photos/id/58/40/40" },
        { id: 5, name: "秘塔AI搜索", logo: "https://picsum.photos/id/54/40/40" },
        { id: 6, name: "TRAE编程", logo: "https://picsum.photos/id/52/40/40" },
        { id: 7, name: "堆友Agent", logo: "https://picsum.photos/id/48/40/40" },
        { id: 8, name: "美图设计室", logo: "https://picsum.photos/id/46/40/40" },
        { id: 9, name: "绘蛙AI", logo: "https://picsum.photos/id/42/40/40" },
        { id: 10, name: "Seko", logo: "https://picsum.photos/id/40/40/40" },
        { id: 11, name: "响指HaiSnap", logo: "https://picsum.photos/id/36/40/40" },
        { id: 12, name: "办公小浣熊", logo: "https://picsum.photos/id/34/40/40" }
      ]
    }
  }
}
</script>

<style scoped>
#main{
    background-color: white;
    padding: 20px 0px;
    /* border: 1px solid green; */
}
#icon{
    margin: 8px 10px 6px;
    /* border: 1px solid red; */
    font-size: 22px;
}
#line{
    width: 40px;
    height: 3px;
    background-color: #4269e8;
    border-radius: 2px;
    margin-bottom: 12px;
    margin-left: 10px;
}
#items{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding: 0 8px;
}

.item{
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
.item:hover{
    background-color: #e6edff;
    border: 1px solid blue;
}
.item:hover div {
    color: blue;
}
img{
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