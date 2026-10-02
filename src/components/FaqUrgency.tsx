import React, { useState } from 'react';
import { ChevronDown, Clock, AlertTriangle, HelpCircle, MessageCircle, Calendar } from 'lucide-react';
import { FAQS, CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const FaqUrgency: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOQUE 14: Banner de Alerta / Urgencia en rojo/naranja con ícono de reloj */}
        <div className="mb-16 bg-gradient-to-r from-red-950 via-orange-950 to-red-950 border-2 border-orange-500 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-13 h-13 rounded-xl bg-orange-500/30 border border-orange-500/60 flex items-center justify-center text-orange-300 shrink-0">
              <Clock className="w-7 h-7 animate-pulse" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/40 text-orange-100 text-xs sm:text-sm font-black uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4 text-orange-300" />
                <span>Atención: Cupos Estrictos de Producción</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                Agenda Limitada para Octubre 2026 en Bogotá
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                Para mantener el estándar de excelencia y supervisión directa (sin subcontratar en terceros), <strong className="text-white font-bold underline decoration-orange-400">solo habilitamos 12 fechas exclusivas</strong> durante la temporada de Halloween para Bogotá y Sabana Norte. Las fechas de los fines de semana 23-25 y 30-31 de octubre suelen cerrarse con semanas de antelación.
              </p>
            </div>

            <div className="shrink-0 mt-3 sm:mt-0">
              <a
                href={getWhatsAppBookingLink({ clientType: 'Verificación de Fecha Octubre 2026' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-lg"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Consultar Mi Fecha</span>
              </a>
            </div>
          </div>
        </div>

        {/* BLOQUE 13: Acordeón Interactivo (FAQ) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-orange-400 font-bold mb-2">
            Transparencia y Claridad Total
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            Preguntas Frecuentes de Administradores y Comités
          </h2>
          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Todo lo que necesitas saber antes de contratar el Sistema Halloween 360° para tu conjunto o empresa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-purple-400 shadow-xl'
                    : 'bg-slate-900 border-slate-700/80 hover:border-slate-500'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-4.5 px-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-purple-900/60 text-purple-200 rotate-180'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-base text-slate-100 leading-relaxed border-t border-slate-800 pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center">
          <p className="text-base text-slate-200 mb-3 font-medium">
            ¿Tienes un requerimiento especial, necesidad de póliza específica o aforo superior a 500 personas?
          </p>
          <a
            href={getWhatsAppBookingLink({ clientType: 'Consulta Personalizada Administrador' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hablar directamente con el Director de Producción al {CONTACT_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
