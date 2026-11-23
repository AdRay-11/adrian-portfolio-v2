const links=[...document.querySelectorAll('.nav a')];
const header=document.querySelector('header'),wrap=document.querySelector('.stackwrap'),cs=document.getElementById('case-study');
const mob=()=>innerWidth<960,NAT=!!(window.CSS&&CSS.supports&&CSS.supports('animation-timeline: view()'));
const U=[...document.querySelectorAll('.stack.s')].map(c=>{let run=c.parentElement,inn=c.querySelector(':scope > .csin');
 if(c!==cs){run=document.createElement('div');run.className='run';c.parentNode.insertBefore(run,c);run.appendChild(c);
  inn=document.createElement('div');inn.className='in';while(c.firstChild)inn.appendChild(c.firstChild);c.appendChild(inn)}
 else run.classList.add('run');
 return{c,run,inn,top:0,over:0}});
function layout(){const keepY=scrollY,hh=header.offsetHeight,gap=mob()?10:16;
 U.forEach((u,i)=>{const base=hh+4+Math.min(i,3)*gap;
  u.c.style.height='';u.run.style.height='';u.inn.style.transform='';
  if(mob()||u.c===cs){u.top=base;u.c.style.setProperty('--top',base+'px');
   const h=Math.max(320,innerHeight-base-12);u.c.style.height=h+'px';
   const st=getComputedStyle(u.c),pad=parseFloat(st.paddingTop)+parseFloat(st.paddingBottom);
   u.over=Math.max(0,u.inn.scrollHeight-(h-pad));u.run.style.height=(h+u.over)+'px';
   if(NAT&&u.over>0){u.run.style.setProperty('--rs',(base+h+u.over)+'px');u.run.style.setProperty('--re',(base+h)+'px');u.run.style.setProperty('--ov',(-u.over)+'px');u.run.classList.add('nat')}else u.run.classList.remove('nat')}
  else{u.over=0;u.run.classList.remove('nat');u.top=hh+10;u.c.style.setProperty('--top',Math.min(base,innerHeight-u.c.offsetHeight-16)+'px')}});
 if(scrollY!==keepY)scrollTo(0,keepY);move()}
function move(){if(NAT)return;U.forEach(u=>{if(!u.over)return;const dpr=devicePixelRatio||1,off=Math.round(Math.min(u.over,Math.max(0,u.top-u.run.getBoundingClientRect().top))*dpr)/dpr;u.inn.style.transform=off?'translateY('+(-off)+'px)':''})}
function natY(el){const u=U.find(x=>x.c===el);if(!u)return el.getBoundingClientRect().top+scrollY;
 let y=wrap.getBoundingClientRect().top+scrollY;
 for(const x of U){if(x===u)break;y+=(mob()||x.c===cs)?x.run.offsetHeight:x.c.offsetHeight+parseFloat(getComputedStyle(x.c).marginBottom||0)}return y}
let mq=0;addEventListener('scroll',()=>{if(!mq)mq=requestAnimationFrame(()=>{mq=0;move()})},{passive:true});
if(window.ResizeObserver){const ro=new ResizeObserver(()=>layout());U.forEach(u=>ro.observe(u.inn))}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layout);
layout();let lw=innerWidth,lh=innerHeight;addEventListener('resize',()=>{if(lb.open)return;if(innerWidth!==lw||Math.abs(innerHeight-lh)>140){lw=innerWidth;lh=innerHeight;layout()}});addEventListener('load',layout);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length<2)return;const el=document.querySelector(id);if(!el)return;
 e.preventDefault();const u=U.find(x=>x.c===el);const y=id==='#home'?0:natY(el)-(u?u.top:header.offsetHeight+10);
 scrollTo({top:Math.max(0,y),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});try{history.replaceState(null,'',id)}catch(_){}}));

const lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbc=document.getElementById('lbc');let lbFrom=null;
function openLB(img){lbFrom=img;lbi.src=img.src;lbi.alt=img.alt;const c=img.parentElement.querySelector('figcaption');lbc.textContent=c?c.textContent:'';
 document.documentElement.style.overflow='hidden';lb.showModal()}
document.querySelectorAll('.gal img').forEach(i=>{i.tabIndex=0;i.setAttribute('role','button');i.setAttribute('aria-label','Enlarge: '+i.alt);
 i.addEventListener('click',()=>openLB(i));i.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLB(i)}})});
document.getElementById('lbclose').addEventListener('click',()=>lb.close());
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
lb.addEventListener('close',()=>{document.documentElement.style.overflow='';if(lbFrom)lbFrom.focus({preventScroll:true})});
const secs=[...document.querySelectorAll('main section[id]')];
function setActive(){const y=scrollY+120;let cur=secs[0].id;
 if(innerHeight+scrollY>=document.documentElement.scrollHeight-8||document.getElementById('contact').getBoundingClientRect().top<innerHeight*.6)cur='contact';
 else for(const x of secs){if(natY(x)<=y)cur=x.id}
 links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+cur))}
addEventListener('scroll',setActive,{passive:true});addEventListener('resize',setActive);setActive();

(function(){const b=document.getElementById('theme');if(!b)return;const root=document.documentElement;
function cur(){return root.getAttribute('data-theme')==='light'?'light':'dark'}
function sync(){const l=cur()==='light';b.setAttribute('aria-label',l?'Switch to dark theme':'Switch to light theme');b.setAttribute('aria-pressed',String(l))}
b.addEventListener('click',()=>{const n=cur()==='light'?'dark':'light';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}sync()});sync()})();
