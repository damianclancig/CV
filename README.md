# Clancig CV - Currículum Vitae Interactivo

Este es un proyecto de currículum vitae (CV) interactivo y moderno, diseñado para mostrar información profesional de una manera elegante y accesible. Creado con Next.js y estilizado con Tailwind CSS, este proyecto es completamente personalizable a través de archivos JSON y ofrece una experiencia de usuario fluida con características como el cambio de tema y soporte multilingüe.

## ✨ Características Principales

- **🎨 Diseño Moderno y Responsivo:** Una interfaz limpia y profesional que se adapta a cualquier dispositivo, desde móviles hasta ordenadores de escritorio.
- **🌍 Soporte Multilingüe (i18n):** Contenido disponible en Español, Inglés y Portugués, con detección automática del idioma del navegador.
- **🌗 Tema Claro y Oscuro:** Un interruptor para que los usuarios elijan su modo de visualización preferido, con persistencia de la elección.
- **📄 Optimizado para Impresión y PDF:** Genera una versión limpia y bien formateada para imprimir o guardar como PDF directamente desde el navegador.
- **🔧 Fácilmente Personalizable:** Toda la información del CV (experiencia, educación, habilidades, etc.) se gestiona a través de archivos JSON, facilitando la actualización sin tocar el código.
- **🚀 Rendimiento Optimizado:** Construido con Next.js App Router y Server Components para una carga rápida y una excelente experiencia de usuario.
- **🧩 Componentes Reutilizables:** Desarrollado con componentes de [ShadCN UI](https://ui.shadcn.com/) para una base de UI sólida y consistente.

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Internacionalización:** `@formatjs/intl-localematcher` y `negotiator`
- **Iconos:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Deployment:** Preparado para [Vercel](https://vercel.com/) o [Firebase Hosting](https://firebase.google.com/docs/hosting).

## 🚀 Cómo Empezar

Sigue estos pasos para tener una copia del proyecto funcionando en tu máquina local.

### Prerrequisitos

- [Node.js](https://nodejs.org/es/) (versión 18.x o superior)
- `npm` o `yarn`

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado. ¡La página se recargará automáticamente cuando hagas cambios!

## ✏️ Cómo Personalizar el Contenido

La forma más sencilla de personalizar este CV con tu propia información es editando los archivos JSON de idioma ubicados en la carpeta `src/dictionaries/`.

-   `src/dictionaries/es.json`: Para el contenido en Español.
-   `src/dictionaries/en.json`: Para el contenido en Inglés.
-   `src/dictionaries/pt.json`: Para el contenido en Portugués.

Simplemente modifica los valores en estos archivos para reflejar tu experiencia, educación, habilidades y datos personales.

## 📂 Estructura del Proyecto

```
/
├── src/
│   ├── app/                    # Rutas y páginas principales con Next.js App Router
│   │   ├── [locale]/           # Ruta dinámica para internacionalización
│   │   │   ├── page.tsx        # Página de inicio
│   │   │   └── layout.tsx      # Layout principal por idioma
│   │   └── globals.css         # Estilos globales y variables de tema de Tailwind
│   ├── components/             # Componentes reutilizables de React
│   │   ├── cv/                 # Componentes específicos del CV (Header, Experience, etc.)
│   │   └── ui/                 # Componentes base de ShadCN UI
│   ├── dictionaries/           # Archivos JSON con el contenido del CV por idioma
│   │   ├── en.json
│   │   ├── es.json
│   │   └── pt.json
│   ├── i18n-config.ts          # Configuración de idiomas (locales)
│   ├── lib/                    # Funciones de utilidad y helpers
│   └── middleware.ts           # Middleware para la detección de idioma
├── public/                     # Archivos estáticos
└── tailwind.config.ts          # Configuración de Tailwind CSS
```

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
