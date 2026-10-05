import React from 'react';
import { ASSETS } from '../data/halloweenData';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070C18] border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Fluxus Halloween 360 Logo"
                className="w-10 h-10 object-contain rounded-full shadow-md"
              />
              <div>
                <div className="font-outfit font-extrabold text-lg text-white">
                  FLUXUS HALLOWEEN <span className="text-[#F97316]">360°</span>
                </div>
                <p className="text-xs text-slate-400">
                  Eventos Corporativos y Propiedad Horizontal en Bogotá
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Solución integral de entretenimiento, arte escénico, técnica de audio, ambientación temática y estaciones de catering gourmet en un solo contrato formal para copropiedades y empresas.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Personal capacitado, ARL al día y cumplimiento tributario.</span>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#por-que-360" className="hover:text-white transition-colors">
                  ¿Por Qué el Sistema 360°?
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Carrusel de Servicios
                </a>
              </li>
              <li>
                <a href="#packs" className="hover:text-white transition-colors">
                  Packs de Temporada
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:text-white transition-colors">
                  Tabla Comparativa
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería Real Bogotá
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors">
                  Simulador de Presupuesto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="font-outfit font-bold text-white text-sm uppercase tracking-wider">
              Contacto Bogotá
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/573209403080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#22C55E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <span>WhatsApp: 3209403080</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Fluxus.Quantum@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>Bogotá D.C. &bull; Chía, Cajicá, Cota y Sabana Norte y Occidente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Fluxus Quantum / Fluxus Halloween 360&deg;. Todos los derechos reservados. Bogotá, Colombia.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Experiencias inmersivas de alta recordación</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
