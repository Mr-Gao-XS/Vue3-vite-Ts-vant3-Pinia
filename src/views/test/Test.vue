<template>
  <div class="container">
    <div class="box">vant 组件测试</div>
    <van-cell-group inset>
      <van-field v-model="submitInfo.name" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="submitInfo.age" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="submitInfo.address" label="地址" placeholder="请输入地址" />
      <van-field v-model="submitInfo.company" label="公司" placeholder="请输入公司" />
    </van-cell-group>
    <div class="btn">
      <van-button type="primary" class="btn" block @click="showToast">提交</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, reactive, ref, toRefs, toRaw } from 'vue'

/* 全局 */
const { proxy } = getCurrentInstance()

/* data */
const submitInfo = ref({
  name: '',
  age: '',
  address: '',
  company: '',
})

/* created */

setTimeout(() => {
  submitInfo.value = {
    name: '1',
    age: '2',
    address: '3',
    company: '4',
  }
}, 0)

/* methods */
const showToast = () => {
  console.log(toRaw(submitInfo.value))
}

/* computed */
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
}
.box {
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
}
.btn {
  margin-top: 20px;
  padding: var(--van-cell-group-inset-padding);
  .van-button {
    border-radius: var(--van-cell-group-inset-border-radius);
  }
}
</style>
