<template>
	<div class="posn-middle">
		<h2>Justin <span>(he/him)</span></h2>
		<p>
			Hi there. I make software. I have experience in open source, backend, and a good amount of web development
			with React and Vue. Nowadays I commonly use TypeScript, Python, and C++. I know UNIX shell scripting, Git,
			and SQL. I'm familiar with Linux, and macOS. I enjoy watching movies, travelling, reading books, and gaming.
			I try to place effort in things. Feel free to chat with me.
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
