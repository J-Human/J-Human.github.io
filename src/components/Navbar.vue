<template>
	<header class="flex space-x-6 pl-8 pt-6 md:space-x-12">
		<img
			id="logo"
			alt="logo"
			srcset="
				../../public/assets/favicon.ico,
				../../public/assets/icon-192x192.png  4x,
				../../public/assets/icon-512x512.png 10.7x
			"
		/>
		<nav>
			<ul class="flex space-x-8 pt-3 text-[#007cb4]">
				<li class="underline-offset-2 hover:underline">
					<router-link to="/">About me</router-link>
				</li>
				<li class="underline-offset-2 hover:underline">
					<router-link to="/contact">Contact</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
