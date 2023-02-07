<script lang="ts">
export default {
  name: 'TabBar',
}
</script>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
const props = defineProps(['tabBar'])

const emit = defineEmits(['chang'])

const active = ref('home')

const onChange = (value) => {
  // console.log(value,'value');

  emit('chang', value)
}
</script>

<template>
  <div>
    <van-tabbar class="layout-tabbar" fixed route v-model="active" @change="onChange">
      <van-tabbar-item v-for="(item, index) in props.tabBar" :to="item.path" :name="item.meta.title" :key="index" :icon="item.meta.icon">{{ item.meta.title }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
:deep(.layout-tabbar) {
  position: relative;
}
</style>
