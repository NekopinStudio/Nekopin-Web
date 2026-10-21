# NEKOPIN · Estudio Creativo (`Nekopin-Web`)

Sitio web oficial de **NEKOPIN**, organizado de forma modular y ligera en HTML5, CSS3 y JavaScript puro (sin dependencias externas ni frameworks complejos).

## Estructura del Proyecto

```text
Nekopin-Web/
├── index.html                        # Estructura principal y semántica del sitio
├── README.md                         # Documentación de organización y mantenimiento
└── assets/
    ├── css/
    │   ├── variables.css             # Paleta de colores oficial, fuentes y tokens de diseño
    │   ├── base.css                  # Reset, tipografía base, contenedor y accesibilidad
    │   ├── layout.css                # Header, Hero, envoltorios de secciones, Manifiesto y Footer
    │   ├── components.css            # Tarjetas de división, catálogo, filtros, botones y modal
    │   └── animations.css            # Animaciones sutiles, scroll reveal y prefers-reduced-motion
    ├── js/
    │   ├── data.js                   # Catálogo centralizado de divisiones, juegos y servicios
    │   └── main.js                   # Renderizado dinámico, filtros, modal accesible e interacciones
    └── img/
        ├── brand/                    # Logotipos oficiales de NEKOPIN y sus 4 divisiones
        │   ├── nekopin-logo.png
        │   ├── nekopin-academy.png
        │   ├── nekopin-code.png
        │   ├── nekopin-games.png
        │   └── nekopin-stories.png
        └── projects/                 # Carpeta lista para capturas de pantalla de juegos/proyectos
            └── README.md             # Guía para agregar capturas de vista previa
```

## Cómo agregar nuevos juegos, proyectos o servicios

Toda la información de las divisiones y del catálogo vive en un único archivo: `assets/js/data.js`.

1. Abre `assets/js/data.js`.
2. Añade un nuevo objeto al arreglo `projects`:
   ```js
   {
     id: 'nuevo-proyecto',
     division: 'games', // 'games' | 'code' | 'academy' | 'stories'
     title: 'Nombre del Proyecto',
     typeLabel: 'Categoría breve',
     desc: 'Descripción clara y concisa del proyecto o servicio.',
     status: 'Publicado · Jugable en Web',
     isLive: true,
     btnText: 'Jugar ahora ↗',
     btnUrl: 'https://tu-enlace.vercel.app/',
     image: 'assets/img/projects/nuevo-proyecto.png' // o null si aún no tiene captura
   }
   ```
3. Tanto la sección **Proyectos, Juegos y Servicios** como el **Modal de cada División** y los contadores de tarjetas se actualizarán automáticamente.

## Cómo incorporar capturas de pantalla para Lior Dungeon Crawler y Mantis Parry

El catálogo ya está configurado para buscar automáticamente las capturas en:
- `assets/img/projects/lior-dungeon-crawler.png`
- `assets/img/projects/mantis-parry.png`

Mientras esos archivos no estén presentes en la carpeta, el sitio muestra automáticamente una vista previa limpia y coherente con el emblema y colores oficiales de **Nekopin Games** (`#422052`). En cuanto guardes las capturas con esos nombres en `assets/img/projects/`, se mostrarán automáticamente sin tocar una sola línea de código.
