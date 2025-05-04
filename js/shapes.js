
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('floating-shapes');
    const types = ['circle','square','triangle','star','heart'];
    const images = Array.from({length:39},(_,i)=>`assets/img/carousel/p${i+1}.jpg`);
  
    function spawnShape() {
      const el = document.createElement('div');
      const type = types[Math.random()*types.length|0];
      const size = Math.random()*30 + 20;
      const top  = Math.random()*100;
      const left = Math.random()*100;
      const dx   = (Math.random()-0.5)*20 + 'px';
      const dy   = (Math.random()-0.5)*20 + 'px';
      const dur  = (Math.random()*5 + 5) + 's';
      const imgSrc = images[Math.random()*images.length|0];
  
      el.className = `shape ${type}`;
      el.style.setProperty('--size',    `${size}px`);
      el.style.setProperty('--dx',      dx);
      el.style.setProperty('--dy',      dy);
      el.style.setProperty('--duration',dur);
      el.style.top  = `${top}%`;
      el.style.left = `${left}%`;
  
      const img = document.createElement('img');
      img.src = imgSrc;
      el.appendChild(img);

      
  
      el.addEventListener('animationend', e => {
        if (e.animationName === 'floatUp') container.removeChild(el);
      });
  
      container.appendChild(el);
    }
  
    (function loop() {
      spawnShape();
      setTimeout(loop, Math.random()*900 + 300);
    })();
  });
  