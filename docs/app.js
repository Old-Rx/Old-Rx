// particles
const pc = document.getElementById('particles');
const pctx = pc.getContext('2d');
let particles = [];
function resize(){
  pc.width = innerWidth * devicePixelRatio;
  pc.height = innerHeight * devicePixelRatio;
  pc.style.width = innerWidth+'px';
  pc.style.height = innerHeight+'px';
  pctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  particles = Array.from({length: Math.min(140, Math.floor(innerWidth/8))},(_,i)=>({
    x:Math.random()*innerWidth, y:Math.random()*innerHeight,
    vx:(Math.random()-.5)*.38, vy:(Math.random()-.5)*.38,
    r:Math.random()*1.8+.4, blue:i%5===0
  }));
}
addEventListener('resize',resize); resize();
function drawParticles(){
  pctx.clearRect(0,0,innerWidth,innerHeight);
  for(const p of particles){
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>innerWidth)p.vx*=-1;
    if(p.y<0||p.y>innerHeight)p.vy*=-1;
    pctx.fillStyle = p.blue ? 'rgba(66,184,255,.65)' : 'rgba(255,48,79,.45)';
    pctx.beginPath(); pctx.arc(p.x,p.y,p.r,0,Math.PI*2); pctx.fill();
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// terminal
const terminalLines = [
  '> boot hybrid-max',
  '[OK] particle reactor online',
  '[OK] terminal subsystem ready',
  '[OK] RX letter-run mounted',
  '[OK] technology matrix loaded',
  '[OK] project beacon synced',
  'root@old-rx:~# _'
];
const terminal = document.getElementById('terminalText');
let li=0, ci=0;
function typeTerminal(){
  if(li>=terminalLines.length){ setTimeout(()=>{terminal.textContent='';li=0;ci=0;typeTerminal()},1600); return; }
  const line=terminalLines[li];
  terminal.textContent += line[ci] || '';
  ci++;
  if(ci>line.length){ terminal.textContent+='\n'; li++; ci=0; setTimeout(typeTerminal,260); }
  else setTimeout(typeTerminal,38);
}
typeTerminal();

// Tech grid
const tech = {
  Frontend: {
    desc:'UI, components, state, rendering and browser-side application behavior.',
    icons:['html5','css3','javascript','typescript','react','nextjs','vuejs','angularjs']
  },
  Backend: {
    desc:'APIs, auth, validation, services and business logic.',
    icons:['nodejs','express','nestjs','python','django','fastapi','java','spring']
  },
  Data: {
    desc:'Relational truth, flexible records, caching and managed realtime data.',
    icons:['postgresql','mysql','mongodb','redis','sqlite','firebase','supabase']
  },
  DevOps: {
    desc:'Build automation, containers, routing, infrastructure and observability.',
    icons:['linux','docker','kubernetes','nginx','githubactions','jenkins','terraform','grafana']
  },
  Systems: {
    desc:'Performance, native software, low-level control and scripting.',
    icons:['c','cplusplus','rust','go','bash','powershell','haskell']
  },
  Mobile: {
    desc:'Cross-platform and native client applications.',
    icons:['flutter','dart','kotlin','swift','react']
  },
  Cloud: {
    desc:'Hosting, managed services, CDN, edge delivery and scaling.',
    icons:['amazonwebservices','azure','googlecloud','cloudflare','vercel']
  },
  Tooling: {
    desc:'Editors, version control, API testing, package and build workflows.',
    icons:['git','github','gitlab','vscode','visualstudio','intellij','postman','figma']
  }
};
const grid=document.getElementById('techGrid');
Object.entries(tech).forEach(([name,v],idx)=>{
  const el=document.createElement('article');
  el.className='panel tech-cat '+(idx%2?'blueline':'redline');
  const imgs=v.icons.map(icon=>{
    let folder=icon;
    let file=icon+'-original.svg';
    if(icon==='github'||icon==='express'||icon==='vercel'||icon==='bash') file=icon+'-original.svg';
    return `<img loading="lazy" alt="${icon}" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${folder}/${file}">`;
  }).join('');
  el.innerHTML=`<h3>${name}</h3><p>${v.desc}</p><div class="tech-icons">${imgs}</div>`;
  grid.appendChild(el);
});

// Overdrive
document.getElementById('overdrive').addEventListener('click',()=>{
  document.body.classList.toggle('overdrive');
});

// Game
const gc=document.getElementById('gameCanvas');
const g=gc.getContext('2d');
const word='RX-DEVELOPMENT';
let player=50, dir=1, score=0, lastInput=0;
let keys={};
addEventListener('keydown',e=>{
  if(['ArrowLeft','ArrowRight','a','d','A','D','r','R'].includes(e.key)) e.preventDefault();
  keys[e.key]=true; lastInput=performance.now();
  if(e.key==='r'||e.key==='R'){player=50;score=0;}
});
addEventListener('keyup',e=>keys[e.key]=false);
function gameLoop(ts){
  const W=gc.width,H=gc.height;
  g.clearRect(0,0,W,H);
  g.fillStyle='#070910';g.fillRect(0,0,W,H);
  g.fillStyle='#ff304f';g.font='700 20px monospace';g.fillText('RX LETTER RUN',28,34);
  g.fillStyle='#42b8ff';g.font='13px monospace';g.fillText('COLLECT LETTERS • BUILD THE CODENAME',730,34);
  const y=190, sx=70, ex=1030;
  g.strokeStyle='#3a2029';g.lineWidth=6;g.beginPath();g.moveTo(sx,y);g.lineTo(ex,y);g.stroke();
  const gap=(ex-sx)/(word.length-1);
  for(let i=0;i<word.length;i++){
    const x=sx+i*gap;
    g.strokeStyle=i%2?'#42b8ff':'#ff304f';g.lineWidth=2;
    g.fillStyle='#140f16';g.beginPath();g.arc(x,y,12,0,Math.PI*2);g.fill();g.stroke();
    if(i<score){g.fillStyle=i%2?'#42b8ff':'#ff304f';g.beginPath();g.arc(x,y,5,0,Math.PI*2);g.fill();}
    g.fillStyle='#a8bdd0';g.font='14px monospace';g.textAlign='center';g.fillText(word[i],x,y+38);
  }
  const manual=performance.now()-lastInput<2500;
  if(manual){
    if(keys.ArrowLeft||keys.a||keys.A)player-=4.5;
    if(keys.ArrowRight||keys.d||keys.D)player+=4.5;
  }else{
    player+=dir*2.2;if(player>ex){dir=-1}else if(player<sx){dir=1}
  }
  player=Math.max(sx,Math.min(ex,player));
  const current=Math.min(word.length-1,Math.round((player-sx)/gap));
  score=Math.max(score,current+1);
  g.fillStyle='#fff';g.strokeStyle='#42b8ff';g.lineWidth=3;
  g.beginPath();g.moveTo(player-15,y);g.lineTo(player+7,y-11);g.lineTo(player+17,y);g.lineTo(player+7,y+11);g.closePath();g.fill();g.stroke();
  g.fillStyle='#fff';g.font='700 34px monospace';g.textAlign='center';g.fillText(word.slice(0,score)+'_',W/2,92);
  g.fillStyle='#14202d';g.fillRect(70,260,960,12);
  const prog=(score/word.length)*960;g.fillStyle='#ff304f';g.fillRect(70,260,prog,12);
  if(score===word.length){g.fillStyle='#42b8ff';g.font='700 15px monospace';g.fillText('MISSION COMPLETE // +999 XP',W/2,300);}
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
