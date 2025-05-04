


  window.addEventListener('DOMContentLoaded', () => {
    const embed = document.getElementById('trackEmbed');
    const items = document.querySelectorAll('#playlist li');
  
    items.forEach(li => {
      li.addEventListener('click', () => {
        // remove marcação
        items.forEach(x => x.classList.remove('active'));
        li.classList.add('active');
  
        // atualiza o iframe para o novo track id
        const id = li.dataset.id;
        embed.src = `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;
      });
    });
  
    // marca e toca a primeira
    if (items.length) {
      items[0].classList.add('active');
    }
  });
  