import{a as f,i as a,S as g}from"./assets/vendor-B5OgcYI_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50846905-dc608c04a9f845ecec04912aa",h="https://pixabay.com/api/";function y(s){return f.get(h,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{const o=r.data.hits;return o.length<1?(a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#E0F7FA",messageColor:"#006064"}),[]):o}).catch(r=>(a.show({message:`Error: ${r.message}`,backgroundColor:"rgba(255, 0, 0, 0.9)",messageColor:"black"}),[]))}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new g(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:d})=>{const p=e.split(",").slice(0,3).join(", ");return`
  <li class="request list">
    <a href="${i}">
      <img src="${o}" alt="${p}" />
    </a>
<div class="info">
  <div class="info-row titles">
    <p><strong>Likes</strong></p>
    <p><strong>Views</strong></p>
    <p><strong>Comments</strong></p>
    <p><strong>Downloads</strong></p>
  </div>
<div class="info-row values">
    <p>${t}</p>
    <p>${n}</p>
    <p>${u}</p>
    <p>${d}</p>
  </div>
</div>
  </li>
    `}).join("");c.innerHTML=r,L.refresh()}function v(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const $=document.querySelector(".form");$.addEventListener("submit",q);function q(s){s.preventDefault(),v(),w();let r=s.target.elements["search-text"].value;y(r).then(o=>{o.length>0&&b(o)}).finally(()=>S())}
//# sourceMappingURL=index.js.map
