import adapter from '@sveltejs/adapter-auto';

/** @type {import('sveltekit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x'
    })
  }
};

export default config;