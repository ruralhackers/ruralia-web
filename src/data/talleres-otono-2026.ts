export type Locale = "gl" | "es";

export const STRIPE_LINKS = {
  productivity: "https://buy.stripe.com/fZueVdgx54124ag0jVcAo04",
  web: "https://buy.stripe.com/5kQcN65ya5lF5uTfbkeZ200",
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
  /** Reservas cerradas: el botón se muestra desactivado y no enlaza a Stripe. */
  closed?: boolean;
  /** Slug de la landing individual (GL: /talleres/<slug>/, ES: /es/talleres/<slug>/). */
  slug: string;
  /** Imagen base en /images/talleres-otono-2026/ (OG y JSON-LD). */
  image: string;
  seoDescription: string;
  keywords: string[];
  /** FAQs propias de la landing; se completan con las FAQs compartidas (sharedFaqKeys). */
  faq: Array<{ question: string; answer: string }>;
}

export interface FaqItem {
  key?: string;
  question: string;
  answer: string;
}

/** FAQs generales que también se muestran en cada landing de taller. */
export const sharedFaqKeys = ["alojamiento", "comida", "empresa", "deducible"];

interface Campaign {
  locale: Locale;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  navLabel: string;
  reserveLabel: string;
  closedLabel: string;
  moreInfoLabel: string;
  closedNotice: string;
  capacity: number;
  hero: {
    eyebrow: string;
    title: string;
    seoSubtitle: string;
    intro: string;
    body: string;
    meta: string;
    cta: string;
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
  faq: FaqItem[];
  finalCta: {
    title: string;
    body: string;
    productivity: string;
    web: string;
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
    title: "Taller de IA para Asesorías, Xestorías e Administración · 28 nov | Rural GPT",
    description:
      "Taller presencial de IA para asesorías, xestorías e departamentos de administración o 28 de novembro en Anceu: IA cumprindo o RGPD, con modelos aloxados en Europa. 199 € + IVA, comida incluída, 15 prazas.",
    keywords: [
      "taller IA Galicia",
      "curso IA presencial",
      "automatización IA",
      "IA para asesorías e xestorías",
      "IA para departamentos de administración",
      "IA para empresas RGPD",
      "IA RGPD",
      "Anceu Coliving",
    ],
  },
  navLabel: "Talleres",
  reserveLabel: "Reservar",
  closedLabel: "Xa celebrado",
  moreInfoLabel: "Ver taller",
  closedNotice: "Este taller xa se celebrou o 31 de outubro. A próxima data é o 28 de novembro.",
  capacity: 15,
  hero: {
    eyebrow: "Talleres sprint · Outono 2026",
    title: "Pechas os ollos e xa é Nadal.",
    seoSubtitle: "Talleres presenciais de IA en Galicia · Outono 2026",
    intro:
      "O último sprint do ano: un día en Anceu para asesorías, xestorías e departamentos de administración. Saes con algo feito á túa medida, non con apuntamentos que nunca terás tempo de volver ler.",
    body:
      "IA aplicada para profesionais non técnicos. Sen teoría futurista. Sen un curso en liña de 40 horas. Un día intensivo, grupo reducido e comida incluída no corazón de Galicia.",
    meta:
      "28 de novembro · Asesorías, xestorías e administración — 199 € + IVA · 15 prazas",
    cta: "Ver o taller",
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
  workshopsHeading: "Un día para poñer a IA a traballar no teu despacho",
  workshopsIntro:
    "O 28 de novembro é a última data de 2026. O taller de Produtividade do 31 de outubro xa se celebrou.",
  workshops: [
    {
      id: "productivity",
      title: "IA e Produtividade",
      shortTitle: "Produtividade",
      dateISO: "2026-10-31",
      dateLabel: "31 de outubro de 2026 · Anceu Coliving",
      dateShort: "31 OUT",
      eyebrow: "Edición anterior",
      hook:
        "Celebrouse o 31 de outubro: as persoas participantes entraron coas súas tarefas repetitivas e saíron con automatizacións reais.",
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
      closed: true,
      slug: "ia-produtividade",
      image: "tareas-mierderas",
      seoDescription:
        "Taller presencial de IA e Produtividade celebrado o 31 de outubro en Anceu Coliving (Ponte Caldelas). A próxima data é o taller para asesorías, xestorías e administración do 28 de novembro.",
      keywords: ["taller IA Galicia", "automatización IA", "IA e produtividade", "Anceu Coliving"],
      faq: [
        {
          question: "Quedan prazas?",
          answer:
            "Non. Este taller xa se celebrou o 31 de outubro. A reserva aberta agora é a do taller IA para Asesorías, Xestorías e Departamentos de Administración do 28 de novembro.",
        },
        {
          question: "Necesito saber programar?",
          answer: "Non. O enfoque é práctico e accesible para perfís non técnicos.",
        },
        {
          question: "Que levo ao rematar o día?",
          answer: "Dúas ou tres automatizacións configuradas e criterio para seguir.",
        },
      ],
    },
    {
      id: "web",
      title: "IA para Asesorías, Xestorías e Departamentos de Administración",
      shortTitle: "Asesorías e administración",
      dateISO: "2026-11-28",
      dateLabel: "28 de novembro de 2026 · Anceu Coliving",
      dateShort: "28 NOV",
      eyebrow: "Próximo taller",
      hook:
        "Entras con prazos, papeis e tarefas repetitivas. Saes coa IA traballando para o teu despacho ou departamento, cumprindo o RGPD.",
      description:
        "Asesorías, xestorías e departamentos de administración traballan con datos persoais, fiscais e laborais de clientes, persoal e provedores, e non poden usar calquera ferramenta. Nesta xornada aprenderás a integrar a IA no día a día do despacho ou do departamento cumprindo o RGPD e a LOPDGDD, con modelos de IA aloxados en Europa, para mellorar os teus procesos, evitar os despistes de sempre (prazos, papeis esquecidos, tarefas repetitivas) e deixar de perder tempo en traballo que non achega valor.",
      audience: [
        "Asesorías fiscais, laborais e contables",
        "Xestorías administrativas e despachos profesionais",
        "Departamentos de administración, contabilidade e RRHH de empresas",
        "Equipos que xestionan documentación e datos persoais de clientes, persoal ou provedores",
        "Profesionais que queren usar a IA sen poñer en risco a confidencialidade",
      ],
      topics: [
        "Que esixen o RGPD e a LOPDGDD cando usas IA con datos de clientes",
        "Como escoller modelos de IA aloxados na Unión Europea (p. ex. Langdock) e que revisar antes de usalos",
        "Análise dos procesos do despacho ou departamento: que automatizar e que debe seguir en mans humanas",
        "Facturas de provedores, conciliacións e documentación interna: que pode preparar a IA e que revisas ti",
        "Control de prazos, lembretes e documentación pendente para evitar esquecementos",
        "Automatización de tarefas repetitivas para dedicar o tempo ao que achega valor",
      ],
      result:
        "Sairás con criterio para usar a IA na túa asesoría, xestoría ou departamento respectando a normativa de protección de datos, con procesos concretos identificados para mellorar e unha folla de ruta para aplicalos ao día seguinte.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.web,
      cta: "Reservar praza",
      slug: "ia-asesorias-xestorias",
      image: "equipo",
      seoDescription:
        "Taller presencial para asesorías, xestorías e departamentos de administración o 28 de novembro en Anceu: usa a IA cumprindo o RGPD e a LOPDGDD, con modelos aloxados en Europa. 199 € + IVA, comida incluída, 15 prazas.",
      keywords: ["IA para asesorías", "IA para xestorías", "IA para departamentos de administración", "IA para empresas RGPD", "IA RGPD", "LOPDGDD", "taller IA Galicia"],
      faq: [
        {
          question: "Necesito coñecementos técnicos?",
          answer:
            "Non. Traballamos sobre os procesos reais do teu despacho ou departamento, sen necesidade de coñecementos técnicos.",
        },
        {
          question: "Que levo ao rematar o día?",
          answer:
            "Criterio para usar a IA cumprindo o RGPD e a LOPDGDD e unha folla de ruta para mellorar os procesos do teu despacho ou departamento.",
        },
        {
          question: "Serve se traballo no departamento de administración dunha empresa?",
          answer:
            "Si. Os problemas son os mesmos que nun despacho: datos persoais, prazos, facturas e documentación. Traballamos sobre os procesos reais do teu departamento.",
        },
      ],
    },
  ],
  includesHeading: "Que inclúe",
  includes: [
    {
      title: "Formación presencial",
      detail: "Xornada intensiva de 10:00 a 18:00 co equipo de Rural GPT",
    },
    {
      title: "Comida",
      detail: "Menú do chef Granero incluído",
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
      "O prezo inclúe o menú do chef Granero para parar, compartir o que estás construíndo e volver á sesión con enerxía.",
    foodImageAlt: "Menú preparado polo chef Granero para participantes de Rural GPT",
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
        "Non. O enfoque é práctico e accesible para perfís non técnicos. Traballamos sobre os procesos reais do teu despacho ou departamento, sen necesidade de coñecementos técnicos.",
    },
    {
      question: "Que levo ao rematar o día?",
      answer:
        "Criterio para usar a IA cumprindo o RGPD e a LOPDGDD, procesos concretos identificados e unha folla de ruta para mellorar o traballo do teu despacho ou departamento.",
    },
    {
      key: "alojamiento",
      question: "Inclúe aloxamento?",
      answer:
        "Non. É un formato sprint dunha xornada. Se vés de fóra, escríbenos e recomendarémosche opcións na zona.",
    },
    {
      key: "comida",
      question: "Inclúe comida?",
      answer: "Si. O prezo inclúe o menú do día do chef Granero.",
    },
    {
      key: "empresa",
      question: "Podo ir con compañeiros da miña empresa?",
      answer:
        "Si. Para reservas de tres ou máis prazas, escríbenos e xestionamos o bloque con facturación á empresa.",
    },
    {
      question: "Haberá máis edicións este ano?",
      answer:
        "O 28 de novembro é a última data de 2026. Ata 2027 non haberá novas edicións nin residencias longas.",
    },
    {
      key: "deducible",
      question: "É deducible para autónomos e empresas?",
      answer:
        "Si. É formación profesional e emitimos factura. Consulta coa túa asesoría como aplicala no teu caso.",
    },
  ],
  finalCta: {
    title: "Un día. Un problema. Unha solución real.",
    body:
      "Comida incluída · 15 prazas · Anceu, Galicia · Prezos sen IVA",
    productivity: "31 de outubro — Produtividade — Xa celebrado",
    web: "28 de novembro — Asesorías, xestorías e administración — 199 € + IVA",
  },
  contact: {
    title: "Tes dúbidas?",
    body: "Escríbenos a hola@ruralgpt.gal e resolvemos as túas dúbidas.",
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
    title: "Taller de IA para Asesorías, Gestorías y Administración · 28 nov | Rural GPT",
    description:
      "Taller presencial de IA para asesorías, gestorías y departamentos de administración el 28 de noviembre en Anceu: IA cumpliendo el RGPD, con modelos alojados en Europa. 199 € + IVA, comida incluida, 15 plazas.",
    keywords: [
      "taller IA Galicia",
      "curso IA presencial",
      "automatización IA",
      "IA para asesorías y gestorías",
      "IA para departamentos de administración",
      "IA para empresas RGPD",
      "IA RGPD",
      "Anceu Coliving",
    ],
  },
  navLabel: "Talleres",
  reserveLabel: "Reservar",
  closedLabel: "Ya celebrado",
  moreInfoLabel: "Ver taller",
  closedNotice: "Este taller ya se celebró el 31 de octubre. La próxima fecha es el 28 de noviembre.",
  capacity: 15,
  hero: {
    eyebrow: "Talleres sprint · Otoño 2026",
    title: "Cierras los ojos y ya es Navidad.",
    seoSubtitle: "Talleres presenciales de IA en Galicia · Otoño 2026",
    intro:
      "El último sprint del año: un día en Anceu para asesorías, gestorías y departamentos de administración. Sales con algo hecho a tu medida, no con apuntes que jamás tendrás tiempo de volver a leer.",
    body:
      "IA aplicada para profesionales no técnicos. Sin teoría futurista. Sin un curso online de 40 horas. Un día intensivo, grupo reducido y comida incluida en el corazón de Galicia.",
    meta:
      "28 de noviembre · Asesorías, gestorías y administración — 199 € + IVA · 15 plazas",
    cta: "Ver el taller",
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
  workshopsHeading: "Un día para poner la IA a trabajar en tu despacho",
  workshopsIntro:
    "El 28 de noviembre es la última fecha de 2026. El taller de Productividad del 31 de octubre ya se celebró.",
  workshops: [
    {
      id: "productivity",
      title: "IA y Productividad",
      shortTitle: "Productividad",
      dateISO: "2026-10-31",
      dateLabel: "31 de octubre de 2026 · Anceu Coliving",
      dateShort: "31 OCT",
      eyebrow: "Edición anterior",
      hook:
        "Se celebró el 31 de octubre: los participantes entraron con sus tareas repetitivas y salieron con automatizaciones reales.",
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
      closed: true,
      slug: "ia-productividad",
      image: "tareas-mierderas",
      seoDescription:
        "Taller presencial de IA y Productividad celebrado el 31 de octubre en Anceu Coliving (Ponte Caldelas). La próxima fecha es el taller para asesorías, gestorías y administración del 28 de noviembre.",
      keywords: ["taller IA Galicia", "automatización IA", "IA y productividad", "Anceu Coliving"],
      faq: [
        {
          question: "¿Quedan plazas?",
          answer:
            "No. Este taller ya se celebró el 31 de octubre. La reserva abierta ahora es la del taller IA para Asesorías, Gestorías y Departamentos de Administración del 28 de noviembre.",
        },
        {
          question: "¿Necesito saber programar?",
          answer: "No. El enfoque es práctico y accesible para perfiles no técnicos.",
        },
        {
          question: "¿Qué me llevo al terminar el día?",
          answer: "Dos o tres automatizaciones configuradas y criterio para seguir.",
        },
      ],
    },
    {
      id: "web",
      title: "IA para Asesorías, Gestorías y Departamentos de Administración",
      shortTitle: "Asesorías y administración",
      dateISO: "2026-11-28",
      dateLabel: "28 de noviembre de 2026 · Anceu Coliving",
      dateShort: "28 NOV",
      eyebrow: "Próximo taller",
      hook:
        "Entras con plazos, papeles y tareas repetitivas. Sales con la IA trabajando para tu despacho o departamento, cumpliendo el RGPD.",
      description:
        "Asesorías, gestorías y departamentos de administración trabajan con datos personales, fiscales y laborales de clientes, plantilla y proveedores, y no pueden usar cualquier herramienta. En esta jornada aprenderás a integrar la IA en el día a día del despacho o del departamento cumpliendo el RGPD y la LOPDGDD, con modelos de IA alojados en Europa, para mejorar tus procesos, evitar los despistes de siempre (plazos, papeles olvidados, tareas repetitivas) y dejar de perder tiempo en trabajo que no aporta valor.",
      audience: [
        "Asesorías fiscales, laborales y contables",
        "Gestorías administrativas y despachos profesionales",
        "Departamentos de administración, contabilidad y RRHH de empresas",
        "Equipos que gestionan documentación y datos personales de clientes, plantilla o proveedores",
        "Profesionales que quieren usar la IA sin poner en riesgo la confidencialidad",
      ],
      topics: [
        "Qué exigen el RGPD y la LOPDGDD cuando usas IA con datos de clientes",
        "Cómo elegir modelos de IA alojados en la Unión Europea (p. ej. Langdock) y qué revisar antes de usarlos",
        "Análisis de los procesos del despacho o departamento: qué automatizar y qué debe seguir en manos humanas",
        "Facturas de proveedores, conciliaciones y documentación interna: qué puede preparar la IA y qué revisas tú",
        "Control de plazos, recordatorios y documentación pendiente para evitar olvidos",
        "Automatización de tareas repetitivas para dedicar el tiempo a lo que aporta valor",
      ],
      result:
        "Saldrás con criterio para usar la IA en tu asesoría, gestoría o departamento respetando la normativa de protección de datos, con procesos concretos identificados para mejorar y una hoja de ruta para aplicarlos al día siguiente.",
      ...sharedPrices,
      priceLabel: "199 € + IVA",
      stripeUrl: STRIPE_LINKS.web,
      cta: "Reservar plaza",
      slug: "ia-asesorias-gestorias",
      image: "equipo",
      seoDescription:
        "Taller presencial para asesorías, gestorías y departamentos de administración el 28 de noviembre en Anceu: usa la IA cumpliendo el RGPD y la LOPDGDD, con modelos alojados en Europa. 199 € + IVA, comida incluida, 15 plazas.",
      keywords: ["IA para asesorías", "IA para gestorías", "IA para departamentos de administración", "IA para empresas RGPD", "IA RGPD", "LOPDGDD", "taller IA Galicia"],
      faq: [
        {
          question: "¿Necesito conocimientos técnicos?",
          answer:
            "No. Trabajamos sobre los procesos reales de tu despacho o departamento, sin necesidad de conocimientos técnicos.",
        },
        {
          question: "¿Qué me llevo al terminar el día?",
          answer:
            "Criterio para usar la IA cumpliendo el RGPD y la LOPDGDD y una hoja de ruta para mejorar los procesos de tu despacho o departamento.",
        },
        {
          question: "¿Sirve si trabajo en el departamento de administración de una empresa?",
          answer:
            "Sí. Los problemas son los mismos que en un despacho: datos personales, plazos, facturas y documentación. Trabajamos sobre los procesos reales de tu departamento.",
        },
      ],
    },
  ],
  includesHeading: "Qué incluye",
  includes: [
    {
      title: "Formación presencial",
      detail: "Jornada intensiva de 10:00 a 18:00 con el equipo de Rural GPT",
    },
    { title: "Comida", detail: "Menú del chef Granero incluido" },
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
      "El precio incluye el menú del chef Granero para parar, compartir lo que estás construyendo y volver a la sesión con energía.",
    foodImageAlt: "Menú preparado por el chef Granero para participantes de Rural GPT",
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
        "No. El enfoque es práctico y accesible para perfiles no técnicos. Trabajamos sobre los procesos reales de tu despacho o departamento, sin necesidad de conocimientos técnicos.",
    },
    {
      question: "¿Qué me llevo al terminar el día?",
      answer:
        "Criterio para usar la IA cumpliendo el RGPD y la LOPDGDD, procesos concretos identificados y una hoja de ruta para mejorar el trabajo de tu despacho o departamento.",
    },
    {
      key: "alojamiento",
      question: "¿Incluye alojamiento?",
      answer:
        "No. Es un formato sprint de una jornada. Si vienes de fuera, escríbenos y te recomendaremos opciones en la zona.",
    },
    {
      key: "comida",
      question: "¿Incluye comida?",
      answer: "Sí. El precio incluye el menú del día del chef Granero.",
    },
    {
      key: "empresa",
      question: "¿Puedo ir con compañeros de mi empresa?",
      answer:
        "Sí. Para reservas de tres o más plazas, escríbenos y gestionamos el bloque con facturación a la empresa.",
    },
    {
      question: "¿Habrá más ediciones este año?",
      answer:
        "El 28 de noviembre es la última fecha de 2026. Hasta 2027 no habrá nuevas ediciones ni residencias largas.",
    },
    {
      key: "deducible",
      question: "¿Es deducible para autónomos y empresas?",
      answer:
        "Sí. Es formación profesional y emitimos factura. Consulta con tu asesoría cómo aplicarla en tu caso.",
    },
  ],
  finalCta: {
    title: "Un día. Un problema. Una solución real.",
    body:
      "Comida incluida · 15 plazas · Anceu, Galicia · Precios sin IVA",
    productivity: "31 de octubre — Productividad — Ya celebrado",
    web: "28 de noviembre — Asesorías, gestorías y administración — 199 € + IVA",
  },
  contact: {
    title: "¿Tienes dudas?",
    body: "Escríbenos a hola@ruralgpt.gal y resolvemos tus dudas.",
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

/** Ruta de la landing individual de un taller. */
export function getWorkshopPath(locale: Locale, workshop: Pick<Workshop, "slug">): string {
  return locale === "es" ? `/es/talleres/${workshop.slug}/` : `/talleres/${workshop.slug}/`;
}

/** Ruta de la página general de talleres. */
export function getTalleresPath(locale: Locale): string {
  return locale === "es" ? "/es/talleres-otono-2026/" : "/talleres-otono-2026/";
}

/** FAQs de una landing: las propias del taller + las compartidas. */
export function getWorkshopFaq(campaign: Campaign, workshop: Workshop): FaqItem[] {
  const shared = campaign.faq.filter((item) => item.key && sharedFaqKeys.includes(item.key));
  return [...workshop.faq, ...shared];
}

/** JSON-LD Event de un taller (compartido entre la página general y las landings). */
export function buildWorkshopEvent(
  workshop: Workshop,
  locale: Locale,
  pageUrl?: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${workshop.title} · Rural GPT`,
    description: workshop.description,
    ...(pageUrl ? { url: pageUrl } : {}),
    startDate: `${workshop.dateISO}T10:00:00+01:00`,
    endDate: `${workshop.dateISO}T18:00:00+01:00`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    maximumAttendeeCapacity: workshop.capacity,
    inLanguage: locale,
    image: `https://ruralgpt.gal/images/talleres-otono-2026/${workshop.image}.webp`,
    location: {
      "@type": "Place",
      name: "Anceu Coliving",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ponte Caldelas",
        addressRegion: "Pontevedra",
        addressCountry: "ES",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Rural GPT",
      url: "https://ruralgpt.gal",
    },
    // Talleres ya celebrados: sin oferta de reserva.
    ...(workshop.closed
      ? {}
      : {
          offers: {
            "@type": "Offer",
            url: workshop.stripeUrl,
            price: workshop.price,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            validFrom: "2026-09-01T00:00:00+02:00",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: workshop.price,
              priceCurrency: "EUR",
              valueAddedTaxIncluded: false,
            },
          },
        }),
  };
}

/** Talleres con reservas abiertas primero; los ya celebrados al final. */
export function getWorkshopsOpenFirst(campaign: Pick<Campaign, "workshops">): Workshop[] {
  return [...campaign.workshops].sort((a, b) => Number(!!a.closed) - Number(!!b.closed));
}
