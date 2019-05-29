<template>
  <div class="article-wrap">
    <div class="article-size article-left-width">
      <span class="hot-article">文章列表</span>
      <ol>
        <li v-bind:class="{ articleList: articleLists, godColor: key==godColor }"
            ref="article"
            v-for="(item, key) in articleList"
            v-bind:key="key"
            @click="addEventListenerNavClick(item,key)">{{item.titleList}}</li>
      </ol>
    </div>
    <div class="article-size article-right-width">
      <div v-for="(item, key) in question"
           v-bind:key="key">
        <div class="questions">{{item.question}}</div>
        <div class="answer">{{item.answer}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexArticleList',
  props: {
    articleList: Array,
    question: Array
  },
  data () {
    return {
      hotArticle: '文章列表',
      articleLists: true,
      godColor: 0
    }
  },
  methods: {
    addEventListenerNavClick (item, key) {
      this.godColor = key
      // console.log(this.$refs.article[item.id - 1]) // 可以获取对应id下的dom结构
      // console.log(item.titleList)
      // console.log(this.articleList)
    }
  },
  mounted () {

  },
  watch: {
    // articleList () {
    //   console.log(1)  // 1
    // }
  }
}
</script>

<style lang='stylus'  scoped>
.article-wrap
  display flex
  width 90%
  margin 0 auto
.article-left-width
  width 18%
  margin-right 5px
  border 1px solid #f3f3f3
  border-radius 12px
.hot-article
  display block
  height 40px
  line-height 40px
  background #f3f3f3
  font-size 20px
  text-align center
  overflow hidden
  color rgb(102, 102, 102)
.article-size
  display inline-block
  min-height 400px
.articleList
  flex-wrap wrap
  min-height 30px
  line-height 30px
  margin-left 40px
  font-style italic
  text-decoration underline
  color rgb(67, 67, 255)
  cursor pointer
.godColor
  color rgb(255, 196, 35)
.article-right-width
  display flex
  width 81%
  padding 0 2% 2% 2%
  border-radius 12px
  flex-direction column
  flex-wrap wrap
.questions
  min-height 50px
  line-height 50px
  background #222222
  padding 0 15px
  border-radius 5px
  color #f2f2f2
.answer
  min-height 40px
  line-height 40px
  margin 0 5px 5px 5px
  padding 15px
  border-radius 5px
  background #f2f2f2
  color #222
</style>
