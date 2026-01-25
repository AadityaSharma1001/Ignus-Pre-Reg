import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.ogv'],
  plugins: [react()],
  server: {
    port: 5173,
    hmr: {
      overlay: false
    }
  },
  esbuild: {
    logOverride: { 'UNSAFE_LIFECYCLES': 'silent' }
  }
})