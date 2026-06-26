<template>
    <div id="nav">
        <div class="nav-list">
          <li v-for="nav in navList" :key="nav.id">
            <router-link :to="nav.linkPath">{{ nav.linkText }}</router-link>
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
            linkPath: '/'
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