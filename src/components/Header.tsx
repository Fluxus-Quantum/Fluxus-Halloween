import React, { useState } from 'react';
import { ASSETS } from '../data/halloweenData';
import { MessageCircle, Menu, X, FileText, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '¿Por Qué 360°?', href: '#por-que-360' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Servicios & Packs', href: '#servicios' },
    { label: 'Comparativa', href: '#comparativa' },
    { label: 'Galería Real', href: '#galeria' },
    { label: 'Preguntas', href: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1326]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 shrink-0">
            <img
              src={ASSETS.logo}
              alt="Fluxus Halloween 360 Logo"
              className="w-full h-full object-contain rounded-full shadow-lg group-hover:scale-105 transition-transform"
            />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-[#0B1326] animate-pulse" />
          </div>
          <div>
            <div className="font-outfit font-extrabold text-base sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              <span>FLUXUS HALLOWEEN</span>
              <span className="text-[#F97316]">360°</span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide font-medium">
              Bogotá &bull; Eventos Corporativos y Propiedad Horizontal
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotizar"
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-semibold"
          >
            <FileText className="w-4 h-4 text-[#F97316]" />
            <span>Cotizar Formal</span>
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/573209403080?text=Hola%2C%20quiero%20cotizar%20el%20evento%20de%20Halloween%20360%C2%B0%20en%20Bogot%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 glow-green shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp 3209403080</span>
            <span className="sm:hidden text-xs">WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 text-xs text-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Temporada Halloween Bogotá 2026</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotizar"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-[#F97316] bg-slate-800/80"
          >
            <FileText className="w-4 h-4" />
            <span>Formulario de Cotización Institucional</span>
          </a>
        </div>
      )}
    </header>
  );
};
