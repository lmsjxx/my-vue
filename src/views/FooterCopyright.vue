<template>
  <div id="footer">
    <!-- 左侧品牌介绍区 -->
    <div class="footer-left">
      <div class="logo-wrap">
        <img class="logo-img" src="https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-logo-black.png" alt="AI工具集">
      </div>
      <p class="desc-text">
        AI工具集导航收录了国内外数百个不同类型的AI工具，每日更新和添加最新AI工具，
        AI工具集还推荐了AI学习开发的常用网站、框架和模型，帮助你加入人工智能浪潮，
        自动化高效完成任务！ Ctrl + D 或 ⌘ + D 收藏本站到浏览器书签栏。
      </p>
      <div class="copyright-row">
        <span class="copy-text">Copyright © 2026 AI工具集 蜀ICP备2022019184号-2</span>
        <img class="gaba-icon" src="https://ai-bot.cn/wp-content/themes/onenav/images/gaba.png" alt="公安备案图标">
        <span class="an-text">川公网安备 51010702003349号</span>
      </div>
    </div>

    <!-- 右侧链接+联系按钮区 -->
    <div class="footer-right">
      <div class="link-group">
        <span 
          class="link-item" 
          v-for="(item, index) in linkList" 
          :key="index"
        >
          {{ item }}
        </span>
      </div>
      <button class="email-btn">
        <!-- 邮件图标 -->
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 把所有链接抽成数组，消除长文本代码混杂，方便维护
      linkList: [
        "AI工具集导航", "关于我们", "免责声明", "最新AI项目", "AI应用商店", "果核剥壳",
        "CakeGrowth", "VipCheap", "攻壳智能体", "映技派", "豆包", "讯飞绘文", "绘蛙", "即梦",
        "蛙蛙写作", "白日梦", "咔片PPT", "办公小浣熊", "TRAE", "码上飞", "堆友AI", "LiblibAI",
        "星流AI", "秒哒", "DuMate", "AstronClaw", "LibTV"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 32px;
  margin-top: 60px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  gap: 60px;

  // 适配平板，左右改为上下堆叠
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 36px;
  }
}

// 左侧区域
.footer-left {
  flex: 1;
  min-width: 320px;

  .logo-wrap {
    margin-bottom: 16px;
    .logo-img {
      height: 48px;
      object-fit: contain;
    }
  }

  .desc-text {
    font-size: 15px;
    color: #606773;
    line-height: 1.7;
    margin: 0 0 24px;
  }

  .copyright-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 14px;
    color: #555;

    .gaba-icon {
      height: 26px;
    }
  }
}

// 右侧链接区域
.footer-right {
  flex: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .link-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 14px;

    .link-item {
      font-size: 15px;
      color: #555;
      cursor: pointer;
      transition: color 0.2s;
      position: relative;

      &:hover {
        color: #426bff;
      }

      // 链接之间小圆点分隔符
      &:not(:last-child)::after {
        content: "·";
        margin-left: 14px;
        color: #ccc;
      }
    }
  }

  .email-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: #f5f7fa;
    color: #444;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.24s ease;

    &:hover {
      background: #426bff;
      color: #fff;
      transform: translateY(-2px);
    }
  }
}
</style>