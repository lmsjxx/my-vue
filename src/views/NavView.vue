<template>
  <div id="nav">
    <div class="nav-list">
      <li v-for="nav in navList" :key="nav.id">
        <router-link :to="nav.linkPath">
          {{ nav.linkText }}
        </router-link>
        <!-- <router-link v-if="">

        </router-link> -->
      </li>
    </div>
  </div>
</template>

<script>
export default {
  ShowID:null,
  data() {
    return {
      navList: [
        {
          id: 1,
          icon: "",
          linkText: "Ai工具集",
          linkPath: "/",
          children: [
            { id: 101, linkText: "AI写作工具", path: "/" },
            { id: 102, linkText: "AI图像工具", path: "/" },
            { id: 103, linkText: "AI视频工具", path: "/" },
            { id: 104, linkText: "AI办公工具", path: "/" },
            { id: 104, linkText: "AI聊天助手", path: "/" },
            { id: 104, linkText: "AI智能体", path: "/" },
            { id: 104, linkText: "AI编程工具", path: "/" },
            { id: 104, linkText: "AI开发平台", path: "/" },
            { id: 104, linkText: "AI音频工具", path: "/" },
            { id: 104, linkText: "AI搜索引擎", path: "/" },
            { id: 104, linkText: "AI学习网站", path: "/" },
            { id: 104, linkText: "AI训练模型", path: "/" },
            { id: 104, linkText: "AI模型评测", path: "/" },
            { id: 104, linkText: "AI内容检测", path: "/" },
            { id: 104, linkText: "AI提示指令", path: "/" },
            { id: 104, linkText: "AI副业工具", path: "/" },
          ],
        },
        {
          id: 2,
          icon: "",
          linkText: "Ai应用集",
          linkPath: "/",
        },
        {
          id: 3,
          icon: "",
          linkText: "每日AI资讯",
          linkPath: "/",
        },
        {
          id: 4,
          icon: "",
          linkText: "最新AI项目",
          linkPath: "/",
          children: [
            { id: 401, linkText: "AI工具", path: "/" },
            { id: 402, linkText: "AI项目和框架", path: "/" },
          ],
        },
        {
          id: 5,
          icon: "",
          linkText: "AI教程资源",
          linkPath: "/",
          children:[
            { id: 501, linkText: "AI专栏", path: "/" },
            { id: 502, linkText: "AI问答", path: "/" },
            { id: 503, linkText: "AI百科", path: "/" },
            { id: 504, linkText: "AI名人堂", path: "/" },
          ]
        },
        {
          id: 6,
          icon: "",
          linkText: "关于我们",
          linkPath: "/",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#nav {
  .nav-list {
    display: flex;
    li {
      padding: 15px;
      a {
        color: blue;
      }
    }
  }
}
</style>
