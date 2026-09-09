document.addEventListener('DOMContentLoaded', () => {
  // Filtro interactivo para proyectos
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

  // Scroll suave al hacer clic en las tarjetas de divisiones
  const divisionCards = document.querySelectorAll('.divisions-grid .card');
  divisionCards.forEach(card => {
    card.addEventListener('click', () => {
      const divisionClass = Array.from(card.classList).find(c => ['academy', 'code', 'games', 'stories'].includes(c));
      if (divisionClass) {
        const matchingBtn = document.querySelector(`.btn-filter[data-filter="${divisionClass}"]`);
        if (matchingBtn) {
          matchingBtn.click();
          document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
