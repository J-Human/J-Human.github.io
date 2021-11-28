import { onKeyStroke } from '@vueuse/core';
import { ref } from 'vue';

export function useKonamiCode() {
	const rate = ref(0);
	const konamiCodePattern = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'b',
		'a',
	];

	onKeyStroke(konamiCodePattern, (event) => {
		rate.value = event.key === konamiCodePattern[rate.value] ? rate.value + 1 : 0;
		if (rate.value === konamiCodePattern.length) {
			// eslint-disable-next-line no-alert
			alert('✨');
		}
	});
}
