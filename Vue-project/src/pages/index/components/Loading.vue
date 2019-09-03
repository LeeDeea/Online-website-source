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
@import '~styles/index/loading.styl'
</style>
