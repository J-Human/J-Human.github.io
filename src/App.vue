<template>
	<Navbar />
	<router-view />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { useKonamiCode } from './functions/konami';

useKonamiCode();
</script>

<style>
@import './styles/index.css';
</style>
