import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // output directory for Vercel to serve
  },
  base: './',        // important for loading assets correctly on Vercel
})
