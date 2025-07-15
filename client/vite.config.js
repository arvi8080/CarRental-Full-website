import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures Vite doesn't break routing on Vercel
  build: {
    outDir: 'dist'
  }
})
