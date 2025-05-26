// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // serve & build everything with *relative* paths:
  base: './',
  build: {
    // bump the chunk warning limit if you like
    chunkSizeWarningLimit: 1024
  }
})
