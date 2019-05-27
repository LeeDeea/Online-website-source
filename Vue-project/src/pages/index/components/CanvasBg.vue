<template>
  <div>
    <canvas ref="canvas"
            id="canvas"
            class="canvasss"></canvas>
  </div>
</template>

<script>

export default {
  name: 'canvasBg',
  data () {
    return {
    }
  },
  methods: {
    initCanvas () {
      let oCanvas = this.$refs.canvas
      let cxt = oCanvas.getContext('2d')// 创建画笔
      let Ww = document.body.clientWidth
      let Wh = document.body.clientHeight
      let Num = 100
      let Data = []// 圆心随机坐标
      function autoWH () { // 初始化操作
        oCanvas.width = Ww
        oCanvas.height = Wh
        // 生成200个随机的圆心坐标与圆
        for (let i = 0; i < Num; i++) {
          Data[i] = {
            x: Math.random() * Ww,
            y: Math.random() * Wh,
            cx: (Math.random() * 0.6 - 0.4) * 2.2,
            cy: (Math.random() * 0.6 - 0.4) * 2.2
          }
          createParticle(Data[i].x, Data[i].y)
        }
      }
      autoWH()
      // 2.创建粒子
      function createParticle (x, y) {
        cxt.save()// 保存路径
        cxt.fillStyle = 'rgba(255, 255, 255, 0)'// 填充样式
        cxt.beginPath()// 开始路径
        cxt.arc(x, y, 1.2, 0, Math.PI * 2, false)// 画圆方法
        cxt.closePath()// 结束路径
        cxt.fill()// 填充
        cxt.restore()// 释放路径
      }
      // 3.粒子运动
      function draw () {
        cxt.clearRect(0, 0, Ww, Wh)// 构造之前先清除
        for (let i = 0; i < Num; i++) {
          Data[i].x += Data[i].cx
          Data[i].y += Data[i].cy
          createParticle(Data[i].x, Data[i].y)
          if (Data[i].x < 0 || Data[i].x > Ww) {
            Data[i].cx = -Data[i].cx
          } else if (Data[i].y < 0 || Data[i].y > Wh) {
            Data[i].cy = -Data[i].cy
          }
          for (let j = i + 1; j < Num; j++) {
            if (Math.pow(Data[i].x - Data[j].x, 2) + Math.pow(Data[i].y - Data[j].y, 2) < 90 * 90) {
              drawLine(Data[i].x, Data[i].y, Data[j].x, Data[j].y)
            }
          }
        }
      }
      setInterval(draw, 1000 / 40)
      // 4.粒子连线
      function drawLine (x1, y1, x2, y2) {
        let Cxt = oCanvas.getContext('2d')
        let color = Cxt.createLinearGradient(x1, y1, x2, y2)
        color.addColorStop(0, '#bcbcbc')
        color.addColorStop(1, '#f2f2f2')
        Cxt.save()
        Cxt.strokeStyle = color
        // Cxt.shadowColor = "black";
        // Cxt.shadowOffsetX = 5;
        Cxt.beginPath()
        // Cxt.lineCap = "round";
        Cxt.moveTo(x1, y1)
        Cxt.lineTo(x2, y2)
        Cxt.lineCap = 'butt'
        Cxt.closePath()
        Cxt.stroke()
        Cxt.restore()
      }
    }
  },
  mounted () {
    this.initCanvas()
    // this.showRef()
  }
}
</script>

<style lang="stylus" scoped>
.canvasss
  position absolute
  left 0px
  top 0px
  width 100%
  z-index -1
  background #fefefe
</style>
