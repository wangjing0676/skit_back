import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(env);
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      proxy: { //配置代理服务器
          "/api": {
            target: "http://api.omiking.top", 
            changeOrigin: true,    //允许跨域
            rewrite: (path) => path.replace(/^\/api/, ""), //重写路径,替换/api
          },
      }
    },
  }
})
