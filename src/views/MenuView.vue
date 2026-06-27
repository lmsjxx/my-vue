<template>
  <div id="menu">
    <!-- 左侧菜单页 -->
    <ul>
      <li
        v-on:click="isJump(menu)"
        v-for="(menu, index) in menuList"
        :key="index"
      >
        <div class="menu-title">
          <span class="title-text">
          <img v-if="menu.icon" :src="require(`@/assets/${menu.icon}`)" class="menu-icon" alt="">
          {{ menu.linkText }}
          </span>
          <span
          v-if="menu.children"
          class="arrow"
          :class="{ rotate: showID === menu.id }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
              />
            </svg>
          </span>
        </div>
            <div class="sub-wrap" :class="{ open: showID === menu.id }">
              <div v-for="text in menu.children" :key="text.id" class="sub-item">
                <div @click="jump(text.id)" class="childText">
                  {{ text.linkText }}
                </div>
              </div>
            </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showID: null,
      menuList: [
        {
          id: 1,
          icon: "svg/pencil.svg",
          linkText: "AI写作工具",
          linkPath: "",
        },
        {
          id: 2,
          icon: "svg/image-fill.svg",
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
          icon: "svg/image-fill.svg",
          linkText: "AI视频工具",
          linkPath: "",
        },
        {
          id: 4,
          icon: "svg/image-fill.svg",
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
          icon: "svg/image-fill.svg",
          linkText: "AI聊天助手",
          linkPath: "",
        },
        {
          id: 6,
          icon: "svg/image-fill.svg",
          linkText: "AI智能体",
          linkPath: "",
          children: [
            { id: 1009, linkText: "AI智能体" },
            { id: 1010, linkText: "插件与skill" },
          ],
        },
        {
          id: 7,
          icon: "svg/image-fill.svg",
          linkText: "AI编程工具",
          linkPath: "",
        },
        {
          id: 8,
          icon: "svg/image-fill.svg",
          linkText: "AI开发平台",
          linkPath: "",
        },
        {
          id: 9,
          icon: "svg/image-fill.svg",
          linkText: "AI设计工具",
          linkPath: "",
        },
        {
          id: 10,
          icon: "svg/image-fill.svg",
          linkText: "AI音频工具",
          linkPath: "",
        },
        {
          id: 11,
          icon: "svg/image-fill.svg",
          linkText: "AI搜索引擎",
          linkPath: "",
        },
        {
          id: 12,
          icon: "svg/image-fill.svg",
          linkText: "AI学习网站",
          linkPath: "",
        },
        {
          id: 13,
          icon: "svg/image-fill.svg",
          linkText: "AI训练模型",
          linkPath: "",
        },
        {
          id: 14,
          icon: "svg/image-fill.svg",
          linkText: "AI模型评测",
          linkPath: "",
        },
        {
          id: 15,
          icon: "svg/image-fill.svg",
          linkText: "AI内容检测",
          linkPath: "",
        },
        {
          id: 16,
          icon: "svg/image-fill.svg",
          linkText: "AI提示指令",
          linkPath: "",
        },
        {
          id: 17,
          icon: "svg/image-fill.svg",
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
    toggleShow(id) {
      if (this.showID === id) {
        this.showID = null;
      } else {
        this.showID = id;
      }
    },
    isJump(object) {
      if (object.children && object.children.length > 0) {
        if (this.showID === object.id) {
          this.showID = null;
        } else {
          this.showID = object.id;
        }
      } else {
        this.jump(object.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.icon{
  display: flex;
}
#menu {
  background: white;
  border: 1px solid red;
}
li {
  padding: 2px;
  color: #606d78;
  font-size: 15px;
  overflow: hidden;

  .menu-title {
    width: 100%;
    box-sizing: border-box;
    /* 开启flex：文字居左、箭头居右、垂直居中 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 15px;
    border-radius: 6px;

    &:hover {
      background: #e0e0e0;
      color: #5961f9;
      padding-left: 22px;
      
    }

    /* 左侧文字，不挤压箭头 */
    .title-text {
      flex-shrink: 0;
    }

    // ========== SVG箭头核心样式 ==========
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      /* 距离右侧40px */
      margin-right: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%; // 圆形容器
      transition: all 0.2s ease;
      /* 旋转动画 */
      transform-origin: center;
      svg {
        width: 16px;
        height: 16px;
      }
      // 点击按下圆形变灰
      &:active {
        background-color: #d1d1d1;
      }
    }
    // 菜单展开旋转90度
    .arrow.rotate {
      transform: rotate(90deg);
    }
  }

  .sub-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    background: #f7f8fa;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

    .sub-item {
      padding: 0 12px;
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
      .childText {
        padding: 12px 18px;
        font-size: 14px;
        color: #444;
        border-radius: 6px;
        margin: 6px 0;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background: #e0e0e0;
          color: #5961f9;
          padding-left: 22px;
        }
      }
    }
  }
  .sub-wrap.open {
    max-height: 1000px;
  }
}
</style>
