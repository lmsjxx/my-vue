<template>
  <div id="moreToolsOut">
    <!-- 此处是存放各种工具对应的页面数据从indexView开始 -->
    <WriteToolsOutside :myData="WriteToolList"></WriteToolsOutside>
  </div>
</template>

<script>
import WriteToolsOutside from "./WriteToolsOutside.vue";

export default {
  components: {
    WriteToolsOutside,
  },
  data() {
    return {
      WriteToolList: 
        {
          id: 1,
          tooltag:'热门写作工具',
          toolList: [
            {
              id: 1,
              icon: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
              name: "豆包",
              desc: "智能对话助手",
              path: "/",
            },
            {
              id: 2,
              icon: "https://ai-bot.cn/wp-content/uploads/2026/04/libtv-icon.png",
              name: "LibTV",
              desc: "专业AI视频创...",
              path: "/",
            },
            {
              id: 3,
              icon: "https://ai-bot.cn/wp-content/uploads/2025/02/miaoda-logo.png",
              name: "秒哒",
              desc: "无代码AI应用...",
              path: "/",
            },
            {
              id: 4,
              icon: "https://ai-bot.cn/wp-content/uploads/2026/06/AiPPT-logo.png",
              name: "AiPPT",
              desc: "AI快速生成稿...",
              path: "/",
            },
            {
              id: 5,
              icon: "https://ai-bot.cn/wp-content/uploads/2024/06/metaso-ai-search-icon.png",
              name: "秘塔AI搜索",
              desc: "最好用的AI搜...",
              path: "/",
            },
            {
              id: 6,
              icon: "https://ai-bot.cn/wp-content/uploads/2025/07/trae.ai-logo.png",
              name: "TRAE编程",
              desc: "AI编程IDE，Vi...",
              path: "/",
            },
            {
              id: 7,
              icon: "https://ai-bot.cn/wp-content/uploads/2026/04/duiyou-icon-1.png",
              name: "堆友Agent",
              desc: "全能AI图像视...",
              path: "/",
            },
            {
              id: 8,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/04/meitu-ai-ppt.jpg",
              name: "美图设计室",
              desc: "AI图像创作和...",
              path: "/",
            },
            {
              id: 9,
              icon: "https://ai-bot.cn/wp-content/uploads/2024/03/ihuiwa-icon.png",
              name: "绘蛙AI",
              desc: "AI电商营销工...",
              path: "/",
            },
            {
              id: 10,
              icon: "https://ai-bot.cn/wp-content/uploads/2025/07/Seko-logo-1.png",
              name: "Seko",
              desc: "首个创编一体...",
              path: "/",
            },
            {
              id: 11,
              icon: "https://ai-bot.cn/wp-content/uploads/2025/05/HaiSnap-logo.png",
              name: "响指HaiSnap",
              desc: "面向工作与学...",
              path: "/",
            },
            {
              id: 12,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 13,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 14,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 15,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 16,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 17,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 18,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 19,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 20,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 21,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 22,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 23,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 24,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 25,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 26,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 27,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 28,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 29,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 30,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
            {
              id: 31,
              icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
              name: "办公小浣熊",
              desc: "最强AI数据分...",
              path: "/",
            },
          ],
        },
    };
  },
};
</script>
