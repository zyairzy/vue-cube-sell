<template>
  <div id="app">
    <VHeader :seller="seller"/>
    <div class="tab-content"></div>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header.vue'
import axiosGet from './api/'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this._getSeller()
  },
  components: {
    VHeader
  },
  methods: {
    _getSeller () {
      axiosGet('/api/seller').then(retSeller => {
        this.seller = retSeller
      }).catch(err => {
        console.log(err)
      })
    }
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
