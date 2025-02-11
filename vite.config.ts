import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()]
});

//import { defineConfig } from 'vite';

/*
export default defineConfig({
  plugins: [svelte()],
  server: {
    hmr: {
      overlay: false, // Desactiva el overlay de errores si es necesario
    },
  },
  css: {
    postcss: {
      /*plugins: [ 
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}); */