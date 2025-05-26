// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production'
    ? '/finalproject/'  //serving from /finalproject/
    : '/',
  build: {
    chunkSizeWarningLimit: 1024
  }
}))
