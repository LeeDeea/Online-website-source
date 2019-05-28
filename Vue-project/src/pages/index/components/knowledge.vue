<template>
  <div>
    <ul class="top-knowledge-ul">
      <li class="top-knowledge-ul-li"
          style="background: darkgray;color:white;">{{classification}}</li>
      <li class="top-knowledge-ul-li"
          v-for="(item, key) in levels"
          v-bind:key="key.id"
          @click="addEventListenerNavClick(item)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'IndexKnowledge',
  props: {
    levels: Array
  },
  data () {
    return {
      classification: '分类：'
    }
  },
  methods: {
    addEventListenerNavClick (item) {
      console.log(item.title)
    }
  },
  mounted () {
    // this.getHomeInfo()
    // console.log(this.levels)
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
  border: solid 1px #f2f2f2;
}

.top-knowledge-ul-li:hover {
  color: black;
  border: solid 1px #978484;
}
</style>
