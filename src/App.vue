<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <el-input-number :key="list.key" :label="list.label" value="跑" controls-position="right" ></el-input-number>
    <router-view></router-view>
  </div>
</template>

<script>
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
      list: {
        key: 0,
        label: '40米大刀',
        value: '让你先跑'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
