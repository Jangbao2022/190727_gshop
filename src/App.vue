<template>
  <div id="app">
    <router-view></router-view >
    <foot-guide v-show="$route.meta.showFooter"></foot-guide >
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide'


  export default {
    components: {
      FootGuide,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
