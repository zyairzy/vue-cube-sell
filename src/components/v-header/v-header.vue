<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <img class="brand" src="./brand@2x.png">
          <span class="name">回龙观</span>
        </div>
        <div class="description">
          分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="text">满50减10</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">3333个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <img class="bulletin-title" src="./bulletin@2x.png">
      <span class="bulletin-text">公告信息</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      seller: {
        avatar: '',
        supports: true
      }
    }
  }
}
</script>

<style lang="stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header
    color : #ffffff
    background-color : green
    .content-wrapper
      display : flex
      align-items: center
      padding : 24px 18px
      position : relative
      .avatar
        flex : 0 0 64px
      .content
        flex : 1
        margin-left : 5px
        .title
          display : flex
          align-items : center
          margin-bottom : 8px
          .brand
            width: 30px
            height: 18px
          .name
            margin-left : 5px
            font-size : $fontsize-large
            font-weight : bold
        .description
          margin-bottom : 8px
          font-size : $fontsize-small
        .support
          .text
            line-height: 12px
            font-size: $fontsize-small
      .support-count
        position : absolute
        right : 10px
        bottom : 10px
        background-color : blue
        height : 24px
        line-height : 24px
        padding : 1px 8px
        border-radius : 14px
    .bulletin-wrapper
      height : 26px
      line-height : 26px
      display : flex
      align-items : center
      font-size: $fontsize-small
      .bulletin-title
        width : 20px
        height : 10px
        flex : 0 0 20px
        margin-right : 5px
      .bulletin-text
        flex : 1
    .background
      position : absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index : -1
</style>
