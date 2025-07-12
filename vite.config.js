import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [vue()]
  
  // Add bundle analyzer in analyze mode
  if (mode === 'analyze') {
    plugins.push(
      visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return {
    plugins,
    base: mode === 'production' ? '/airpods-max-clone/' : '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'swiper': ['swiper'],
            'vue-vendor': ['vue', 'vue-router'],
            'gsap': ['gsap'],
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: mode === 'development',
    },
    optimizeDeps: {
      include: ['swiper', 'swiper/modules', 'gsap']
    },
    server: {
      port: 3000,
      open: true,
      cors: true
    },
    preview: {
      port: 4173,
      open: true
    }
  }
})
