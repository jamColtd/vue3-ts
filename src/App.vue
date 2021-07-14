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
  import { defineComponent ,ref, reactive, toRefs} from 'vue';
  import HelloWorld from './components/login.vue';

  interface DataProps{
    heros: string[];
    selectHero: string;
    selectHeroFun: (index: number) => void;
  }

  export default({
    name: 'App',
    setup(){
      const data: DataProps = reactive({
        heros:["刘备", "张飞", "关羽"],
        selectHero:'',
        selectHeroFun:(index:number)=>{
          data.selectHero = data.heros[index]
        }
      });
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
