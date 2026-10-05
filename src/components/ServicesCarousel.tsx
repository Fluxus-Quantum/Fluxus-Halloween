import React, { useRef, useState } from 'react';
import { SERVICES_LIST } from '../data/halloweenData';
import { ServiceItem } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle, Sparkles, MessageCircle, X, Shield, Clock } from 'lucide-react';

interface ServicesCarouselProps {
  onSelectServiceForQuote?: (serviceId: string) => void;
}

export const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ onSelectServiceForQuote }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenModal = (service: ServiceItem) => {
    setActiveModalService(service);
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Portafolio Modular 360°</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Carrusel de Servicios &amp; Módulos Especializados
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Elige los componentes que necesitas o contrata la solución llave en mano para tu conjunto o empresa en Bogotá.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#7C3AED] text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Anterior servicio"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#7C3AED] text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x scroll-smooth no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="shrink-0 w-[310px] sm:w-[370px] snap-start rounded-3xl bg-[#101B35] border border-slate-800 hover:border-[#7C3AED]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl group hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-transparent to-black/40" />
                
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B1326]/85 backdrop-blur-sm border border-slate-700 text-xs font-semibold text-amber-300">
                  {service.badge}
                </span>

                <span className="absolute top-3 right-3 text-xs font-mono font-bold text-slate-400 bg-[#0B1326]/80 px-2 py-1 rounded-md">
                  {service.number} / 06
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    {service.tag}
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-white mt-1 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Micro Highlights */}
                  <div className="space-y-2 mb-4">
                    {service.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(service)}
                    className="text-xs font-semibold text-purple-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    Ver Detalles
                  </button>

                  <a
                    href={`https://wa.me/573209403080?text=Hola%2C%20quisiera%20cotizar%20el%20m%C3%B3dulo%3A%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#22C55E] text-white hover:text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotizar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Helper */}
        <div className="flex items-center justify-between mt-4 px-2 text-xs text-slate-400">
          <span>Desliza para ver los 6 componentes de la solución integral</span>
          <a
            href="#cotizador"
            className="text-[#F97316] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Personalizar mi combinación</span> &rarr;
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#101B35] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              {activeModalService.tag}
            </span>
            <h3 className="font-outfit text-2xl font-extrabold text-white mt-1 mb-3">
              {activeModalService.title}
            </h3>

            <div className="rounded-xl overflow-hidden h-44 mb-4">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              {activeModalService.description}
            </p>

            <div className="space-y-2 mb-5 bg-[#0B1326] p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Especificaciones Técnicas:</h4>
              {activeModalService.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <Shield className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/573209403080?text=Hola%2C%20quiero%20cotizar%20${encodeURIComponent(activeModalService.title)}%20para%20un%20evento`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm flex items-center justify-center gap-2 glow-green"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar este Módulo</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  onSelectServiceForQuote?.(activeModalService.id);
                  setActiveModalService(null);
                  const el = document.getElementById('cotizar');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs"
              >
                Incluir en Formulario
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
