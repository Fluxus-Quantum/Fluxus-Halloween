import React from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#0F172A]/70 via-[#1E1B4B]/70 to-[#0F172A] border-b border-slate-800">
      {/* Subtle festive ambient glow circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-orange-600/15 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge Resaltado: Sistema Halloween Integral 360° */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border-2 border-purple-500/50 text-purple-200 text-sm font-bold tracking-wide shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-white font-extrabold">Sistema Halloween Integral 360°</span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="text-slate-200 hidden sm:inline font-semibold">Bogotá y Sabana 2026</span>
          </div>
        </div>

        {/* Headline en H1 de alto impacto */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] font-heading">
            Garantiza un Halloween Inolvidable para tu Conjunto o Empresa en Bogotá{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 underline decoration-orange-500/40 decoration-wavy">
              Sin Lidiar con Múltiples Proveedores
            </span>{' '}
            ni Estrés Logístico.
          </h1>

          {/* Subtítulo destacado */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-100 leading-relaxed max-w-3xl mx-auto font-normal">
            Con el <strong className="text-white font-bold underline decoration-amber-400 decoration-2">Sistema "Halloween Integral 360°"</strong>, obtén
            animación temática, show musical, sonido profesional, decoración y catering en un solo contrato, 100% coordinado y terminado a tiempo.
          </p>

          {/* CTA Principal WhatsApp */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingLink({ clientType: 'Conjunto / Empresa Bogotá' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl text-base md:text-lg font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all transform hover:-translate-y-0.5 glow-whatsapp shadow-lg shadow-green-900/30"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
              <span>Cotizar Inmediatamente vía WhatsApp</span>
            </a>

            <a
              href="#calculadora"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl text-base font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 transition-colors"
            >
              <span>Personalizar Mi Paquete</span>
            </a>
          </div>

          {/* Micro-trust copy */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Respuesta en menos de 15 min</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold tracking-wide">Logística Garantizada</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Bogotá y Sabana</span>
            </span>
          </div>
        </div>

        {/* Hero Image Showcase with Ambient Card Frame */}
        <div className="mt-12 relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
            <img
              src="/src/assets/images/hero_halloween_event_1790977996041.jpg"
              alt="Celebración prémium de Halloween para conjuntos y empresas en Bogotá"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Scrim overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/25 to-transparent"></div>

            {/* Overlaid badges inside hero image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              <div className="flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700 text-sm font-semibold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Producción 100% In-House sin intermediarios</span>
              </div>
              <div className="bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg backdrop-blur-md shadow">
                Edición Limitada Octubre 2026
              </div>
            </div>
          </div>
        </div>

        {/* Key trust metric bar adjacent to hero */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-orange-400 font-heading tabular-nums">+70</p>
            <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Eventos Exitosos en Bogotá</p>
          </div>
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-purple-300 font-heading tabular-nums">1 Solo</p>
            <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Contrato y Responsable</p>
          </div>
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading tabular-nums">2 Horas</p>
            <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Anticipación de Montaje</p>
          </div>
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-300 font-heading tabular-nums">100%</p>
            <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">Logística & Organización</p>
          </div>
        </div>
      </div>
    </section>
  );
};
