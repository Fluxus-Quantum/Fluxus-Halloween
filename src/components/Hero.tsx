import React from 'react';
import { ASSETS } from '../data/halloweenData';
import { MessageCircle, ShieldCheck, Clock, Award, Calculator, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1326] via-[#101B35] to-[#0B1326]">
      {/* Background Image with Atmospheric Blend */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={ASSETS.heroBg}
          alt="Halloween atmospheric nocturnal scenery"
          className="w-full h-full object-cover opacity-40 mix-blend-screen filter brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1326]/85 via-[#0B1326]/50 to-[#0B1326]" />
      </div>

      {/* Decorative Glow Ambient Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C3AED]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-48 right-[-80px] w-[450px] h-[450px] bg-[#F97316]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Top Seasonal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-6 shadow-inner backdrop-blur-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#F97316] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-orange-300">
            🎃 Temporada Oficial Bogotá 2026 &bull; Agenda de Octubre Abierta
          </span>
        </div>

        {/* H1 Main Headline */}
        <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-6">
          Garantiza un Halloween Inolvidable para tu Conjunto o Empresa en Bogotá{' '}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-[#7C3AED] bg-clip-text text-transparent">
            Sin Lidiar con Múltiples Proveedores ni Estrés Logístico.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Con el Sistema <strong className="text-white font-bold">"Fluxus Halloween Integral 360°"</strong>, obtén
          animación temática, show musical, sonido profesional calibrado, decoración inmersiva y catering en un solo contrato,
          100% coordinado y terminado a tiempo.
        </p>

        {/* UVP Highlight Box */}
        <div className="inline-block p-4 sm:px-8 rounded-2xl bg-[#152243]/80 border border-[#7C3AED]/40 backdrop-blur-sm mb-10 shadow-xl">
          <p className="text-sm sm:text-base font-semibold text-orange-200 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#22C55E] shrink-0" />
            <span>Un solo interlocutor &bull; Cero complicaciones logísticas &bull; Diversión 100% garantizada para todas las edades</span>
          </p>
        </div>

        {/* CTAs Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-6">
          <a
            href="https://wa.me/573209403080?text=Hola%2C%20solicito%20cotizaci%C3%B3n%20para%20Halloween%20360%C2%B0%20Bogot%C3%A1%20en%20mi%20entidad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-outfit font-extrabold text-base sm:text-lg tracking-wide uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] glow-green shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>¡Cotizar Fiesta de Halloween Ahora!</span>
          </a>

          <a
            href="#cotizador"
            onClick={onOpenEstimator}
            className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base flex items-center justify-center gap-2 border border-slate-700 hover:border-orange-400/50 transition-all duration-300"
          >
            <Calculator className="w-5 h-5 text-orange-400" />
            <span>Simulador de Presupuesto</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Quick Micro-Trust Indicator */}
        <div className="text-xs text-slate-400 flex items-center justify-center gap-2 mb-10 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Respuesta inmediata en minutos vía WhatsApp: <strong>3209403080</strong> (Atención personalizada en Bogotá)</span>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
            <Award className="w-5 h-5 text-[#F97316] shrink-0" />
            <span><strong>+70 Eventos</strong> Exitosos en Bogotá y Sabana</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>100% Puntualidad</strong> (Montaje 2h antes)</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
            <span>Especialistas en <strong>PH &amp; Sedes Corporativas</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
