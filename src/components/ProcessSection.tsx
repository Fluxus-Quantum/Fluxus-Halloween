import React from 'react';
import { ClipboardCheck, Sparkles, Trophy, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppBookingLink } from '../data/eventData';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Cotización y Asesoría Express',
      duration: '< 15 minutos',
      description:
        'Nos indicas el número estimado de familias o colaboradores y el salón comunal o espacio disponible. En minutos te entregamos una propuesta modular y transparente sin sobrecostos.',
      highlights: ['Asesoría directa en WhatsApp', 'Ajuste a presupuesto de la PH', 'Sin compromisos'],
    },
    {
      number: '02',
      title: 'Personalización y Reserva Formal',
      duration: '48 horas previas',
      description:
        'Definimos el cronograma minuto a minuto, la pauta musical y radicamos en la administración toda la documentación legal: contrato, planillas de ARL al día y pólizas requeridas.',
      highlights: ['Planificación operativa de aforo', 'ARL de todo el personal', 'Facturación electrónica'],
    },
    {
      number: '03',
      title: 'Ejecución Impecable In Situ',
      duration: 'Día del Evento',
      description:
        'Nuestro equipo arriba con 3 horas de antelación. A las 2 horas antes de iniciar, el sonido está probado y el salón ambientado. Tú disfrutas mientras nuestro Director coordina cada instante.',
      highlights: ['Montaje listo 2h antes', 'Director de evento in situ', 'Éxito y aplausos garantizados'],
    },
  ];

  return (
    <section id="proceso" className="py-16 md:py-24 bg-[#0F172A] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-2">
            Metodología Comprobada
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
            Cómo Funciona: De la Idea a la Celebración en 3 Simples Pasos
          </h2>
          <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Diseñamos un proceso libre de fricción burocrática para que administrar el evento sea la parte más fácil de tu mes.
          </p>
        </div>

        {/* 3 Steps Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900 border-2 border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-purple-400 transition-colors group shadow-xl"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 font-heading">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-600">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors font-heading">
                  {step.title}
                </h3>
                <p className="text-slate-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                {step.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action beneath process */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppBookingLink({ clientType: 'Paso 1: Cotización y Asesoría' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Iniciar Paso 1: Consultar Disponibilidad de Fecha</span>
          </a>
        </div>
      </div>
    </section>
  );
};
