import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ensure correct base path if the app is deployed under a subpath
  base: '/',
  server: {
    port: 5173,
    open: false
  },
  preview: {
    port: 5173,
    open: false
  }
})
