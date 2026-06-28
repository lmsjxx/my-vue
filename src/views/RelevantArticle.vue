<template>
  <div id="Relevant" class="wrap">
    <h3 class="title">{{ myData.title }}</h3>
    <div class="list-box">
      <div v-for="item in myData.list" :key="item.id" class="container">
        <img :src="item.imageUrl" alt="">
        <div class="text">{{ item.title }}</div>
        <div class="profileContainer">
            <img :src="myData.aixiao" class="profile">
            <span class="author">{{ item.source }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'relevant',
  props: ["myData"]
}
</script>

<style lang="scss" scoped>
.wrap {
  width: calc(100% - 300px);
  padding: 10px 0;
}
.title {
  margin: 0 0 16px;
  font-size: 20px;
}
.list-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.container {
//   border: 1px solid green;
//   padding: 10px;
//   border-radius: 6px;
    &:hover{
        color: blue;
    }
}
img {
  width: 90%;
  height: 120px;
  object-fit: cover;
  display: block;
}
.text {
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.4;
}
.profile{
    border-radius: 100%;
    width: auto;
    height: 20px;
    padding: 10px;
}
.profileContainer{
    display: flex;
    align-items: center;
}
.author{
    font-size: 14px;
}
</style>