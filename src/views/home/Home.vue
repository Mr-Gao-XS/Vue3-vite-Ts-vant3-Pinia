<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue'

import logo from '@/assets/img/logo.jpg'

const useShowList = () => {
  const state = reactive({
    list: [
      { title: 'vite' },
      { title: 'rem移动端适配' },
      { title: 'VantUI 组件按需加载' },
      { title: 'Sass 全局样式' },
      { title: 'Vuex 状态管理' },
      { title: 'Axios 封装及接口管理' },
      { title: 'Vue-router' },
      { title: 'vite.config.ts 基础配置' },
      { title: '检查文件中的env路径' },
      { title: '配置 proxy 跨域' },
      { title: '配置 alias 别名' },
      { title: 'Eslint+Pettier 统一开发规范' },
      { title: '批量全局注册公共组件' },
    ],
  })
  return toRefs(state)
}
const { list } = useShowList()
</script>

<template>
  <div class="title">
    <van-image class="img" round width="80" :src="logo" />
    <span class="txt">Vue3 + vite + Ts + vant3 - 高先生的猫</span>
  </div>

  <van-list finished-text="没有更多了">
    <van-cell class="cell" v-for="(item, index) in list" :key="index" :title="item.title" icon="success" />
  </van-list>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-bottom: 10px;
  padding: 20px 0;

  .txt {
    font-size: 15px;
    color: #34495e;
    margin-top: 20px;
    font-weight: bold;
  }
}
.cell {
  padding: 5px;
  :deep(.van-cell__title) {
    span {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
