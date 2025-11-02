import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/ibrahimozkan_dev/',
  plugins: [
    react({
      babel: {
        // keep babel plugins as strings (plugin name or [name, options])
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
});
