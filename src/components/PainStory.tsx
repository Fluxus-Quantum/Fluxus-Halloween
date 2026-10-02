import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, Zap } from 'lucide-react';
import { getWhatsAppBookingLink } from '../data/eventData';

export const PainStory: React.FC = () => {
  return (
    <section id="historia" className="py-16 md:py-24 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-orange-400 font-bold mb-2">
            La Realidad de Organizar Halloween
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-heading">
            ¿Por qué organizar Halloween se convierte cada año en una pesadilla logística?
          </h2>
          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Si eres administrador de propiedad horizontal, miembro del consejo o líder de bienestar corporativo en Bogotá, conoces muy bien esta historia.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-100 text-base sm:text-lg leading-relaxed">
              <p>
                Llega octubre y empieza el maratón: cotizar el sonido con un técnico independiente, la animación con un grupo recreativo, los disfraces con otro proveedor, las crispetas y dulces con un distribuidor y la escenografía con un tercero.
              </p>
              <p>
                El 31 de octubre a las 3:00 PM, el camión del sonido está atascado en la Autopista Norte, el animador envía un reemplazo que nadie conoce, el salón comunal está a oscuras y los niños empiezan a llegar con sus padres impacientes.
              </p>
              <p className="font-bold text-white text-lg sm:text-xl">
                El resultado: el organizador pasa la tarde con taquicardia, cargando cables y recibiendo reclamos en vez de disfrutar con su comunidad.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-purple-950/80 to-slate-900 border-2 border-purple-500/50 rounded-xl p-6 relative">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-3">
                <Zap className="w-4 h-4 fill-orange-400" />
                <span>Nuestra Promesa 360°</span>
              </div>
              <blockquote className="text-white font-semibold text-lg leading-relaxed italic">
                "Un evento memorable no se mide por la cantidad de contratos firmados, sino por la tranquilidad con la que el organizador disfruta el aplauso final de su gente."
              </blockquote>
              <div className="mt-4 pt-4 border-t border-purple-700/60 text-xs sm:text-sm text-slate-300 font-medium">
                Equipo de Producción de Fluxus Quantum
              </div>
            </div>
          </div>
        </div>

        {/* Cuadro comparativo de dolor vs solución integral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card Caos de contratar por separado */}
          <div className="bg-rose-950/30 border border-rose-800/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">El Caos Tradicional</h3>
                  <p className="text-sm text-rose-200 font-medium">Contratar múltiples proveedores por separado</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-100">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">5 a 6 contratos y cuentas bancarias distintas:</strong> desgastante proceso de aprobación para consejos y compras.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Nadie se hace responsable:</strong> el animador culpa al técnico de sonido y el del sonido culpa a la energía del salón.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Personal informal:</strong> grave riesgo para la administración.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Descoordinación de horarios:</strong> el show empieza con retraso y el catering se queda frío o se agota antes de tiempo.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-800/50 text-sm text-rose-200 font-semibold">
              Impacto: Estrés extremo para el administrador y quejas en la asamblea de copropietarios.
            </div>
          </div>

          {/* Card Tranquilidad Integral 360 */}
          <div className="bg-gradient-to-b from-purple-950/40 to-slate-900 border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between glow-purple relative">
            <div className="absolute -top-3.5 right-6 bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
              Experiencia Verificada
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">La Tranquilidad Integral 360°</h3>
                  <p className="text-sm text-emerald-300 font-semibold">Todo resuelto con un solo interlocutor experto</p>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-slate-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Cotización Unificada y una Sola Logística:</strong> un solo contrato formal, factura electrónica y póliza de cumplimiento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Director de producción in situ:</strong> un profesional coordina minuto a minuto sonido, shows, luces y entrega de alimentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Staff 100% verificado:</strong> planillas de ARL al día, carné de manipulación y protocolo de seguridad industrial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-bold">Montaje listo 2 horas antes:</strong> pruebas de sonido completadas antes de que llegue la primera familia.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/30 flex items-center justify-between">
              <span className="text-sm text-emerald-300 font-bold">Tú solo disfrutas y recibes las felicitaciones</span>
              <a
                href="#packs"
                className="inline-flex items-center gap-1.5 text-sm text-orange-400 hover:text-orange-300 font-extrabold transition-colors"
              >
                <span>Ver los 3 Packs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
