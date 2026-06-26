<template>
  <div id="app">
    <div class="ai-menu my-box my-p15">
      <h2>AI工具箱</h2>
      <MenuView/>
    </div>
    <div class="ai-content my-box my-p15">
      <NavView/>
      <HotView/>
      <ToolView/>
      <SearchView/>
      <AdvView/>
      <hello/>
    </div>
    <!-- 路由测试 -->
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/hot">Menu</router-link> -->
    <!-- 路由页面渲染出口，必不可少 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MenuView from './views/MenuView.vue'
import HotView from './views/HotView.vue'
import ToolView from './views/ToolView.vue'
import SearchView from './views/SearchView.vue'
import NavView from './views/NavView.vue'
import AdvView from './views/AdvView.vue'

export default {
  name: 'App',
  components: {
    MenuView,
    HotView,
    ToolView,
    SearchView,
    NavView,
    AdvView
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul,ol,li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  margin: 20px;
  .ai-menu{
    flex: 1;
    margin-right: 15px;
  }
  .ai-content{
    flex: 4;
  }
}
.my-box{
  border: 1px solid black;
}
.my-p15{
  padding: 15px;
}
</style>
