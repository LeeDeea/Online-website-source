<template>
  <div class="article-wrap">
    <div class="article-size article-left-width">
      <div class="hot-article">
        <div class="hot-article-title">文章列表</div>
        <span class="showArticle"
              @click="hideenArticleList()">
          {{show}}</span>
      </div>
      <div ref="articleOl"
           id="articleOl">
        <ul class="articleListUl">
          <li v-bind:class="{ articleList: articleLists, godColor: key==godColor }"
              ref="article"
              v-for="(item, key) in articleList"
              v-bind:key="key"
              @click="addEventListenerNavClick(item,key)">{{key+1}}.{{item.titleList}}</li>
        </ul>
      </div>
    </div>
    <div class="article-size article-right-width">
      <div>
        <div class="questions">Q:{{dataQuestion}}</div>
        <div v-for="(item, index) in dataAnswer"
             v-bind:key="index">
          <div class="answer">
            <p class="answer-fontsize"><b>{{item.answer}}</b></p>
            <!-- <br> -->
            <p class="answerExplanation"
               v-html="item.explanation">{{item.explanation}}</p>
            <!-- <br> -->
            <div class="questionImgWrap">
              <img class="questionImg"
                   :src="item.url"
                   alt="">
            </div>
            <p class="imgAnswe"
               v-html="item.ImgExplanation">{{item.ImgExplanation}}</p>
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
        'answer': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999',
        'explanation': '灰色代表题目描述解析',
        'ImgExplanation': '粉色代表图片描述或细节分析'
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
            'answer': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999'
          }]
        }
      }, {
        'id': 2,
        'titleList': '点击切换题目',
        'questions': {
          'question': '题目：请点击上方分类按钮,切换文章列表',
          'answer': [{
            'answer': '点击左侧切换文章，点击上方分类切换文章列表'
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
  justify-content space-between
  width 90%
  margin 0 auto
.article-left-width
  width 18%
  border 1px solid #f3f3f3
.hot-article
  height 40px
  line-height 40px
  margin-bottom 1px
  background #f3f3f3
  font-size 20px
  text-align center
  overflow hidden
  color rgb(102, 102, 102)
.hot-article-title
  width 100%
  text-align center
.showArticle
  display none
  width 67px
  color #f2f2f2
  font-size 14px
.article-size
  display inline-block
  min-height 5px
.articleListUl
  flex-wrap wrap
.articleList
  min-height 30px
  line-height 30px
  padding-left 20px
  // font-style italic
  // text-decoration underline
  color rgb(67, 67, 215)
  cursor pointer
  border-bottom 1px solid #f2f2f2
.articleList:hover
  background #f2f2f2
.godColor
  color red
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
.questionImgWrap
  line-height 0px
  margin 0px
  padding 0px
.answer
  // min-height 40px
  line-height 30px
  margin 0 5px 0 5px
  padding 10px 15px
  border-bottom-right-radius 4px
  border-bottom-left-radius 4px
  // background black
  background #f2f2f2
  color #222
.answer p
  margin 15px 0 5px 0
.answer >>> .K_W
  display inline-block
  line-height 20px
  background pink
  border-radius 4px
  padding 1px 4px
  margin 0 4px
  color red
.answer >>> .K_W_C
  display inline-block
  line-height 20px
  padding 1px 4px
  margin 0 4px
  color #fb002e
.answer-fontsize
  font-size 16px
  font-weight 900
.answerTitle
  // color red
.questionImg
  width auto
  max-width 95%
  height auto
.imgAnswe
  border-left 5px solid #f79797
  padding-left 5px
.answerExplanation
  border-left 5px solid #bcbcbc
  padding-left 5px
@media screen and (max-width: 675px)
  .article-wrap
    display block
    width 90%
    margin 0 auto
  .hot-article-title
    display inline-block
    width 80%
  .showArticle
    display inline-block
    width 16%
    float right
    background #222
    padding 0 1%
  .article-left-width
    width 100%
    height auto
    margin 5px 0
  .article-size
    display block
  .article-right-width
    width 100%
    margin 0
    padding 0
  .questionImgWrap
    overflow-y scroll
    overflow-y hidden
    .questionImg
      max-width 95%
      // overflow hidden
</style>
