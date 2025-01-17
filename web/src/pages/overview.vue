<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { demoCreate, demoDelete, demoList, demoModify } from '~/api/demo'

defineOptions({ name: 'Overview' })
const demos = ref<any[]>([])

async function handleDelete(id: number) {
  await demoDelete(id)
  fetchList()
}

function fetchList() {
  demoList()
    .then((res) => {
      demos.value = res.data
    })
}

async function handleCreate() {
  await demoCreate((Math.random() * 100).toFixed(2))
  fetchList()
}

async function handleModify(id: number, name: string) {
  await demoModify(id, name)
  fetchList()
}

onMounted(() => {
  fetchList()
})
</script>

<template>
  <div class="overview">
    <!-- -->
    <RouterLink to="/demo">
      <a-button>GO Demo</a-button>
    </RouterLink>
  </div>
</template>

<style lang="postcss">
.overview {
  @apply;
}
</style>
