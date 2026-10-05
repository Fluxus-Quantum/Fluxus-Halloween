import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, HeartHandshake, Sparkles, Volume2, Users, FileCheck } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section id="por-que-360" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1326] border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Pain Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#F97316]">
            El Desgaste Tradicional de Octubre
          </span>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
            ¿Por qué organizar Halloween en tu conjunto o empresa suele terminar en agotamiento extremo?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Como Administrador de Propiedad Horizontal o líder de Gestión Humana, tu tiempo es oro.
            Contratar proveedores independientes genera cuellos de botella que arruinan la experiencia comunitaria.
          </p>
        </div>

        {/* 2 Columns: Caos vs Tranquilidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl mb-20">
          {/* Columna Izquierda: El Caos Tradicional */}
          <div className="p-8 sm:p-10 bg-slate-950/80 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div>
              <div className="flex items-center gap-3 text-red-400 mb-6">
                <XCircle className="w-8 h-8 text-red-400 shrink-0" />
                <h3 className="font-outfit text-xl font-bold text-white">
                  El Caos de Contratar por Separado
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-base">&times;</span>
                  <span>
                    <strong className="text-white">5 Contratos y 5 Facturas:</strong> Procesos engorrosos de aprobación en comités de copropiedad o tesorería corporativa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-base">&times;</span>
                  <span>
                    <strong className="text-white">Descoordinación en Montaje:</strong> La decoración llega tarde, los animadores no están listos y el catering se enfría.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-base">&times;</span>
                  <span>
                    <strong className="text-white">Echarse la Culpa:</strong> Si el sonido falla o la comida es insuficiente, un proveedor culpa al otro y nadie responde.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-base">&times;</span>
                  <span>
                    <strong className="text-white">Riesgos y Quejas:</strong> Personal improvisado, cables sueltos que causan tropiezos y quejas formales de residentes.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 p-3.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-300 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Resultado: Estrés extremo para ti y reclamos innecesarios de la comunidad.</span>
            </div>
          </div>

          {/* Columna Derecha: Tranquilidad con Fluxus 360 */}
          <div className="p-8 sm:p-10 bg-gradient-to-br from-[#101B35] via-[#152243] to-[#0B1326] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#22C55E] mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#22C55E] shrink-0" />
                <h3 className="font-outfit text-xl font-bold text-white">
                  La Tranquilidad con el Sistema 360°
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1 Solo Responsable Directo:</strong> Un director de producción a tu disposición por WhatsApp antes, durante y después.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Cronograma Milimétrico:</strong> Montaje técnico anticipado 2 a 3 horas antes para pruebas con salón cerrado.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Calidad Teatral Homogénea:</strong> Actores profesionales, caracterizaciones de impacto y sonido calibrado.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Seguridad &amp; Soporte:</strong> Personal formalizado con normas de bioseguridad y prevención de riesgos.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Resultado: Felicitaciones unánimes del Consejo, directivos y familias.</span>
            </div>
          </div>
        </div>

        {/* 3 Master Pillars Grid */}
        <div id="beneficios" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-400">
            Propuesta de Valor Probada
          </span>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Diseñado Específicamente para la Realidad de Bogotá
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Entendemos los requerimientos técnicos de acústica, convivencia vecinal y protocolos de acceso en Bogotá y municipios aledaños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pilar 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#101B35] border border-slate-800 hover:border-[#7C3AED]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-purple-300 mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                1. Contrato Unificado &amp; Un Solo Pago
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Un único contrato formal, factura o cuenta de cobro legal con RUT para una rendición de cuentas transparente e inmediata ante el Consejo o Revisoría Fiscal.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-semibold text-purple-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Aprobación rápida en comités</span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#101B35] border border-slate-800 hover:border-[#F97316]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F97316]/20 border border-[#F97316]/30 flex items-center justify-center text-orange-300 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                2. Dinámicas Multiedad Sincronizadas
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Superamos el error de fiestas aburridas para adultos. Diseñamos espectáculos interactivos que entretienen a niños pequeños, divierten a adolescentes y suman a padres.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-semibold text-[#F97316] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Participación comunitaria al 100%</span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#101B35] border border-slate-800 hover:border-[#22C55E]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] mb-5">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-white mb-2">
                3. Acústica Calibrada Sin Molestias
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Sonido nítido que respeta los límites de decibeles de salones comunales y auditorios cerrados en Bogotá. Cero quejas de vecinos que no participan en el evento.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Convivencia pacífica garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
