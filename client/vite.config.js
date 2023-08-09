import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

 // https://vitejs.dev/config/
 
 //https://vitejs.dev/config/server-options.html#server-proxy for example for mulitple Router

 export default defineConfig({ 
  
  server: {
    proxy: {
      // put target start params example localhost:9000/test 
      '/bountiesList': {
        target: 'https://bounty-xb1h.onrender.com/',
        changeOrigin: true,
      },
    }
  },

  plugins: [react()],
})