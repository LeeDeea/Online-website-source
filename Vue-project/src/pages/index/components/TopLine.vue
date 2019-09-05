<template>
  <div class="headerTop">
    <div class="top-line"></div>
    <div class="liner_heder"
         ref="Line"
         :style="`width:${comWidth}%`"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexTopLine',
  data () {
    return {
      comWidth: 0,
      timer: null
    }
  },
  methods: {
    watch () {
      window.addEventListener('scroll', (e) => {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          var pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight
          var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
          var scorllHeight = pageHeight - windowHeight
          var lisennerheight = document.documentElement.scrollTop
          var finsh = (lisennerheight / scorllHeight) * 100
          finsh = Number(finsh.toString().slice(0, 6))
          this.comWidth = finsh
        }, 12)
      })
    }
  },
  mounted () {
    this.watch()
  }
}

</script>

<style lang='stylus' scoped>
.headerTop
  overflow hidden
.top-line
  // z-index 99
  // position fixed
  // top 0
  // height 4px
  width 100%
  background white
.liner_heder
  z-index 100
  position fixed
  top 0px
  height 4px
  width 100%
  background -webkit-repeating-linear-gradient(30deg, #c3c3ff 0, #c3c3ff 10px, #acacf9 10px, #acacf9 20px)
  -webkit-animation move 1s linear infinite
  box-shadow 0 0 3px 0px
@keyframes move
  0%
    background-position 0 0
  100%
    background-position 23px 0
</style>
