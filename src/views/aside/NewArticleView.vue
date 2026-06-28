<template>
  <div class="article-wrap">
    <div class="aside-title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-clipboard-data"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
        />
        <path
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
        />
        <path
          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
        />
      </svg>
      {{myData.title}}
    </div>
    <div class="line"></div>
    <ul class="article-list">
      <li v-for="item in myData.list" :key="item.id">
        <img :src="item.imageUrl" />
        <p class="article-text">
          {{ item.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewArticleView",
  props:["myData"]
};
</script>

<style scoped>
.article-wrap {
  background-color: white;
  padding: 5px 10px;
  /* border: 1px solid green; */
  box-shadow: 2px 2px 10px 1px rgba(181, 174, 174, 0.2);
  margin-top: 10px;
  border-radius: 2px;
}
img {
  width: 90px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.24s ease;
}
img:hover {
  transform: scale(1.04);
}
.line {
  width: 40px;
  height: 3px;
  background-color: #4269e8;
  border-radius: 2px;
  margin-bottom: 12px;
  margin-left: 10px;
}
.aside-title {
  margin: 8px 10px 6px;
  font-size: 22px;
}
.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.article-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 8px;
  border-radius: 8px;
  /* margin-bottom: 8px; */
  transition: background-color 0.22s ease;
}
.article-list li:hover {
  background-color: #f7f8fa;
}
.article-text {
  flex-wrap: wrap;
  font-size: 12px;
  line-height: 1.6;
  color: #444;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  flex: 1;
  transition: color 0.2s ease;
}
.article-text:hover {
  color: #5478f0;
}
</style>
