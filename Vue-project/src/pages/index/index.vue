<template>
  <div class="bodySize">
    <IndexCanvasBg></IndexCanvasBg>
    <Index-TopLine></Index-TopLine>
    <Index-Header @selectHeader="changetHeader"></Index-Header>
    <Index-Knowledge :levels="levels"
                     @selectKnowleage="changeKnowleage"></Index-Knowledge>
    <Index-ArticleList :articleListData="articleList"></Index-ArticleList>
    <Index-BackTop></Index-BackTop>
    <Index-ButtonSpace></Index-ButtonSpace>
    <Index-Loading :loadingAction="loadingAction"></Index-Loading>
  </div>
</template>

<script>
import IndexHeader from './components/Header'
import IndexKnowledge from './components/Knowledge'
import IndexArticleList from './components/ArticleList'
import IndexCanvasBg from './components/CanvasBg'
import IndexBackTop from './components/BackTop'
import IndexButtonSpace from './components/ButtonSpace'
import IndexTopLine from './components/TopLine'
import IndexLoading from './components/Loading'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexKnowledge,
    IndexArticleList,
    IndexCanvasBg,
    IndexBackTop,
    IndexButtonSpace,
    IndexTopLine,
    IndexLoading
  },
  data () {
    return {
      getJsonData: 'primaryKnowledage.json',
      getJsonHeader: 'primaryKnowledage',
      levels: [],
      articleList: [],
      axiosArr: [],
      loadingAction: true
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
    changetHeader (res) {
      // 初级 中级 高级 切换加载分类标签数据
      this.getJsonHeader = res
      let rest = res + '.json'
      let url = `./static/mock/${rest}`
      let fn = this.handleGetKnowleageInfoSucc
      this.createdAxios(url, fn)
    },
    changeKnowleage (res) {
      // 点击分类 变更文章列表页的数据
      this.getJsonData = res
      let url = './static/mock/' + this.getJsonHeader + '/' + this.getJsonData
      let fn = this.changeArticleList
      this.createdAxios(url, fn)
    },
    changeArticleList (res) {
      // 点击knowleage分类 输出文章列表
      res = res.data.articleList
      this.articleList = res
    },
    createdAxios (url, fn) {
      console.log(this.axiosArr)
      let AxioschangeHeader = axios.create({})
      AxioschangeHeader.interceptors.request.use(config => {
        if (this.axiosArr.includes(config.url)) {
          return config
        } else {
          this.loadingAction = false
          // this.axiosArr.push(config.url)
          return config
        }
      })
      AxioschangeHeader.interceptors.response.use(res => {
        this.loadingAction = true
        return res
      })
      AxioschangeHeader.get(
        url
      ).then(fn)
    }
  },
  mounted () {
    this.getKnowleage()
  }
}
</script>

<style lang='stylus'>
@import '~styles/reset.styl'
</style>
