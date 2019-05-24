<template>
  <div>
    <div class="spans">
      <span class="number">2</span>
      <span class="item">3</span>
      <span class="item">4</span>
      <span class="item">5</span>
      <span class="item">6</span>
      <span class="item">7</span>
      <span class="item">1</span>
    </div>
    <div class="imgs"></div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.spans
  .number
    font-size 60px
  .item
    font-size 50px
.imgs
  width 100px
  height 100px
  background #000
</style>
