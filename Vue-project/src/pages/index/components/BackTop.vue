<template>
  <div>
    <a href="#">
      <div class="backTop">
        <svg t="1562837425709"
             class="icon"
             viewBox="0 0 1961 1024"
             version="1.1"
             p-id="1972"
             width="30"
             height="30">
          <path d="M1659.19911261 650.488383a69.211299 69.211299 0 0 1-20.050514 48.783294 67.904604 67.904604 0 0 1-96.739016 0L1014.76598561 166.735232 479.48547961 707.053774a67.933641 67.933641 0 0 1-96.753534 0 69.458119 69.458119 0 0 1 0-97.66822l583.657273-589.145394a67.933641 67.933641 0 0 1 96.753534 0l576.005846 581.406853A69.240337 69.240337 0 0 1 1659.19911261 650.488383z m0 0"
                p-id="1973"
                fill="#ffffff"></path>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'IndexBackTop',
  data () {
    return {
    }
  },
  methods: {

  }
}

</script>

<style lang='stylus' scoped>
.backTop
  height 30px
  position fixed
  top 80%
  right 3%
  padding 3px
  border 1px solid #c1c1c1
  border-radius 4px
  background #404040
.backTop:hover
  background #909090
.backTop:active
  background #909090
</style>
