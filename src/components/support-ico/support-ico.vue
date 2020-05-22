<template>
  <span class="support-ico" :class="iconCls"></span>
</template>

<script>
export default {
  name: 'support-ico',
  props: {
    size: {
      type: Number
    },
    type: {
      type: Number
    }
  },
  computed: {
    iconCls () {
      const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"

  .icon-1
    width : 12px
    height : 12px
    background-size : 12px 12px
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.special
      bg-image('special_1')
    &.invoice
      bg-image('invoice_1')
    &.guarantee
      bg-image('guarantee_1')
</style>
