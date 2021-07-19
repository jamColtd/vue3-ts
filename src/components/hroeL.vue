<template>
    <img :src="result && result.imgUrl" alt="">
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios'
export default defineComponent({
    async setup(){
        const rewData = await axios.get('https://apiblog.jspang.com/default/getGirl-1')

        return {result: rewData.data}
    }
})
</script>