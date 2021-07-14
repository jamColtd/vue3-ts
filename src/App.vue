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
import { defineComponent ,ref} from 'vue';
import HelloWorld from './components/login.vue';

export default defineComponent({
  name: 'App',
  setup(){
    const heros = ref(["刘备", "张飞", "关羽"]);
    const selectHero = ref("");
    const selectHeroFun = (index:number) => {
      selectHero.value = heros.value[index]
    }
    return{
      heros,
      selectHero,
      selectHeroFun
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
