import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'climate-crm' below with your GitHub repository name
// e.g. if your repo URL is https://github.com/yourname/my-crm  → base: '/my-crm/'
export default defineConfig({
  plugins: [react()],
  base: '/climatecrm/',
})
