import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
function getFolder(id: string) {
  if (id === undefined) return ''
  const splits = id.split('/')
  return splits[splits.length - 2]
}



export default defineConfig({
  base: '',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },

  build: {
    target: 'esnext',
    modulePreload: {
      resolveDependencies: () => [],
    },
    // minify: false,
  },
})
