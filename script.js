function goYes(){
  intro.classList.add('hidden');
  yesScene.classList.remove('hidden');
}

function goNo(){
  intro.classList.add('hidden');
  noScene.classList.remove('hidden');
}

// music autoplay
const music=document.getElementById('bgMusic');
document.body.addEventListener('click',()=>{
 if(music.paused) music.play();
},{once:true});

function toggleMusic(){
 music.paused?music.play():music.pause();
}

// sparkles
setInterval(()=>{
 const s=document.createElement('div');
 s.innerHTML='✨';
 s.style.position='fixed';
 s.style.left=Math.random()*100+'vw';
 s.style.top=Math.random()*100+'vh';
 s.style.opacity=.3;
 document.getElementById('sparkles').appendChild(s);
 setTimeout(()=>s.remove(),4000);
},400);
