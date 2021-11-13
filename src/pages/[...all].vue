<template>
	<h2>404</h2>
	<p>
		We could not find the page you were looking for. Let's go
		<router-link to="/">home</router-link>.
	</p>
</template>

<script setup lang="ts">
declare const name = 'UnknownPage';
</script>

<style scoped>
* {
	text-align: center;
}
a {
	text-decoration: none;
	transition: all 0.3s ease 0s;
}
a:visited {
	color: #0000ff;
}
h2 {
	font-size: 50px;
	font-weight: bold;
	margin-top: 70px;
}
p {
	color: #1c1b1d;
	font-size: 19px;
	margin: 90px;
	margin-top: 70px;
}
</style>
