import React, { useState } from 'react';
import { AudienceType } from '../types';
import { Calculator, Users, MapPin, CheckSquare, Square, MessageCircle, Gift, Sparkles } from 'lucide-react';

interface InteractiveEstimatorProps {
  initialAudience?: AudienceType;
  onApplyToForm?: (data: {
    audience: AudienceType;
    attendees: number;
    venue: string;
    services: string[];
  }) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  perPerson: number;
}

const AVAILABLE_OPTIONS: ServiceOption[] = [
  {
    id: 'shows',
    name: 'Pack 1: Recreación & Show Teatral',
    desc: 'Elenco caracterizado, concurso de disfraces y show interactivo',
    basePrice: 1200000,
    perPerson: 4000,
  },
  {
    id: 'sonido',
    name: 'Pack 2: Sonido Acústico & Luces LED UV',
    desc: 'Sonido sin eco, micrófonos inalámbricos y máquina de niebla',
    basePrice: 1100000,
    perPerson: 2500,
  },
  {
    id: 'catering',
    name: 'Pack 3: Crispetas, Algodón & Snacks Gourmet',
    desc: 'Carritos vintage, crispetas ilimitadas y kits de confitería sellada',
    basePrice: 900000,
    perPerson: 7500,
  },
  {
    id: 'decoracion',
    name: 'Anexo: Photo-Opportunity & Decoración 360°',
    desc: 'Arcos orgánicos de globos, calabazas de arte y backing fotográfico',
    basePrice: 750000,
    perPerson: 1000,
  },
  {
    id: 'director',
    name: 'Anexo: Director de Producción Dedicado',
    desc: 'Coordinador exclusivo en sitio antes, durante y después del evento',
    basePrice: 400000,
    perPerson: 0,
  },
];

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({
  initialAudience = 'ph',
  onApplyToForm,
}) => {
  const [audience, setAudience] = useState<AudienceType>(initialAudience);
  const [attendees, setAttendees] = useState<number>(120);
  const [venue, setVenue] = useState<string>('salon_comunal');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'shows',
    'sonido',
    'catering',
    'decoracion',
  ]);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate estimated investment range
  const calculateTotal = () => {
    let subtotal = 0;
    selectedServiceIds.forEach((id) => {
      const opt = AVAILABLE_OPTIONS.find((o) => o.id === id);
      if (opt) {
        subtotal += opt.basePrice + opt.perPerson * attendees;
      }
    });

    // Discount if all or almost all are bundled (Integral 360 bundle discount)
    if (selectedServiceIds.length >= 4) {
      subtotal = subtotal * 0.88; // 12% off for bundling
    }

    const min = Math.round(subtotal * 0.95);
    const max = Math.round(subtotal * 1.08);

    return {
      minFormatted: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
      }).format(min),
      maxFormatted: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0,
      }).format(max),
      bundleDiscount: selectedServiceIds.length >= 4,
    };
  };

  const totals = calculateTotal();

  const venueLabels: Record<string, string> = {
    salon_comunal: 'Salón Comunal de Copropiedad',
    auditorio: 'Auditorio / Teatro Privado',
    exterior: 'Zonas Verdes / Exterior',
    oficina: 'Oficinas / Sede Corporativa',
  };

  const getSelectedNames = () => {
    return AVAILABLE_OPTIONS.filter((o) => selectedServiceIds.includes(o.id))
      .map((o) => o.name.split(':')[0])
      .join(', ');
  };

  const generateWhatsAppText = () => {
    const msg = `Hola Fluxus Halloween 360°, quiero cotizar con esta estimación preliminar:
- Perfil: ${audience === 'ph' ? 'Propiedad Horizontal (Conjunto)' : 'Empresa / Corporativo'}
- Asistentes estimados: ${attendees} personas
- Espacio: ${venueLabels[venue] || venue}
- Módulos seleccionados: ${getSelectedNames() || 'Ninguno'}
- Rango de Inversión Estimado: ${totals.minFormatted} - ${totals.maxFormatted}
¿Tienen disponibilidad para el calendario de octubre en Bogotá?`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="cotizador" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1326] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/30 text-xs font-bold uppercase tracking-wider text-orange-300 mb-3">
            <Calculator className="w-4 h-4 text-[#F97316]" />
            <span>Transparencia &bull; Cotizador Rápido en Vivo</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Simulador de Presupuesto Halloween 360°
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Ajusta los parámetros para conocer el rango de inversión aproximado y envíalo directamente a WhatsApp con un solo clic.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-[#101B35] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
            {/* 1. Audience Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Tipo de Entidad
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAudience('ph')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    audience === 'ph'
                      ? 'border-[#7C3AED] bg-[#7C3AED]/20 text-white'
                      : 'border-slate-800 bg-[#0B1326] text-slate-400 hover:text-white'
                  }`}
                >
                  Propiedad Horizontal
                </button>
                <button
                  type="button"
                  onClick={() => setAudience('corporate')}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    audience === 'corporate'
                      ? 'border-[#F97316] bg-[#F97316]/20 text-white'
                      : 'border-slate-800 bg-[#0B1326] text-slate-400 hover:text-white'
                  }`}
                >
                  Empresa / Corporativo
                </button>
              </div>
            </div>

            {/* 2. Attendees Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#F97316]" />
                  <span>2. Cantidad Estimada de Asistentes</span>
                </label>
                <span className="font-outfit font-extrabold text-lg text-white bg-slate-800 px-3 py-0.5 rounded-lg border border-slate-700">
                  {attendees} personas
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="600"
                step="10"
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>30 (Evento íntimo)</span>
                <span>200 (Comunal típico)</span>
                <span>600+ (Gran Formato)</span>
              </div>
            </div>

            {/* 3. Venue Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#22C55E]" />
                <span>3. Espacio / Locación en Bogotá o Sabana</span>
              </label>
              <select
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#7C3AED]"
              >
                <option value="salon_comunal">Salón Comunal de Copropiedad</option>
                <option value="auditorio">Auditorio / Teatro Empresarial</option>
                <option value="exterior">Zonas Verdes / Plazoleta Exterior</option>
                <option value="oficina">Instalaciones de la Oficina</option>
              </select>
            </div>

            {/* 4. Service Selection Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                4. Selecciona los Módulos Deseados
              </label>
              <div className="space-y-2.5">
                {AVAILABLE_OPTIONS.map((opt) => {
                  const isChecked = selectedServiceIds.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'border-[#7C3AED]/70 bg-[#7C3AED]/10 text-white'
                          : 'border-slate-800 bg-[#0B1326]/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-purple-400"
                        aria-label={isChecked ? 'Deseleccionar' : 'Seleccionar'}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#22C55E]" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-500" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                          <span>{opt.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#152243] via-[#101B35] to-[#0B1326] p-6 sm:p-8 rounded-3xl border-2 border-[#7C3AED]/50 shadow-2xl relative">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Presupuesto Estimado
              </span>
              {totals.bundleDiscount && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-extrabold uppercase border border-[#22C55E]/40">
                  Descuento Combo 360° Aplicado
                </span>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-[#0B1326] border border-slate-800 mb-6">
              <span className="text-xs text-slate-400 block mb-1">Rango de Inversión Proyectada:</span>
              <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {totals.minFormatted}
                <span className="text-xs sm:text-sm font-normal text-slate-400 mx-2">a</span>
                {totals.maxFormatted}
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                *Tarifa orientativa antes de visita técnica o especificaciones adicionales. Incluye montaje, personal y desmontaje.
              </p>
            </div>

            {/* Inclusions Summary */}
            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Tipo de perfil:</span>
                <span className="font-semibold text-white">
                  {audience === 'ph' ? 'Propiedad Horizontal' : 'Corporativo'}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Aforo aproximado:</span>
                <span className="font-semibold text-white">{attendees} personas</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Módulos activos:</span>
                <span className="font-semibold text-white">{selectedServiceIds.length} módulos</span>
              </div>
            </div>

            {/* Free Bonuses Callout */}
            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 mb-6 text-xs text-purple-200 flex items-start gap-2.5">
              <Gift className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">¡Bonos Gratuitos Incluidos!</strong>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Plan de aforo técnico ($300.000) + Bienvenida con personajes ($450.000) sin costo al confirmar en pretemporada.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/573209403080?text=${generateWhatsAppText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-outfit font-extrabold text-sm sm:text-base tracking-wide uppercase flex items-center justify-center gap-2 glow-green shadow-xl transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Estimado por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onApplyToForm?.({
                    audience,
                    attendees,
                    venue,
                    services: selectedServiceIds,
                  });
                  const el = document.getElementById('cotizar');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Usar estos datos en el Formulario Formal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
