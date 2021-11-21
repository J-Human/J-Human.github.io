<template>
	<ul v-for="link in contacts" :key="link.name">
		<li>
			<i :class="`fa${link.brand ? '-brands' : 's'} fa-${link.icon}`" /> {{ link.name }}:
			<a :href="link.link" target="_blank" rel="noopener noreferrer">{{ link.value }}</a>
		</li>
	</ul>
	<footer>
		<p>All logos are exclusive trademarks of their respective owners.</p>
	</footer>
</template>

<script setup lang="ts">
import { parse } from 'toml';
import { computed } from 'vue';
import data from '../data/contacts';

const contacts = computed(() => parse(data) ?? {});
</script>

<style scoped>
a {
	text-decoration: none;
}
a:visited {
	color: #0000ff;
}
footer > p {
	bottom: 1px;
	font-size: 9px;
	position: fixed;
}
ul {
	font-size: 15px;
	list-style: none;
	text-align: center;
}
@media screen and (max-width: 320px) {
	ul {
		font-size: 10px;
	}
}
</style>
