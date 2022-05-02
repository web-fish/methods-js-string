var d=(t,e,o)=>new Promise((c,s)=>{var n=r=>{try{a(o.next(r))}catch(l){s(l)}},i=r=>{try{a(o.throw(r))}catch(l){s(l)}},a=r=>r.done?c(r.value):Promise.resolve(r.value).then(n,i);a((o=o.apply(t,e)).next())});function y(){import("data:text/javascript,")}const u=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};u();const p=t=>d(void 0,null,function*(){const e=yield fetch(t);if(!e.ok)throw new Error(e.status);return yield e.json()}),v=()=>{const t=[...document.querySelectorAll(".section")],e=[...document.querySelectorAll(".navbar__menu-link")],o={root:null,threshold:[1]},c=n=>{n.forEach(i=>{if(i.isIntersecting){e.forEach(l=>{l.classList.remove("navbar__menu-link--active")});const a=i.target.id,r=document.querySelector(`.navbar__menu-link[href="#${a}"]`);r&&r.classList.add("navbar__menu-link--active")}})},s=new IntersectionObserver(c,o);t.forEach(n=>{s.observe(n)})},_=t=>{t.forEach(e=>{const o=document.createElement("div");o.classList.add("section"),o.setAttribute("id",`${e.id}`),o.innerHTML=`
    <div class="section__header">
    <h3 class="section__title">${e.title}</h3>
    <h4 class="section__subtitle">${e.subtitle}</h4>
  </div>
  <div class="section__content">
    <pre class="section__pre">
<code class="section__code"><code class="section__var">${e.var} </code>${e.code}</code>
<code class="section__console">${e.console}</code>
</pre>
    <div class="section__copy" data-tooltip="copy">
      <svg class="section__svg" width="30px" height="30px" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" fill="#494949"
          d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z" />
        <path fill="#494949"
          d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z" />
      </svg>
    </div>
  </div>
  <pre class="section__pre">
<code class="section__result">${e.result}</code>
</pre>`,document.getElementById("content").append(o)})},m=t=>{const e=document.createElement("ul");e.classList.add("navbar__menu"),t.forEach(o=>{e.insertAdjacentHTML("beforeend",`<li class="navbar__menu-item">
    <a class="navbar__menu-link" href="#${o.id}">${o.title}</a>
    </li>`)}),document.getElementById("navbar").append(e)},f=()=>{document.addEventListener("click",t=>{if(t.target.classList.contains("section__copy")){const e=t.target.closest(".section__content");navigator.clipboard.writeText(e.textContent.trim()).then(()=>{const o=t.target.closest(".section"),c=document.createElement("div");c.classList.add("alert"),c.innerHTML='<p class="alert__text">\u0421opied!</p>',o.append(c),setTimeout(()=>{c.remove()},2e3)}).catch(o=>{console.log(o)})}})},h=()=>{document.getElementById("up").addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})};p("https://methods-js-default-rtdb.europe-west1.firebasedatabase.app/string.json").then(t=>{b(t)});const b=t=>{m(t),_(t),v()};f();h();export{y as __vite_legacy_guard};
