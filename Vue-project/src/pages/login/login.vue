<template>
  <div class="canvasSize">
    <Login-Img></Login-Img>
    <Login-CanvasBg></Login-CanvasBg>
  </div>
</template>

<script>
import LoginCanvasBg from './components/canvasBg.vue'
import LoginImg from './components/login.vue'

export default {
  name: 'index',
  components: {
    LoginCanvasBg,
    LoginImg
  },
  data () {
    return {
      test: 'test'
    }
  },
  methods: {

  },
  mounted () {
    this.say()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.canvasSize {
  /* min-height: 600px; */
  background: white;
  /* max-height: 625px; */
}
::-webkit-scrollbar {
  display: none;
}
</style>
