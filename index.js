import{a as w,S as v,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function h(r,e){return(await w.get("https://pixabay.com/api/",{params:{key:"49742644-34971ccc2760c2b4b43c41938",q:r,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}})).data}const m=document.querySelector(".gallery");function p(r){const e=r.map(o=>`<div class="image-container"><li class="gallery-item">
      <a class="gallery-link" href="${o.webformatURL}">
      <img 
      class="gallery-image"
      src="${o.largeImageURL}"
      data-source="${o.webformatURL}"
      alt="${o.tags}"/>
      </a>
  </li>
  <div class="text-container">
      <li class="text-item">
        <h2>Likes</h2>
        <p>${o.likes}</p>
      </li>
       <li class="text-item">
        <h2>Views</h2>
        <p>${o.views}</p>
      </li>
       <li class="text-item">
        <h2>Comments</h2>
        <p>${o.comments}</p>
      </li>
       <li class="text-item">
        <h2>Downloads</h2>
        <p>${o.downloads}</p>
      </li>
    </div></div>
  `).join("");m.insertAdjacentHTML("beforeend",e),new v(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function S(){m.innerHTML=""}const y=document.querySelector(".loader");function b(){y.classList.add("active")}function f(){y.classList.remove("active")}const g=document.querySelector(".load-more");function x(){g.hidden=!1}function c(){g.hidden=!0}const i=document.querySelector(".form");let u=1,n="";i.addEventListener("submit",q);async function q(r){if(r.preventDefault(),S(),n=i.elements["search-text"].value.trim(),!n){i.reset(),l.error({message:"Please fill in the search field!",position:"topRight",backgroundColor:"#ef4040"});return}b(),c();try{const{hits:e,totalHits:a}=await h(n,u);if(e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),c();return}f(),p(e),L(a)}catch(e){console.log(e)}finally{f(),i.reset()}}g.addEventListener("click",B);async function B(r){const e=r.currentTarget;if(e){u++,c(),e.disabled=!0,b();try{const{hits:a,totalHits:o}=await h(n,u);p(a),setTimeout(()=>R(),0),L(o),e.disabled=!1}catch(a){console.log(a),l.error({message:"Something went wrong.Please try again later!",position:"topRight",backgroundColor:"#ef4040"})}finally{f()}}}function L(r){u*15>=r?(l.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040"}),c()):x()}function R(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
