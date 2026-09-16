import{guard,nav}from'./common.js';
import{movies2026,formatGross}from'../data/movies-2026.js';
if(guard('client')){document.getElementById('nav').innerHTML=nav('home');document.getElementById('movieGrid').innerHTML=movies2026.map(m=>`<article class="movie" aria-label="${m.title}"><div class="poster"><span class="rank">#${m.rank}</span><div><strong>${m.title}</strong><small>${m.genre}</small></div></div><div class="bar">2026 • WORLDWIDE</div><div class="name">${m.title}</div><div class="movie-meta">${formatGross(m.worldwide)}</div></article>`).join('')}
