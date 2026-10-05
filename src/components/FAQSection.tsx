import React, { useState } from 'react';
import { FAQS_DATA } from '../data/halloweenData';
import { ChevronDown, HelpCircle, ShieldCheck, AlertCircle, Clock, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<'all' | 'logistica' | 'legal' | 'tecnica'>('all');

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1326] relative">
      <div className="max-w-4xl mx-auto">
        {/* Urgency Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-600 via-[#F97316] to-amber-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center shrink-0">
              <Clock className="w-7 h-7 text-white animate-pulse" />
            </div>
            <div>
              <h4 className="font-outfit font-extrabold text-lg sm:text-xl">
                ⚠️ AGENDA DE OCTUBRE 2026: DISPONIBILIDAD LIMITADA
              </h4>
              <p className="text-xs sm:text-sm text-white/95 mt-0.5">
                Los fines de semana pico de Halloween en Bogotá suelen cerrarse con semanas de antelación.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/573209403080?text=Hola%2C%20quiero%20verificar%20disponibilidad%20de%20fecha%20para%20octubre%20en%20Bogot%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-900 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg"
          >
            Verificar Mi Fecha
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#22C55E]">
            Claridad &amp; Transparencia
          </span>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Preguntas Frecuentes de Comités &amp; Directores
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Respuestas a las dudas habituales de administradores de copropiedad y departamentos de recursos humanos.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Todas las Dudas' },
            { id: 'logistica', label: 'Logística & Tiempos' },
            { id: 'legal', label: 'Contratación & Normas' },
            { id: 'tecnica', label: 'Técnica & Acústica' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#7C3AED] text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#101B35] border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-outfit font-bold text-white text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#F97316] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-[#0B1326]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reverse Filter Box: Para quién NO es */}
        <div className="p-8 rounded-3xl bg-[#101B35] border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-[#F97316]" />
            <h3 className="font-outfit text-xl font-bold text-white">
              ¿Para quién NO es este servicio?
            </h3>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Para garantizar la más alta calidad, puntualidad e inmersión, somos muy transparentes en el perfil de cliente con el que colaboramos:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1326] border border-slate-800">
              <span className="text-red-400 font-bold text-base">&times;</span>
              <span>Para quienes buscan animación informal o improvisada de último minuto sin protocolos de seguridad.</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1326] border border-slate-800">
              <span className="text-red-400 font-bold text-base">&times;</span>
              <span>Para quienes prefieren coordinar 5 o 6 llamadas con proveedores distintos el mismo día del evento.</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1326] border border-slate-800">
              <span className="text-red-400 font-bold text-base">&times;</span>
              <span>Para entidades que no requieran documentación formal o cumplimiento tributario y legal.</span>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1326] border border-slate-800">
              <span className="text-red-400 font-bold text-base">&times;</span>
              <span>Para organizaciones que no prioricen la puntualidad milimétrica y la experiencia inmersiva familiar.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
