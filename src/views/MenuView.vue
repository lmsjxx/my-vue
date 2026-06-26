<template>
    <div id="menu">
        <!-- 左侧菜单页 -->
        <ul>
          <li v-on:click="jump(menu.id)" v-for="(menu,index) in menuList" :key="index">{{ menu.linkText }} </li>
        </ul>
    </div>
</template>

<script>

export default {
  data () {
    return {
      menuList: [
        {
          id: 1,
          icon: '',
          linkText: 'AI写作工具',
          linkPath: ''
        },
        {
          id: 2,
          icon: '',
          linkText: 'AI图像工具',
          linkPath: ''
        },
        {
          id: 3,
          icon: '',
          linkText: 'AI视频工具',
          linkPath: ''
        },
        {
          id: 4,
          icon: '',
          linkText: 'AI办公工具',
          linkPath: ''
        },
        {
          id: 5,
          icon: '',
          linkText: 'AI聊天助手',
          linkPath: ''
        },
        {
          id: 6,
          icon: '',
          linkText: 'AI智能体',
          linkPath: ''
        },
        {
          id: 7,
          icon: '',
          linkText: 'AI编程工具',
          linkPath: ''
        },
        {
          id: 8,
          icon: '',
          linkText: 'AI开发平台',
          linkPath: ''
        },
        {
          id: 9,
          icon: '',
          linkText: 'AI设计工具',
          linkPath: ''
        },
        {
          id: 10,
          icon: '',
          linkText: 'AI音频工具',
          linkPath: ''
        },
        {
          id: 11,
          icon: '',
          linkText: 'AI搜索引擎',
          linkPath: ''
        },
        {
          id: 12,
          icon: '',
          linkText: 'AI学习网站',
          linkPath: ''
        },
        {
          id: 13,
          icon: '',
          linkText: 'AI训练模型',
          linkPath: ''
        },
        {
          id: 14,
          icon: '',
          linkText: 'AI模型评测',
          linkPath: ''
        },
        {
          id: 15,
          icon: '',
          linkText: 'AI内容检测',
          linkPath: ''
        },
        {
          id: 16,
          icon: '',
          linkText: 'AI提示指令',
          linkPath: ''
        },
        {
          id: 17,
          icon: '',
          linkText: 'AI副业工具',
          linkPath: ''
        }
      ]
    }
  },
  methods: {
    jump(id){
      this.$router.push({
        path: '/home/layout',
        query: {
          'id': id
        }
      })
    }
  }
}

</script>
