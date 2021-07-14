<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
  <h2>欢迎来到德莱联盟</h2>
  <div>请选择一个英雄</div>
  <div>
    <button 
      v-for="(item, index) in heros" 
      :key="index"
      @click="selectHeroFun(index)"
    >
      {{ index }}:{{ item }}</button>
  </div>
  <div>你选择的英雄是【{{ selectHero }}】</div>
</template>

<script lang="ts">
  import { 
    defineComponent, 
    ref, 
    reactive, 
    toRefs, 
    onBeforeMount, 
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,//组件卸载之前
    onUnmounted,
  } from 'vue';
  import HelloWorld from './components/login.vue';

  interface DataProps{
    heros: string[];
    selectHero: string;
    selectHeroFun: (index: number) => void;
  }

  export default({
    name: 'App',
    setup(){
      console.log("1-开始创建组件-----setup()")
      const data: DataProps = reactive({
        heros:["刘备", "张飞", "关羽"],
        selectHero:'',
        selectHeroFun:(index:number)=>{
          data.selectHero = data.heros[index]
        }
      });
      onBeforeMount(()=>{
        console.log("2-组件挂载到页面之前执行----onBeforeMount()")
      })

      onMounted(()=>{
        console.log("3-组件挂载到页面之后执行的----onMounted")
      })

      onBeforeUpdate(()=>{
        console.log("4-组件更新之前执行的---onBeforeUpdate")
      })

      onUpdated(()=>{
        console.log("5.组件更新之后执行的---onUpdated")
      })

      onBeforeUnmount(()=>{
        console.log("6.组件卸载之前执行的----onBeforeUnmount")
      })

      onUnmounted(()=>{
        console.log("7.组件卸载之后执行的----onUnmounted")
      })

      const refData = toRefs(data);

      return{
        ...refData
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
