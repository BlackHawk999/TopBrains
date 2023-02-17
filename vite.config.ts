import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue'

const url = new URL('./src', import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${url}/assets/scss/partials/_media.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(url)
    }
  }
})
