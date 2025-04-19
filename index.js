import{a as v,S as w,i as d}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function m(r,e){return(await v.get("https://pixabay.com/api/",{params:{key:"49742644-34971ccc2760c2b4b43c41938",q:r,page:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}})).data}const g=document.querySelector(".gallery");function p(r){const e=r.map(o=>`<div class="image-container"><li class="gallery-item">
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
  `).join("");g.insertAdjacentHTML("beforeend",e),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function x(){g.innerHTML=""}const y=document.querySelector(".loader");function L(){y.classList.add("active")}function f(){y.classList.remove("active")}const h=document.querySelector(".load-more");function S(){h.hidden=!1}function l(){h.hidden=!0}const i=document.querySelector(".form");let c=1,n="";i.addEventListener("submit",q);async function q(r){if(r.preventDefault(),x(),n=i.elements["search-text"].value.trim(),!n){i.reset(),d.error({message:"Please fill in the search field!",position:"topRight",backgroundColor:"#ef4040"});return}L(),l();try{const{hits:e,totalHits:s}=await m(n,c);if(e.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),l();return}f(),p(e),b(s)}catch(e){console.log(e)}finally{f(),i.reset()}}h.addEventListener("click",B);async function B(r){const e=r.currentTarget;if(e){c++,l(),e.disabled=!0,L();try{const{hits:s,totalHits:o}=await m(n,c);p(s),setTimeout(()=>$(),0),b(o),e.disabled=!1}catch(s){console.log(s)}finally{f()}}}function b(r){c*15>=r?(d.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040"}),l()):S()}function $(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
