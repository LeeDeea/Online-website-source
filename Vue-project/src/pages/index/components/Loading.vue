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
      if (this.loadingAction === false) {
        this.$refs.loadings.style.right = '7px'
        this.$refs.loadings.style.opacity = 1
      } else if (this.loadingAction === true) {
        this.$refs.loadings.style.right = '-4px'
        this.$refs.loadings.style.opacity = 0
      }
    }
  }
}

</script>

<style lang='stylus' scoped>
@import '~styles/index/loading.styl'
</style>
