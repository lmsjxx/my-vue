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
          {{ menu.linkText }}
          <span
            v-if="menu.children"
            class="arrow"
            :class="{ rotate: showID === menu.id }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-body-text"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
              /></svg
          ></span>
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
#menu{
  background: white;
  border: 1px solid red;
}
li {
  padding: 2px;
  color: #606d78;
  font-size: 15px;
  overflow: hidden;
  // border: 1px solid green;
  align-items: center;
  .menu-title {
    width: 100%;
    box-sizing: border-box;
    display: block;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 15px;
    border-radius: 6px;

    &:hover {
      background: #e0e0e0;
      color: #5961f9;
      padding-left: 22px;
    }
  }

  // 箭头旋转样式新增
  .arrow {
    display: inline-block;
    margin-left: 10px;
    transition: transform 0.3s ease;
  }
  .arrow.rotate {
    transform: rotate(90deg);
  }

  .sub-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    background: #f7f8fa;
    // margin-top: 10px;
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
