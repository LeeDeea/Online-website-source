<template>
  <div class="bodySize">
    <IndexCanvasBg></IndexCanvasBg>
    <Index-Header></Index-Header>
    <Index-Knowledge :levels="levels"
                     @selectKnowleage="changeKnowleage"></Index-Knowledge>
    <Index-ArticleList :articleList="articleList"
                       :question="question"></Index-ArticleList>
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
      getData: 'primaryKnowledage.json',
      levels: [],
      articleList: [],
      question: []
    }
  },
  methods: {
    getHomeInfo () {
      // 线上环境使用axios
      // axios.get('https://leedeea.github.io/Online-website/' + './static/mock/' + this.getData).then(this.handleGetKnowleageInfoSucc)
      // dev使用json
      axios.get('./static/mock/' + this.getData).then(this.handleGetKnowleageInfoSucc)
    },
    handleGetKnowleageInfoSucc (res) {
      res = res.data
      // console.log(res.data)
      this.levels = res.data.knowledge
      this.question = res.data.questions
      this.articleList = res.data.articleList
      // console.log(this.articleList)
    },
    changeKnowleage (x) {
      console.log(x)
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
