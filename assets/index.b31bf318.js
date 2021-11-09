import{r as f,o as i,c,a as r,b as l,w as v,p as h,d as g,e as u,f as x,g as I,h as w,F as b,i as C,j as $,u as L,t as y,k as N,l as S,m as j,n as J}from"./vendor.eb5a7374.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};D();var E="/assets/favicon.fff3c3ff.ico";var p=(t,n)=>{for(const[a,s]of n)t[a]=s;return t};const H={},O=t=>(h("data-v-7bbe835c"),t=t(),g(),t),R=O(()=>r("img",{id:"logo",alt:"logo",src:E},null,-1)),K={id:"navbar"},M={id:"navbar-links"},V=u("About me"),B=u("Contact");function F(t,n){const a=f("router-link");return i(),c("header",null,[R,r("nav",K,[r("ul",M,[r("li",null,[l(a,{to:"/"},{default:v(()=>[V]),_:1})]),r("li",null,[l(a,{to:"/contact"},{default:v(()=>[B]),_:1})])])])])}var P=p(H,[["render",F],["__scopeId","data-v-7bbe835c"]]);const _=x(0),m=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function T(){I(m,t=>{_.value=t.key===m[_.value]?_.value+1:0,_.value===m.length&&alert("\u2728")})}const U=w({setup(t){return T(),(n,a)=>{const s=f("router-view");return i(),c(b,null,[l(P),l(s)],64)}}});const q={},k=t=>(h("data-v-405de7a6"),t=t(),g(),t),G=k(()=>r("h2",null,[u("Justin "),r("span",null,"(he/him)")],-1)),W=k(()=>r("p",null," Hi there. I'm a software developer with experience in open source, backend, and a good amount of web development with React and Vue. I also like to game and travel. ",-1)),z=[G,W];function Q(t,n){return i(),c("div",null,z)}var A=p(q,[["render",Q],["__scopeId","data-v-405de7a6"]]),X=`
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
	link = "https://stackoverflow.com/users/16655757/justin"`;const Y=["href"],Z=w({setup(t){const n=C(()=>N.parse(X));return(a,s)=>(i(!0),c(b,null,$(L(n),e=>(i(),c("ul",{key:e.name},[r("li",null,[u(y(e.name)+": ",1),r("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},y(e.value),9,Y)])]))),128))}});var ee=p(Z,[["__scopeId","data-v-7b238582"]]),te=S({history:j(),routes:[{path:"/",name:"About me",component:A},{path:"/contact",name:"Contact",component:ee},{path:"/:pathMatch(.*)*",component:A}]});J(U).use(te).mount("#app");
