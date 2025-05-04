// js/animations.js
const stickers=document.querySelectorAll('.sticker')
window.addEventListener('scroll',()=>{
  const y=window.scrollY
  stickers.forEach(s=>{
    const speed=parseFloat(s.dataset.speed)
    s.style.transform=`translateY(${y*speed}px)`
  })
})
