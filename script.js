function goYes(){
  intro.classList.add('hidden');
  yesScene.classList.remove('hidden');
}

noBtn.addEventListener('click',()=>{
  intro.classList.add('hidden');
  noScene.classList.remove('hidden');
});

// soft playful move
noBtn.addEventListener('mouseover',()=>{
  noBtn.style.transform="translateX(10px)";
  setTimeout(()=>noBtn.style.transform="translateX(0)",200);
});

// music autoplay
const music=document.getElementById('bgMusic');
document.body.addEventListener('click',()=>{
 if(music.paused) music.play();
},{once:true});

function toggleMusic(){
 music.paused?music.play():music.pause();
}
