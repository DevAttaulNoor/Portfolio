import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfolio/version1",
  build: { outDir: 'build' },
  plugins: [react()],
})
