<template>
  <div>
    <Login-CanvasBg></Login-CanvasBg>
  </div>
</template>

<script>
import LoginCanvasBg from './components/canvasBg.vue'
export default {
  name: 'index',
  components: {
    LoginCanvasBg
  },
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

body {
  /* min-height: 600px; */
  background: white;
}
::-webkit-scrollbar {
  display: none;
}
</style>
