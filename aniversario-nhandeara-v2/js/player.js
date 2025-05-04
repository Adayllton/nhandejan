// js/player.js
const tracks=Array.from({length:20},(_,i)=>({title:`Faixa ${i+1}`,file:`assets/media/track${i+1}.mp3`}))
const listEl=document.getElementById('playlist')
const audio=document.getElementById('audio')
tracks.forEach(t=>{
  const li=document.createElement('li')
  li.textContent=t.title
  li.addEventListener('click',()=>{
    document.querySelectorAll('#playlist li').forEach(x=>x.classList.remove('active'))
    li.classList.add('active')
    audio.src=t.file
    audio.play()
  })
  listEl.appendChild(li)
})
if(listEl.firstChild)listEl.firstChild.click()
