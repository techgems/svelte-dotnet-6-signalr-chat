import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    extract: {
        include: ['src/**/*.{svelte,ts,js,html}'],
        exclude: ['node_modules', '.git'],
    },
    plugins: [
        require('windicss/plugin/forms'),
    ]
})