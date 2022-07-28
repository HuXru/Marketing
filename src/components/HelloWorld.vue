<script setup lang="ts">
import { ref, computed,defineComponent, getCurrentInstance } from 'vue'
import {useStore} from '@/store'
import {request} from '@/api/request'
const store = useStore()
const count = ref(0)
// const { appContext } = getCurrentInstance()
// const globalProxy = appContext.config.globalProperties
const showcount = computed(() => {
  return store.getters['getCount']
})
const addBtn = () => {
  store.commit('setCount', ++count.value)
    // globalProxy.$axios.get('/columns?icode=C6A6C4086133360B').then(resp => {
    //   console.log(resp.data)
    // })
    request('/columns?icode=C6A6C4086133360B').then(resp => {
      console.log(resp.data)
    })
}

</script>

<template>
  <h1>{{ showcount }}</h1>

  <el-button type="primary" @click="addBtn">测试{{ count }}</el-button>

</template>

<style scoped>
</style>
