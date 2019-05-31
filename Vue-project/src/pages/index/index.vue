<template>
  <div class="bodySize">
    <IndexCanvasBg></IndexCanvasBg>
    <Index-Header></Index-Header>
    <Index-Knowledge :levels="levels"
                     @selectKnowleage="changeKnowleage"></Index-Knowledge>
    <Index-ArticleList :articleListData="articleList"></Index-ArticleList>
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
      getJsonData: 'primaryKnowledage.json',
      levels: [],
      articleList: []
    }
  },
  methods: {
    getKnowleage () {
      // 线上环境使用axios
      // axios.get('https://leedeea.github.io/Online-website/' + 'static/mock/' + this.getJsonData).then(this.handleGetKnowleageInfoSucc)
      // dev使用json
      axios.get('./static/mock/' + this.getJsonData).then(this.handleGetKnowleageInfoSucc)
    },
    handleGetKnowleageInfoSucc (res) {
      // 页面打开后 加载"分类标签的数据"
      res = res.data
      this.levels = res.data.knowledge
    },
    changeKnowleage (res) {
      // 点击分类 变更文章列表页的数据
      this.getJsonData = res
      axios.get('./static/mock/primaryKnowledage/' + this.getJsonData).then(this.changeArticleList)
    },
    changeArticleList (res) {
      // 点击knowleage分类 输出文章列表
      res = res.data.articleList
      this.articleList = res
    }
  },
  mounted () {
    this.getKnowleage()
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
