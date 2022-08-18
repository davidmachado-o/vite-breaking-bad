import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/davidmachado-o/vite-breaking-bad/',
  plugins: [react()]
})
