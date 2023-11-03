import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [nodePolyfills()],
    server: {
      proxy: {
        '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
        },
        '/tour': {
            target: 'http://localhost:3000',
            changeOrigin: true,
        }
      }
    }
})