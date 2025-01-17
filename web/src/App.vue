<script lang="ts" setup>
defineOptions({ name: 'App' })

useTitle('fullstack boilerplate website')

const router = useRouter()

router.beforeEach((to, _from, next) => {
  if (to.fullPath === '/') {
    router.replace({ path: '/overview' })
  }
  else {
    next()
  }
})
</script>

<template>
  <RouterView />
</template>
