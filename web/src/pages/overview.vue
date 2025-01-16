<script lang="ts" setup>
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
    {{ demos }}
    <a-list>
      <template #header>
        Demo <a-button type="primary" @click="handleCreate">
          创建
        </a-button>
      </template>
      <a-list-item v-for="demo in demos" :key="demo.id">
        <div clas="flex gap-4">
          <span>{{ demo.id }}</span>
          /
          <a-input v-model="demo.name" :style="{ width: '320px' }" />
          <a-button status="danger" @click="handleDelete(demo.id)">
            删除
          </a-button>
          <a-button @click="handleModify(demo.id, demo.name)">
            修改
          </a-button>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<style lang="postcss">
.overview {
  @apply;
}
</style>
