import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCommonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs(), // CommonJS 모듈 플러그인 추가
  ],
  optimizeDeps: {
    include: ['react-page-scroller'], // CommonJS 모듈 강제 최적화
  },
  define: {
    global: 'window', // 브라우저 환경에서 global을 window로 대체
  },
  base: '/sori/',
})
