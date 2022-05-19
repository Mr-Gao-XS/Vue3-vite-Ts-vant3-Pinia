<script lang="ts">
export default {
  name: 'Name',
}
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const props = defineProps(['name'])
</script>

<template>
  <div>{{ props.name }}</div>
</template>

<style lang="scss" scoped></style>
