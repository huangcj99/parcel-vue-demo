<template>
  <div id="app">
    <router-link to="p1" class="p1-btn">p1</router-link>
    <router-link to="p2" class="p2-btn">p2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        test: 'test'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .p1-btn {
    display: inline-block;
    width: 50px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
    line-height: 20px;
  }

  .p2-btn {
    display: inline-block;
    width: 50px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
    line-height: 20px;
  }
</style>
