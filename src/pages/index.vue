<template>
	<div class="posn-middle">
		<h2>Justin <span>(he/him)</span></h2>
		<p>
			Hi! I am an avid programmer, mostly using TypeScript, C++, or Python. Some of my hobbies include reading stuff, talking with people, watching movies, and gaming. I enjoy learning new things, and I always try my best. I'm open to talk to anyone.
		</p>
	</div>
</template>

<style scoped>
h2 {
	font-size: 50px;
	font-weight: bold;
	margin-top: 70px;
}
p {
	color: var(--almost-black);
	font-size: 15px;
	margin: 90px;
	margin-top: 70px;
}
span {
	color: var(--light-gray);
	font-size: 19px;
}
@media screen and (max-width: 800px) {
	p {
		font-size: 13px;
	}
}
@media screen and (max-width: 375px) {
	h2 {
		font-size: 41px;
	}
	p {
		font-size: 14px;
	}
}
@media screen and (min-width: 1366px) {
	h2 {
		margin-top: 120px;
	}
	p {
		margin-top: 200px;
	}
}
</style>
