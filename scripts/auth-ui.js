(function(){
const b=document.querySelector('[data-language-button]'); if(!b)return;
const langs=['en','my','zh']; let i=Math.max(0,langs.indexOf(localStorage.getItem('bo_lang')||'en'));
b.addEventListener('click',()=>{i=(i+1)%langs.length;localStorage.setItem('bo_lang',langs[i]);b.setAttribute('data-language',langs[i]);});
b.setAttribute('data-language',langs[i]);
})();