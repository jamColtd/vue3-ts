# vue3-1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

####文件结构初始
````text

|-node_modules       -- 所有的项目依赖包都放在这个目录下
|-public             -- 公共文件夹
---|favicon.ico      -- 网站的显示图标
---|index.html       -- 入口的html文件
|-src                -- 源文件目录，编写的代码基本都在这个目录下
---|assets           -- 放置静态文件的目录，比如logo.pn就放在这里
---|components       -- Vue的组件文件，自定义的组件都会放到这
---|App.vue          -- 根组件，这个在Vue2中也有
---|main.ts          -- 入口文件，因为采用了TypeScript所以是ts结尾
---|shims-vue.d.ts   -- 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件
|-.browserslistrc    -- 在不同前端工具之间公用目标浏览器和node版本的配置文件，作用是设置兼容性
|-.eslintrc.js       -- Eslint的配置文件，不用作过多介绍
|-.gitignore         -- 用来配置那些文件不归git管理
|-package.json       -- 命令配置和包管理文件
|-README.md          -- 项目的说明文件，使用markdown语法进行编写
|-tsconfig.json      -- 关于TypoScript的配置文件
|-yarn.lock          -- 使用yarn后自动生成的文件，由Yarn管理，安装yarn包时的重要信息存储到yarn.lock文件中

````
入口文件main.ts

`````javascript

import { createApp } from "vue"; // 引入vue文件，并导出`createApp`
import App from "./App.vue"; // 引入自定义组件，你在页面上看的东西基本都在这个组件里

createApp(App).mount("#app"); // 把App挂载到#app节点上，在public目录下的index.html找节点

`````

#### vue3+ts router配置

````text
npm install vue-router
````

`````javascript
// 1.创建router文件 然后创建router.ts
import { createRouter,createWebHistory } from "vue-router";
import login from '../views/login.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:login,
        }
    ]
})
export default router;

// 2.在main.ts文件引入
import router from "./router/router"
createApp(App).use(router).mount('#app')
`````

##### 连接github

ssh -T git@github.com

推送本地文件到远程

git push -u origin master

#### 使用setup 和 ref方法

````javascript
<script lang="ts">
import { defineComponent ,ref} from 'vue';
import HelloWorld from './components/login.vue';

export default defineComponent({
  name: 'App',
    //   不需要在使用data，methods里面放方法
    /**1.使用setup里面直接可以放一些方法和值，
    2.取ref的值要带上value，
    3.界面使用的要 return 出去
    */
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
````

#### 使用reactive 

1.使用reactive把函数包裹
2.使用toRefs函数包裹函数
3.再return出去,使用扩展扩展符号... 在页面就可以调用

`````javascript
<script lang="ts">
  import { defineComponent ,ref, reactive, toRefs} from 'vue';
  import HelloWorld from './components/login.vue';

  interface DataProps{  //typescript接口
    heros: string[];
    selectHero: string;
    selectHeroFun: (index: number) => void;
  }

  export default({
    name: 'App',
    setup(){
        /* reactive 使用 取ref的值不用使用selectHero.value后面增加value*/
      const data: DataProps = reactive({ //ts类型注解
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
`````

##### 周期函数

`````javascript
    // 记得引入
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
        onUnmounted,//组件卸载之后
    } from 'vue';



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
`````

##### 状态追踪 onRenderTracked and onRenderTriggered

1.onRenderTracked 追踪所有的状态
2.onRenderTriggered 精准追踪状态
````javascript

    onRenderTracked((event)=>{
        console.log("状态跟踪钩子函数---------")
        console.log(event)
    })

    onRenderTriggered((event)=>{
        console.log("状态精准跟踪钩子函数---------onRenderTriggered")
        console.log(event)
    })
````

##### 监听 watch

````javascript 
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

    /*时间监听 */
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
````

##### 分水岭

````javascript
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

````
###### 事件模块

`````javascript

// 创建文件hooks
// 里面放useNowTime.ts
    import {ref} from 'vue';

    const nowTime = ref("00:00:00")
    const getNowTime = ()=>{ 
        const now = new Date();
        const hour = now.getHours()<10?"0"+now.getHours():now.getHours();
        const minu = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes();
        const sec = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds();
        nowTime.value = hour+":"+minu+":"+sec;
        setTimeout(getNowTime,1000)
    }

    export {nowTime, getNowTime}

    // 2.在界面中引用过
    import {nowTime, getNowTime} from './hooks/useNowTime'
`````
`````html
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
`````

##### axios异步请求

````javascript
// 界面引用
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
````
<!-- axios组件 0716-->

````javascript
import {ref} from 'vue'
import axiox from 'axios'

function useUrlAxios(url: string){
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axiox.get(url).then((res)=>{
        loading.value = false
        loaded.value = true
        result.value = res.data


    }).catch(e=>{
        error.value = e
        loading.value = false
    })

    return { result, loading, loaded, error}
}

export default useUrlAxios
````

````html
<template>
  <div>
    <h2>欢迎来到德莱联盟</h2>
    <div>随机选择一个英雄为你服务</div>
    <div v-if="loading">Loading....</div>
    <img v-if="loaded" :src="result.imgUrl" alt="">
  </div>
</template>
````



