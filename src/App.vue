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
  <div><button @click="overAction">选择完毕</button></div>
  <div>{{overText}}</div>
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
    onRenderTracked,//vue3新增加的 状态 跟踪
    onRenderTriggered,
    watch,
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
      const refData = toRefs(data);
      
      const overText = ref("英雄联盟");
      const overAction = () =>{
        overText.value = '选择完毕|' + overText.value; 
        //document.title = overText.value;
      }

      watch([overText, () => data.selectHero], (newValue, oldValue)=>{
        console.log(`new---->${newValue}`);
        console.log(`old---->${oldValue}`);

        document.title = newValue[0];
      })


      return{
        ...refData,
        overText,
        overAction
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
