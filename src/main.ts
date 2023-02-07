import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 移动端适配
import 'lib-flexible/flexible.js';

// 引入全局样式
import '@/assets/scss/index.scss';

// 全局引入按需引入UI库 vant
import vant from '@/plugins/vant'

//全局公共组件
import components from './plugins/components.js';

// vant toast
import { Toast } from 'vant'

const app = createApp(App)
app.config.globalProperties.$toast = Toast

app.use(router)
  .use(store)
  .use(vant)
  .use(components)
  .mount('#app')
