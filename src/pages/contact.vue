<template>
	<div class="pt-24">
		<ul class="text-center [&>li]:pb-3" v-for="link in data" :key="link.name">
			<li>
				<i :class="`fa${link.brand ? '-brands' : 's'} fa-${link.icon}`" /> {{ link.name }}:
				<a class="text-[#007cb4]" :href="link.link" target="_blank" rel="noopener noreferrer">{{
					link.value
				}}</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import data from '../data/contacts.toml';
</script>
