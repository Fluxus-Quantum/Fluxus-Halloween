import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    'Quiero cotizar para mi Conjunto Residencial',
    'Deseo cotizar una Fiesta de Halloween Corporativa',
    'Quiero consultar disponibilidad para un fin de semana específico',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#1E1B4B] p-4 text-white flex items-center justify-between border-b border-purple-900/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-emerald-500" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Director de Producción 360°</h4>
                <p className="text-[11px] text-emerald-300 font-medium">En línea · Respuesta en &lt; 15 min</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message */}
          <div className="p-4 bg-slate-950/90 text-xs text-slate-300 space-y-3">
            <div className="bg-slate-900 p-3 rounded-xl rounded-tl-none border border-slate-800 text-slate-200">
              <p className="font-semibold text-white mb-1">¡Hola! 👋</p>
              <p>
                ¿En qué fecha de octubre estás pensando para tu conjunto o empresa en Bogotá? Cuéntame y te paso la disponibilidad de cupos de inmediato.
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Selecciona tu consulta rápida:
              </p>
              {quickMessages.map((msg, i) => (
                <a
                  key={i}
                  href={getWhatsAppBookingLink({ clientType: msg })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-lg bg-slate-900 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-white transition-all text-xs font-medium text-left"
                >
                  {msg} →
                </a>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp ({CONTACT_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 glow-whatsapp focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
        <span className="text-xs sm:text-sm font-black hidden sm:inline whitespace-nowrap">
          Cotizar WhatsApp
        </span>
      </button>
    </div>
  );
};
