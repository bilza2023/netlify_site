
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite';
 
export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
  },
   extensions: ['.svelte', '.md'],

  preprocess: [
    mdsvex({
      extensions: ['.md']
    }),
    vitePreprocess()
  ]
};