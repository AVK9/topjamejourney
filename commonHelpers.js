import"./assets/back-to-top-cc248f94.js";import"./assets/main-d8c8bb9b.js";const c=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),t=document.querySelector(".js-menu-container"),r=document.querySelectorAll(".mobile-menu__link"),u=document.querySelector(".mob-menu-logo a");function a(){t.classList.add("active"),t.style.visibility="visible"}function n(){t.classList.remove("active"),setTimeout(()=>{t.style.visibility="hidden"},300)}c.addEventListener("click",a);l.addEventListener("click",n);document.addEventListener("click",e=>{!t.contains(e.target)&&!c.contains(e.target)&&n()});document.querySelectorAll(".smooth-scroll").forEach(e=>{e.addEventListener("click",function(i){i.preventDefault();const s=this.getAttribute("href"),o=document.querySelector(s);o&&o.scrollIntoView({behavior:"smooth"})})});r.forEach(e=>{e.addEventListener("click",n)});u.addEventListener("click",n);
//# sourceMappingURL=commonHelpers.js.map
