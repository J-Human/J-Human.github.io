<template>
	<Navbar />
	<AboutMe />
</template>

<script setup lang="ts">
import AboutMe from './components/AboutMe.vue';
import Navbar from './components/Navbar.vue';
import { useKonamiCode } from './functions/konami';

useKonamiCode();
</script>
