<template>
  <div>
    <div class="top-nav">
      <ul class="top-nav-ul">
        <div>
          <li class="top-nav-ul-li level1"
              v-for="(item, key) in levels"
              v-bind:key="key.id"
              @click="addEventListenerNavClick(item)">
            {{item.content}}
          </li>
        </div>
        <!-- <div>{{this.$store.state.count}}</div> -->
        <span>
          <a class="github"
             title="github"
             href="https://github.com/LeeDeea/Online-website">
            <svg class="github"
                 height="32"
                 viewBox="0 0 16 16"
                 version="1.1"
                 width="32"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </span>

        <div>
          <li class="top-nav-ul-li level4"
              v-for="(item, key) in questionClassification"
              v-bind:key="key.id"
              @click="addEventListenerNavClick(item)">{{item.content}}</li>
        </div>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader',
  data () {
    return {
      difficulty: '难度',
      levels: [{
        id: '0000',
        content: '难度'
      }, {
        id: '0001',
        content: '初级'
      }, {
        id: '0002',
        content: '中级'
      }, {
        id: '0003',
        content: '高级'
      }],
      questionClassification: [{
        id: '0001',
        content: '思考'
      }, {
        id: '0001',
        content: '选择'
      }, {
        id: '0002',
        content: '综合'
      }, {
        id: '0003',
        content: '功能'
      }]
    }
  },
  methods: {
    addEventListenerNavClick (item) {
      if (item.content === '初级') {
        this.$emit('selectHeader', 'primaryKnowledage')
      } else if (item.content === '中级') {
        this.$emit('selectHeader', 'intermediateKnowledge')
      } else if (item.content === '高级') {
        alert('此部分功能尚未扩展')
      } else {
        alert('此部分功能尚未扩展')
      }
    }
  }
}

</script>

<style lang='stylus' scoped>
.top-nav-ul
  display flex
  flex-wrap nowrap
  justify-content space-between
  flex-shrink 1
  width 100%
  padding 5px 0
  background rgb(235, 234, 234)
.top-nav-ul-li
  display inline-block
  line-height 30px
  height 30px
  cursor pointer
  padding 0 15px
  border-bottom 1px solid rgba(185, 180, 180, 0.527)
  border-bottom-left-radius 4px
  margin 1px 5px
.github
  display inline-block
  width 30px
  height 30px
  box-shadow 0 2px 0
.level1
  background rgb(195, 195, 255)
  border 1px solid rgb(195, 195, 255)
  color white
.level1:nth-child(1)
  background rgba(126, 126, 231, 0.7)
  border 1px solid rgb(195, 195, 255)
  color white
  cursor auto
.level1:hover
  background rgb(195, 195, 225)
  transition all 0.3s
.level4
  background rgb(138, 179, 255)
  border 1px solid rgb(138, 179, 255)
  color white
.level4:hover
  background rgb(138, 179, 215)
  transition all 0.3s
</style>
