/* LOWXXY Discover V4. Collection mirrors the Shopify storefront when the public feed is accessible. */
const SHOP='https://lowxxy.myshopify.com';
const COLLECTION='made-to-stand-out';
const fallback=[
 {title:'Chainmail',images:['chainmail2.jpeg','chainmail1.jpeg']},
 {title:'Royal Script',images:['royalscript1.jpeg','royalscript2.jpeg']},
 {title:'Pop Art',images:['popart1.jpeg','popart2.jpeg']},
 {title:'Grounded Gains',images:['groundedgains1.jpeg','groundedgains2.jpeg']},
 {title:'Hang',images:['hang2.jpeg','hang1.jpeg']}
];
const grid=document.querySelector('#product-grid');
const note=document.querySelector('#collection-note');
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function productCard(p,i){
 const imgs=p.images.filter(Boolean),url=p.url||SHOP+'/collections/'+COLLECTION;
 const card=document.createElement('article'); card.className='product-card';
 card.innerHTML=`<a class="film-frame" href="${esc(url)}" aria-label="Shop ${esc(p.title)}"><div class="frame-media"><img src="${esc(imgs[0])}" alt="${esc(p.title)} — photo 1" loading="lazy"><span class="film-counter">FRAME ${String(i+1).padStart(3,'0')}</span><span class="frame-foot">SHOP THIS PIECE ↗</span></div></a><div class="product-info"><div><h3>${esc(p.title)}</h3><span class="product-meta">LOWXXY ORIGINAL · ${String(i+1).padStart(2,'0')}</span><div class="photo-dots">${imgs.map((_,j)=>'<span class="'+(j===0?'active':'')+'"></span>').join('')}</div></div>${imgs.length>1?'<button class="product-control" type="button" aria-label="Next photo for '+esc(p.title)+'">NEXT PHOTO ↻</button>':''}</div>`;
 let at=0;const img=card.querySelector('.frame-media img');const dots=[...card.querySelectorAll('.photo-dots span')];
 const btn=card.querySelector('button');if(btn)btn.addEventListener('click',()=>{at=(at+1)%imgs.length;img.src=imgs[at];img.alt=`${p.title} — photo ${at+1}`;dots.forEach((d,j)=>d.classList.toggle('active',j===at));});
 return card;
}
function render(list){grid.replaceChildren(...list.map(productCard));}
async function fetchShopify(){
 // Shopify's collection endpoint exposes the same public seven-shirt collection used by the homepage.
 // If cross-origin access is blocked, show verified local photos, without inventing product records.
 const ctrl=new AbortController();const timeout=setTimeout(()=>ctrl.abort(),7000);
 try{
  const res=await fetch(`${SHOP}/collections/${COLLECTION}/products.json?limit=100`,{signal:ctrl.signal,mode:'cors',credentials:'omit',cache:'no-store'});
  if(!res.ok)throw Error('Shopify collection unavailable');
  const data=await res.json();
  const products=(data.products||[]).filter(p=>p&&p.images&&p.images.length).map(p=>({title:p.title,images:p.images.map(im=>im.src).filter(Boolean),url:`${SHOP}/products/${encodeURIComponent(p.handle)}`}));
  if(!products.length)throw Error('Shopify returned no products');
  render(products);note.hidden=true;
 }catch(e){
  render(fallback);note.textContent='Showing available archive photos. Visit the Shopify collection to see all seven shirts and every product photo.';note.hidden=false;
 }finally{clearTimeout(timeout)}
}
fetchShopify();
document.querySelector('.menu-toggle').addEventListener('click',e=>{const nav=document.querySelector('#mobile-nav');nav.hidden=!nav.hidden;e.currentTarget.setAttribute('aria-expanded',String(!nav.hidden));e.currentTarget.setAttribute('aria-label',nav.hidden?'Open menu':'Close menu')});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#mobile-nav').hidden=true;document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=String(new Date().getFullYear());
