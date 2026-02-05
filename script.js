const music=document.getElementById('music');

// Try autoplay immediately
music.play().catch(()=>{});

// Also ensure play on first touch
document.body.addEventListener('pointerdown',()=>{
  if(music.paused) music.play().catch(()=>{});
},{once:true});

function openSite(){
  show('intro');
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

document.getElementById('noBtn').addEventListener('mouseover',e=>{
  e.target.style.transform=`translate(${Math.random()*20}px,${Math.random()*10}px)`;
});
