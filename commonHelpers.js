/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("logo").addEventListener("click",function(){window.location.href="#home_section"});const u=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),i=document.querySelector(".js-menu-container"),a=document.querySelectorAll(".mobile-menu__link"),m=document.querySelector(".mob-menu-logo a");function f(){i.classList.add("active"),i.style.visibility="visible"}function c(){i.classList.remove("active"),setTimeout(()=>{i.style.visibility="hidden"},300)}u.addEventListener("click",f);d.addEventListener("click",c);document.addEventListener("click",o=>{!i.contains(o.target)&&!u.contains(o.target)&&c()});document.querySelectorAll(".smooth-scroll").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href"),r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})})});a.forEach(o=>{o.addEventListener("click",c)});m.addEventListener("click",c);new Swiper(".swiper-m",{slidesPerView:1,loop:!0,autoplay:{delay:2e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:"true"}});new Swiper(".swiper",{loop:!0,slidesPerView:1.02,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=commonHelpers.js.map
