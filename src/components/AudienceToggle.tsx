import React from 'react';
import { AudienceType } from '../types';
import { AUDIENCE_SPECIFICS } from '../data/halloweenData';
import { Building2, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceToggleProps {
  currentAudience: AudienceType;
  onChange: (audience: AudienceType) => void;
  onSelectAudienceCTA: (audience: AudienceType) => void;
}

export const AudienceToggle: React.FC<AudienceToggleProps> = ({
  currentAudience,
  onChange,
  onSelectAudienceCTA,
}) => {
  const isPH = currentAudience === 'ph';
  const data = isPH ? AUDIENCE_SPECIFICS.ph : AUDIENCE_SPECIFICS.corporate;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0F172A] border-y border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
            Soluciones Especializadas por Sector
          </span>
          <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Diseñado a la Medida de Tu Tipo de Organización
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Selecciona tu perfil para conocer cómo resolvemos tus necesidades específicas de contratación y convivencia.
          </p>
        </div>

        {/* Segmented Control / Interactive Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0B1326] border border-slate-700/80 shadow-inner">
            <button
              type="button"
              onClick={() => onChange('ph')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isPH
                  ? 'bg-gradient-to-r from-[#7C3AED] to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Propiedad Horizontal / Conjuntos</span>
            </button>
            <button
              type="button"
              onClick={() => onChange('corporate')}
              className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                !isPH
                  ? 'bg-gradient-to-r from-[#F97316] to-orange-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Corporativo / Empresas</span>
            </button>
          </div>
        </div>

        {/* Content Card with Smooth Transitions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#152243]/70 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300">
                {data.badge}
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {data.title}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm sm:text-base">{data.pain1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm sm:text-base">{data.pain2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm sm:text-base">{data.pain3}</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => onSelectAudienceCTA(currentAudience)}
                className="py-4 px-6 rounded-xl bg-gradient-to-r from-[#22C55E] to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 text-center">
                Cotización adaptada y cronograma sugerido en 10 min
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
