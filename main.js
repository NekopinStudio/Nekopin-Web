document.addEventListener('DOMContentLoaded', () => {
  // Filtros de categoría de proyectos
  const filterBtns = document.querySelectorAll('.btn-filter');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // Al tocar una tarjeta de división, activa su filtro y navega suavemente
  const divisionCards = document.querySelectorAll('.divisions-grid .card');
  divisionCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetDivision = card.getAttribute('data-target');
      if (targetDivision) {
        const matchingFilter = document.querySelector(`.btn-filter[data-filter="${targetDivision}"]`);
        if (matchingFilter) {
          matchingFilter.click();
          document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Modal para ver capturas / vistas previas
  const modal = document.getElementById('imageModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImgWrap = document.getElementById('modalImgWrap');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  const previewBtns = document.querySelectorAll('.btn-preview');

  previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const imgSrc = btn.getAttribute('data-img');
      const desc = btn.getAttribute('data-desc');

      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      // Crea la imagen con fallback en caso de que aún no exista el archivo físico
      modalImgWrap.innerHTML = '';
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = title;

      img.onerror = () => {
        modalImgWrap.innerHTML = `
          <div class="placeholder-ui">
            <svg width="48" height="48" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>
            <p><strong>Vista previa de interfaz técnica</strong></p>
            <p style="font-size: 12px; margin-top: 4px;">Sube el archivo <code>${imgSrc}</code> a GitHub para visualizar la captura real.</p>
          </div>
        `;
      };

      modalImgWrap.appendChild(img);
      modal.classList.add('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
});
