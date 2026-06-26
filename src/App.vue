<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
*{
        margin: 0px;
        padding: 0px;
    }
    ul,ol,li{
      list-style: none;
    }
    a{
      text-decoration: none;
      color: gray;
    }
</style>
