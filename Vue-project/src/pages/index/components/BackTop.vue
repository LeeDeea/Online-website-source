<template>
  <div>
    <a href="#">
      <div class="backTop">↑&nbsp;Top</div>
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
  line-height 30px
  position fixed
  top 80%
  right 3%
  padding 3px
  border 1px solid #4c4c4c
  border-radius 4px
  background #f2f2f2
  color #4c4c4c
.backTop:hover
  color #dc8282
.backTop:active
  color red
</style>
