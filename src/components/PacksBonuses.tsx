import React, { useState } from 'react';
import { Check, Gift, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { PACKS, BONUSES, getWhatsAppBookingLink } from '../data/eventData';

export const PacksBonuses: React.FC = () => {
  const [selectedPack, setSelectedPack] = useState<string>('all');

  return (
    <section id="packs" className="py-16 md:py-24 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOQUE 9: Entregables / Stack de Oferta (Los 3 Packs) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-orange-400 font-bold mb-2">
            Entregables Modulares de Alta Gama
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            El Stack de Oferta: Los 3 Pilares del Sistema Halloween 360°
          </h2>
          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Puedes contratar el <strong className="text-white font-bold">Combo Integral 360° Completo</strong> (Recomendado para máxima tranquilidad) o configurar los módulos específicos según los requerimientos de tu copropiedad o empresa.
          </p>

          {/* Interactive Filter Buttons */}
          <div className="mt-6 inline-flex p-1.5 bg-slate-900 border border-slate-700 rounded-xl">
            <button
              onClick={() => setSelectedPack('all')}
              className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap ${
                selectedPack === 'all'
                  ? 'bg-orange-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Ver los 3 Módulos
            </button>
            <button
              onClick={() => setSelectedPack('pack-1')}
              className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap ${
                selectedPack === 'pack-1'
                  ? 'bg-orange-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Pack 1: Shows
            </button>
            <button
              onClick={() => setSelectedPack('pack-2')}
              className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap ${
                selectedPack === 'pack-2'
                  ? 'bg-orange-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Pack 2: Técnico
            </button>
            <button
              onClick={() => setSelectedPack('pack-3')}
              className={`px-4 py-2.5 text-sm sm:text-base font-bold rounded-lg transition-colors whitespace-nowrap ${
                selectedPack === 'pack-3'
                  ? 'bg-orange-600 text-white shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Pack 3: Catering
            </button>
          </div>
        </div>

        {/* Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {PACKS.filter((p) => selectedPack === 'all' || p.id === selectedPack).map((pack) => (
            <div
              key={pack.id}
              className="bg-slate-900 border-2 border-slate-700/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-purple-400 transition-all hover:shadow-2xl hover:shadow-purple-950/30 group"
            >
              <div>
                {/* Image slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={pack.image}
                    alt={pack.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-600 text-orange-400 text-xs sm:text-sm font-black px-3 py-1 rounded-md">
                    {pack.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 font-heading">{pack.title}</h3>
                  <p className="text-sm font-semibold text-purple-200 mb-4">{pack.tagline}</p>

                  <div className="mb-5 p-3.5 rounded-lg bg-slate-950 border border-slate-700/80 text-sm text-slate-100">
                    <span className="text-orange-400 block font-bold mb-0.5">Ideal para:</span>
                    {pack.recommendedFor}
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-300">Incluye en el paquete:</p>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-100">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 mt-4">
                <a
                  href={getWhatsAppBookingLink({ pack: pack.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-orange-600 transition-colors border border-slate-600 hover:border-orange-500 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar este Pack por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BLOQUE 10: Bonos Destacados con Badge "GRATIS" y Valor Tachado */}
        <div className="bg-gradient-to-br from-purple-950/80 via-slate-900 to-orange-950/50 rounded-3xl border-2 border-orange-500/50 p-6 sm:p-10 md:p-12 relative shadow-2xl glow-orange">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/30 border border-orange-500/60 text-orange-200 text-xs sm:text-sm font-black uppercase tracking-widest mb-3">
              <Gift className="w-4 h-4 text-orange-400" />
              <span>Incentivo de Pre-Reserva Anticipada</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
              2 Bonos Exclusivos de Alto Valor Incluidos Sin Costo Adicional
            </h3>
            <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
              Al contratar el Sistema Halloween Integral 360° antes de agotar los cupos de octubre 2026, recibes automáticamente estos dos servicios prémium sin pagar un peso más:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {BONUSES.map((bono) => (
              <div
                key={bono.id}
                className="bg-slate-950 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-orange-400 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {bono.badge}
                    </span>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm text-slate-400 block line-through">
                        Valor Comercial: {bono.commercialValue}
                      </span>
                      <span className="text-sm sm:text-base font-black text-emerald-400">COSTO: $0 COP</span>
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">{bono.title}</h4>
                  <p className="text-sm sm:text-base text-slate-200 mb-5 leading-relaxed font-normal">
                    {bono.description}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-800 pt-4">
                    <p className="text-xs sm:text-sm font-bold text-orange-300 uppercase tracking-wide">Qué incluye este bono:</p>
                    <ul className="space-y-2 text-sm text-slate-100">
                      {bono.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300 font-medium">
                  <span>Válido para fechas de Octubre 2026</span>
                  <span className="text-emerald-400 font-bold">100% Bonificado</span>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated CTA for the Pack & Bonuses */}
          <div className="mt-10 text-center">
            <a
              href={getWhatsAppBookingLink({ pack: 'Combo Integral 360° con 2 Bonos Gratis' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-xl text-base sm:text-lg font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all glow-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
              <span>Asegurar el Sistema 360° + los 2 Bonos Gratis vía WhatsApp</span>
            </a>
            <p className="mt-3 text-sm text-slate-300 font-medium">
              Cupos limitados por fin de semana en Bogotá · Atención directa con el Director de Producción
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
