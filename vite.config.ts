import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 开启 gzip
import viteCompression from 'vite-plugin-compression';

// 如果提示path模块找不到 cnpm i @types/node --save-dev 
import { resolve } from 'path'

// 按需加载 cnpm i vite-plugin-style-import@1.4.1 -D vant3 注意指定版本 不然没有 styleImport抛出
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      assets: '@/assets',
      utils: '@/utils',
      api: '@/api'
    }
  },
  plugins: [
    viteCompression(),
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `../es/${name}/style` // vant按需引入有兼容问题
        }
      ]
    })
  ],
  // Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  },
  server: {
    port: 10086, // 本地dev启动端口
    open: true, // 启动后浏览器默认打开
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        // 把origin修改成目标地址
        // 把localhost:8888 修改成http://jsonplaceholder.typicode.com
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
