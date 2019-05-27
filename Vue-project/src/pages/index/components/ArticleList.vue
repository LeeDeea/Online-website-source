<template>
  <div class="article-wrap">
    <div class="article-size article-left-width">
      <span class="hot-article">文章列表</span>
      <ol>
        <li class="article-list"
            v-for="(item, key) in articleList"
            v-bind:key="key.id"
            @click="addEventListenerNavClick(item)">{{item.content}}</li>
      </ol>
    </div>
    <div class="article-size article-right-width">
      <div class="questions">默认知识体系图，点击确定题库可展示对应习题</div>
      <div class="answer">这里存放答案与思路</div>
      <div class="questions">默认知识体系图，点击确定题库可展示对应习题</div>
      <div class="answer">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试--------------------------------------------------------------------------------------------------------------------------------------------------------测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexArticleList',
  data () {
    return {
      hotArticle: '文章列表',
      articleList: [{
        id: '0001',
        content: 'this(全局)'
      }, {
        id: '0002',
        content: 'this(闭包)'
      }]
    }
  },
  methods: {
    addEventListenerNavClick (item) {
      console.log(item.content)
    }
  },
  mounted () {
    var articleList = document.getElementsByClassName('article-list')
    for (let i = 0; i < articleList.length; i++) {
      articleList[i].addEventListener('click', () => {
        for (let i = 0; i < articleList.length; i++) {
          articleList[i].style.color = 'rgb(67, 67, 255)'
        }
        articleList[i].style.color = 'rgb(255, 196, 35)'
      })
    }
  }
}
</script>

<style lang='stylus'  scoped>
.article-wrap
  width 90%
  margin 0 auto
  display flex
.article-left-width
  border-radius 12px
  border 1px solid #f3f3f3
  margin-right 5px
  width 18%
.hot-article
  display block
  height 40px
  line-height 40px
  text-align center
  background #f3f3f3
  color rgb(102, 102, 102)
  font-size 20px
  overflow hidden
.article-size
  min-height 400px
  display inline-block
.article-list
  flex-wrap wrap
  color rgb(67, 67, 255)
  min-height 30px
  line-height 30px
  font-style italic
  text-decoration underline
  margin-left 40px
  cursor pointer
.article-right-width
  display flex
  flex-direction column
  flex-wrap wrap
  padding 0 2% 2% 2%
  border-radius 12px
  width 81%
.questions
  color #f2f2f2
  min-height 50px
  line-height 50px
  padding 0 15px
  border-radius 5px
  background #222222
.answer
  min-height 40px
  line-height 40px
  color #222
  padding 15px
  margin 0 5px 5px 5px
  background #f2f2f2
  border-radius 5px
</style>
