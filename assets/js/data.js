/* ==========================================================================
   NEKOPIN · Catálogo Centralizado de Divisiones, Proyectos y Servicios
   ==========================================================================
   ¿Cómo agregar un nuevo juego, servicio o proyecto en el futuro?
   1. Añade un nuevo objeto dentro del arreglo `projects` de abajo.
   2. Si dispones de una captura o imagen de vista previa, colócala en
      `assets/img/projects/` y asigna su ruta en la propiedad `image`
      (por ejemplo: `image: 'assets/img/projects/mi-proyecto.png'`).
      Si aún no tienes captura, deja `image: null` y el sistema mostrará
      automáticamente una vista previa representativa con la identidad de su división.
   ========================================================================== */

window.NEKOPIN_DATA = {
  divisions: {
    academy: {
      id: 'academy',
      title: 'Nekopin Academy',
      logo: 'assets/img/brand/nekopin-academy.png',
      tag: 'Educación & Formación',
      themeClass: 'theme-academy',
      shortDesc: 'Formación práctica, talleres didácticos y recursos estructurados de aprendizaje.'
    },
    code: {
      id: 'code',
      title: 'Nekopin Code',
      logo: 'assets/img/brand/nekopin-code.png',
      tag: 'Software & Sistemas',
      themeClass: 'theme-code',
      shortDesc: 'Desarrollo a medida, sistemas locales offline, arquitectura web y soluciones claras.'
    },
    games: {
      id: 'games',
      title: 'Nekopin Games',
      logo: 'assets/img/brand/nekopin-games.png',
      tag: 'Mesa & Videojuegos',
      themeClass: 'theme-games',
      shortDesc: 'Diseño de juegos de cartas físicos, experiencias de mesa y desarrollo independiente.'
    },
    stories: {
      id: 'stories',
      title: 'Nekopin Stories',
      logo: 'assets/img/brand/nekopin-stories.png',
      tag: 'Narrativa & Ficción',
      themeClass: 'theme-stories',
      shortDesc: 'Laboratorio de narrativa, construcción de universos y proyectos literarios en desarrollo.'
    }
  },

  projects: [
    {
      id: 'lior-dungeon-crawler',
      division: 'games',
      title: 'Lior Dungeon Crawler',
      typeLabel: 'Videojuego Web · Dungeon Crawler',
      desc: 'Juego web de exploración de mazmorras publicado por Nekopin Games, accesible para jugar directamente desde el navegador.',
      status: 'Publicado · Jugable en Web',
      isLive: true,
      btnText: 'Jugar Lior Dungeon Crawler ↗',
      btnUrl: 'https://lior-dungeon-crawler.vercel.app/',
      /* Para añadir una captura real más adelante, guarda la imagen en
         assets/img/projects/lior-dungeon-crawler.png y cambia null por esa ruta: */
      image: 'assets/img/projects/lior-dungeon-crawler.png'
    },
    {
      id: 'mantis-parry',
      division: 'games',
      title: 'Mantis Parry',
      typeLabel: 'Videojuego Web · Acción & Parry',
      desc: 'Juego web centrado en mecánicas de bloqueo y reflejos desarrollado por Nekopin Games, disponible para jugar en línea desde el navegador.',
      status: 'Publicado · Jugable en Web',
      isLive: true,
      btnText: 'Jugar Mantis Parry ↗',
      btnUrl: 'https://mantis-parry.vercel.app/',
      /* Para añadir una captura real más adelante, guarda la imagen en
         assets/img/projects/mantis-parry.png y cambia null por esa ruta: */
      image: 'assets/img/projects/mantis-parry.png'
    },
    {
      id: 'pantallas-e-infancia',
      division: 'academy',
      title: 'Pantallas e infancia: Cómo acompañar a tus hijos en el uso saludable de la tecnología',
      typeLabel: 'Curso & Guía Formativa',
      desc: 'Guía formativa y pedagógica orientada a padres de familia para el uso consciente, seguro y constructivo de dispositivos en el hogar.',
      status: 'Aula Virtual Activa',
      isLive: true,
      btnText: 'Acceder al Aula Virtual →',
      btnUrl: 'https://nekopin.milaulas.com/login/index.php',
      image: null
    },
    {
      id: 'software-pizzeria-pos-kds',
      division: 'code',
      title: 'Software para Gestión de Pizzería (POS & KDS)',
      typeLabel: 'Sistema POS & Monitor de Cocina',
      desc: 'Sistema táctil de toma de pedidos multinivel conectado en tiempo real con un monitor de despacho para cocina y cálculo de envíos.',
      status: 'Servicio & Desarrollo a Medida',
      isLive: false,
      btnText: 'Consultar sobre este sistema →',
      btnUrl: 'mailto:nekopinstudio@gmail.com?subject=Consulta%20-%20Software%20POS%20%26%20KDS',
      image: null
    },
    {
      id: 'software-inventario-encargos',
      division: 'code',
      title: 'Software para Control de Inventario y Encargos',
      typeLabel: 'Gestión de Inventario & Pedidos',
      desc: 'Plataforma para registro de pedidos multicanal, deducción automática de existencias en bodega y generación de reportes contables.',
      status: 'Servicio & Desarrollo a Medida',
      isLive: false,
      btnText: 'Consultar sobre este sistema →',
      btnUrl: 'mailto:nekopinstudio@gmail.com?subject=Consulta%20-%20Control%20de%20Inventario',
      image: null
    },
    {
      id: 'laboratorio-juegos-mesa',
      division: 'games',
      title: 'Laboratorio de Juegos & Mesa',
      typeLabel: 'Juegos Físicos & Prototipos',
      desc: 'Diseño de mecánicas de mesa, prototipos de cartas coleccionables y experimentación lúdica en etapa de conceptualización.',
      status: 'En Desarrollo',
      isLive: false,
      btnText: null,
      btnUrl: null,
      image: null
    },
    {
      id: 'laboratorio-narrativo',
      division: 'stories',
      title: 'Laboratorio Narrativo',
      typeLabel: 'Universos & Literatura',
      desc: 'Exploración de relatos, ambientación y escritura de mundos fantásticos en fase de incubación interna.',
      status: 'En Desarrollo',
      isLive: false,
      btnText: null,
      btnUrl: null,
      image: null
    }
  ]
};
