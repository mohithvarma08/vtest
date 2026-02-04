// Slide changes
function goYes(){
  intro.classList.add('hidden');
  yesScene.classList.remove('hidden');
}
function backToYes(){
  noScene.classList.add('hidden');
  yesScene.classList.remove('hidden');
}

// No button chaos
noBtn.addEventListener('mouseover',()=>{
  noBtn.style.position='absolute';
  noBtn.style.left=Math.random()*70+'%';
  noBtn.style.top=Math.random()*60+'%';
});
noBtn.addEventListener('click',()=>{
  intro.classList.add('hidden');
  noScene.classList.remove('hidden');
});

// Music works
const music=document.getElementById('bgMusic');
document.body.addEventListener('click',()=>{
 if(music.paused) music.play();
},{once:true});

function toggleMusic(){
 music.paused?music.play():music.pause();
}

// Background hearts
setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';
 h.innerHTML='💗';
 h.style.left=Math.random()*100+'vw';
 document.getElementById('bgEffects').appendChild(h);
 setTimeout(()=>h.remove(),8000);
},500);
