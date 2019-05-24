<template>
  <div>
    <ul class="top-knowledge-ul">
      <li class="top-knowledge-ul-li" style="background: darkgray;color:white;">{{classification}}</li>
      <li
        class="top-knowledge-ul-li"
        v-for="(item, key) in levels"
        v-bind:key="key.id"
        @click="addEventListenerNavClick(item)"
      >{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexKnowledge',
  data () {
    return {
      classification: '分类：',
      levels: [{
        id: '0001',
        content: 'this指向'
      }, {
        id: '0002',
        content: 'pormise使用'
      }, {
        id: '0003',
        content: 'position布局'
      }, {
        id: '0004',
        content: 'flex布局'
      }, {
        id: '0005',
        content: 'grid布局'
      }, {
        id: '0006',
        content: '浮动布局'
      }, {
        id: '0007',
        content: '动画效果'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }, {
        id: '0008',
        content: 'vue生命周期'
      }]
    }
  },
  methods: {
    addEventListenerNavClick (item) {
      console.log(item.content)
    }
  }
}
</script>

<style  scoped>
.top-knowledge-ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 90%;
  height: auto;
  margin: 15px auto;
}

.top-knowledge-ul-li {
  color: #666;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 15px 0 15px;
  background: rgb(241, 241, 241);
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  margin: 5px 5px;
}

.top-knowledge-ul-li:hover {
  color: red;
}
</style>
