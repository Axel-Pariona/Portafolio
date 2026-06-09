# Portfolio Website

Portfolio personal desarrollado con Astro para presentar mi perfil como desarrollador web, mis tecnologías principales, proyectos realizados, casos de estudio y formas de contacto.

## Descripción

Este proyecto funciona como mi sitio personal y centro de presentación profesional. El objetivo es mostrar mi avance como desarrollador web mediante una landing page limpia, secciones organizadas y páginas individuales para documentar proyectos reales.

El portfolio incluye información sobre mi perfil, tecnologías que utilizo, proyectos desarrollados, casos de estudio y enlaces de contacto.

## Tecnologías utilizadas

- Astro
- HTML
- CSS
- JavaScript
- Git
- GitHub
- Vercel

## Secciones principales

- Hero de presentación
- Sobre mí
- Tecnologías
- Proyectos
- Contacto
- Footer
- Página 404 personalizada
- Página de error general

## Proyectos destacados

### CasaCuenta

Aplicación web para la gestión de gastos personales y familiares. Incluye autenticación, registro de gastos, categorías, filtros, resúmenes y control de acceso mediante Supabase.

Tecnologías principales:

- React
- Vite
- Supabase Auth
- Supabase PostgreSQL
- Row Level Security
- Vercel

### PagaloSeguro

Laboratorio de integración de pagos con Mercado Pago Sandbox. Incluye creación de órdenes, generación de checkout, Supabase Edge Functions, webhooks y manejo de estados de pago.

Tecnologías principales:

- React
- Vite
- Supabase
- Supabase Edge Functions
- Mercado Pago Sandbox
- Webhooks
- Vercel

## Estructura del proyecto

```txt
src/
  components/
    case-study/
      CaseStudySection.astro
    layout/
      Header.astro
      Footer.astro
    sections/
      Hero.astro
      About.astro
      Skills.astro
      Projects.astro
      Contact.astro
    ui/
      SectionTitle.astro
      SkillBadge.astro
      TechPill.astro
      ProjectCard.astro
      ContactCard.astro
  data/
    projects.js
    skills.js
  layouts/
    Layout.astro
  pages/
    index.astro
    404.astro
    error.astro
    proyectos/
      casa-cuenta.astro
      pagalo-seguro.astro
      buscador-transacciones.astro
```

## Instalación y ejecución local

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto:

```bash
cd portfolio-website
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Generar build de producción:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

## Rutas principales

```txt
/
 /proyectos/casa-cuenta
 /proyectos/pagalo-seguro
 /proyectos/buscador-transacciones
 /404
 /error
```

## Despliegue

El proyecto está preparado para desplegarse en Vercel.

Flujo recomendado:

1. Subir el código a GitHub.
2. Importar el repositorio en Vercel.
3. Configurar el framework como Astro si no se detecta automáticamente.
4. Usar `npm run build` como comando de build.
5. Usar `dist` como carpeta de salida.
6. Asociar un dominio personalizado en el futuro.

## Archivos ignorados

El proyecto no debe subir archivos generados, dependencias, variables de entorno ni configuraciones personales del editor.

Ejemplo de `.gitignore` recomendado:

```gitignore
# build output
dist/

# generated types and Astro cache
.astro/

# dependencies
node_modules/

# environment variables
.env
.env.local
.env.development
.env.production
.env.test

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
bun-debug.log*

# editor settings
.vscode/
**/.vscode/
.idea/

# operating system files
.DS_Store
Thumbs.db
```

## Autor

**Axel Pariona**  
También conocido como **Giggio** en proyectos personales y comunidad dev.

- GitHub: [Axel-Pariona](https://github.com/Axel-Pariona)
- Email: [Axelpariona17@gmail.com](mailto:Axelpariona17@gmail.com)

## Estado del proyecto

Portfolio en desarrollo y mejora continua.
