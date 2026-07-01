<template>
  <div id="wrapper">
    <div class="ai-office">
      <h3>{{ aiofficeToolList.titile }}</h3>
      <div class="ai-office-list">
        <div
          class="ai-office-item"
          v-for="tool in aiofficeToolList.tagList"
          :key="tool.id"
          @click="changeTab(tool.id)"
        >
          {{ tool.name }}
        </div>
      </div>
      <!-- 工具分类渲染区域(使用插槽技术实现) -->
      <div class="ai-slot">
        <tool-list-wrapper>
          <!-- 优先显示具名插槽的template -->
          <!-- <template> 666 </template> -->
          <template #a1 v-if="tabId == 1">
            <div v-for="hot in hotList" :key="hot.id">
              {{ hot.text }}
            </div>
          </template>
          <template #a2 v-if="tabId == 2">
            <ListView :myData="toolList"></ListView>
          </template>
          <template #a3 v-if="tabId == 3"> 3 </template>
          <template #a4 v-if="tabId == 4"> 4 </template>
          <template #a5 v-if="tabId == 5"> 5 </template>
          <template #a6 v-if="tabId == 6"> 6 </template>
        </tool-list-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from "@/components/ListView.vue";
import ToolListWrapper from "../common/ToolListWrapper.vue";
export default {
  components: {
    ToolListWrapper,
    ListView,
  },
  data() {
    return {
      tabId: 1,
      aiofficeToolList: {
        titile: "AI办公工具",
        tagList: [
          {
            id: 1,
            name: "AI幻灯片和演示",
          },
          {
            id: 2,
            name: "AI 表格数据处理",
          },
          {
            id: 3,
            name: "AI 思维导图",
          },
          {
            id: 4,
            name: "AI 文档工具",
          },
          {
            id: 5,
            name: "AI 会议工具",
          },
          {
            id: 6,
            name: "AI 招聘求职",
          },
          {
            id: 7,
            name: "AI 法律助手",
          },
          {
            id: 8,
            name: "AI 语言翻译",
          },
          {
            id: 9,
            name: "AI 效率提升",
          },
          
        ],
      },
      hotList: [
        {
          id: 1,
          text: "每日快讯",
          officeUrl:
            "https://ai-bot.cn/wp-content/uploads/2025/06/ai-news-banner-0614.png",
          pagePath: "/HotDetail",
        },
        {
          id: 2,
          text: "免费社群",
          officeUrl:
            "https://ai-bot.cn/wp-content/uploads/2025/06/ai-shequn-banner-0614.png",
          pagePath: "/HotDetail",
        },
        {
          id: 3,
          text: "最新项目",
          officeUrl:
            "https://ai-bot.cn/wp-content/uploads/2025/06/ai-projects-banner-0614.png",
          pagePath: "/HotDetail",
        },
        {
          id: 4,
          text: "最新教程",
          officeUrl:
            "https://ai-bot.cn/wp-content/uploads/2025/06/ai-tutorials-banner-0615.png",
          pagePath: "/HotDetail",
        },
      ],
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
    };
  },
  methods: {
    // slot切换函数
    changeTab(tabId) {
      this.tabId = tabId;
    },
  },
};
</script>

<style scoped lang="scss">
.ai-office {
  h3 {
    margin: 15px 0;
  }

  .ai-office-list {
    display: flex;
    justify-content: space-between;

    .ai-office-item {
      border: 1px solid #333;
      padding: 5px 10px;
      margin-right: 10px;
    }
    .ai-office-item:last-child {
      margin-right: 0;
    }
    .ai-office-item:hover {
      cursor: pointer;
      background-color: black;
      color: #fff;
    }
  }
  .ai-slot {
    margin-top: 10px;
    border: 1px solid #333;
    padding: 15px;
    min-height: 200px;
  }
}
</style>
