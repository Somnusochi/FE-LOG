import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pages({
    dirs: 'src/pages',
    extensions: ['tsx'],
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true, // 自动在浏览器中打开
    host: true, // 允许外部访问
    port: 3000, // 可选：指定端口号
  },
})
