<template>
  <div class="article-wrap">
    <div class="article-size article-left-width">
      <span class="hot-article">文章列表
        <span class="showArticle"
              @click="hideenArticleList()">{{show}}</span>
      </span>
      <div class="articleListOl"
           ref="articleOl"
           id="articleOl">
        <ol>
          <li v-bind:class="{ articleList: articleLists, godColor: key==godColor }"
              ref="article"
              v-for="(item, key) in articleList"
              v-bind:key="key"
              @click="addEventListenerNavClick(item,key)">{{item.titleList}}</li>
        </ol>
      </div>
    </div>
    <div class="article-size article-right-width">
      <div>
        <div class="questions">{{dataQuestion}}</div>
        <div v-for="(item, index) in dataAnswer"
             v-bind:key="index">
          <div class="answer">
            <p class="answerTitle">{{item.answer}}</p>
            <p>{{item.explanation}}</p>
            <div class="questionImgWrap">
              <img class="questionImg"
                   :src="item.url"
                   alt="">
            </div>
            <p v-html="item.ImgExplanation">{{item.ImgExplanation}}</p>
            <!-- <iframe src="../../../../static/mock/primaryKnowledage/Ajax/Ajax.json"
                  frameborder="0"></iframe> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexArticleList',
  props: {
    articleListData: Array
  },
  data () {
    return {
      hotArticle: '文章列表',
      show: 'hidden',
      articleLists: true,
      godColor: 1000000,
      dataQuestion: '题目：请点击上方分类按钮,切换文章列表',
      dataAnswer: [{
        'id': 12,
        'explanation': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方还或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999'
      }],
      dataImge: [{
        'url': 'nothing'
      }],
      articleList: [{
        'id': 1,
        'titleList': '题目存放处',
        'questions': {
          'question': '题目：请点击上方分类按钮,切换文章列表',
          'answer': [{
            'answer': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方还或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999'
          }]
        }
      }, {
        'id': 2,
        'titleList': '点击切换题目',
        'questions': {
          'question': '题目：请点击上方分类按钮,切换文章列表',
          'answer': [{
            'explanation': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方还或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999'
          }]
        }
      }]
    }
  },
  methods: {
    addEventListenerNavClick (item, key) {
      for (let i = 0; i < this.articleList.length; i++) {
        if (this.articleList[i].id === item.id) {
          this.dataQuestion = this.articleList[i].questions.question
          this.dataAnswer = this.articleList[i].questions.answer
        }
      }
      this.godColor = key
    },
    hideenArticleList () {
      if (this.show === 'show') {
        this.$refs.articleOl.style.display = 'block'
        this.show = 'hidden'
      } else {
        this.$refs.articleOl.style.display = 'none'
        this.show = 'show'
      }
    }
  },
  mounted () {

  },
  watch: {
    articleListData () {
      //  导入文章列表数据
      this.articleList = this.articleListData
      // 初始化颜色选中
      this.godColor = 1000000
    }
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
.showArticle
  display none
  width 67px
  color #f2f2f2
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
  margin 0 5px 0 5px
  padding 15px
  border-bottom-right-radius 4px
  border-bottom-left-radius 4px
  // background black
  background #f2f2f2
  color #222
  .answerTitle
    color red
.questionImg
  width auto
  height auto
@media screen and (max-width: 675px)
  .article-wrap
    display block
    width 90%
    margin 0 auto
  .showArticle
    display inline-block
    float right
    background #222
    padding 0 2%
  .article-left-width
    width 100%
    height auto
    margin 5px 0
  .article-size
    display block
    min-height 100px
  .article-right-width
    width 100%
    margin 0
    padding 0
  .questionImgWrap
    overflow-y scroll
</style>
