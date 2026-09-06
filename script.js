const header=document.querySelector('.header');const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('#menu');const links=[...document.querySelectorAll('.menu a')];
function closeMenu(){menu.classList.remove('open');menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}
menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open))});
links.forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
document.getElementById('year').textContent=new Date().getFullYear();
const revealEls=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
revealEls.forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{let current='';sections.forEach(s=>{if(scrollY>=s.offsetTop-130)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});