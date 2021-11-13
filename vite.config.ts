import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';

export default defineConfig({
	plugins: [pages(), vue()],
});
