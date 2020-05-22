<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail">
        <div class="detail-wrapper">
            <div class="detail-main">
                <h1 class="name">
                    {{seller.name}}
                </h1>
                <div class="title">
                    <span class="line"></span>
                    <span class="text">优惠</span>
                    <span class="line"></span>
                </div>
                <ul class="supports">
                    <li v-for="(item,idx) in seller.supports" :key=idx class="support-item">
                        <support-ico :size="1" :type="item.type"></support-ico>
                        <span class="item-desc">{{item.description}}</span>
                    </li>
                </ul>

                <div class="title">
                    <span class="line"></span>
                    <span class="text">公告</span>
                    <span class="line"></span>
                </div>
                <div class="bulletin">
                    {{seller.bulletin}}
                </div>
            </div>
        </div>
        <div class="detail-close" @click="hide">
            <i class="icon-close"></i>
        </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from 'components/support-ico/support-ico'

export default {
  name: 'header-detail',
  data () {
    return {
      visible: false
    }
  },
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    SupportIco
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixin"
@import "~common/stylus/variable"

.header-detail
  position : fixed
  z-index : 100
  top : 0px
  left : 0px
  width: 100%
  height: 100%
  color: $color-white
  background: $color-background-s
  backdrop-filter: blur(10px)
  opacity : 0.9
  .detail-wrapper
    display: inline-block
    width: 100%
    min-height: 100%
    .detail-main
      margin : 64px 0
      .name
        font-size: 30px
        text-align : center
      .title
        width : 80%
        margin : 0 auto
        margin-top : 30px
        margin-bottom : 10px
        display : flex
        .line
          border-bottom : 1px solid rgba(255, 255, 255, 0.2)
          flex : 1
          position : relative
          top: -10px
        .text
          font-size : 26px
          font-weight : 500
          padding: 0 12px
      .supports
        width : 80%
        margin : 0 auto
        .support-item
          display : flex
          align-items : center
          padding: 0 12px
          margin-bottom: 12px
          .support-ico
              margin-right : 5px
          .text
              line-height: 12px
              font-size: 12px
      .bulletin
        width: 80%
        margin: 0 auto
        word-break : break-all
        padding: 0 12px
        line-height: 24px
        font-size: 16px
  .detail-close
    position: relative
    width: 30px
    height: 30px
    margin: -64px auto 0 auto
    font-size: 35px
</style>
