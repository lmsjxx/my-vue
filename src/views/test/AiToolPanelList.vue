<template>
  <div>
    <AiToolPanel :my-data="toolGroup"></AiToolPanel>
    <AiToolPanel2 :my-data="toolGroup2"></AiToolPanel2>
  </div>
</template>

<script>
import AiToolPanel from "./AiToolPanel.vue";
import AiToolPanel2 from "./AiToolPanel2.vue";
export default {
  components: {
    AiToolPanel,
    AiToolPanel2,
  },
  data() {
    return {
      toolGroup: {
        groupKey: "hot",
        groupTitle: "热门工具",
        aiToolList: [
          {
            id: 1,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
            name: "豆包",
            desc: "智能对话助手",
          },
          {
            id: 2,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/04/libtv-icon.png",
            name: "LibTV",
            desc: "专业AI视频创...",
          },
          {
            id: 3,
            icon: "https://ai-bot.cn/wp-content/uploads/2025/02/miaoda-logo.png",
            name: "秒哒",
            desc: "无代码AI应用...",
          },
          {
            id: 4,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/AiPPT-logo.png",
            name: "AiPPT",
            desc: "AI快速生成稿...",
          },
          {
            id: 5,
            icon: "https://ai-bot.cn/wp-content/uploads/2024/06/metaso-ai-search-icon.png",
            name: "秘塔AI搜索",
            desc: "最好用的AI搜...",
          },
          {
            id: 6,
            icon: "https://ai-bot.cn/wp-content/uploads/2025/07/trae.ai-logo.png",
            name: "TRAE编程",
            desc: "AI编程IDE，Vi...",
          },
          {
            id: 7,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/04/duiyou-icon-1.png",
            name: "堆友Agent",
            desc: "全能AI图像视...",
          },
          {
            id: 8,
            icon: "https://ai-bot.cn/wp-content/uploads/2023/04/meitu-ai-ppt.jpg",
            name: "美图设计室",
            desc: "AI图像创作和...",
          },
          {
            id: 9,
            icon: "https://ai-bot.cn/wp-content/uploads/2024/03/ihuiwa-icon.png",
            name: "绘蛙AI",
            desc: "AI电商营销工...",
          },
          {
            id: 10,
            icon: "https://ai-bot.cn/wp-content/uploads/2025/07/Seko-logo-1.png",
            name: "Seko",
            desc: "首个创编一体...",
          },
          {
            id: 11,
            icon: "https://ai-bot.cn/wp-content/uploads/2025/05/HaiSnap-logo.png",
            name: "响指HaiSnap",
            desc: "面向工作与学...",
          },
          {
            id: 12,
            icon: "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png",
            name: "办公小浣熊",
            desc: "最强AI数据分...",
          },
        ],
      },
      toolGroup2: {
        groupKey: "record",
        groupTitle: "最新收录",
        aiToolList: [
          {
            id: 1,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/Kevvee-logo.png",
            name: "Kevvee",
            desc: "全球首个AI出...",
          },
          {
            id: 2,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/meyo-logo.png",
            name: "觅游",
            desc: "美图推出的AI...",
          },
          {
            id: 3,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/LobsterAI-logo.png",
            name: "LobsterAI",
            desc: "网易推出的全...",
          },
          {
            id: 4,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/Matrix-logo.png",
            name: "Matrix",
            desc: "超长时间自动...",
          },
          {
            id: 5,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/updream-logo1.png",
            name: "updream",
            desc: "B站面向专业创...",
          },
          {
            id: 6,
            icon: "https://ai-bot.cn/wp-content/uploads/2026/06/mojian-logo.png",
            name: "墨见",
            desc: "墨刀推出的AI...",
          },
        ],
      },
    };
  },
};
</script>
