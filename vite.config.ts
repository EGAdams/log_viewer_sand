import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "vite-plugin-fs";


// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [ fs(), vue() ],
    build: {
        rollupOptions: {
            external: [ "virtual:fs" ]
        }
    }
});
