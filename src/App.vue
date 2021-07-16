<template>
  <div>
    <h2>欢迎来到德莱联盟</h2>
    <div>随机选择一个英雄为你服务</div>
    <div v-if="loading">Loading....</div>
    <modal></modal>
    <img v-if="loaded" :src="result.imgUrl" alt="">
  </div>
</template>

<script lang="ts">
  import useUrlAxios from './hooks/useURLTime'
  import modal from './components/Model.vue'


  export default({
    name: 'App',
    components:{modal},
    setup(){
      const {result, loading, loaded} = useUrlAxios("https://apiblog.jspang.com/default/getGirl")

      return {result, loading, loaded}
    },
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
