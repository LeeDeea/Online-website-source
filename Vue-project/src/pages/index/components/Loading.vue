<template>
  <div :class="{'loadingbox':loadingbox,'loadingboxMove':loadingboxMove}"
       v-if="this.$store.state.loadingShow"
       ref="loadings">
    <div class="loading"
         ref="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loadingAction: Boolean
  },
  data () {
    return {
      loadingbox: true,
      loadingboxMove: true,
      loading: true
    }
  },
  methods: {

  },
  mounted () {
  },
  watch: {
    loadingAction () {
      console.log(this.loadingAction)
      if (this.loadingAction === false) {
        this.$refs.loadings.style.right = '5px'
      } else if (this.loadingAction === true) {
        this.$refs.loadings.style.right = '-44px'
      }
    }
  }
}

</script>

<style lang='stylus' scoped>
.loadingbox
  overflow hidden
  position fixed
  top 83px
  right -44px
  // left calc(50% - 16px)
  border-radius 50%
.loadingboxMove
  transition 0.5s all
.loading
  width 32px
  height 32px
  background pink
  position relative
  overflow hidden
  border-radius 50%
.loading div
  width 16px
  height 16px
  background red
  position absolute
  border-radius 50%
  animation move 2s linear infinite
  filter blur(3px)
@keyframes move
  0%, 100%
    transform translate(0, 0)
  25%
    transform translate(100%, 0)
  50%
    transform translate(100%, 100%)
  75%
    transform translate(0, 100%)
.loading div:nth-child(1)
  background red
  animation-delay 0s
.loading div:nth-child(2)
  background green
  animation-delay -0.5s
.loading div:nth-child(3)
  background yellow
  animation-delay -1s
.loading div:nth-child(4)
  background blue
  animation-delay -1.5s
.loading:after
  display block
  line-height 32px
  text-align center
  content 'loading...'
  font-size 6px
  color black
  filter drop-shadow(2px 4px 6px black)
</style>
