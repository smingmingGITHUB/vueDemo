<template>
  <div id="app">
    {{title}}
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <el-input-number :key="list.key" :label="list.label" value="跑" controls-position="right" ></el-input-number>
    <router-view></router-view>
  </div>
</template>

<script>
import '../public/ele.css'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
import { InputNumber } from 'element-ui'

Vue.component(InputNumber.name, InputNumber)
export default {
  name: 'app',
  /* eslint-disable */
  components: {
    HelloWorld,
    Test
  },
  data() {
    return {
      title: '醉卧沙场君莫笑，古来征战几人回？',
      list: {
        key: 0,
        label: '40米大刀',
        value: '让你先跑'
      }
    }
  },
  created() {
    this.TitleScrolling()
  },
  methods: {
        TitleScrolling (){
        setInterval(() => { //ES6箭头函数
        	// 截取首字符串(第一个)
            var head = this.title.substring(0,1)
            // 截取除首字符串外所有字符串(除第一个所有)
            var foot = this.title.substring(1)
            // 头尾拼接后赋给data => tit属性
            this.title = foot + head
            // 最后赋给最终显示的标题(标题)
            this.title = this.title
        },600)
     }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app /deep/
.el-input-number /deep/
.el-input /deep/
.el-input__inner {
  background: red !important
}
</style>
