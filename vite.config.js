import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    host: true,        // або '0.0.0.0' — слухати всі інтерфейси
    port: 5173,
    strictPort: true,  // не стрибати на інший порт
  },
  
})
