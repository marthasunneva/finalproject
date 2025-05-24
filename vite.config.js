import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production'
    ? '/finalproject/'    // used when you run `npm run build`
    : '/',                // used when you run `npm run dev`
}));
