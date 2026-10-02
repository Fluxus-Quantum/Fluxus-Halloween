import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Sparkles, Building, Briefcase, MapPin, Calendar, Users } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const BookingCalculator: React.FC = () => {
  const [eventType, setEventType] = useState<'conjunto' | 'empresa'>('conjunto');
  const [entityName, setEntityName] = useState('');
  const [attendees, setAttendees] = useState('150 personas (Recomendado estándar)');
  const [zone, setZone] = useState('Colina / Suba');
  const [date, setDate] = useState('Sábado 24 de Octubre 2026');
  const [packageSelected, setPackageSelected] = useState('Combo Integral 360° (Packs 1, 2 y 3 + 2 Bonos GRATIS)');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const zones = [
    'Colina Campestre / San José de Bavaria',
    'Cedritos / Usaquén / Santa Bárbara',
    'Chicó / Virrey / Rosales / Nogal',
    'Salitre / Modelia / Hayuelos',
    'Chía / Cajicá / Cota / Sopó',
    'Otra zona de Bogotá / Sabana',
  ];

  const dates = [
    'Sábado 17 de Octubre 2026 (Apertura de temporada)',
    'Viernes 23 de Octubre 2026',
    'Sábado 24 de Octubre 2026 (Alta demanda)',
    'Domingo 25 de Octubre 2026',
    'Viernes 30 de Octubre 2026 (Halloween Corporativo)',
    'Sábado 31 de Octubre 2026 (Día de Halloween)',
    'Domingo 1 de Noviembre 2026 (Cierre de fin de semana)',
  ];

  const packageOptions = [
    'Combo Integral 360° (Packs 1, 2 y 3 + 2 Bonos GRATIS)',
    'Pack 1: Recreación y Shows Temáticos',
    'Pack 2: Montaje Técnico y Ambientación de Luces/Sonido',
    'Pack 3: Estaciones de Comida, Dulces y Bebidas',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = eventType === 'conjunto' ? 'Conjunto Residencial (PH)' : 'Empresa / Corporativo';
    const nameLabel = entityName.trim() ? entityName.trim() : 'Por definir';

    const customLink = getWhatsAppBookingLink({
      clientType: `${typeLabel} - ${nameLabel}`,
      attendees,
      location: zone,
      date,
      pack: packageSelected,
    });

    window.open(customLink, '_blank');
  };

  return (
    <section id="calculadora" className="py-16 md:py-24 bg-[#0B1120] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/50 text-purple-200 text-xs sm:text-sm font-black uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-purple-300" />
            <span>Pre-Reserva & Cotizador Express</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            Configura tu Propuesta Personalizada en 1 Minuto
          </h2>
          <p className="mt-3 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Selecciona los parámetros de tu evento y nuestro Director de Producción te enviará la cotización desglosada vía WhatsApp.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="bg-slate-900 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <form onSubmit={handleSendWhatsApp} className="space-y-6">
            {/* Step 1: Tipo de Evento */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2.5">
                1. ¿Para qué tipo de entidad estás organizando?
              </label>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setEventType('conjunto')}
                  className={`p-4 rounded-xl border-2 flex flex-col sm:flex-row items-center gap-3 transition-all ${
                    eventType === 'conjunto'
                      ? 'bg-purple-950/70 border-purple-400 text-white shadow-lg'
                      : 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <Building className="w-6 h-6 text-orange-400 shrink-0" />
                  <div className="text-center sm:text-left">
                    <span className="block text-sm sm:text-base font-bold font-heading">Conjunto Residencial</span>
                    <span className="text-xs text-slate-300 font-medium">PH, Club House, Torres</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setEventType('empresa')}
                  className={`p-4 rounded-xl border-2 flex flex-col sm:flex-row items-center gap-3 transition-all ${
                    eventType === 'empresa'
                      ? 'bg-purple-950/70 border-purple-400 text-white shadow-lg'
                      : 'bg-slate-950 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-6 h-6 text-orange-400 shrink-0" />
                  <div className="text-center sm:text-left">
                    <span className="block text-sm sm:text-base font-bold font-heading">Empresa Corporativa</span>
                    <span className="text-xs text-slate-300 font-medium">Gestión Humana, Bienestar</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Name / Entity */}
            <div>
              <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2">
                2. Nombre del Conjunto o Empresa (Opcional)
              </label>
              <input
                type="text"
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                placeholder="Ej. Conjunto Torres de San Martín / Tech Solutions Bogotá"
                className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Step 2: Aforo y Ubicación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>3. Asistentes Estimados</span>
                </label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="50 a 100 personas">50 a 100 personas (Comunidad pequeña)</option>
                  <option value="150 personas (Recomendado estándar)">150 personas (Estándar PH)</option>
                  <option value="200 a 300 personas">200 a 300 personas (Conjunto grande o Club)</option>
                  <option value="300 a 500+ personas">300 a 500+ personas (Macro-evento o Corporativo)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>4. Sector o Zona</span>
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {zones.map((z, i) => (
                    <option key={i} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Fecha Tentativa y Paquete */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>5. Fecha Tentativa en Octubre 2026</span>
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {dates.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>6. Paquete de Interés</span>
                </label>
                <select
                  value={packageSelected}
                  onChange={(e) => setPackageSelected(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {packageOptions.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Summary preview badge */}
            <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl text-sm text-slate-100 flex items-center justify-between">
              <div>
                <span className="text-emerald-400 font-black">✓ Bono 1 & Bono 2 aplicables:</span>{' '}
                Show de Títeres ($850k) y Planificación Operativa ($600k) incluidos sin costo en pre-reserva.
              </div>
              <span className="text-orange-400 font-black shrink-0 hidden sm:inline">100% Sin Compromiso</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4.5 px-6 rounded-xl text-base sm:text-lg font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all glow-whatsapp shadow-xl"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
              <span>Enviar Configuración y Recibir Cotización en WhatsApp</span>
            </button>

            <p className="text-center text-xs sm:text-sm text-slate-300 font-medium">
              Al hacer clic se abrirá WhatsApp con los datos listos para enviar. Te responderemos en menos de 15 minutos con disponibilidad de fecha y propuesta formal.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
