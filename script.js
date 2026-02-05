const music=document.getElementById('music');

// Start music
function startMusic(){
  music.play().catch(()=>{});
}
document.body.addEventListener('pointerdown', startMusic, {once:true});

// PROPER transition trigger for desktop browsers
function show(id){
  const slides=document.querySelectorAll('.slide');
  slides.forEach(s=>s.classList.remove('show'));

  // force browser to register state change
  setTimeout(()=>{
    document.getElementById(id).classList.add('show');
  },50);
}

// Initial state
window.onload=()=>{
  show('cover');
};

function openSite(){
  startMusic();
  show('intro');
}

function goYes(){
  show('yesSlide');
}

const noBtn=document.getElementById('noBtn');

noBtn.addEventListener('click',()=>{
  show('noSlide');
});

noBtn.addEventListener('mouseover',e=>{
  e.target.style.transform=`translate(${Math.random()*18}px,${Math.random()*8}px)`;
});
