import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0E1A] text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                {CONTACT_INFO.brandName}
              </span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Producción integral y ejecutiva de celebraciones temáticas de Halloween para conjuntos residenciales, clubes y empresas en Bogotá y municipios de la Sabana Norte.
            </p>
            <div className="pt-2 flex items-center gap-2 text-sm text-emerald-400 font-semibold">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Facturación legal, personería jurídica y pólizas contractuales.</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 font-heading">
              Navegación Rápida
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  Validación del Problema
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Propuesta Única de Valor
                </a>
              </li>
              <li>
                <a href="#packs" className="hover:text-white transition-colors">
                  Los 3 Packs & Bonos
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:text-white transition-colors">
                  Tabla Comparativa
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Cotizador y Pre-Reserva
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 font-heading">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-medium">Línea Directa / WhatsApp:</span>
                  <a
                    href={`tel:+57${CONTACT_INFO.phone}`}
                    className="font-bold text-white hover:text-orange-400 transition-colors text-base"
                  >
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-medium">Correo Institucional:</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-medium text-white hover:text-orange-400 transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-xs font-medium">Sede de Producción:</span>
                  <span className="text-slate-200">Bogotá D.C., Colombia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div>
            © {CONTACT_INFO.year} {CONTACT_INFO.brandName}. Todos los derechos reservados. Sistema Halloween Integral 360°.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Privacidad de Datos</span>
            <span aria-hidden="true">·</span>
            <span>Términos de Servicio</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-300">Bogotá & Sabana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
