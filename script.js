const music=document.getElementById('music');

// Ensure music plays
function startMusic(){
  music.play().catch(()=>{});
}
document.body.addEventListener('pointerdown', startMusic, {once:true});

// Slide switch with animation
function show(id){
  document.querySelectorAll('.slide').forEach(s=>{
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Cover button (fix for laptop)
function openSite(){
  startMusic();
  setTimeout(()=>{
    show('intro');
  },150); // small delay for smooth feel
}

function goYes(){
  show('yesSlide');
}

// NO button
const noBtn=document.getElementById('noBtn');

noBtn.addEventListener('click',()=>{
  show('noSlide');
});

noBtn.addEventListener('mouseover',e=>{
  e.target.style.transform=`translate(${Math.random()*20}px,${Math.random()*10}px)`;
});
