<template>
	<div class="posn-mi">
		<h2>404</h2>
		<p>
			We could not find the page you were looking for. Let's go
			<router-link class="no-under" to="/">home</router-link>.
		</p>
	</div>
</template>

<style scoped>
a {
	transition: all 0.3s ease 0s;
}
a:visited {
	color: var(--text-theme);
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
