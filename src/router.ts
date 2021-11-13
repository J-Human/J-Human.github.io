import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import Contacts from './components/Contacts.vue';
import Unknown from './components/UnknownPage.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'About me', component: AboutMe },
		{ path: '/contact', name: 'Contact', component: Contacts },
		{ path: '/:pathMatch(.*)*', name: 'Not found', component: Unknown },
	],
});
