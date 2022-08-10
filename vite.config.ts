import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';
import { ViteToml } from 'vite-plugin-toml';

export default defineConfig({
	plugins: [pages(), ViteToml(), vue()],
});
