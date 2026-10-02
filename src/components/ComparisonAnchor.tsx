import React from 'react';
import { Check, X, MessageCircle, Sparkles, Shield, ArrowDown } from 'lucide-react';
import { COMPARISON_DATA, CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const ComparisonAnchor: React.FC = () => {
  return (
    <section id="comparativa" className="py-16 md:py-24 bg-[#0F172A] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOQUE 11: Tabla Comparativa */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-purple-300 font-bold mb-2">
            Toma una Decisión Inteligente
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            ¿Contratar Proveedores por Separado o el Sistema Integral 360°?
          </h2>
          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Compara objetivamente los dos caminos que puede tomar el comité o la administración para este Halloween:
          </p>
        </div>

        {/* Comparison Table Desktop & Cards Mobile */}
        <div className="overflow-hidden rounded-2xl border-2 border-slate-700 shadow-2xl bg-slate-900 mb-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-700 bg-slate-950">
                  <th className="py-5 px-6 text-sm sm:text-base font-bold text-white w-1/3 font-heading">
                    Aspecto Crítico del Evento
                  </th>
                  <th className="py-5 px-6 text-sm sm:text-base font-bold text-rose-300 bg-rose-950/30 w-1/3 border-l border-r border-slate-700 font-heading">
                    Contratar Proveedores por Separado
                  </th>
                  <th className="py-5 px-6 text-sm sm:text-base font-bold text-emerald-300 bg-emerald-950/50 w-1/3 font-heading">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>Sistema Integral 360° (Fluxus Quantum)</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm sm:text-base">
                {COMPARISON_DATA.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-slate-800/50 transition-colors ${
                      row.highlight ? 'bg-slate-800/30' : ''
                    }`}
                  >
                    <td className="py-4.5 px-6 font-bold text-white">
                      {row.criterion}
                    </td>
                    <td className="py-4.5 px-6 text-slate-200 bg-rose-950/15 border-l border-r border-slate-800 font-normal">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4.5 h-4.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.separate}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 text-slate-100 bg-emerald-950/30 font-medium">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-white font-semibold">{row.system360}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-950 p-4 border-t border-slate-700 text-sm text-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 font-medium">
            <span>✓ Todos los contratos incluyen póliza de cumplimiento y soporte operativo in situ.</span>
            <span className="text-orange-400 font-bold">100% coordinado por nuestro equipo</span>
          </div>
        </div>

        {/* BLOQUE 12: CTA Principal #1 Gigante */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative glow-whatsapp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-black uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Reserva Segura sin Riesgos</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4 font-heading">
            ¿Listo para delegar todo el estrés y garantizar un evento aplaudido por todos?
          </h3>
          <p className="text-slate-100 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Escríbenos ahora mismo y recibe una cotización formal detallada en menos de 15 minutos adaptada al salón y número de familias de tu conjunto o empresa.
          </p>

          {/* Botón CTA #1 gigante en Verde WhatsApp */}
          <div className="flex flex-col items-center justify-center">
            <a
              href={getWhatsAppBookingLink({ clientType: 'Cotización Principal Comparativa' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg sm:text-xl font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all transform hover:scale-[1.02] active:scale-[0.98] glow-whatsapp shadow-2xl shadow-green-900/40"
            >
              <MessageCircle className="w-7 h-7 fill-white text-[#22C55E]" />
              <span>Solicitar Cotización Inmediata en WhatsApp</span>
            </a>

            {/* Micro-texto requerido */}
            <p className="mt-4 text-sm sm:text-base text-emerald-300 font-bold tracking-wide">
              (Atención inmediata vía WhatsApp al {CONTACT_INFO.phone})
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
