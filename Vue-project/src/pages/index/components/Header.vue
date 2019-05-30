<template>
  <div>
    <div class="top-shadow"></div>
    <header class="header"></header>
    <div class="top-nav">
      <ul class="top-nav-ul">
        <div>
          <li class="top-nav-ul-li level0">{{difficulty}}</li>
          <li class="top-nav-ul-li level1"
              v-for="(item, key) in levels"
              v-bind:key="key.id"
              @click="addEventListenerNavClick(item)">{{item.content}}</li>
        </div>
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
      difficulty: '难度 :',
      levels: [{
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
        content: '思考题'
      }, {
        id: '0001',
        content: '选择题'
      }, {
        id: '0002',
        content: '综合题'
      }, {
        id: '0003',
        content: '功能题'
      }]
    }
  },
  methods: {
    addEventListenerNavClick (item) {
      console.log(item.content)
      item.content === '初级' ? alert('您当前处于初级习题') : alert('此部分功能尚未扩展')
    }
  }
}

</script>

<style lang='stylus' scoped>
.header
  height 30px
  background rgb(102, 102, 102)
.top-shadow
  position fixed
  top 0
  width 100%
  box-shadow 0 0 20px 5px rgb(0, 0, 2)
.top-nav-ul
  padding 5px 0 5px 0
  width 100%
  display flex
  flex-wrap nowrap
  justify-content space-between
  flex-shrink 1
  background rgb(235, 234, 234)
.top-nav-ul-li
  /* color:#666; */
  padding 0 15px 0 15px
  height 30px
  line-height 30px
  display inline-block
  /* color: rgb(226, 154, 154); */
  cursor pointer
  border-bottom 1px solid rgba(185, 180, 180, 0.527)
  /* border-left: 1px solid rgba(185, 180, 180, 0.527); */
  border-bottom-left-radius 4px
  margin 1px 5px
.level0
  background rgba(126, 126, 231, 0.7)
  border 1px solid rgb(195, 195, 255)
  color white
  cursor auto
.level1
  background rgb(195, 195, 255)
  border 1px solid rgb(195, 195, 255)
  color white
.level1:hover
  background rgb(195, 195, 225)
.level4
  background rgb(138, 179, 255)
  border 1px solid rgb(138, 179, 255)
  color white
.level4:hover
  background rgb(138, 179, 215)
</style>
