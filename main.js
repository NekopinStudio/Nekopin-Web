document.addEventListener('DOMContentLoaded', () => {
  const divisionData = {
    academy: {
      title: 'Nekopin Academy',
      logo: 'nekopinacademy.png',
      tag: 'Educación & Formación',
      themeClass: 'theme-academy',
      items: [
        {
          title: 'Pantallas e infancia: Cómo acompañar a tus hijos en el uso saludable de la tecnología',
          desc: 'Guía formativa y pedagógica orientada a padres de familia para el uso consciente, seguro y constructivo de dispositivos en el hogar.',
          btnText: 'Acceder al Aula Virtual →',
          btnUrl: 'https://nekopin.milaulas.com/login/index.php'
        }
      ]
    },
    code: {
      title: 'Nekopin Code',
      logo: 'nekopinCode.png',
      tag: 'Software & Sistemas',
      themeClass: 'theme-code',
      items: [
        {
          title: 'Software para Gestión de Pizzería (POS & KDS)',
          desc: 'Sistema táctil de toma de pedidos multinivel conectado en tiempo real con un monitor de despacho para cocina y cálculo de envíos.'
        },
        {
          title: 'Software para Control de Inventario y Encargos',
          desc: 'Plataforma para registro de pedidos multicanal, deducción automática de existencias en bodega y generación de reportes contables.'
        }
      ]
    },
    games: {
      title: 'Nekopin Games',
      logo: 'nekopinGames.png',
      tag: 'Mesa & Videojuegos',
      themeClass: 'theme-games',
      items: [
        {
          title: 'Laboratorio de Juegos & Mesa',
          desc: 'Diseño de mecánicas de mesa, prototipos de cartas coleccionables y experimentación lúdica en etapa de conceptualización.',
          status: 'En Desarrollo'
        }
      ]
    },
    stories: {
      title: 'Nekopin Stories',
      logo: 'nekopinstories.png',
      tag: 'Narrativa & Ficción',
      themeClass: 'theme-stories',
      items: [
        {
          title: 'Laboratorio Narrativo',
          desc: 'Exploración de relatos, ambientación y escritura de mundos fantásticos en fase de incubación interna.',
          status: 'En Desarrollo'
        }
      ]
    }
  };

  const modal = document.getElementById('divisionModal');
  const modalContainer = document.getElementById('modalContainer');
  const modalTitle = document.getElementById('modalDivisionTitle');
  const modalLogo = document.getElementById('modalDivisionLogo');
  const modalTag = document.getElementById('modalDivisionTag');
  const modalBody = document.getElementById('modalBodyDynamic');

  const cards = document.querySelectorAll('.divisions-grid .card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const divisionKey = card.getAttribute('data-division');
      const data = divisionData[divisionKey];

      if (!data) return;

      // Limpia clases temáticas anteriores y añade la de la división actual
      modalContainer.classList.remove('theme-academy', 'theme-code', 'theme-games', 'theme-stories');
      modalContainer.classList.add(data.themeClass);

      modalTitle.textContent = data.title;
      modalLogo.src = data.logo;
      modalLogo.alt = data.title;
      modalTag.textContent = data.tag;

      modalBody.innerHTML = '';
      data.items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'modal-item-card';

        let actionHtml = '';
        if (item.btnUrl) {
          actionHtml = `<a href="${item.btnUrl}" target="_blank" rel="noopener" class="btn-modal-action">${item.btnText}</a>`;
        } else if (item.status) {
          actionHtml = `<span class="modal-status-badge">${item.status}</span>`;
        }

        itemCard.innerHTML = `
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          ${actionHtml}
        `;
        modalBody.appendChild(itemCard);
      });

      modal.classList.add('open');
    });
  });

  // Cerrar al tocar fuera
  modal.addEventListener('click', (e) => {
    if (!modalContainer.contains(e.target)) {
      modal.classList.remove('open');
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
    }
  });
});
