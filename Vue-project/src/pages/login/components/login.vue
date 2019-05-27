<template>
  <div>
    <div class="top_logo"></div>
    <div class="nav">
      <router-link to='/index'>
        <span onselectstart="return false"
              class="gv"
              href="">点击新世界</span>
      </router-link>
      <span onselectstart="return false"
            class="introduce">来自一位渣渣前端的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟~</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginImg',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.top_logo
  position absolute
  z-index 30
  background url('../../../assets/7.png') no-repeat center top
  // #199cc4
  margin 0 auto
  width 100%
  height 100%
.nav
  width 904px
  height auto
  position absolute
  z-index 30
  top 420px
  left 50%
  margin-left -402px
  .gv
    text-decoration none
    background url('../../../assets/nav_gv.png') repeat 0px 0px
    width 130px
    height 43px
    display inline-block
    text-align center
    /* 水平居中 */
    line-height 43px
    /* 上下居中 */
    cursor pointer
    /* 左浮动 */
    margin 8px 2px 8px 2px
    font 18px / 43px 'microsoft yahei'
    color #066197
  .introduce
    color #066197
</style>
