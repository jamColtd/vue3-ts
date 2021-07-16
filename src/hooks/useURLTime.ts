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