import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4173, // optional: change the dev port
    open: true, // automatically open browser
  },
  base: './', // important for correct asset paths in production
  build: {
    outDir: 'dist', // output folder for production build
    sourcemap: true, // helpful for debugging,
    minify: false
    
  },
  
  plugins: [
    federation({
      name: 'my-vite-app',
      dts: false,
      shared: {
          react: { 
            requiredVersion: '^18.0.0', 
            singleton: true
          },
                    '@mui/material': { singleton: true, requiredVersion: "*" },
          '@mui/icons-material': { singleton: true, requiredVersion: "*" },
           '@mui/lab': { singleton: true, requiredVersion: "*" },
           '@emotion/react': { singleton: true, requiredVersion: "*" },
           '@emotion/styled': { singleton: true, requiredVersion: "*" }
        },
        
    }),

  ],
})
