<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

//底部tab栏相关
const useTabBar = () => {
  const state = reactive({
    tabBar: [
      {
        title: '首页',
        to: {
          name: 'home',
        },
        icon: 'home-o',
      },
      {
        title: '我的',
        to: {
          name: 'mine',
        },
        icon: 'user-o',
      },
    ],
  })
  return toRefs(state)
}
const { tabBar } = useTabBar()

const handleChange = (value) => {
  // console.log(value,'valueeeeeee');
}
</script>

<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabBar" @chang="handleChange"></TabBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
}
.layout-content {
  flex: 1;
  overflow-x: hidden;
  padding-bottom: 100px;
}
.layout-footer {
  overflow: hidden;
}
</style>
