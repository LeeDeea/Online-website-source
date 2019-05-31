<template>
  <div>
    <div class="top_logo"></div>
    <div class="nav">
      <div onselectstart="return false"
           class="introduce">来自一位刚毕业的前端学童的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟~</div>
      <router-link to='/index'>
        <div onselectstart="return false"
             class="gv"
             href="">点击新世界</div>
      </router-link>
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

<style lang="stylus" >
.top_logo
  position absolute
  z-index 30
  background url('../../../assets/7.png') no-repeat center top
  // #199cc4
  top -5%
  margin 0 auto
  width 100%
  height 100%
.nav
  position absolute
  top 70%
  width 60%
  height auto
  z-index 30
  padding 0 20%
  .introduce
    color #066197
  .gv
    display inline-block
    width 130px
    height 43px
    line-height 43px
    background url('../../../assets/nav_gv.png') repeat
    text-decoration none
    text-align center
    cursor pointer
    margin 8px 2px 8px 2px
    font 18px / 43px 'microsoft yahei'
    color #066197
    float right
</style>
