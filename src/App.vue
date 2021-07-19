<template>
  <div>
    <Suspense>
      <template #default>
        <!-- <AsyncShow></AsyncShow> -->
        <hroe></hroe>
      </template>
      <template #fallback>
        <h1>Loading....</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
  // import useUrlAxios from './hooks/useURLTime'
  // import AsyncShow from "@/components/AsyncShow.vue";
  import hroe from "./components/hroeL.vue"
  import {onErrorCaptured} from "vue"
  

  export default({
    name: 'App',
    components:{hroe},
    setup(){
      onErrorCaptured ((error) => {
        console.log(`error===>`, error)
        return true
      })
      return{}
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
