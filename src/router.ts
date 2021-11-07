import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Contacts from './components/Contacts.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'About me', component: App },
		{ path: '/contact', name: 'Contact', component: Contacts },
	],
});
