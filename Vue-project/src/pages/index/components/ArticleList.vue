
<template>
  <div class="article-wrap">
    <!-- 左侧文章列表 -->
    <div class="article-size article-left-width">
      <!-- 左侧文章列表 移动端隐藏按钮 -->
      <div class="hot-article">
        <div class="hot-article-title">文章列表</div>

        <span class="showArticle"
              @click="hideenArticleList()">
          {{show}}
        </span>
      </div>
      <!-- 文章列表list -->
      <transition name="fade"
                  mode="out-in">
        <div ref="articleOl"
             id="articleOl"
             v-show="articleShow">
          <ul class="articleListUl">
            <li v-bind:class="{ articleList: articleLists, godColor: key==godColor }"
                ref="article"
                v-for="(item, key) in articleList"
                v-bind:key="key"
                @click="addEventListenerNavClick(item,key)">{{key+1}}.{{item.titleList}}</li>
          </ul>
        </div>
      </transition>
    </div>
    <!-- 文章详细内容 -->
    <div class="article-size article-right-width ">
      <div>
        <div class="questions">
          <transition name="fade"
                      mode="out-in">
            <div v-show="shows">
              Q:{{dataQuestion}}
            </div>
          </transition>
        </div>
        <div class="answer article-right-boxshadow">
          <transition-group name="fade"
                            mode="out-in">
            <div v-for="(item, key) in dataAnswer"
                 v-bind:key="key"
                 v-show="shows">
              <p class="answer-fontsize">
                <b>{{item.answer}}</b>
              </p>
              <!-- <br> -->
              <p class="answerExplanation"
                 v-html="item.explanation">
                {{item.explanation}}
              </p>
              <!-- <br> -->
              <div class="questionImgWrap">
                <img v-if="item.url"
                     class="questionImg"
                     :src="item.url"
                     alt="">
              </div>
              <p class="imgAnswe"
                 v-html="item.ImgExplanation">
                {{item.ImgExplanation}}
              </p>
              <!-- <iframe src="../../../../static/mock/primaryKnowledage/Ajax/Ajax.json"
                  frameborder="0"></iframe> -->
            </div>
          </transition-group>
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
      // 文章列表标题
      hotArticle: '文章列表',
      // 低宽度下 控制文章显隐按钮的show值
      show: 'hidden',
      // 低宽度下 控制为文章列表的动态消失
      articleLists: true,
      // 文章点击颜色变化的索引 默认值为1000000
      godColor: 1000000,
      // 两个变量为：切换文章列表标题时，控制文章内容显隐
      shows: true,
      articleShow: true,
      // 默认加载数据
      dataQuestion: '题目：请点击上方分类按钮,切换文章列表',
      dataAnswer: [{
        'id': 12,
        'answer': '这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999',
        'explanation': '绿色代表标题描述信息',
        'ImgExplanation': '黄色代表图片描述或细节分析'
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
      // 切换左侧文章列表 更新右侧内容
      this.shows = !this.shows
      this.godColor = key
      setTimeout(() => {
        new Promise((resolve, reject) => {
          for (let i = 0; i < this.articleList.length; i++) {
            if (this.articleList[i].id === item.id) {
              this.dataQuestion = this.articleList[i].questions.question
              this.dataAnswer = this.articleList[i].questions.answer
            }
          }
        }).then(
          this.shows = !this.shows
        )
      }, 300)
    },
    hideenArticleList () {
      // 控制文章列表显隐
      if (this.show === 'hidden') {
        this.articleShow = false
        this.show = 'show'
      } else {
        this.articleShow = true
        // this.$refs.articleOl.style.display = 'none'
        this.show = 'hidden'
      }
    }
  },
  mounted () {
  },
  watch: {
    articleListData () {
      // 导入文章列表数据
      this.articleList = this.articleListData
      // 初始化颜色选中
      this.godColor = 1000000
      // 切换载入第一个文章
      this.addEventListenerNavClick({ id: 1 }, 0)
    }
  }
}
</script>

<style lang='stylus'  scoped>
@import '~styles/index/ArticleList.styl'
</style>
