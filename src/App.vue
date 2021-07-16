<template>
  <div>{{nowTime}}</div>
  <div><button @click="getNowTime">显示时间</button></div>
</template>

<script lang="ts">
  import {nowTime, getNowTime} from './hooks/useNowTime'

  export default({
    name: 'App',
    setup(){
      
      return{
        nowTime,getNowTime
      }
    }
  });
</script>

<style>
body,html{
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
