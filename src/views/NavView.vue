<template>
    <div id="nav">
        <div class="nav-list">
          <li v-for="nav in navList" :key="nav.id">
            <router-link :to="nav.linkPath">
              {{ nav.linkText }}
            </router-link>
          </li>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          {
            id: 1,
            icon: '',
            linkText: 'Ai工具集',
            linkPath: '/',
            children: [
              { id: 101, linkText: 'AI写作工具' },
              { id: 102, linkText: 'AI图像工具' },
              { id: 103, linkText: 'AI视频工具' },
              { id: 104, linkText: 'AI办公工具' },
              { id: 104, linkText: 'AI聊天助手' },
              { id: 104, linkText: 'AI智能体' },
              { id: 104, linkText: 'AI编程工具' },
              { id: 104, linkText: 'AI开发平台' },
              { id: 104, linkText: 'AI音频工具' },
              { id: 104, linkText: 'AI搜索引擎' },
              { id: 104, linkText: 'AI学习网站' },
              { id: 104, linkText: 'AI训练模型' },
              { id: 104, linkText: 'AI模型评测' },
              { id: 104, linkText: 'AI内容检测' },
              { id: 104, linkText: 'AI提示指令' },
              { id: 104, linkText: 'AI副业工具' }
            ]
          },
          {
            id: 2,
            icon: '',
            linkText: '关于我们',
            linkPath: '/'
          },
          {
            id: 3,
            icon: '',
            linkText: 'AI应用集',
            linkPath: '/'
          },
          {
            id: 3,
            icon: '',
            linkText: 'AI教程资源',
            linkPath: '/'
          },
          {
            id: 3,
            icon: '',
            linkText: 'AI教程资源',
            linkPath: '/'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #nav{
    .nav-list{
      display: flex;
      li{
        padding: 15px;
        a{
          color: blue;
        }
      }
    }
  }

</style>