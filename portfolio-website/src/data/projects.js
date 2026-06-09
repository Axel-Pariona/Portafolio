export const projects = [
  {
    title: "CasaCuenta",
    slug: "casa-cuenta",
    status: "Terminado",
    type: "WebApp",
    description:
      "Aplicación web para la gestión de gastos personales y familiares, con autenticación, categorías, filtros, resúmenes y control de acceso mediante Supabase.",
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "RLS", "Vercel"],
    highlights: [
      "Autenticación de usuarios",
      "CRUD de gastos",
      "Filtros por fecha, categoría y método de pago",
      "Resúmenes mensuales",
      "Control de acceso con RLS",
    ],
    demoUrl: "https://casa-cuenta.vercel.app",
    repoUrl: "https://github.com/Axel-Pariona/CasaCuenta",
  },
  {
    title: "PagaloSeguro",
    slug: "pagalo-seguro",
    status: "En pruebas sandbox",
    type: "WebApp",
    description:
      "Proyecto práctico de integración de pagos con Mercado Pago Sandbox, Supabase Edge Functions, órdenes, eventos de pago y procesamiento de webhooks.",
    stack: ["React", "Vite", "Supabase", "Edge Functions", "Mercado Pago", "Webhooks"],
    highlights: [
      "Checkout con Mercado Pago",
      "Creación segura de órdenes",
      "Procesamiento de webhooks",
      "Separación entre frontend y backend",
      "Manejo de estados de pago",
    ],
    demoUrl: "https://pagalo-seguro.vercel.app",
    repoUrl: "https://github.com/Axel-Pariona/PagaloSeguro",
  },
  {
    title: "Buscador de Transacciones ATM",
    slug: "buscador-transacciones",
    status: "Académico / Herramienta local",
    type: "Desktop App",
    description:
      "Aplicación de escritorio en Python para cargar archivos, buscar transacciones ATM, filtrar resultados y exportar información procesada a Excel.",
    stack: ["Python", "Tkinter", "Pandas", "Excel"],
    highlights: [
      "Carga manual y automática de archivos",
      "Parseo de registros por posiciones fijas",
      "Filtros avanzados de búsqueda",
      "Selección de registros",
      "Exportación a Excel",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
];