<template>
  <div id="app">
    <VHeader/>
    <div class="tab-content"></div>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'

export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>

<style lang="stylus" scoped>
#app
  .tab-content
    top: 150px
    bottom: 0
    left : 0
    right : 0
    background-color: red
    height : 100px
</style>
