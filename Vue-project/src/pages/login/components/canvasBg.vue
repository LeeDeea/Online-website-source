<template>
  <div>
    <div class="top_logo"></div>
    <div class="nav">
      <transition name="fade">
        <router-link to='/index'>
          <span onselectstart="return false"
                class="gv"
                href="">点击新世界</span>
        </router-link>
      </transition>
      <span onselectstart="return false"
            class="introduce">来自一位渣渣前端的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟~</span>
    </div>
    <canvas ref="canvas"
            id="canvas"></canvas>
  </div>
</template>

<script>

export default {
  name: 'LoginCanvasBg',
  data () {
    return {
    }
  },
  methods: {
    initCanvas () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      var w = canvas.width = document.body.clientWidth
      var h = canvas.height = window.innerHeight
      var hue = 217 // 星星颜色
      var stars = [] // new start计数数组 存放this
      var count = 0 // new start计数 index

      var maxStars = 900// 星星数量
      var canvas2 = document.createElement('canvas')
      var ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      var half = canvas2.width / 2
      var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
      gradient2.addColorStop(0.025, '#CCC')
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
      gradient2.addColorStop(1, 'transparent')
      // 挂在星星的颜色 gradient2 到 ctx2.fillStyle
      ctx2.fillStyle = gradient2
      ctx2.beginPath()
      ctx2.arc(half, half, half, 0, Math.PI * 2)
      ctx2.fill()

      // End cache

      function random (min, max) {
        if (arguments.length < 2) {
          max = min
          min = 0
        }
        if (min > max) {
          var hold = max
          max = min
          min = hold
        }
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      function maxOrbit (x, y) {
        var max = Math.max(x, y)
        var diameter = Math.round(Math.sqrt(max * max + max * max))
        return diameter / 2
        // 星星移动范围，值越大范围越小，
      }

      var Star = function () {
        this.orbitRadius = random(maxOrbit(w, h))
        this.radius = random(60, this.orbitRadius) / 8
        // 星星大小
        this.orbitX = w / 2
        this.orbitY = h / 2
        this.timePassed = random(0, maxStars)
        this.speed = -random(this.orbitRadius) / 50000
        // 星星移动速度
        this.alpha = random(2, 10) / 10

        count++
        stars[count] = this
      }

      Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
        var y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
        var twinkle = random(10)

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
        this.timePassed += this.speed
      }

      for (var i = 0; i < maxStars; i++) {
        // eslint-disable-next-line no-new
        new Star()
      }

      function animation () {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.5 // 尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter'
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
        };

        window.requestAnimationFrame(animation)
      }

      animation()
    }
  },
  mounted () {
    this.initCanvas()
    // this.showRef()
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
#canvas
  position absolute
  left 0px
  top 0px
  width 100%
  z-index -999
  background #fefefe
</style>
