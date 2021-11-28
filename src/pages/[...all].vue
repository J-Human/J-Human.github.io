<template>
	<div class="posn-middle">
		<h2>404</h2>
		<p>
			We could not find the page you were looking for. Let's go
			<router-link to="/">home</router-link>.
		</p>
	</div>
</template>

<style scoped>
a {
	transition: all 0.3s ease 0s;
}
a:visited {
	color: var(--link-color);
}
h2 {
	color: var(--theme-main);
	font-size: 50px;
	margin-top: 70px;
}
p {
	color: var(--almost-black);
	font-size: 19px;
	margin: 90px;
	margin-top: 70px;
}
</style>
