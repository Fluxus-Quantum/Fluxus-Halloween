import React from 'react';
import { PACKS_DATA } from '../data/halloweenData';
import { Check, Star, Gift, ArrowRight, MessageCircle } from 'lucide-react';

interface PacksSectionProps {
  onSelectPackForQuote?: (packId: string) => void;
}

export const PacksSection: React.FC<PacksSectionProps> = ({ onSelectPackForQuote }) => {
  return (
    <section id="packs" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1326] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
            Entregables Claros &amp; Modularidad
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Elige o Combina Nuestros 3 Packs de Servicio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Disponibles de forma individual o integrados en la solución llave en mano Fluxus Halloween 360°.
          </p>
        </div>

        {/* 3 Packs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PACKS_DATA.map((pack) => (
            <div
              key={pack.id}
              className={`rounded-3xl bg-[#101B35] border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-2xl ${
                pack.isPopular
                  ? 'border-[#F97316] ring-1 ring-[#F97316]/50 lg:-translate-y-2 glow-orange'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-[#F97316] text-white text-[11px] font-extrabold uppercase tracking-wider py-1.5 text-center flex items-center justify-center gap-1.5 shadow-md z-10">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>El Más Solicitado en Conjuntos &amp; Empresas</span>
                </div>
              )}

              {/* Pack Image Header */}
              <div className={`relative h-48 overflow-hidden ${pack.isPopular ? 'pt-6' : ''}`}>
                <img
                  src={pack.image}
                  alt={pack.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-transparent to-black/30" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-lg bg-[#0B1326]/80 backdrop-blur-sm border border-slate-700 text-[11px] font-bold text-slate-200">
                  {pack.tag}
                </span>
              </div>

              {/* Pack Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit text-2xl font-extrabold text-white mb-2">
                    {pack.name}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">
                    {pack.subtitle}
                  </p>

                  <div className="p-3 rounded-xl bg-[#0B1326]/60 border border-slate-800/80 mb-5 text-xs text-amber-200/90 font-medium">
                    <strong className="text-white">Ideal para:</strong> {pack.idealFor}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    {pack.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/573209403080?text=Hola%2C%20solicito%20cotizaci%C3%B3n%20espec%C3%ADfica%20para%3A%20${encodeURIComponent(pack.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      pack.isPopular
                        ? 'bg-[#F97316] hover:bg-orange-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar {pack.name.split(':')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPackForQuote?.(pack.id);
                      const el = document.getElementById('cotizar');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-slate-400 hover:text-slate-200 py-1 transition-colors text-center"
                  >
                    Personalizar en formulario &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Bonuses Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#152243] to-amber-950/30 border border-[#F97316]/50 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316] text-white text-xs font-extrabold uppercase tracking-wide">
              <Gift className="w-3.5 h-3.5" />
              <span>Bonos Exclusivos de Pre-Temporada</span>
            </span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Incluidos ¡100% GRATIS! al Reservar tu Solución Integral 360°
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Valor agregado garantizado para eventos confirmados con anticipación antes de agotar agenda de octubre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bono 1 */}
            <div className="p-6 rounded-2xl bg-[#0B1326]/80 border border-[#F97316]/30 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 text-[#F97316] flex items-center justify-center shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-outfit font-bold text-white text-base sm:text-lg">
                    Bono 1: Bienvenida Fotográfica con Personajes
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-[#F97316] text-white text-[10px] font-extrabold">
                    GRATIS
                  </span>
                </div>
                <p className="text-xs text-amber-300 font-semibold line-through mt-0.5">
                  Valor Habitual: $450.000 COP
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Apertura con función interactiva y recepción en el lobby o entrada principal con personajes temáticos para tomarse fotos con cada familia desde el primer minuto.
                </p>
              </div>
            </div>

            {/* Bono 2 */}
            <div className="p-6 rounded-2xl bg-[#0B1326]/80 border border-[#7C3AED]/40 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 text-purple-300 flex items-center justify-center shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-outfit font-bold text-white text-base sm:text-lg">
                    Bono 2: Plan Operativo de Aforo &amp; Evacuación
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-[#22C55E] text-white text-[10px] font-extrabold">
                    GRATIS
                  </span>
                </div>
                <p className="text-xs text-amber-300 font-semibold line-through mt-0.5">
                  Valor Habitual: $300.000 COP
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Diagramación técnica de distribución de espacios, rutas de escape despejadas y asesoría de aforo máximo para salones comunales y auditorios según la normatividad de Bogotá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
