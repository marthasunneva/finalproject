import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production'
    ? '/finalproject/'    // used when running `npm run build`
    : '/',                // used when running `npm run dev`
  build: {
    // increase the warning threshold from the default 500 KiB up to 1 MiB
    chunkSizeWarningLimit: 1024
  }
}))
