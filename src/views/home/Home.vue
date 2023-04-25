<template>
  <div class="title">
    <img class="img" src="~@/assets/img/logo.jpg" @click="changeName" alt="" />
    <span class="txt">{{ name }}</span>
    <span class="txt">Vue3 + vite + Ts + vant3 + pinia</span>
  </div>
  <van-list finished-text="没有更多了">
    <van-cell class="cell" v-for="(item, index) in list" :key="index" :title="item.title" icon="success" />
  </van-list>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue'
import { piniaStore } from '@/store/index'
import logo from '@/assets/img/logo.jpg'
import { relative } from 'path/posix'
let store = piniaStore()
store.name = '田永正'

const useShowList = () => {
  const state = reactive({
    name: '高先生的猫',
    list: [
      { title: 'vite 3.2' },
      { title: 'rem移动端适配' },
      { title: 'VantUI 组件按需加载 3.6.5' },
      { title: 'Sass 全局样式' },
      { title: 'Pinia 状态管理' },
      { title: 'Axios 封装及接口管理' },
      { title: 'lodash函数库、dayjs时间库 ' },
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
let { list, name } = useShowList()
</script>

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
.img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
