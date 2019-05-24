<template>
  <div>
    <Index-Header></Index-Header>
    <Index-Knowledge></Index-Knowledge>
    <Index-ArticleList></Index-ArticleList>
    <IndexCanvasBg></IndexCanvasBg>
  </div>
</template>

<script>
import IndexHeader from './components/Header'
import IndexKnowledge from './components/Knowledge'
import IndexArticleList from './components/ArticleList'
import IndexCanvasBg from './components/CanvasBg'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexKnowledge,
    IndexArticleList,
    IndexCanvasBg
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

ul li {
  list-style-type: none;
}

body {
  height: 1600px;
  background: white;
}
</style>
