import{r as f,o as _,c as u,a as c,b as i,w as m,p as h,d as v,e as d,f as A,g as I,h as $,F as L,i as E,j as C,k as N}from"./vendor.6a933bed.js";const P=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};P();var S="/assets/favicon.fff3c3ff.ico",O="/assets/icon-192x192.8c164237.png",R="/assets/icon-512x512.5534fdd0.png";var g=(t,n)=>{for(const[s,o]of n)t[s]=o;return t};const V={},j=t=>(h("data-v-34b5dff4"),t=t(),v(),t),D=S+", "+O+" 4x, "+R+" 10.7x",B=j(()=>c("img",{id:"logo",alt:"logo",srcset:D},null,-1)),F={id:"navbar"},K={id:"navbar-links",class:"no-under"},T=d("About me"),q=d("Contact");function H(t,n){const s=f("router-link");return _(),u("header",null,[B,c("nav",F,[c("ul",K,[c("li",null,[i(s,{to:"/",class:"no-under"},{default:m(()=>[T]),_:1})]),c("li",null,[i(s,{to:"/contact",class:"no-under"},{default:m(()=>[q]),_:1})])])])])}var U=g(V,[["render",H],["__scopeId","data-v-34b5dff4"]]);const l=A(0),p=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function W(){I(p,t=>{l.value=t.key===p[l.value]?l.value+1:0,l.value===p.length&&alert("\u2728")})}const J=$({setup(t){return W(),(n,s)=>{const o=f("router-view");return _(),u(L,null,[i(U),i(o)],64)}}}),z="modulepreload",y={},G="/",w=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${G}${o}`,o in y)return;y[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":z,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e)return new Promise((x,k)=>{a.addEventListener("load",x),a.addEventListener("error",k)})})).then(()=>n())};const M={},b=t=>(h("data-v-30b6aa8c"),t=t(),v(),t),Q={class:"posn-mi"},X=b(()=>c("h2",null,[d("Justin "),c("span",null,"(he/him)")],-1)),Y=b(()=>c("p",null," Hi there. I make software. I have experience in open source, backend, and a good amount of web development with React and Vue. I also like to game and travel. ",-1)),Z=[X,Y];function ee(t,n){return _(),u("div",Q,Z)}var te=g(M,[["render",ee],["__scopeId","data-v-30b6aa8c"]]);const oe=[{name:"contact",path:"/contact",component:()=>w(()=>import("./contact.929a5e3d.js"),["assets/contact.929a5e3d.js","assets/contact.14c9a7e4.css","assets/vendor.6a933bed.js"]),props:!0},{name:"index",path:"/",component:te,props:!0},{name:"all",path:"/:all(.*)*",component:()=>w(()=>import("./_...all_.174d3e51.js"),["assets/_...all_.174d3e51.js","assets/_...all_.80b21b70.css","assets/vendor.6a933bed.js"]),props:!0}];var re=E({history:C(),routes:oe});N(J).use(re).mount("#app");export{g as _};