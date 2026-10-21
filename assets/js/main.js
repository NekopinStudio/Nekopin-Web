/* ==========================================================================
   NEKOPIN · Lógica Principal de Interfaz, Catálogo, Modal y Animaciones
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const siteData = window.NEKOPIN_DATA;
  if (!siteData) return;

  const { divisions, projects } = siteData;

  /* ------------------------------------------------------------------------
     1. Sombra sutil en el Header al hacer scroll
     ------------------------------------------------------------------------ */
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ------------------------------------------------------------------------
     2. Contadores dinámicos en Tarjetas de División
     ------------------------------------------------------------------------ */
  const divisionCards = document.querySelectorAll('.divisions-grid .card');
  divisionCards.forEach((card) => {
    const divisionKey = card.getAttribute('data-division');
    const count = projects.filter((p) => p.division === divisionKey).length;
    const badgeEl = card.querySelector('.card-count-text');
    if (badgeEl) {
      badgeEl.textContent = count === 1 ? '1 proyecto · Ver más →' : `${count} proyectos · Ver más →`;
    }
  });

  /* ------------------------------------------------------------------------
     3. Renderizado y Filtrado del Catálogo de Proyectos y Servicios
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  function createProjectCardElement(project) {
    const divInfo = divisions[project.division] || {
      title: 'Nekopin',
      logo: 'assets/img/brand/nekopin-logo.png'
    };

    const article = document.createElement('article');
    article.className = `project-card division-${project.division} animate-in`;
    article.setAttribute('data-division', project.division);

    // Contenedor de vista previa con soporte automático para captura o emblema de respaldo
    const previewContainer = document.createElement('div');
    previewContainer.className = 'project-preview';

    const fallbackHtml = `
      <div class="project-preview-fallback">
        <img src="${divInfo.logo}" alt="${divInfo.title}" class="project-preview-emblem" loading="lazy">
        <span class="project-preview-type">${project.typeLabel || divInfo.title}</span>
      </div>
    `;

    if (project.image) {
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = `Vista previa de ${project.title}`;
      img.className = 'project-preview-img';
      img.loading = 'lazy';
      img.addEventListener('error', () => {
        previewContainer.innerHTML = fallbackHtml;
      });
      previewContainer.appendChild(img);
    } else {
      previewContainer.innerHTML = fallbackHtml;
    }

    // Cuerpo de la tarjeta
    const body = document.createElement('div');
    body.className = 'project-body';

    const statusClass = project.isLive ? 'project-status-pill is-live' : 'project-status-pill';
    let footerActionHtml = '';

    if (project.btnUrl && project.btnText) {
      const isExternal = project.btnUrl.startsWith('http');
      const targetAttrs = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      footerActionHtml = `
        <a href="${project.btnUrl}" ${targetAttrs} class="btn-project-link">
          <span>${project.btnText}</span>
        </a>
      `;
    } else {
      footerActionHtml = `
        <span class="project-dev-note">${project.status || 'En Desarrollo'}</span>
      `;
    }

    body.innerHTML = `
      <div class="project-tags-row">
        <span class="project-division-pill">${divInfo.title}</span>
        <span class="${statusClass}">${project.status}</span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.desc}</p>
      <div class="project-footer">
        ${footerActionHtml}
      </div>
    `;

    article.appendChild(previewContainer);
    article.appendChild(body);
    return article;
  }

  function renderCatalog(filterKey) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const filtered = filterKey === 'all'
      ? projects
      : projects.filter((item) => item.division === filterKey);

    filtered.forEach((project) => {
      const cardEl = createProjectCardElement(project);
      projectsGrid.appendChild(cardEl);
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-filter') || 'all';
      activeFilter = selected;

      filterButtons.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      renderCatalog(activeFilter);
    });
  });

  // Render inicial del catálogo completo
  renderCatalog('all');

  /* ------------------------------------------------------------------------
     4. Modal Dinámico de Divisiones (Cero botón X · Cierre al tocar fuera o Esc)
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('divisionModal');
  const modalContainer = document.getElementById('modalContainer');
  const modalTitle = document.getElementById('modalDivisionTitle');
  const modalLogo = document.getElementById('modalDivisionLogo');
  const modalTag = document.getElementById('modalDivisionTag');
  const modalBody = document.getElementById('modalBodyDynamic');
  let lastFocusedElement = null;

  function openDivisionModal(divisionKey) {
    const divInfo = divisions[divisionKey];
    if (!divInfo || !modal || !modalContainer) return;

    lastFocusedElement = document.activeElement;

    modalContainer.classList.remove('theme-academy', 'theme-code', 'theme-games', 'theme-stories');
    modalContainer.classList.add(divInfo.themeClass);

    modalTitle.textContent = divInfo.title;
    modalLogo.src = divInfo.logo;
    modalLogo.alt = divInfo.title;
    modalTag.textContent = divInfo.tag;

    modalBody.innerHTML = '';
    const divisionProjects = projects.filter((item) => item.division === divisionKey);

    divisionProjects.forEach((item) => {
      const itemCard = document.createElement('div');
      itemCard.className = 'modal-item-card';

      let actionHtml = '';
      if (item.btnUrl && item.btnText) {
        const isExternal = item.btnUrl.startsWith('http');
        const targetAttrs = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
        actionHtml = `<a href="${item.btnUrl}" ${targetAttrs} class="btn-modal-action">${item.btnText}</a>`;
      } else if (item.status) {
        const badgeClass = item.isLive ? 'modal-status-badge is-live' : 'modal-status-badge';
        actionHtml = `<span class="${badgeClass}">${item.status}</span>`;
      }

      const statusBadgeTop = item.status && item.btnUrl
        ? `<span class="modal-status-badge ${item.isLive ? 'is-live' : ''}">${item.status}</span>`
        : '';

      itemCard.innerHTML = `
        <div class="modal-item-top">
          <h4>${item.title}</h4>
          ${statusBadgeTop}
        </div>
        <p>${item.desc}</p>
        ${actionHtml}
      `;
      modalBody.appendChild(itemCard);
    });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalContainer.focus();
  }

  function closeDivisionModal() {
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  divisionCards.forEach((card) => {
    card.addEventListener('click', () => {
      const divisionKey = card.getAttribute('data-division');
      openDivisionModal(divisionKey);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const divisionKey = card.getAttribute('data-division');
        openDivisionModal(divisionKey);
      }
    });
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (modalContainer && !modalContainer.contains(e.target)) {
        closeDivisionModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDivisionModal();
    }
  });

  /* ------------------------------------------------------------------------
     5. Aparición progresiva de secciones al desplazarse (Scroll Reveal)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }
});
