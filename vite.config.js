import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";




const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    manifest : true,
    outDir,
    emptyOutDir : false,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),



      }
    }
  },
  server: { '/api': 'http://localhost:3000' }, 

})
