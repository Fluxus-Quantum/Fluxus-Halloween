import React from 'react';
import { COMPARISON_DATA } from '../data/halloweenData';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, MessageCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparativa" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#22C55E]">
            Decisión Inteligente e Informada
          </span>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mt-2">
            Tabla Comparativa: Dos Formas de Organizar Halloween
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Compara objetivamente la carga operativa, el riesgo y el resultado de contratar proveedores dispersos frente a nuestro sistema integral.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl mb-12 bg-[#0B1326]/80 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/90">
                  <th className="p-4 sm:p-6 text-sm font-outfit font-bold text-slate-300 w-1/3">
                    Criterio de Evaluación
                  </th>
                  <th className="p-4 sm:p-6 text-sm font-outfit font-bold text-red-400 w-1/3 bg-red-950/20">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span>Contratar por Separado</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 text-sm font-outfit font-bold text-[#22C55E] w-1/3 bg-emerald-950/30">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      <span>Sistema Fluxus 360°</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:p-6 font-semibold text-white">
                      {row.criterion}
                    </td>
                    <td className="p-4 sm:p-6 text-slate-400 bg-red-950/10">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.traditionalPain}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-emerald-300 font-medium bg-emerald-950/20">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <span>{row.fluxusBenefit}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High Conversion Bottom Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#152243] via-[#0B1326] to-[#152243] border-2 border-[#22C55E]/60 text-center glow-green shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
              ¿Listo para asegurar la fecha de tu conjunto o empresa sin estrés?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Comunícate hoy mismo para verificar disponibilidad del calendario de octubre y recibir propuesta adaptada a tu presupuesto comunal o empresarial.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573209403080?text=Hola%2C%20solicito%20cotizaci%C3%B3n%20inmediata%20del%20Sistema%20Halloween%20Integral%20360%C2%B0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-outfit font-extrabold text-base tracking-wide uppercase transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Solicitar Cotización por WhatsApp</span>
              </a>

              <a
                href="#cotizar"
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
              >
                Llenar Formulario Web
              </a>
            </div>

            <p className="text-xs text-slate-400 font-medium">
              Atención inmediata en Bogotá vía WhatsApp: <strong>3209403080</strong> &bull; Respuesta promedio en 5 a 10 min.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
