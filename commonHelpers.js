/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const p=document.querySelector(".js-open-menu"),f=document.querySelector(".js-close-menu"),i=document.querySelector(".js-menu-container"),y=document.querySelectorAll(".mobile-menu__link"),v=document.querySelector(".mob-menu-logo a");function w(){i.classList.add("active"),i.style.visibility="visible"}function s(){i.classList.remove("active"),setTimeout(()=>{i.style.visibility="hidden"},300)}p.addEventListener("click",w);f.addEventListener("click",s);document.addEventListener("click",t=>{!i.contains(t.target)&&!p.contains(t.target)&&s()});document.querySelectorAll(".smooth-scroll").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const l=this.getAttribute("href"),r=document.querySelector(l);r&&r.scrollIntoView({behavior:"smooth"})})});y.forEach(t=>{t.addEventListener("click",s)});v.addEventListener("click",s);new Swiper(".swiper-m",{slidesPerView:1,loop:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"}});new Swiper(".swiper",{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u=document.querySelector("#user1"),L=document.querySelector("#click1");L.addEventListener("click",g);function g(){u.classList.add("ppoapp"),document.addEventListener("scroll",a),document.addEventListener("keydown",m)}function a(){u.classList.contains("ppoapp")&&(u.classList.remove("ppoapp"),document.removeEventListener("scroll",a),document.removeEventListener("keydown",m))}function m(t){(t.code==="Space"||t.code==="Escape")&&a()}const c=document.querySelector(".back-to-top");c.hidden=!0;(()=>{window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.hidden=!1:c.hidden=!0}),c.addEventListener("click",t);function t(){window.scrollY>0&&(window.scrollBy(0,-25),setTimeout(t,0))}})();
//# sourceMappingURL=commonHelpers.js.map
