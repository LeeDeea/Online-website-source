<template>
  <div class="top-line"
       ref="Line"
       :style="`width:${comWidth}%`"></div>
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
        }, 15)
      })
    }
  },
  mounted () {
    this.watch()
  }
}

</script>

<style lang='stylus' scoped>
.top-line
  position fixed
  top 0
  height 4px
  background red
</style>
