import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ecosolution',
  server: {
    open: '/ecosolution',
    port: 3000,
  },
})
