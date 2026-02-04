const music=document.getElementById('music');

document.body.addEventListener('click',()=>{
  if(music.paused) music.play();
},{once:true});

function toggleMusic(){
  music.paused?music.play():music.pause();
}

function show(id){
  document.querySelectorAll('.scene').forEach(s=>s.style.display='none');
  document.getElementById(id).style.display='block';
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
