<template>
	<header>
		<img
			id="logo"
			alt="logo"
			srcset="
				../../public/assets/favicon.ico,
				../../public/assets/icon-192x192.png  4x,
				../../public/assets/icon-512x512.png 10.7x
			"
		/>
		<nav id="navbar">
			<ul id="navbar-links">
				<li>
					<router-link to="/">About me</router-link>
				</li>
				<li>
					<router-link to="/contact">Contact</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
* {
	background-color: #ffffff;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a,
li {
	color: #24a9e6;
	font-size: 16px;
	font-weight: 500;
	text-decoration: none;
}
header {
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 30px 10%;
}
#logo {
	aspect-ratio: attr(width) / attr(height);
	cursor: pointer;
	margin-left: auto;
	order: 2;
}
#navbar {
	order: 1;
}
#navbar-links {
	list-style: none;
}
#navbar-links li {
	display: inline-block;
	padding: 0px 20px;
}
#navbar-links li:nth-child(1) {
	padding: 0 20px 0 0;
}
#navbar-links li a {
	transition: all 0.3s ease 0s;
}
#navbar-links li a:hover {
	color: #0000ff;
}
#navbar-links li a:active {
	color: #0000ff;
}
/* iPhone SE */
@media screen and (max-width: 375px) {
	#navbar-links li {
		padding: 0px 3px;
	}
}
/* Experimental */
@media (prefers-contrast: more) {
	#logo {
		filter: contrast(100%);
	}
}
</style>
