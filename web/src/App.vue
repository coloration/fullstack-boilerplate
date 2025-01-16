<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { greet } from './api'

defineOptions({ name: 'App' })
const router = useRouter()

router.beforeEach((to, _from, next) => {
  if (to.fullPath === '/') {
    router.replace({ path: '/overview' })
  }
  // else if (to.fullPath === '/') {
  //   router.replace({ path: '/overview' })
  // }
  else {
    next()
  }
})
</script>

<template>
  <RouterView />
</template>
