<template>
  <div class="right-aside" >
    <div class="aside-card">
      <HotToolsView :my-data="toolList" :title="toolTitle" />
      <NewRecordView :new-record="recordList" :title="recordTitle"/>
      <NewArticleView :my-data="articleList" />
    </div>
  </div>
</template>

<script>
import HotToolsView from "./HotToolsView.vue";
import NewRecordView from "./NewRecordView.vue";
import NewArticleView from "./NewArticleView.vue";

export default {
  name: "RightAsideView",
  components: {
    HotToolsView,
    NewRecordView,
    NewArticleView,
  },
  data(){
    return{
      toolTitle:'热门工具',
      recordTitle:'最新收录',
      toolList: [
        {
          id: 1,
          name: "豆包",
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
        {
          id: 5,
          name: "秘塔AI搜索",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 6,
          name: "TRAE编程",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 7,
          name: "堆友Agent",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 8,
          name: "美图设计室",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 9,
          name: "绘蛙AI",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 10,
          name: "Seko",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 11,
          name: "响指HaiSnap",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
        {
          id: 12,
          name: "办公小浣熊",
          logo: "https://ai-bot.cn/wp-content/uploads/2026/03/doubao-icon.png",
          path: "/",
        },
      ],
      recordList: [
               {
                    "id": 1,
                    "text": "Kevvee",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/Kevvee-logo.png"
                }, 
                {
                    "id": 2,
                    "text": "觅游",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/meyo-logo.png"
                }, 
                {
                    "id": 3,
                    "text": "LobsterAI",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/LobsterAI-logo.png"
                }, 
                {
                    "id": 4,
                    "text": "Matrix",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/Matrix-logo.png"
                }, 
                {
                    "id": 5,
                    "text": "updream",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/updream-logo1.png"
                }, 
                {
                    "id": 6,
                    "text": "墨见",
                    "imgUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/mojian-logo.png"
                }, 
      ],
      articleList: {
                title: '最新文章',
                list: [
                        {
                            "title": "ChatGPT Plus 和 Claude Pro 会员代充值 – 支持支付宝",
                            "imageUrl": "https://ai-bot.cn/wp-content/uploads/2026/02/vipcheap-banner-0210.png",
                            "content": "ChatGPT Plus 代充值到个人账号,支持微信支付；Claude Pro 代充值到个人账号,支持微信支付，标注限时、新品标签"
                        },
                        {
                            "title": "GPT-5.6 – OpenAI 推出的最新一代大语言模型系列",
                            "imageUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/GPT-5.6-website.png",
                            "content": "2026年6月26日OpenAI发布GPT-5.6系列模型，包含旗舰Sol、均衡日常工作Terra、高速低成本Luna三款，网络安全能力增强，配套多层安全防护体系，Terra性能对标GPT-5.5且价格减半，Luna为品牌最低成本模型"
                        },
                        {
                            "title": "Papers with Code – AI科研平台，自动关联论文、代码等",
                            "imageUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/Papers-with-Code-website.png",
                            "content": "汇集arXiv、HuggingFace前沿AI论文，划分语言建模、图像理解、强化学习等多领域；2026年热门成果包含SkillIOpt智能体技能优化方案、Cosmos 3多模态世界模型、Surya OCR 2开源文字识别模型，实时更新论文热度与收藏数据"
                        },
                        {
                            "title": "Penpot – 开源的设计与代码协作平台，多人实时协作",
                            "imageUrl": "https://ai-bot.cn/wp-content/uploads/2026/06/Penpot-website.png",
                            "content": "面向团队的开源可扩展协同设计平台，支持免费注册、本地部署，具备图层、资源、页面管理、设计原型、尺寸预设等功能，适配团队数字化设计协作场景"
                        }
                    ]
      },
      
    }
  }
}
</script>

<style scoped>
/* .aside-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
} */
 .aside-card{
  /* border: 1px solid green; */
 }
 .right-aside{
    width:300px;
    position:sticky;
    top:20px;
 }
</style>