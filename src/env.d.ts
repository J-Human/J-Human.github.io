declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
	export default component;
}

declare module '*.toml' {
	const value: {
		[key: string]: {
			icon: string;
			brand: boolean;
			name: string;
			value: string;
			link: string;
		},
	};
	export default value;
}
