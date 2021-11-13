/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
	export default component;
}
