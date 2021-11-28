<template>
	<div v-if="contacts">
		<ul v-for="link in contacts" :key="link.name" class="posn-middle">
			<li>
				<i :class="`fa${link.brand ? '-brands' : 's'} fa-${link.icon}`" /> {{ link.name }}:
				<a :href="link.link" target="_blank" rel="noopener noreferrer">{{ link.value }}</a>
			</li>
		</ul>
		<footer>
			<p>All logos are exclusive trademarks of their respective owners.</p>
		</footer>
	</div>
	<p v-else>Failed to parse data.</p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import data from '../data/contacts';
import { parse } from '../functions/parseData';

const contacts = computed(() => parse(data));
</script>

<style scoped>
a:visited {
	color: var(--link-color);
}
footer > p {
	bottom: 1px;
	font-size: 9px;
	position: fixed;
}
p {
	font-size: 18px;
	height: 100px;
	line-height: 100px;
}
ul {
	font-size: 15px;
	list-style: none;
}
@media screen and (max-width: 375px) {
	ul {
		font-size: 10px;
	}
}
</style>
