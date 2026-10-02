import React, { useState } from 'react';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-black tracking-tight text-white hover:text-orange-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
            <span className="font-heading font-black tracking-tight">Halloween 360°</span>
            <span className="text-xs font-medium text-slate-300 hidden sm:inline">por Fluxus Quantum</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold text-slate-100">
            <a href="#historia" className="hover:text-orange-400 transition-colors">
              El Problema
            </a>
            <a href="#beneficios" className="hover:text-orange-400 transition-colors">
              Beneficios
            </a>
            <a href="#packs" className="hover:text-orange-400 transition-colors">
              Packs y Bonos
            </a>
            <a href="#comparativa" className="hover:text-orange-400 transition-colors">
              Comparativa
            </a>
            <a href="#proceso" className="hover:text-orange-400 transition-colors">
              Cómo Funciona
            </a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all glow-whatsapp whitespace-nowrap"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white text-[#22C55E]" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#1E293B] border-b border-slate-700 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            El Problema
          </a>
          <a
            href="#beneficios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            Beneficios Clave
          </a>
          <a
            href="#packs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            Packs de Oferta & Bonos
          </a>
          <a
            href="#comparativa"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            Comparativa
          </a>
          <a
            href="#proceso"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            Cómo Funciona
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 py-1.5 hover:text-orange-400"
          >
            Preguntas Frecuentes
          </a>
          <div className="pt-2">
            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all glow-whatsapp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#22C55E]" />
              <span>Hablar con un Asesor (3209403080)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
