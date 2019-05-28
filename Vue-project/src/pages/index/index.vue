<template>
  <div class="bodySize">
    <Index-Header></Index-Header>
    <Index-Knowledge :levels="levels"></Index-Knowledge>
    <Index-ArticleList></Index-ArticleList>
    <IndexCanvasBg></IndexCanvasBg>
  </div>
</template>

<script>
import IndexHeader from './components/Header'
import IndexKnowledge from './components/Knowledge'
import IndexArticleList from './components/ArticleList'
import IndexCanvasBg from './components/CanvasBg'
import axios from 'axios'

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
      levels: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/primaryKnowledge.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      this.levels = res.data.knowledge
    }
  },
  mounted () {
    this.getHomeInfo()
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
</style>
