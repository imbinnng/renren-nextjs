import adapter from '@sveltejs/adapter-vercel';

/** @type {import('sveltekit').Config} */
const config = {
  kit: {
    adapter: adapter()
  }
};

export default config;