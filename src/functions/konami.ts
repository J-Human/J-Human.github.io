import { onKeyStroke } from '@vueuse/core';
import { ref } from 'vue';

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

export function useKonamiCode() {
	onKeyStroke(konamiCodePattern, (event) => {
		rate.value = event.key === konamiCodePattern[rate.value] ? rate.value + 1 : 0;
		if (rate.value === konamiCodePattern.length) {
			// Do something. For now, just log it.
			console.log('Konami code activated. ✨');
		}
	});
}
