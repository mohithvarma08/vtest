// Slide navigation
function goYes(){
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('yesSlide').classList.remove('hidden');
}

function backToYes(){
  document.getElementById('noSlide').classList.add('hidden');
  document.getElementById('yesSlide').classList.remove('hidden');
}

// Funny NO button
const noBtn=document.getElementById('noBtn');

noBtn.addEventListener('mouseover',()=>{
  noBtn.style.position='absolute';
  noBtn.style.left=Math.random()*80+'%';
  noBtn.style.top=Math.random()*80+'%';
});

noBtn.addEventListener('click',()=>{
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('noSlide').classList.remove('hidden');
});

// Music autoplay on first interaction
const music=document.getElementById('bgMusic');

document.body.addEventListener('click',()=>{
  if(music.paused) music.play();
},{once:true});

function toggleMusic(){
  music.paused?music.play():music.pause();
}
