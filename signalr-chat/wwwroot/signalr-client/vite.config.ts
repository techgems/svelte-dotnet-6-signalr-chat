import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    WindiCSS()
  ]
});
