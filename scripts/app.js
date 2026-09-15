import{guard,api,nav}from'./common.js';
import{movies2026,formatGross}from'../data/movies-2026.js';
const u=guard('client');
if(u){
 const active=document.body.dataset.active||'home';
 const navEl=document.getElementById('nav');
 if(navEl)navEl.innerHTML=nav(active);
 const movieGrid=document.getElementById('movieGrid');
 if(movieGrid)movieGrid.innerHTML=movies2026.map(m=>`<article class="movie" aria-label="${m.title}"><div class="poster"><span class="rank">#${m.rank}</span><div><strong>${m.title}</strong><small>${m.genre}</small></div></div><div class="bar">2026 • WORLDWIDE</div><div class="name">${m.title}</div><div class="movie-meta">${formatGross(m.worldwide)}</div></article>`).join('');
 if(document.body.dataset.page==='home'){try{const d=await api('/client/dashboard');document.getElementById('name').textContent=d.profile?.name||u.name||'Client';document.getElementById('balance').textContent='USD '+Number(d.stats?.assetBalance||0).toFixed(2);document.getElementById('profit').textContent='USD '+Number(d.stats?.dailyProfit||0).toFixed(2);document.getElementById('commission').textContent='USD '+Number(d.stats?.commission||0).toFixed(2);document.getElementById('tasks').textContent=`${d.stats?.taskCount||0} / ${d.stats?.totalTasks||30}`}catch(e){console.error(e)}}
}
