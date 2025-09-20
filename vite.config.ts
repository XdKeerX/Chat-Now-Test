import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Check if certificates exist, otherwise use a basic https config
const httpsConfig = () => {
  try {
    return {
      key: fs.readFileSync(path.resolve(__dirname, './certs/localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './certs/localhost.pem'))
    }
  } catch (e) {
    console.warn('No custom certificates found, using basic https')
    return true
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/Chat-Now-Test/',
  server: {
    host: true,
    port: 5175,
    https: httpsConfig()
  },
  build: {
    outDir: 'dist'
  }
})
