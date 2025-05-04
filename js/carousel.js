window.addEventListener('DOMContentLoaded', () => {
  const TRACK = document.querySelector('.carousel-track');
  const PREV = document.getElementById('carousel-prev');
  const NEXT = document.getElementById('carousel-next');
  const TOTAL = 39;
  let index = 0;

  // Gera slides dinamicamente
  for (let i = 1; i <= TOTAL; i++) {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const card = document.createElement('div');
    card.className = 'polaroid';

    const img = document.createElement('img');
    img.src = `assets/img/carousel/p${i}.jpg`;

    // Pan vertical dentro da polaroid
    let startY = 0, currentY = 0, minY = 0;
    img.addEventListener('load', () => {
      const imgH = img.getBoundingClientRect().height;
      const contH = card.clientHeight;
      minY = Math.min(0, contH - imgH);
    });

    card.addEventListener('pointerdown', e => {
      startY = e.clientY - currentY;
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (e.pressure === 0) return;
      let y = e.clientY - startY;
      y = Math.max(minY, Math.min(0, y));
      currentY = y;
      img.style.transform = `translateY(${y}px)`;
    });
    card.addEventListener('pointerup', e => {
      card.releasePointerCapture(e.pointerId);
    });

    // touch fallback
    let touchStartY = 0;
    card.addEventListener('touchstart', e => {
      touchStartY = e.touches[0].clientY - currentY;
    });
    card.addEventListener('touchmove', e => {
      let y = e.touches[0].clientY - touchStartY;
      y = Math.max(minY, Math.min(0, y));
      currentY = y;
      img.style.transform = `translateY(${y}px)`;
    });

    card.appendChild(img);
    slide.appendChild(card);
    TRACK.appendChild(slide);
  }

  // Atualiza deslocamento do track
  function update() {
    const slideWidth = TRACK.clientWidth;
    TRACK.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  PREV.addEventListener('click', () => {
    index = (index - 1 + TOTAL) % TOTAL;
    update();
  });
  NEXT.addEventListener('click', () => {
    index = (index + 1) % TOTAL;
    update();
  });

  window.addEventListener('resize', update);

  update();
});
