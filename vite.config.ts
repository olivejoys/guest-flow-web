import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export  default ({
  plugins: [react()],
    server: {
      host: '127.0.0.1'
    }
})
