import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/deptforge/' : '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
  },
})
