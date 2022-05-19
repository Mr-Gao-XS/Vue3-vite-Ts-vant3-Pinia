<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue'
import qr from '@/assets/img/qr.png'
let name = ref('王雨田')
</script>

<template>
  <div class="title">
    <Name :name="name"></Name>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding-top: 200px;
}
</style>
