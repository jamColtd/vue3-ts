<template>
  <div class="home">
    <div class="login-box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "home",
  props: {
    msg: String,
  },
  setup() {
    
    return {
     
    };
  },
  methods: {
    
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{position: relative;}
.login-box{
  background-color: red;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
