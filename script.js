const music=document.getElementById('music');

// TRUE user gesture trigger
document.body.addEventListener('pointerdown',()=>{
  if(music.paused){
    music.play().catch(()=>{});
  }
},{once:true});

function toggleMusic(){
  music.paused?music.play():music.pause();
}

function show(id){
  document.querySelectorAll('.slide').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goYes(){
  show('yesSlide');
}

document.getElementById('noBtn').addEventListener('click',()=>{
  show('noSlide');
});

// cute chaos
document.getElementById('noBtn').addEventListener('mouseover',e=>{
  e.target.style.transform=`translate(${Math.random()*20}px,${Math.random()*10}px)`;
});
