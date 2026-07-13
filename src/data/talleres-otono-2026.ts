export type Locale = "gl" | "es";

export const STRIPE_LINKS = {
  productivity: "https://buy.stripe.com/fZueVdgx54124ag0jVcAo04",
  web: "https://buy.stripe.com/cNibJ1dkT556ayE4AbcAo05",
  pack: "https://buy.stripe.com/8x24gz94D7de7ms0jVcAo06",
} as const;

export interface Workshop {
  id: "productivity" | "web";
  title: string;
  shortTitle: string;
  dateISO: string;
  dateLabel: string;
  dateShort: string;
  eyebrow: string;
  hook: string;
  description: string;
  audience: string[];
  topics: string[];
  result: string;
  price: number;
  priceLabel: string;
  capacity: number;
  stripeUrl: string;
  cta: string;
}

interface Campaign {
  locale: Locale;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  navLabel: string;
  reserveLabel: string;
  capacity: number;
  hero: {
    eyebrow: string;
    title: string;
    seoSubtitle: string;
    intro: string;
    body: string;
    meta: string;
    cta: string;
    packCta: string;
  };
  internalLinks: {
    heading: string;
    items: Array<{ label: string; href: string }>;
  };
  context: {
    tag: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
  };
  workshopsHeading: string;
  workshopsIntro: string;
  workshops: Workshop[];
  includesHeading: string;
  includes: Array<{ title: string; detail: string }>;
  excludesHeading: string;
  excludes: string[];
  includesImageAlt: string;
  pack: {
    tag: string;
    title: string;
    body: string;
    price: number;
    priceLabel: string;
    savingLabel: string;
    cta: string;
    stripeUrl: string;
  };
  testimonial: {
    tag: string;
    title: string;
    quote: string;
    conclusion: string;
    imageAlt: string;
  };
  venue: {
    tag: string;
    title: string;
    body: string[];
    mapLabel: string;
    mapUrl: string;
    imageAlt: string;
    foodTitle: string;
    foodBody: string;
    foodImageAlt: string;
  };
  teamHeading: string;
  teamIntro: string;
  teamImageAlt: string;
  team: Array<{ name: string; role: string; bio: string }>;
  faqHeading: string;
  faq: Array<{ question: string; answer: string }>;
  finalCta: {
    title: string;
    body: string;
    productivity: string;
    web: string;
    pack: string;
  };
  contact: {
    title: string;
    body: string;
  };
}

const sharedPrices = {
  price: 199,
  capacity: 15,
} as const;

const gl: Campaign = {
  locale: "gl",
  seo: {
    title: "Talleres de IA en Galicia · Produtividade e Web | Rural GPT",
    description:
      "Talleres presenciais de IA en Anceu: Produtividade o 31 de outubro e Web o 28 de novembro. 199 € + IVA, comida incluída, 15 prazas. Rural Hackers × Anceu Coliving.",
    keywords: [
      "taller IA Galicia",
      "curso IA presencial",
      "automatización IA",
      "crear web con IA",
      "Anceu Coliving",
    ],
  },
  navLabel: "Talleres",
  reserveLabel: "Reservar",
  capacity: 15,
  hero: {
    eyebrow: "Talleres sprint · Outono 2026",
    title: "Pechas os ollos e xa é Nadal.",
    seoSubtitle: "Talleres presenciais de IA en Galicia · Outono 2026",
    intro:
      "Dous talleres sprint dun día en Anceu. Saes con algo feito á túa medida, non con apuntamentos que nunca terás tempo de volver ler.",
    body:
      "IA aplicada para profesionais non técnicos. Sen teoría futurista. Sen un curso en liña de 40 horas. Un día intensivo, grupo reducido e comida incluída no corazón de Galicia.",
    meta:
      "31 de outubro · Produtividade — 28 de novembro · Web — 199 € + IVA · 15 prazas por taller",
    cta: "Ver os talleres",
    packCta: "Reservar Pack Outono",
  },
  context: {
    tag: "O punto de partida",
    title: "O tempo non espera. A IA tampouco.",
    paragraphs: [
      "En xuño esgotamos as 12 prazas da primeira Residencia Rural GPT en Anceu. Profesionais de sectores moi distintos chegaron coas súas «tarefas de merda» e saíron con solucións reais: automatizacións, executables propios e fluxos de traballo que lles devolven horas cada semana.",
      "No outono imos a mil. Por iso deseñamos un formato novo: sprints dunha xornada. O mesmo enfoque práctico. O mesmo equipo. O mesmo Anceu. Sen ter que desaparecer catro días.",
    ],
    imageAlt:
      "Participantes da primeira Residencia Rural GPT analizando tarefas repetitivas",
  },
  workshopsHeading: "Dous días para resolver dous problemas reais",
  workshopsIntro:
    "Escolle o problema que queres sacar da lista antes de rematar o ano, ou reserva os dous días co Pack Outono.",
  workshops: [
    {
      id: "productivity",
      title: "IA e Produtividade",
      shortTitle: "Produtividade",
      dateISO: "2026-10-31",
      dateLabel: "31 de outubro de 2026 · Anceu Coliving",
      dateShort: "31 OUT",
      eyebrow: "Taller 01",
      hook:
        "Entras coas túas tarefas repetitivas. Saes con automatizacións reais.",
      description:
        "Cantas horas perdes cada semana en follas de cálculo, correos, orzamentos, resumos, informes ou procesando imaxes á man? Identificarás que paga a pena automatizar, que ferramenta usar e levarás dous ou tres fluxos funcionando para aplicar ao día seguinte.",
      audience: [
        "Persoas autónomas e pemes que xestionan o negocio con ferramentas dixitais",
        "Profesionais de márketing, educación, hostalaría, coidados e administración",
        "Persoas que xa probaron a IA pero aínda non a integraron no seu día a día",
        "Equipos que só poden liberar unha persoa durante un día",
      ],
      topics: [
        "Análise do teu fluxo de traballo real: que automatizar, que delegar á IA e que non paga a pena",
        "ChatGPT e Claude avanzado, Make, NotebookLM e Cursor",
        "Creación de automatizacións sen saber programar",
        "Criterio para escoller ferramentas e decidir cando pagar unha licenza",
        "Casos reais: de 30 minutos a menos dun en tarefas repetitivas",
      ],
      result:
        "Sairás con dúas ou tres automatizacións configuradas, criterio para seguir iterando e unha folla de ruta clara para recuperar tempo no teu negocio.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.productivity,
      cta: "Reservar Produtividade",
    },
    {
      id: "web",
      title: "Web e Produto Dixital",
      shortTitle: "Web",
      dateISO: "2026-11-28",
      dateLabel: "28 de novembro de 2026 · Anceu Coliving",
      dateShort: "28 NOV",
      eyebrow: "Taller 02",
      hook: "Entras cunha idea. Saes coa túa web en produción.",
      description:
        "Levas meses con «a web» na lista de pendentes? Este sprint serve para crear, publicar e despregar unha web real nun só día, sen saber programar e sen depender de ninguén.",
      audience: [
        "Persoas emprendedoras e freelance que necesitan presenza en liña xa",
        "Negocios locais que queren unha web funcional sen investir miles de euros",
        "Creativos, consultoras e profesionais que queren validar unha idea rápido",
        "Persoas que queren entender o proceso completo, da idea á URL pública",
      ],
      topics: [
        "Deseño e creación da web con Lovable usando linguaxe natural",
        "Control de versións con GitHub, sen medo e paso a paso",
        "Despregamento en produción con Netlify e URL real",
        "Cambios, melloras e publicación en tempo real",
        "Boas prácticas para seguir evolucionando a web despois do taller",
      ],
      result:
        "Sairás coa túa web despregada, acceso ao repositorio e os coñecementos necesarios para seguir modificándoa pola túa conta.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.web,
      cta: "Reservar Web",
    },
  ],
  includesHeading: "Que inclúe",
  includes: [
    {
      title: "Formación presencial",
      detail: "Xornada intensiva de 9:00 a 18:00 co equipo de Rural GPT",
    },
    {
      title: "Comida",
      detail: "Menú de O Granero incluído",
    },
    {
      title: "Materiais",
      detail: "Recursos e documentación para seguir practicando",
    },
    {
      title: "Grupo reducido",
      detail: "Máximo 15 participantes e atención próxima",
    },
    {
      title: "Contorno",
      detail: "Anceu Coliving, Ponte Caldelas, Galicia",
    },
  ],
  excludesHeading: "Que non inclúe",
  excludes: [
    "Aloxamento: é un sprint dun día; se vés de fóra, axudámoste con recomendacións",
    "Desprazamento ata Anceu",
    "Licenzas premium: axudarémosche a decidir cal paga a pena para o teu caso",
  ],
  includesImageAlt:
    "Resumo visual do que inclúe o prezo dos talleres Rural GPT",
  pack: {
    tag: "Pack Outono",
    title: "Automatiza en outubro. Publica en novembro.",
    body:
      "Reserva IA e Produtividade o 31 de outubro e Web e Produto Dixital o 28 de novembro.",
    price: 350,
    priceLabel: "350 € + IVA",
    savingLabel: "Aforras 48 € fronte ás dúas reservas por separado",
    cta: "Reservar Pack Outono",
    stripeUrl: STRIPE_LINKS.pack,
  },
  testimonial: {
    tag: "Un resultado real",
    title: "De media hora cada día a menos dun minuto.",
    quote:
      "Sara é desenvolvedora web. Chegou cunha tarefa que se repetía cada día: optimizar 80 imaxes á man. Ao día seguinte tiña o seu propio executable: un botón, unha carpeta e o traballo feito en menos dun minuto.",
    conclusion:
      "Iso é Rural GPT. Non teoría futurista. Solucións reais, sinxelas e creadas por ti para recuperar o teu tempo.",
    imageAlt:
      "Sara presenta a automatización que creou na primeira Residencia Rural GPT",
  },
  venue: {
    tag: "Onde",
    title: "Anceu Coliving · Ponte Caldelas · Galicia",
    body: [
      "Unha aldea de pouco máis de cen habitantes convertida nun laboratorio de innovación rural. Fibra de 1 Gbps, natureza e espazos de traballo preparados para concentrarse.",
      "A trinta minutos de Pontevedra. Sen distraccións de cidade e coa cabeza posta en resolver o teu problema.",
    ],
    mapLabel: "Ver localización no mapa",
    mapUrl: "https://maps.google.com/?q=Anceu+Coliving",
    imageAlt:
      "Anceu Coliving e a paisaxe natural de Ponte Caldelas, Galicia",
    foodTitle: "A comida tamén forma parte do día",
    foodBody:
      "O prezo inclúe o menú de O Granero para parar, compartir o que estás construíndo e volver á sesión con enerxía.",
    foodImageAlt: "Menú preparado por O Granero para participantes de Rural GPT",
  },
  teamHeading: "O equipo",
  teamIntro:
    "Rural GPT nace da colaboración entre Rural Hackers e Anceu Coliving para descentralizar a innovación e levar a IA aplicada a profesionais de todos os sectores.",
  teamImageAlt: "Nacho, Agustín e África, equipo de Rural GPT",
  team: [
    {
      name: "Nacho Márquez",
      role: "Rural Hackers",
      bio:
        "Cofundador de Rural Hackers e director de Noites Abertas en Pontevedra. Máis de vinte iniciativas internacionais en hackathons, residencias creativas e formación tecnolóxica aplicada.",
    },
    {
      name: "Agustín Jamardo",
      role: "Anceu Coliving · Rural Hackers",
      bio:
        "Enxeñeiro de software especializado en back-end. Fundou Anceu Coliving en 2020 e leva máis de doce anos traballando en remoto e construíndo ferramentas con IA.",
    },
    {
      name: "África Rodríguez",
      role: "Rural Hackers",
      bio:
        "Cofundadora de Rural Hackers e facilitadora de proxectos europeos. Deseña experiencias de aprendizaxe e innovación conectadas co territorio e coas comunidades.",
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "Necesito saber programar?",
      answer:
        "Non. O enfoque é práctico e accesible para perfís non técnicos. No taller de web explicamos GitHub e Netlify paso a paso.",
    },
    {
      question: "Que levo ao rematar o día?",
      answer:
        "En Produtividade, dúas ou tres automatizacións configuradas e criterio para seguir. En Web, o teu sitio despregado cunha URL pública e acceso ao repositorio.",
    },
    {
      question: "Inclúe aloxamento?",
      answer:
        "Non. É un formato sprint dunha xornada. Se vés de fóra, escríbenos e recomendarémosche opcións na zona.",
    },
    {
      question: "Inclúe comida?",
      answer: "Si. O prezo inclúe o menú do día en O Granero.",
    },
    {
      question: "Podo ir con compañeiros da miña empresa?",
      answer:
        "Si. Para reservas de tres ou máis prazas, escríbenos e xestionamos o bloque con facturación á empresa.",
    },
    {
      question: "Haberá máis edicións este ano?",
      answer:
        "Estas son as dúas únicas datas de 2026. Ata 2027 non volveremos facer residencias longas de tres días.",
    },
    {
      question: "Podo cambiar de taller se me equivoco?",
      answer:
        "Se quedan prazas no outro taller, si. Escríbenos polo menos sete días antes.",
    },
    {
      question: "É deducible para autónomos e empresas?",
      answer:
        "Si. É formación profesional e emitimos factura. Consulta coa túa asesoría como aplicala no teu caso.",
    },
  ],
  finalCta: {
    title: "Un día. Un problema. Unha solución real.",
    body:
      "Comida incluída · 15 prazas por taller · Anceu, Galicia · Prezos sen IVA",
    productivity: "31 de outubro — Produtividade — 199 € + IVA",
    web: "28 de novembro — Web — 199 € + IVA",
    pack: "Os dous talleres — 350 € + IVA",
  },
  contact: {
    title: "Tes dúbidas?",
    body: "Escríbenos a hola@ruralgpt.gal e axudámoste a escoller.",
  },
  internalLinks: {
    heading: "Máis información",
    items: [
      { label: "Para quen son", href: "/para-quen/" },
      { label: "Preguntas frecuentes", href: "/faq/" },
      { label: "Blog de IA aplicada", href: "/blog/" },
    ],
  },
};

const es: Campaign = {
  locale: "es",
  seo: {
    title: "Talleres de IA en Galicia · Productividad y Web | Rural GPT",
    description:
      "Talleres presenciales de IA en Anceu: Productividad el 31 de octubre y Web el 28 de noviembre. 199 € + IVA, comida incluida, 15 plazas. Rural Hackers × Anceu Coliving.",
    keywords: [
      "taller IA Galicia",
      "curso IA presencial",
      "automatización IA",
      "crear web con IA",
      "Anceu Coliving",
    ],
  },
  navLabel: "Talleres",
  reserveLabel: "Reservar",
  capacity: 15,
  hero: {
    eyebrow: "Talleres sprint · Otoño 2026",
    title: "Cierras los ojos y ya es Navidad.",
    seoSubtitle: "Talleres presenciales de IA en Galicia · Otoño 2026",
    intro:
      "Dos talleres sprint de un día en Anceu. Sales con algo hecho a tu medida, no con apuntes que jamás tendrás tiempo de volver a leer.",
    body:
      "IA aplicada para profesionales no técnicos. Sin teoría futurista. Sin un curso online de 40 horas. Un día intensivo, grupo reducido y comida incluida en el corazón de Galicia.",
    meta:
      "31 de octubre · Productividad — 28 de noviembre · Web — 199 € + IVA · 15 plazas por taller",
    cta: "Ver los talleres",
    packCta: "Reservar Pack Otoño",
  },
  context: {
    tag: "El punto de partida",
    title: "El tiempo no espera. La IA tampoco.",
    paragraphs: [
      "En junio agotamos las 12 plazas de la primera Residencia Rural GPT en Anceu. Profesionales de sectores muy distintos llegaron con sus «tareas mierderas» y salieron con soluciones reales: automatizaciones, ejecutables propios y flujos de trabajo que les devuelven horas cada semana.",
      "En otoño vamos a mil. Por eso hemos diseñado un formato nuevo: sprints de una jornada. El mismo enfoque práctico. El mismo equipo. El mismo Anceu. Sin tener que desaparecer cuatro días.",
    ],
    imageAlt:
      "Participantes de la primera Residencia Rural GPT analizando tareas repetitivas",
  },
  workshopsHeading: "Dos días para resolver dos problemas reales",
  workshopsIntro:
    "Elige el problema que quieres sacar de la lista antes de terminar el año, o reserva los dos días con el Pack Otoño.",
  workshops: [
    {
      id: "productivity",
      title: "IA y Productividad",
      shortTitle: "Productividad",
      dateISO: "2026-10-31",
      dateLabel: "31 de octubre de 2026 · Anceu Coliving",
      dateShort: "31 OCT",
      eyebrow: "Taller 01",
      hook:
        "Entras con tus tareas repetitivas. Sales con automatizaciones reales.",
      description:
        "¿Cuántas horas pierdes cada semana en hojas de cálculo, correos, presupuestos, resúmenes, informes o procesando imágenes a mano? Identificarás qué merece la pena automatizar, qué herramienta utilizar y te llevarás dos o tres flujos funcionando para aplicar al día siguiente.",
      audience: [
        "Personas autónomas y pymes que gestionan el negocio con herramientas digitales",
        "Profesionales de marketing, educación, hostelería, cuidados y administración",
        "Personas que ya han probado la IA pero aún no la integran en su día a día",
        "Equipos que solo pueden liberar a una persona durante un día",
      ],
      topics: [
        "Análisis de tu flujo de trabajo real: qué automatizar, qué delegar a la IA y qué no merece la pena",
        "ChatGPT y Claude avanzado, Make, NotebookLM y Cursor",
        "Creación de automatizaciones sin saber programar",
        "Criterio para elegir herramientas y decidir cuándo pagar una licencia",
        "Casos reales: de 30 minutos a menos de uno en tareas repetitivas",
      ],
      result:
        "Saldrás con dos o tres automatizaciones configuradas, criterio para seguir iterando y una hoja de ruta clara para recuperar tiempo en tu negocio.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.productivity,
      cta: "Reservar Productividad",
    },
    {
      id: "web",
      title: "Web y Producto Digital",
      shortTitle: "Web",
      dateISO: "2026-11-28",
      dateLabel: "28 de noviembre de 2026 · Anceu Coliving",
      dateShort: "28 NOV",
      eyebrow: "Taller 02",
      hook: "Entras con una idea. Sales con tu web en producción.",
      description:
        "¿Llevas meses con «la web» en la lista de pendientes? Este sprint sirve para crear, publicar y desplegar una web real en un solo día, sin saber programar y sin depender de nadie.",
      audience: [
        "Personas emprendedoras y freelance que necesitan presencia online ya",
        "Negocios locales que quieren una web funcional sin invertir miles de euros",
        "Creativos, consultoras y profesionales que quieren validar una idea rápido",
        "Personas que quieren entender el proceso completo, de la idea a la URL pública",
      ],
      topics: [
        "Diseño y creación de la web con Lovable usando lenguaje natural",
        "Control de versiones con GitHub, sin miedo y paso a paso",
        "Despliegue en producción con Netlify y URL real",
        "Cambios, mejoras y publicación en tiempo real",
        "Buenas prácticas para seguir evolucionando la web después del taller",
      ],
      result:
        "Saldrás con tu web desplegada, acceso al repositorio y los conocimientos necesarios para seguir modificándola por tu cuenta.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.web,
      cta: "Reservar Web",
    },
  ],
  includesHeading: "Qué incluye",
  includes: [
    {
      title: "Formación presencial",
      detail: "Jornada intensiva de 9:00 a 18:00 con el equipo de Rural GPT",
    },
    { title: "Comida", detail: "Menú de O Granero incluido" },
    {
      title: "Materiales",
      detail: "Recursos y documentación para seguir practicando",
    },
    {
      title: "Grupo reducido",
      detail: "Máximo 15 participantes y atención cercana",
    },
    {
      title: "Entorno",
      detail: "Anceu Coliving, Ponte Caldelas, Galicia",
    },
  ],
  excludesHeading: "Qué no incluye",
  excludes: [
    "Alojamiento: es un sprint de un día; si vienes de fuera, te ayudamos con recomendaciones",
    "Desplazamiento hasta Anceu",
    "Licencias premium: te ayudaremos a decidir cuál merece la pena en tu caso",
  ],
  includesImageAlt:
    "Resumen visual de lo que incluye el precio de los talleres Rural GPT",
  pack: {
    tag: "Pack Otoño",
    title: "Automatiza en octubre. Publica en noviembre.",
    body:
      "Reserva IA y Productividad el 31 de octubre y Web y Producto Digital el 28 de noviembre.",
    price: 350,
    priceLabel: "350 € + IVA",
    savingLabel: "Ahorras 48 € frente a las dos reservas por separado",
    cta: "Reservar Pack Otoño",
    stripeUrl: STRIPE_LINKS.pack,
  },
  testimonial: {
    tag: "Un resultado real",
    title: "De media hora cada día a menos de un minuto.",
    quote:
      "Sara es desarrolladora web. Llegó con una tarea que se repetía cada día: optimizar 80 imágenes a mano. Al día siguiente tenía su propio ejecutable: un botón, una carpeta y el trabajo hecho en menos de un minuto.",
    conclusion:
      "Eso es Rural GPT. No teoría futurista. Soluciones reales, sencillas y creadas por ti para recuperar tu tiempo.",
    imageAlt:
      "Sara presenta la automatización que creó en la primera Residencia Rural GPT",
  },
  venue: {
    tag: "Dónde",
    title: "Anceu Coliving · Ponte Caldelas · Galicia",
    body: [
      "Una aldea de poco más de cien habitantes convertida en laboratorio de innovación rural. Fibra de 1 Gbps, naturaleza y espacios de trabajo preparados para concentrarse.",
      "A treinta minutos de Pontevedra. Sin distracciones de ciudad y con la cabeza puesta en resolver tu problema.",
    ],
    mapLabel: "Ver ubicación en el mapa",
    mapUrl: "https://maps.google.com/?q=Anceu+Coliving",
    imageAlt:
      "Anceu Coliving y el paisaje natural de Ponte Caldelas, Galicia",
    foodTitle: "La comida también forma parte del día",
    foodBody:
      "El precio incluye el menú de O Granero para parar, compartir lo que estás construyendo y volver a la sesión con energía.",
    foodImageAlt: "Menú preparado por O Granero para participantes de Rural GPT",
  },
  teamHeading: "El equipo",
  teamIntro:
    "Rural GPT nace de la colaboración entre Rural Hackers y Anceu Coliving para descentralizar la innovación y llevar la IA aplicada a profesionales de todos los sectores.",
  teamImageAlt: "Nacho, Agustín y África, equipo de Rural GPT",
  team: [
    {
      name: "Nacho Márquez",
      role: "Rural Hackers",
      bio:
        "Cofundador de Rural Hackers y director de Noites Abertas en Pontevedra. Más de veinte iniciativas internacionales en hackathons, residencias creativas y formación tecnológica aplicada.",
    },
    {
      name: "Agustín Jamardo",
      role: "Anceu Coliving · Rural Hackers",
      bio:
        "Ingeniero de software especializado en back-end. Fundó Anceu Coliving en 2020 y lleva más de doce años trabajando en remoto y construyendo herramientas con IA.",
    },
    {
      name: "África Rodríguez",
      role: "Rural Hackers",
      bio:
        "Cofundadora de Rural Hackers y facilitadora de proyectos europeos. Diseña experiencias de aprendizaje e innovación conectadas con el territorio y las comunidades.",
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Necesito saber programar?",
      answer:
        "No. El enfoque es práctico y accesible para perfiles no técnicos. En el taller de web explicamos GitHub y Netlify paso a paso.",
    },
    {
      question: "¿Qué me llevo al terminar el día?",
      answer:
        "En Productividad, dos o tres automatizaciones configuradas y criterio para seguir. En Web, tu sitio desplegado con una URL pública y acceso al repositorio.",
    },
    {
      question: "¿Incluye alojamiento?",
      answer:
        "No. Es un formato sprint de una jornada. Si vienes de fuera, escríbenos y te recomendaremos opciones en la zona.",
    },
    {
      question: "¿Incluye comida?",
      answer: "Sí. El precio incluye el menú del día en O Granero.",
    },
    {
      question: "¿Puedo ir con compañeros de mi empresa?",
      answer:
        "Sí. Para reservas de tres o más plazas, escríbenos y gestionamos el bloque con facturación a la empresa.",
    },
    {
      question: "¿Habrá más ediciones este año?",
      answer:
        "Estas son las dos únicas fechas de 2026. Hasta 2027 no volveremos a organizar residencias largas de tres días.",
    },
    {
      question: "¿Puedo cambiar de taller si me equivoco?",
      answer:
        "Si quedan plazas en el otro taller, sí. Escríbenos al menos siete días antes.",
    },
    {
      question: "¿Es deducible para autónomos y empresas?",
      answer:
        "Sí. Es formación profesional y emitimos factura. Consulta con tu asesoría cómo aplicarla en tu caso.",
    },
  ],
  finalCta: {
    title: "Un día. Un problema. Una solución real.",
    body:
      "Comida incluida · 15 plazas por taller · Anceu, Galicia · Precios sin IVA",
    productivity: "31 de octubre — Productividad — 199 € + IVA",
    web: "28 de noviembre — Web — 199 € + IVA",
    pack: "Los dos talleres — 350 € + IVA",
  },
  contact: {
    title: "¿Tienes dudas?",
    body: "Escríbenos a hola@ruralgpt.gal y te ayudamos a elegir.",
  },
  internalLinks: {
    heading: "Más información",
    items: [
      { label: "Para quién son", href: "/es/para-quien/" },
      { label: "Preguntas frecuentes", href: "/es/faq/" },
      { label: "Blog de IA aplicada", href: "/es/blog/" },
    ],
  },
};

export const talleresOtono2026: Record<Locale, Campaign> = { gl, es };

export function getTalleresCampaign(locale: string | undefined): Campaign {
  return talleresOtono2026[locale === "es" ? "es" : "gl"];
}
