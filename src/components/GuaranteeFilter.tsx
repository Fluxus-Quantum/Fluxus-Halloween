import React from 'react';
import { ShieldAlert, CheckCircle, XCircle, Clock, MessageSquare, Award, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const GuaranteeFilter: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* BLOQUE 7: Card Garantía y Soporte Continuo VIP (Col-span 7) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 rounded-2xl border-2 border-emerald-500/50 p-6 sm:p-9 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
              Compromiso de Honor
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    Garantía Blindada 360° & Soporte VIP vía WhatsApp
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-300 font-semibold">
                    Atención directa e ininterrumpida antes, durante y después del evento
                  </p>
                </div>
              </div>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Entendemos la enorme responsabilidad que recae sobre un administrador o directivo de bienestar ante la asamblea o la gerencia general. Por eso respaldamos nuestro servicio con 3 cláusulas contractuales innegociables:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">Cláusula de Puntualidad Estricta</h4>
                    <p className="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                      Montaje técnico terminado 2 horas antes de la apertura. Si por causa imputable a nosotros el inicio se retrasa 1 solo minuto, asumimos una compensación directa en factura.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl p-4">
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">Canal VIP de WhatsApp Directo con el Productor</h4>
                    <p className="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                      Sin intermediarios ni conmutadores: tienes el contacto directo del Director de Producción asignado para resolver dudas de aforo, conexiones eléctricas o detalles del show al instante.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">Cumplimiento Normativo y Pólizas</h4>
                    <p className="text-sm sm:text-base text-slate-200 mt-1 leading-relaxed">
                      Entrega oportuna de cédulas, ARL de cada colaborador y toda la documentación para radicación en administración con 48 horas de antelación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-sm text-slate-200 text-center sm:text-left font-medium">
                Línea exclusiva de atención: <strong className="text-white font-bold">{CONTACT_INFO.phoneFormatted}</strong>
              </span>
              <a
                href={getWhatsAppBookingLink({ clientType: 'Solicitud con Garantía VIP' })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-emerald-300 hover:text-emerald-200 underline"
              >
                Solicitar póliza y términos formales
              </a>
            </div>
          </div>

          {/* BLOQUE 8: Caja de Filtrado "A quién NO es para este servicio" (Col-span 5) */}
          <div className="lg:col-span-5 bg-rose-950/30 border-2 border-rose-800/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-rose-300 font-bold text-sm uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Filtro de Admisión de Eventos</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                Para quién <span className="text-rose-400 underline decoration-rose-500">NO</span> es este servicio
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
                Preferimos ser transparentes. Para garantizar la excelencia en cada fecha, <strong className="text-white font-bold">no atendemos</strong> solicitudes que encajen en los siguientes perfiles:
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-100">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-bold">Quienes buscan shows "piratas" o informales</strong> sin comprobante fiscal, sin pago de ARL ni planillas de seguridad social para su personal.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-bold">Quienes prefieren ahorrarse unos pesos</strong> contratando 5 proveedores desconocidos y pasar la noche del 31 de octubre estresados buscando quién conecte los bafles.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-bold">Quienes desean eventos de terror sangriento o grotesco</strong> que aterroricen a niños menores de 6 años y generen rechazo en familias de la comunidad.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-bold">Organizadores de último minuto</strong> que deciden la noche antes sin tiempo para planificar aforo, seguridad y logística técnica adecuada.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-rose-800/50 bg-slate-950/60 rounded-xl p-4 text-sm text-slate-200 text-center font-medium leading-relaxed">
              Trabajamos con <strong className="text-white font-bold">Consejos de Administración, Administradores y Líderes Corporativos</strong> que valoran la puntualidad, la reputación de su entidad y la felicidad genuina de su comunidad.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
