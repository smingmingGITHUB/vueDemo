<template>
  <div class="toggle">
    <h2>开关按钮</h2>
    <input class="toggle-input" type="checkbox">
    <button
      class="toggle-btn"
      :class="[className, {'toggle-btn-on': on, 'toggle-btn-off': !on}]"
      :aria-expanded="on"
      @click="onClick"
    ></button>
    <div>{{clickTimes}}</div>
  </div>
</template>
<script>
import '../../assets/toggle.css'

export default {
  data() {
    return {
      times: 0,
      on: false,
      className: String
    }
  },
  computed: {
     clickTimes() {
       return this.times+ ' Times' 
     }
  },
  methods: {
    onClick() {
      this.times++
      this.on = !this.on
    }
  }
}
</script>
<style>
</style>

