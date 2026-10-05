import { ComparisonRow, FAQItem, GalleryItem, PackItem, ServiceItem } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpt_nJ7O8jNBjqTv05TQvBuA0sp0Y0KMZUS9otOPHAPOZNU709wO5vZ_rb1M1K6DEjJs7KDBA6upssI2WVG-h6XKDWyda7vUEuZRSnW_BuHzeoy1EywGIsDQDAXmu1Qy914nBvgDLejdLUZZlGQFeLtytZgVSJDPp1wu3hcOW3npTnqirB_V7iL1U952vMl9ftBGZrKS1wG-Z7cxw1ILnI8mO6f3vB8q65-VUG2j1CIX8r2KS733OGSg',
  heroBg: 'https://lh3.googleusercontent.com/aida/AEtjO1Usc59B3E7n866KR15XhR4sptSUMxujLxKNIdqNYhXRawvMZhU9x289Z859XcfI6NqnPlr4gaMEVorOUlbJTjOdXcEgwWm91WxiRxdMkulI5sgM9hrMOLTEDDWuTpslYraKg0bsjIJ4fp4WY54YKstHKV5uRUxApc5pLwcc3b5zNRzMGnEX-JVqA2aRBOA6U7FUoTglxdo9PK7a9qJ2_oPyOJ3Ey6mQTCqRcVUZpsUF4w48fIHnbCudDIag',
  pack1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ_l-PORVB9pKU_pZv-5Jxp6d__KihaSxnGmp9h_rtfrYIyWHLDikKxZXHFIrZYlW2yONGI1cC4NvslknXYBfFRGOFlQMkHlV1lUfy4PlC6GkxHmcWf5z2RPaD-Elhfpw9x-P7aUYc_2X24FzckWs5AQmJuxKLdFUId1uyhzJwNBuDbAlF7mcvK-ou0jBAV9ZS-TGFw7V5L_HNApns8yb8XW9kAJuXzK-FrDQu6kgPOUJxhwKk6gE4w',
  pack2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbVWzugYJjiemfdT02xLfcEcplLkwMufBMAWApJKf4CLVPget6Qo1dCEFfznNXGvfSVAtr6WYyvoozb2sL9R9VtgeIbmU7LD0h6oxgTXlivz-gejB9VEhq1baLMrieQpGblERPNo1HyycGA4nC7sdxSDXaAKo01jrejCKXWwjdqp9ULneURmm2qukg414svWkXSsVyfA_PS8vjzKIHYM-2nRu5Basf1M4zlfh-ZpXl9B1E5z5hm19W5A',
  pack3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_vHhKDzMF8ocS-HfHTign4DFejEcXO9cEkJVkn90qyb8sKSdXzFbat4MdTtkXWnJYVEIuSuAH6CewZdMY-UQtubK2OV6THhf_x5CHqSSLUQ9-MFvgO8s6tYqYBXLndk-BRR7w25rMqzQGVihkenM7CnYYSy8a2KONpvwdFpKJJTt71Io_-jVA4HGLeB3oD7G4dBdSRIfcCrcY92kQTvJtDaKpvaQ00nup6QpgA5zpyVc0dtSkPsxviw',
  galleryShowCentral: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0huEFi8Mih1VShn4Qeecnms6NBZRFtJUACF6yxdGeMZcSaIfhwSManv6dxbNLYeAI8_oVxssvb9n2oWEqNYzoCHJkqQ38zoxmD5rEenUzGO9j6ScDgHrkAykpeCbB5APmUXD8WFjYi09Jnztm7DPYvzfv0TeAveeWNBeFyau1_K4fEL8d3HSk8wqlhGvglDsDc4-2iPleOLnKG1oYx8uQn18EuS_jQyIb5f2jfgEUpKGHX1rEIZrNsg',
  galleryResidencial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXIYZYgIbaXT1a9yetZrZWtXhotza2ma-UeI9QajguVIVHjCgMZtQ0sN9GqRfDayN0pn1wNqjlr31t60YHZMP_KBYFhopGNYwu5qmht89kBXIRZJK0kyGCq7eQmMtvAS9fjUwRs4IWPCwfrc5px0v4vkBcu6of7YtMK4vVVJJLu5MuvlZJM7uR7eH62nLoYFMyIwibTeYD8XDCSwFW5ByCcaA9WxzacW3W9XXvEZzJetqzaArrgy0ioQ',
  galleryCorporativo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBknaa5AGwbW8sna7wxJY1MEO_VmLIK8THSGGf0C9o-0shdOTUGXsw8HEvVEWM8tRdyLyarnkY6BdEh8BDAZUGA86qb2JwTVAzu1g4xzyrEvVL4cgNrH9at0jYLcF0YVr9F24nyZjHoIB_n2jsNJGdE13NHas6CESIagusU1S1iG3IYCC23qom94vB5BHeVU2QJm2-QBb4MGAwmJf-8tpRtkhpakqRthsPe808BvLFC4fxTbwRTBYhCEQ',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'shows',
    number: '01',
    tag: 'Elenco Escénico',
    badge: '100% En Vivo',
    title: 'Recreación & Shows Escénicos',
    subtitle: 'Elenco profesional caracterizado y dinámicas multiedad',
    description: 'Actores y recreadores profesionales con vestuarios de alta costura teatral. Obras interactivas, concurso guiado de disfraces y comparsas dinámicas adaptadas al perfil de asistentes.',
    image: ASSETS.pack1,
    highlights: [
      'Show musical teatral con escenografía y sonido sincronizado',
      'Desfile y pasarela interactiva de premiación de disfraces',
      'Actividades diferenciadas por edades (infantil, jóvenes y familias)'
    ],
    specs: ['Duración: 2 a 4 horas continuas', 'Elenco: 4 a 10 artistas según aforo', 'Incluye premios simbólicos']
  },
  {
    id: 'sonido-iluminacion',
    number: '02',
    tag: 'Técnica & Acústica',
    badge: 'Acústica Calibrada',
    title: 'Montaje Técnico de Sonido e Iluminación',
    subtitle: 'Potencia nítida sin eco en salones comunales y auditorios',
    description: 'Ingeniería de sonido calibrada específicamente para evitar la reverberación excesiva en recintos cerrados. Luces robóticas, reflectores LED wash ultravioleta y máquinas de humo atmosférico bajo norma.',
    image: ASSETS.pack2,
    highlights: [
      'Sistemas line-array o columnas compactas de alta definición',
      '2 a 4 micrófonos inalámbricos UHF de largo alcance',
      'Efectos especiales escénicos (humo denso + cabezas móviles UV)'
    ],
    specs: ['Montaje 2 horas antes de apertura', 'Técnico de audio residente', 'Cables y líneas con canaletas de seguridad']
  },
  {
    id: 'catering-snacks',
    number: '03',
    tag: 'Snack Bar Gourmet',
    badge: 'Manipulación Certificada',
    title: 'Estaciones de Comida & Snacks Temáticos',
    subtitle: 'Crispetas recién hechas, algodón de azúcar y dulces individuales',
    description: 'Carritos vintage iluminados y operados por personal uniformado con dotación higiénica completa. Snacks ilimitados recién preparados que deleitan tanto a niños como a adultos.',
    image: ASSETS.pack3,
    highlights: [
      'Estación de crispetas calientes saladas o acarameladas ilimitadas',
      'Máquina de algodón de azúcar con colores alusivos a Halloween',
      'Dispensadores de bebidas refrescantes y kits de confitería sellada'
    ],
    specs: ['Protocolo higiénico y carnet vigente', 'Insumos de primera calidad certificados', 'Vasos y empaques biodegradables']
  },
  {
    id: 'ambientacion',
    number: '04',
    tag: 'Impacto Visual',
    badge: 'Viral en Redes',
    title: 'Ambientación, Decoración & Photo Opportunity',
    subtitle: 'Backdrop de lujo y escenografía inmersiva para fotos inolvidables',
    description: 'Transformación integral de la entrada o salón. Arcada orgánica de globos cromados, calabazas decorativas, calaveras artísticas y punto fotográfico institucional para que todos compartan sus fotos.',
    image: ASSETS.galleryResidencial,
    highlights: [
      'Photo opportunity temático con branding personalizado de la entidad',
      'Arcos orgánicos en paleta violeta, naranja y verde esmeralda',
      'Iluminación decorativa perimetral de suelo a techo'
    ],
    specs: ['Montaje y desmontaje 100% a cargo del equipo', 'Materiales ignífugos seguros', 'Diseño escalable según metraje']
  },
  {
    id: 'logistica-seguridad',
    number: '05',
    tag: 'Control & Calidad',
    badge: 'Norma Institucional',
    title: 'Logística & Protocolos de Seguridad',
    subtitle: 'Personal capacitado, control de flujo y prevención de riesgos',
    description: 'Sabemos lo exigentes que son los reglamentos de copropiedad y los estándares corporativos. Planificamos la distribución del espacio, respetamos las rutas de evacuación y garantizamos orden absoluto.',
    image: ASSETS.galleryCorporativo,
    highlights: [
      'Personal con dotación formal, credencial institucional y experiencia',
      'Protocolos de aforo y rutas de evacuación analizadas',
      'Plan de contingencia técnica con equipos de respaldo inmediato'
    ],
    specs: ['Cumplimiento de normas de salubridad y seguridad', 'Coordinación con personal de vigilancia y conserjería', 'Desmontaje inmediato sin dejar residuos']
  },
  {
    id: 'director-dedicado',
    number: '06',
    tag: 'Tranquilidad Total',
    badge: 'Anexo Exclusivo',
    title: 'Director de Evento Dedicado en Sitio',
    subtitle: 'Un solo interlocutor antes, durante y después del evento',
    description: 'Un profesional senior de producción a tu entera disposición. Supervisa minuto a minuto el cronograma, coordina a los artistas, vigila las estaciones de comida y resuelve cualquier imprevisto sin molestarte.',
    image: ASSETS.galleryShowCentral,
    highlights: [
      'Un único canal directo de comunicación por WhatsApp y radiofrecuencia',
      'Gestión milimétrica de horarios: inicio puntual y cierre exacto',
      'Reporte de entrega de áreas en perfecto estado a la administración'
    ],
    specs: ['Presente desde el inicio del montaje', 'Interlocución directa con Consejo o Comité', 'Atención cordial y ejecutiva']
  }
];

export const PACKS_DATA: PackItem[] = [
  {
    id: 'pack-artes',
    number: '01',
    tag: 'Componente Artístico',
    name: 'Pack 1: Recreación & Shows',
    subtitle: 'Elenco teatral, show musical temático y desfile de disfraces guiado.',
    image: ASSETS.pack1,
    accentColor: '#7C3AED',
    idealFor: 'Conjuntos y empresas que ya cuentan con sonido propio y solo requieren el espectáculo central.',
    features: [
      'Elenco de 3 a 5 recreadores y actores caracterizados de primer nivel',
      'Show musical temático interactivo con coreografías y humor familiar',
      'Gran pasarela y concurso guiado de premiación de disfraces',
      'Dinámicas activas para niños, retos para adolescentes y concursos para adultos',
      'Estación de pintucaritas artístico antialérgico y globoflexia',
      'Guión personalizado con el nombre de tu conjunto residencial o empresa'
    ]
  },
  {
    id: 'pack-tecnico',
    number: '02',
    tag: 'Estructura & Efectos',
    name: 'Pack 2: Montaje Técnico & Ambientación',
    subtitle: 'Sonido acústico calibrado, luces LED UV, humo y photocall de lujo.',
    image: ASSETS.pack2,
    isPopular: true,
    accentColor: '#F97316',
    idealFor: 'Administraciones que buscan transformar radicalmente el salón comunal o auditorio.',
    features: [
      'Sistema de sonido profesional calibrado para salones cerrados (cero eco molesto)',
      '2 a 4 micrófonos inalámbricos UHF profesionales de largo alcance',
      'Iluminación perimetral LED con wash violeta y cabezas robóticas programadas',
      'Máquina de niebla escénica con líquido certificado no tóxico',
      'Photo-Opportunity temático de lujo con backing escenográfico para fotos',
      'DJ residente con playlist tematizada y efectos de sonido en vivo',
      'Montaje técnico 2 horas antes de la llegada de los primeros invitados'
    ]
  },
  {
    id: 'pack-gastronomico',
    number: '03',
    tag: 'Snack Bar & Recuerdos',
    name: 'Pack 3: Estaciones de Comida & Souvenirs',
    subtitle: 'Crispetas ilimitadas recién hechas, algodón de azúcar y confitería.',
    image: ASSETS.pack3,
    accentColor: '#22C55E',
    idealFor: 'Eventos donde se busca brindar una experiencia sensorial y gastronómica de primer nivel.',
    features: [
      'Estación de crispetas recién preparadas con carrito vintage iluminado',
      'Máquina de algodón de azúcar temático (colores alusivos a Halloween)',
      'Dispensadores de ponche mágico o refrescos frutales para los asistentes',
      'Bolsitas de dulces y confitería empacadas individualmente con sello higiénico',
      'Personal operario uniformado con dotación sanitaria completa',
      'Menaje descartable 100% ecológico y estación de recolección de residuos'
    ]
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    criterion: 'Gestión Contractual y Facturas',
    traditionalPain: '3 a 5 contratos dispersos, múltiples cuentas bancarias y aprobaciones demoradas.',
    fluxusBenefit: '1 solo contrato integral, 1 sola cuenta y proceso contable expedito para comités o tesorería.'
  },
  {
    criterion: 'Coordinación y Horario de Montaje',
    traditionalPain: 'La decoración llega a las 3:00pm, el sonido a las 4:30pm y los animadores retrasan el inicio.',
    fluxusBenefit: 'Todo el equipo sincronizado en sitio 2 a 3 horas antes. Pruebas técnicas a puerta cerrada.'
  },
  {
    criterion: 'Responsabilidad ante Imprevistos',
    traditionalPain: 'Si el sonido falla, el DJ culpa al salón; si se acaba la comida, nadie responde.',
    fluxusBenefit: 'Director de Evento dedicado a tu lado resolviendo todo en tiempo real. Cero excusas.'
  },
  {
    criterion: 'Calidad Artística y Vestuario',
    traditionalPain: 'Disfraces desgastados, máscaras improvisadas y animadores que improvisan sin guión.',
    fluxusBenefit: 'Vestuarios teatrales impecables, caracterizaciones de nivel cinematográfico y guión planificado.'
  },
  {
    criterion: 'Acústica y Convivencia Vecinal',
    traditionalPain: 'Sonido ensordecedor que genera quejas inmediatas de residentes por ruido excesivo.',
    fluxusBenefit: 'Ingeniería acústica ajustada a las normas de decibeles de copropiedad de la Alcaldía de Bogotá.'
  },
  {
    criterion: 'Tranquilidad del Organizador',
    traditionalPain: 'Estrés extremo, carreras constantes de un lado a otro y reclamos de la comunidad.',
    fluxusBenefit: 'Tranquilidad absoluta. El Administrador o líder de RRHH disfruta el evento como invitado de honor.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-show',
    title: 'Show Musical Central & Comparsa Temática',
    tag: 'Show Teatral',
    tagColor: '#7C3AED',
    description: 'Puesta en escena interactiva de gran formato con música en vivo, comparsas y lluvia de confeti en auditorio para más de 250 personas.',
    image: ASSETS.galleryShowCentral,
    location: 'Bogotá Norte'
  },
  {
    id: 'gal-ph',
    title: 'Festival de Disfraces en Conjunto Residencial',
    tag: 'Propiedad Horizontal',
    tagColor: '#F97316',
    description: 'Integración comunitaria familiar con escenografía rústica, concurso infantil por categorías y animadores dragón en Club El Dorado.',
    image: ASSETS.galleryResidencial,
    location: 'Club Residencial Bogotá'
  },
  {
    id: 'gal-corp',
    title: 'Noche de Gala Corporativa & Antifaces',
    tag: 'Corporativo & B2B',
    tagColor: '#22C55E',
    description: 'Velada temática ejecutiva con pantallas LED, DJ, coctelería de autor y ambiente elegante para colaboradores y directivos.',
    image: ASSETS.galleryCorporativo,
    location: 'Auditorio Empresarial Bogotá'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'logistica',
    question: '¿Con cuánta anticipación montan la infraestructura el día del evento?',
    answer: 'Llegamos puntualmente 2 a 3 horas antes de la hora acordada para el inicio del público. Durante ese tiempo montamos el sonido, probamos micrófonos, ambientamos la decoración y preparamos las estaciones de comida. Cuando los primeros residentes o colaboradores ingresan, todo está 100% impecable y en funcionamiento.'
  },
  {
    id: 'faq-2',
    category: 'legal',
    question: '¿Emiten contrato formal y documentación para comités de administración?',
    answer: 'Sí, totalmente. Entregamos contrato formal de prestación de servicios, copia de RUT actualizado, propuesta detallada con cronograma y certificación de cuenta bancaria. Todo en orden para que el Consejo de Administración, Revisoría Fiscal o el Departamento de Compras aprueben el trámite con total agilidad.'
  },
  {
    id: 'faq-3',
    category: 'tecnica',
    question: '¿El sonido molesta a los residentes que no asisten al salón comunal?',
    answer: 'No. Nuestros técnicos calibran la presión acústica (dB) y la orientación de las cabinas para concentrar el audio dentro del área del evento, minimizando la propagación por ductos y pisos superiores, respetando la Ley 675 de Propiedad Horizontal y el Código de Policía de Bogotá.'
  },
  {
    id: 'faq-4',
    category: 'logistica',
    question: '¿Qué sucede si llueve o nuestro evento es en zonas verdes exteriores?',
    answer: 'Contamos con planes de contingencia técnica. Si la locación es al aire libre, recomendamos y coordinamos carpas o trasladamos rápidamente el montaje al salón comunal o recepción techada sin suspender las actividades del cronograma.'
  },
  {
    id: 'faq-5',
    category: 'legal',
    question: '¿El personal cuenta con protocolos de seguridad y afiliación vigente?',
    answer: 'Por supuesto. Todo nuestro personal operativo, técnico y artístico asiste con su documentación al día, capacitación en primeros auxilios básicos y cumple con los protocolos de bioseguridad en el manejo de alimentos y bebidas.'
  },
  {
    id: 'faq-6',
    category: 'tecnica',
    question: '¿Podemos combinar sólo 2 packs o personalizar la temática?',
    answer: 'Sí. Aunque nuestro "Sistema Halloween Integral 360°" ofrece el mayor ahorro y tranquilidad al unificar todo, puedes contratar módulos específicos o solicitar temáticas personalizadas (ej. Noche de Fantasía, Hotel Encantado, Fiesta Neón Glow, o Cóctel Elegante B2B).'
  }
];

export const AUDIENCE_SPECIFICS = {
  ph: {
    badge: 'Especial para Administradores & Consejos de Propiedad Horizontal',
    title: 'Cero Quejas Vecinales y 100% de Residentes Felices',
    pain1: 'Evita reclamos por ruidos molestos gracias a nuestra acústica calibrada para salones comunales.',
    pain2: 'Un solo pago y un solo soporte contable para rápida aprobación del Consejo y Revisoría Fiscal.',
    pain3: 'Dinámicas que integran tanto a los niños más pequeños como a padres y abuelitos.',
    ctaText: 'Cotizar para mi Conjunto Residencial'
  },
  corporate: {
    badge: 'Especial para Directores de RRHH, Bienestar & Gestión del Talento',
    title: 'Engagement Real, Integración de Equipos y Cero Carga Logística',
    pain1: 'Personal 100% formalizado con certificados para ingreso a edificios empresariales.',
    pain2: 'Concepto sofisticado: desde cócteles elegantes con DJ hasta jornadas familiares con colaboradores e hijos.',
    pain3: 'Facturación institucional formal y cumplimiento de cronogramas para que RRHH también disfrute.',
    ctaText: 'Cotizar para mi Empresa'
  }
};
