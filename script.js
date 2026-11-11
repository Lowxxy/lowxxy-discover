(function(){
  var year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  var toggle=document.querySelector('.mobile-toggle');var mobile=document.getElementById('mobile-nav');
  if(toggle&&mobile){toggle.addEventListener('click',function(){var opening=mobile.hidden;mobile.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));toggle.setAttribute('aria-label',opening?'Close navigation':'Open navigation')});mobile.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mobile.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')})})}
  document.querySelectorAll('.gallery-image').forEach(function(btn){btn.addEventListener('click',function(){var img=btn.querySelector('img');var alternate=btn.getAttribute('data-back');var current=btn.getAttribute('data-front');if(!img||!alternate)return;img.src=alternate;btn.setAttribute('data-front',alternate);btn.setAttribute('data-back',current)})});
  // Shopify theme exports include the original file references, but not the image bytes.
  // Try the storefront CDN when a copied local asset is absent; hide images that genuinely cannot be loaded.
  var frames=Array.from(document.querySelectorAll('.shopify-image'));
  frames.forEach(function(frame){var img=frame.querySelector('img');if(!img)return;img.addEventListener('error',function(){var fallback=img.getAttribute('data-fallback');if(fallback&&!img.dataset.usedFallback){img.dataset.usedFallback='1';img.src=fallback}else{frame.hidden=true;if(frames.every(function(item){return item.hidden})){var section=document.getElementById('shopify-strip');if(section)section.hidden=true}}});});
})();
