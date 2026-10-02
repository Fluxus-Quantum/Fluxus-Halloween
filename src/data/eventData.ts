export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PackItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  image: string;
}

export interface BonusItem {
  id: string;
  title: string;
  commercialValue: string;
  description: string;
  includes: string[];
  badge: string;
}

export const CONTACT_INFO = {
  phone: "3209403080",
  phoneFormatted: "(+57) 320 940 3080",
  whatsappUrl: "https://wa.me/573209403080",
  email: "Fluxus.Quantum@gmail.com",
  brandName: "Fluxus Quantum",
  serviceName: "Sistema Halloween Integral 360°",
  location: "Bogotá D.C. y Sabana Norte",
  year: "2026",
};

export function getWhatsAppBookingLink(details?: {
  clientType?: string;
  attendees?: string;
  date?: string;
  pack?: string;
  location?: string;
}) {
  const base = CONTACT_INFO.whatsappUrl;
  let text = `Hola Fluxus Quantum, vengo desde la página web y deseo cotizar el Sistema Halloween Integral 360° para Bogotá/Sabana.`;

  if (details) {
    if (details.clientType) text += `\n- Tipo de evento: ${details.clientType}`;
    if (details.attendees) text += `\n- Asistentes estimados: ${details.attendees}`;
    if (details.date) text += `\n- Fecha tentativa: ${details.date}`;
    if (details.pack) text += `\n- Paquete de interés: ${details.pack}`;
    if (details.location) text += `\n- Zona/Sector: ${details.location}`;
  }

  return `${base}?text=${encodeURIComponent(text)}`;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Claudia R.",
    role: "Administradora Delegada",
    organization: "PH Club House Colina Campestre (480 aptos)",
    location: "Colina Campestre, Bogotá",
    rating: 5,
    comment:
      "Llevaba 4 años coordinando el 31 de octubre con 5 proveedores distintos: un dolor de cabeza donde el del sonido llegaba tarde y los niños se aburrían. Con el Sistema 360° de Fluxus Quantum, entregaron el salón decorado 2 horas antes, el show musical fascinó tanto a párvulos como a adolescentes y el Consejo de Administración felicitó la gestión por primera vez sin una sola queja.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Carlos M.",
    role: "Director de Gestión Humana y Cultura",
    organization: "Empresa de Tecnología & Servicios (320 colaboradores)",
    location: "Parque de la 93, Bogotá",
    rating: 5,
    comment:
      "Necesitábamos una fiesta de disfraces corporativa con clase, sin caer en lo infantil ni en lo sangriento. La ambientación de luces y el show en vivo fueron de nivel internacional. Facturación electrónica impecable, personal con ARL al 100% y cero estrés para nuestro equipo interno de bienestar.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Patricia S.",
    role: "Presidenta de Consejo de Administración",
    organization: "Conjunto Residencial Torres del Virrey",
    location: "Cedritos / Usaquén, Bogotá",
    rating: 5,
    comment:
      "Lo que más nos dio tranquilidad fue la póliza de cumplimiento y la calibración del sonido. En años anteriores los vecinos del primer piso se quejaban por el ruido; esta vez la acústica estuvo impecable, las estaciones de snacks funcionaron sin filas y el show de títeres fue un éxito rotundo.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Andrés Felipe G.",
    role: "Líder de Compras y Eventos",
    organization: "Grupo Consultor Empresarial",
    location: "Chicó Norte, Bogotá",
    rating: 5,
    comment:
      "Tener un solo interlocutor con respuesta inmediata por WhatsApp resolvió semanas de trámites. Cumplieron minuto a minuto el cronograma. Un servicio verdaderamente prémium.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export const PACKS: PackItem[] = [
  {
    id: "pack-1",
    number: "PACK 01",
    title: "Recreación y Shows Temáticos",
    tagline: "El corazón del entretenimiento interactivo y familiar",
    recommendedFor: "Conjuntos y empresas que priorizan la alegría, la integración y el asombro.",
    features: [
      "Animadores y recreadores caracterizados con disfraces teatrales de alta gama.",
      "Show musical en vivo con coreografías temáticas y música calibrada.",
      "Dinámicas interactivas segmentadas por edades (Primera infancia, niños 7-12 y adultos).",
      "Pasarela y concurso de disfraces con maestro de ceremonias profesional.",
      "Miniteca temática con efectos de nieve, burbujas y confeti biodegradable.",
      "Coordinador de actividades en tarima con pauta cronometrada minuto a minuto.",
    ],
    image: "/src/assets/images/family_community_show_1790978026101.jpg",
  },
  {
    id: "pack-2",
    number: "PACK 02",
    title: "Montaje Técnico y Ambientación",
    tagline: "La transformación visual y acústica integral de tu espacio",
    recommendedFor: "Salones comunales, plazoletas, auditorios y sedes corporativas.",
    features: [
      "Sistema de sonido lineal profesional calibrado acústicamente para evitar molestias a vecinos.",
      "Estructuras truss, iluminación robótica beam, cabezas móviles y reflectores LED perimetrales.",
      "Escenografía inmersiva prémium: backing temático interactivo, calabazas luminosas y arcos decorativos.",
      "Máquina de humo denso bajo / efecto niebla de baja temperatura (seguro para interiores).",
      "Zona de Photobooth temático con iluminación para recuerdos fotográficos en redes.",
      "Montaje y pruebas técnicas finalizadas 2 horas antes de la llegada de los primeros asistentes.",
    ],
    image: "/src/assets/images/event_production_stage_1790978006560.jpg",
  },
  {
    id: "pack-3",
    number: "PACK 03",
    title: "Estaciones de Comida, Bebidas y Souvenirs",
    tagline: "Experiencia gastronómica y detalles sin desorden ni demoras",
    recommendedFor: "Aforos desde 50 hasta 800+ personas con flujo rápido.",
    features: [
      "Estación de crispetas recién preparadas en empaques temáticos de edición especial.",
      "Estación de algodón de azúcar artesanal multicolor servido al instante.",
      "Bar de hidratación temática y coctelería/mocktails sin alcohol con frutas y pócimas de autor.",
      "Kits de dulces certificados de marcas reconocidas con registro sanitario Invima.",
      "Souvenirs y recordatorios temáticos de alta calidad para cada asistente infantil.",
      "Personal de servicio con carné de manipulación de alimentos, cofia y guantes.",
    ],
    image: "/src/assets/images/catering_stations_1790978016081.jpg",
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: "bono-1",
    title: "Show de Títeres y Personajes Temáticos",
    commercialValue: "$850.000 COP",
    description:
      "Una puesta en escena teatral de 45 minutos especialmente diseñada para cautivar a la primera infancia y crear momentos tiernos y divertidos para toda la familia.",
    includes: [
      "Teatrino móvil decorado con temática de misterio amigable.",
      "2 actores profesionales titiriteros con voces y música en vivo.",
      "Interacción de personajes gigantes al finalizar para sesión fotográfica.",
      "Mensaje de valores, trabajo en equipo y compañerismo.",
    ],
    badge: "GRATIS EN PRE-RESERVA",
  },
  {
    id: "bono-2",
    title: "Planificación Operativa y Asesoría de Aforo",
    commercialValue: "$600.000 COP",
    description:
      "Nuestro Director Logístico realiza una visita técnica previa o análisis de planos para optimizar el flujo de personas, salidas de emergencia y distribución de zonas.",
    includes: [
      "Inspección de capacidad eléctrica y distribución de carga técnica.",
      "Diseño de plano de zonificación (Zona niños, zona adultos, estaciones gastronómicas).",
      "Cronograma operativo minuto a minuto para el Consejo o Comité de Bienestar.",
      "Plan de contingencia y protocolos de seguridad física y evacuación.",
    ],
    badge: "GRATIS INCLUIDO EN EL SISTEMA",
  },
];

export const COMPARISON_DATA = [
  {
    criterion: "Número de Proveedores a Gestionar",
    separate: "4 a 6 proveedores distintos (sonido, animación, decoración, dulces, comida).",
    system360: "1 solo interlocutor y 1 solo contrato legal centralizado.",
    highlight: true,
  },
  {
    criterion: "Garantía de Puntualidad y Montaje",
    separate: "Riesgo alto de cancelaciones de última hora o montajes sobre el tiempo del evento.",
    system360: "Montaje técnico listo 2 horas antes de iniciar con pruebas de audio finalizadas.",
    highlight: true,
  },
  {
    criterion: "Seguridad, ARL y Pólizas",
    separate: "Personal informal sin verificación de seguridad social ni pólizas de cumplimiento.",
    system360: "Todo el personal con ARL al día, planillas de aportes y póliza de cumplimiento.",
    highlight: true,
  },
  {
    criterion: "Calidad Acústica y Convivencia",
    separate: "Equipos caseros que saturan o generan quejas de los copropietarios por ruido excesivo.",
    system360: "Sistemas lineares profesionales calibrados para dispersión uniforme sin aturdir.",
    highlight: false,
  },
  {
    criterion: "Catering y Manipulación",
    separate: "Dulces sin trazabilidad o filas interminables por falta de personal capacitado.",
    system360: "Kits con registro sanitario Invima y estaciones con personal certificado de servicio.",
    highlight: false,
  },
  {
    criterion: "Estrés del Organizador",
    separate: "El comité pasa el 31 de octubre apagando incendios y cargando cables en vez de disfrutar.",
    system360: "El comité disfruta con su comunidad mientras nuestro Director de Producción ejecuta todo.",
    highlight: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿En qué zonas de Bogotá y municipios aledaños prestan el servicio?",
    answer:
      "Operamos en todas las localidades de Bogotá con enfoque especial en conjuntos residenciales y sedes corporativas de Usaquén, Suba, Colina Campestre, Cedritos, Chapinero, Chicó, Salitre, Fontibón, Kennedy y Modelia. También cubrimos municipios de la Sabana Norte como Chía, Cajicá, Cota y Sopó.",
  },
  {
    question: "¿Cómo se formaliza la contratación y cuáles son las formas de pago?",
    answer:
      "Manejamos facturación formal y contrato de prestación de servicios para aprobación de Consejos de Administración o departamentos de Compras. Se reserva con un anticipo del 50% y el saldo restante se liquida el día del evento contra entrega a satisfacción. Aceptamos transferencias Bancolombia, Davivienda, PSE y pagos corporativos con orden de compra.",
  },
  {
    question: "¿Cuentan con documentación legal, ARL y pólizas para propiedad horizontal?",
    answer:
      "Sí, 100%. Todos nuestros técnicos, animadores y operadores ingresan con sus planillas de Seguridad Social y ARL vigentes. Además, si tu conjunto o empresa lo requiere, emitimos póliza de cumplimiento y responsabilidad civil extracontractual (RCE).",
  },
  {
    question: "¿Se puede personalizar la temática para que no sea sangrienta ni terrorífica?",
    answer:
      "Por supuesto. Nuestra filosofía es 'Festivo Elegante y Divertido'. Diseñamos shows y decoraciones de misterio encantador, magia, personajes de fantasía y cuentos otoñales. Es ideal para que los niños pequeños no se asusten y los adultos disfruten una atmósfera de alta categoría.",
  },
  {
    question: "¿Qué pasa si el salón comunal de mi conjunto es pequeño o tenemos zona exterior?",
    answer:
      "Durante la fase de personalización adaptamos la potencia del sonido, la cantidad de reflectores y el número de estaciones a los metros cuadrados exactos de tu salón comunal, plazoleta o carpa. Nuestro equipo realiza cálculo de aforo previo sin costo adicional.",
  },
  {
    question: "¿Con cuánta anticipación debemos reservar la fecha para octubre 2026?",
    answer:
      "Las fechas del fin de semana previo al 31 de octubre y el día de Halloween se agotan con gran rapidez porque solo aceptamos un número estricto de eventos por fin de semana para no delegar en terceros y asegurar calidad directa. Recomendamos congelar tu fecha con mínimo 3 a 5 semanas de antelación.",
  },
];
