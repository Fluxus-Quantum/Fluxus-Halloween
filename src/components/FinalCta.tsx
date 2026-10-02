import React from 'react';
import { MessageCircle, ShieldCheck, Clock, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#0F172A] border-b border-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border-2 border-purple-500/50 text-purple-200 text-xs sm:text-sm font-black mb-6">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>Tu Evento de Halloween en Manos Profesionales</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading">
          No dejes la celebración más esperada del año en manos de la improvisación.
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-normal">
          Garantiza un ambiente festivo elegante, montaje técnico a tiempo y diversión asegurada para todas las edades con un solo contrato y cero dolores de cabeza.
        </p>

        {/* CTA Button Block */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={getWhatsAppBookingLink({ clientType: 'Reserva Final Cierre' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-base sm:text-lg font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all transform hover:scale-[1.02] glow-whatsapp shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
            <span>Hablar con un Productor por WhatsApp</span>
          </a>

          <a
            href={`tel:+57${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-5 rounded-2xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 transition-colors"
          >
            <Phone className="w-5 h-5 text-orange-400" />
            <span>Llamar al {CONTACT_INFO.phone}</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Pólizas contractuales y ARL al día</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span>Montaje 2 horas antes garantizado</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span>Bonos valorados en $1.450.000 COP incluidos</span>
          </span>
        </div>
      </div>
    </section>
  );
};
