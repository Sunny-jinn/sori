import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-page-scroller'], // CommonJS 모듈 강제 최적화
  },
  define: {
    global: 'window', // 브라우저 환경에서 global을 window로 대체
  },
  base: '/sori/',
})
