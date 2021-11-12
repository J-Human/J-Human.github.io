<template>
	<ul v-for="link in contacts" :key="link.name">
		<li>
			{{ link.name }}: <a :href="link.link" target="_blank" rel="noopener noreferrer">{{ link.value }}</a>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { parse } from 'toml';
import { computed } from 'vue';
import data from '../data/contacts';

const contacts = computed(() => parse(data));
</script>

<style scoped>
a {
	text-decoration: none;
}
a:visited {
	color: #0000ee;
}
ul {
	font-size: 15px;
	list-style: none;
	text-align: center;
}
</style>
