import{r as f,o as i,c as l,a as o,b as u,w as m,p as v,d as h,e as c,f as $,g as A,h as k,F as g,i as x,j as I,u as C,t as y,k as L,l as N,m as S,n as j}from"./vendor.eb5a7374.js";const J=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};J();var D="/assets/favicon.fff3c3ff.ico";var _=(e,n)=>{for(const[a,s]of n)e[a]=s;return e};const E={},H=e=>(v("data-v-4df34f49"),e=e(),h(),e),O=H(()=>o("img",{id:"logo",alt:"logo",src:D},null,-1)),R={id:"navbar"},K={id:"navbar-links"},M=c("About me"),P=c("Contact");function U(e,n){const a=f("router-link");return i(),l("header",null,[O,o("nav",R,[o("ul",K,[o("li",null,[u(a,{to:"/"},{default:m(()=>[M]),_:1})]),o("li",null,[u(a,{to:"/contact"},{default:m(()=>[P]),_:1})])])])])}var V=_(E,[["render",U],["__scopeId","data-v-4df34f49"]]);const d=$(0),w=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function B(){A(w,e=>{d.value=e.key===w[d.value]?d.value+1:0,d.value===w.length&&alert("\u2728")})}const F=k({setup(e){return B(),(n,a)=>{const s=f("router-view");return i(),l(g,null,[u(V),u(s)],64)}}});const T={},b=e=>(v("data-v-6b4d69ea"),e=e(),h(),e),W=b(()=>o("h2",null,[c("Justin "),o("span",null,"(he/him)")],-1)),q=b(()=>o("p",null," Hi there. I make software. I have experience in open source, backend, and a good amount of web development with React and Vue. I also like to game and travel. ",-1)),G=[W,q];function z(e,n){return i(),l("div",null,G)}var Q=_(T,[["render",z],["__scopeId","data-v-6b4d69ea"]]),X=`
	[github]
	icon = "github"
	name = "GitHub"
	value = "J-Human"
	link = "https://github.com/J-Human"

	[discord]
	icon = "discord"
	name = "Discord"
	value = "Justin ;)#2021"
	link = "https://discord.com/users/746315246582366280"

	[reddit]
	icon = "reddit"
	name = "Reddit"
	value = "Eternal_Dominus"
	link = "https://www.reddit.com/user/Eternal_Dominus"

	[keybase]
	icon = "keybase"
	name = "Keybase"
	value = "Justin101"
	link = "https://keybase.io/Justin101"

	[twitter]
	icon = "twitter"
	name = "Twitter"
	value = "justinleeong"
	link = "https://twitter.com/justinleeong"

	[email]
	icon = "envelope"
	name = "Email"
	value = "justinleeong@gmail.com"
	link = "mailto:justinleeong@gmail.com"

	[stackoverflow]
	icon = "stack-overflow"
	name = "Stack Overflow"
	value = "Justin"
	link = "https://stackoverflow.com/users/16655757/justin"`;const Y=["href"],Z=k({setup(e){const n=x(()=>L.parse(X));return(a,s)=>(i(!0),l(g,null,I(C(n),t=>(i(),l("ul",{key:t.name},[o("li",null,[c(y(t.name)+": ",1),o("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},y(t.value),9,Y)])]))),128))}});var ee=_(Z,[["__scopeId","data-v-269d62e5"]]);const te={},oe=e=>(v("data-v-43f19de7"),e=e(),h(),e),ne=oe(()=>o("h2",null,"404",-1)),re=c(" We could not find the page you were looking for. Let's go "),ae=c("home"),se=c(". ");function ce(e,n){const a=f("router-link");return i(),l(g,null,[ne,o("p",null,[re,u(a,{to:"/"},{default:m(()=>[ae]),_:1}),se])],64)}var ie=_(te,[["render",ce],["__scopeId","data-v-43f19de7"]]),le=N({history:S(),routes:[{path:"/",name:"About me",component:Q},{path:"/contact",name:"Contact",component:ee},{path:"/:pathMatch(.*)*",name:"Not found",component:ie}]});j(F).use(le).mount("#app");
