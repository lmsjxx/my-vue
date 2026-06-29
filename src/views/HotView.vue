<template>
    <div id="hots">
        <ul>
          <li v-for="hot in hotList" :key="hot.id">
            <!-- target="_blank" -->
            <router-link :to="{
              path: '/home'+hot.pagePath,
              query:{
                imgid:hot.id
              }
            }">
              <img :src="hot.imageUrl" alt="">
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return{
      hotList:[
        {
          "id": 1,
          "text": "每日快讯",
          "imageUrl": "https://ai-bot.cn/wp-content/uploads/2025/06/ai-news-banner-0614.png",
          "pagePath": "/HotDetail"
        },
        {
          "id": 2,
          "text": "免费社群",
          "imageUrl": "https://ai-bot.cn/wp-content/uploads/2025/06/ai-shequn-banner-0614.png",
          "pagePath": "/HotDetail"
        },
        {
          "id": 3,
          "text": "最新项目",
          "imageUrl": "https://ai-bot.cn/wp-content/uploads/2025/06/ai-projects-banner-0614.png",
          "pagePath": "/HotDetail"
        },
        {
          "id": 4,
          "text": "最新教程",
          "imageUrl": "https://ai-bot.cn/wp-content/uploads/2025/06/ai-tutorials-banner-0615.png",
          "pagePath": "/HotDetail"
        }
      ]
    }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#hots {
  padding: 10px;
}
ul {
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  list-style: none;
}
li {
  width: 23%;
}
img {
  width: 100%;
  height: auto;
  display: block;
}
</style>