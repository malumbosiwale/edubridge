import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Default output directory
    assetsDir: 'assets', // Default assets directory
  },
  base: './', // Use relative paths
  plugins: [react()],
})
