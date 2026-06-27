<template>
  <div id="menu">
    <!-- 左侧菜单页 -->
    <ul>
      <li
        v-on:click="jump(menu.id)"
        v-for="(menu, index) in menuList"
        :key="index"
      >
        {{ menu.linkText }}
        <div v-for="text in menu.children" :key="text.id">
          {{ text.linkText }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          icon: "",
          linkText: "AI写作工具",
          linkPath: "",
        },
        {
          id: 2,
          icon: "",
          linkText: "AI图像工具",
          linkPath: "",
          children: [
            { id: 1001, linkText: "常用AI图像工具" },
            { id: 1002, linkText: "AI图片插画生成" },
            { id: 1003, linkText: "AI图片背景移除" },
            { id: 1004, linkText: "AI图片物体抹除" },
            { id: 1005, linkText: "AI图片无损放大" },
            { id: 1006, linkText: "AI图片优化修复" },
            { id: 1007, linkText: "AI商品图生成" },
            { id: 1008, linkText: "AI 3D模型生成" },
          ],
        },
        {
          id: 3,
          icon: "",
          linkText: "AI视频工具",
          linkPath: "",
        },
        {
          id: 4,
          icon: "",
          linkText: "AI办公工具",
          linkPath: "",
          children: [
            { id: 401, linkText: "AI幻灯片和演示" },
            { id: 402, linkText: "AI表格数据处理" },
            { id: 403, linkText: "AI思维导图" },
            { id: 404, linkText: "AI文档工具" },
            { id: 405, linkText: "AI会议工具" },
            { id: 406, linkText: "AI招聘求职" },
            { id: 407, linkText: "AI法律助手" },
            { id: 408, linkText: "AI语言翻译" },
            { id: 409, linkText: "AI效率提升" },
          ],
        },
        {
          id: 5,
          icon: "",
          linkText: "AI聊天助手",
          linkPath: "",
        },
        {
          id: 6,
          icon: "",
          linkText: "AI智能体",
          linkPath: "",
          children: [
            { id: 1009, linkText: "AI智能体" },
            { id: 1010, linkText: "插件与skill" },
          ],
        },
        {
          id: 7,
          icon: "",
          linkText: "AI编程工具",
          linkPath: "",
        },
        {
          id: 8,
          icon: "",
          linkText: "AI开发平台",
          linkPath: "",
        },
        {
          id: 9,
          icon: "",
          linkText: "AI设计工具",
          linkPath: "",
        },
        {
          id: 10,
          icon: "",
          linkText: "AI音频工具",
          linkPath: "",
        },
        {
          id: 11,
          icon: "",
          linkText: "AI搜索引擎",
          linkPath: "",
        },
        {
          id: 12,
          icon: "",
          linkText: "AI学习网站",
          linkPath: "",
        },
        {
          id: 13,
          icon: "",
          linkText: "AI训练模型",
          linkPath: "",
        },
        {
          id: 14,
          icon: "",
          linkText: "AI模型评测",
          linkPath: "",
        },
        {
          id: 15,
          icon: "",
          linkText: "AI内容检测",
          linkPath: "",
        },
        {
          id: 16,
          icon: "",
          linkText: "AI提示指令",
          linkPath: "",
        },
        {
          id: 17,
          icon: "",
          linkText: "AI副业工具",
          linkPath: "",
        },
      ],
    };
  },
  methods: {
    jump(id) {
      this.$router.push({
        path: "/home/layout",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  position: sticky;
}
li {
  border: 1px solid green;
  padding: 15px;
  color: #606d78;
  transition: all 0.5s ease;
  font-size: 15px;
}
li:hover {
  background: lightgray;
  color: blue;
}
</style>
