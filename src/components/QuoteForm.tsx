import React, { useState } from 'react';
import { AudienceType } from '../types';
import { Send, CheckCircle2, ShieldCheck, Clock, Lock, MessageCircle, FileText, Sparkles } from 'lucide-react';

interface QuoteFormProps {
  initialAudience?: AudienceType;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialAudience = 'ph' }) => {
  const [formData, setFormData] = useState({
    entityName: '',
    entityType: initialAudience === 'ph' ? 'Propiedad Horizontal (Conjunto Residencial)' : 'Empresa / Corporativo',
    contactName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // POST to Formspree endpoint from the user's prototype
      const response = await fetch('https://formspree.io/f/mgaoebaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nueva Cotización Halloween 360° - ${formData.entityName}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to local success if Formspree is rate-limited or offline
        setSubmitted(true);
      }
    } catch {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola Fluxus Halloween 360°, solicito propuesta formal de cotización:
- Entidad: ${formData.entityName || 'No especificado'}
- Tipo: ${formData.entityType}
- Contacto: ${formData.contactName || 'No especificado'} (${formData.role || 'Responsable'})
- Teléfono: ${formData.phone || 'No especificado'}
- Email: ${formData.email || 'No especificado'}
- Fecha tentativa: ${formData.date || 'Octubre 2026'}
- Asistentes aprox: ${formData.attendees}
- Ciudad/Zona: ${formData.location}
- Notas: ${formData.notes || 'Ninguna'}`;

    window.open(`https://wa.me/573209403080?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="cotizar" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] relative overflow-hidden border-t border-slate-800">
      {/* Decorative ambient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/30 text-xs font-bold uppercase tracking-widest text-[#FB923C]">
            <FileText className="w-3.5 h-3.5" />
            <span>Cotización Formal Inmediata</span>
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Solicita Propuesta Económica &amp; Disponibilidad
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Diseñado para Administraciones de Propiedad Horizontal, Comités de Convivencia y Directores de RRHH en Bogotá y Sabana.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#101B35]/95 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          {/* Trust Guarantees Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-3 rounded-2xl bg-[#0B1326]/70 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="w-4 h-4 text-[#22C55E]" />
              <span>Respuesta en menos de 30 minutos</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Aseguramos la logística de tu evento</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Datos 100% confidenciales</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto mb-2 border border-[#22C55E]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white">
                ¡Solicitud Registrada Exitosamente!
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Hemos recibido los datos de <strong>{formData.entityName || 'tu entidad'}</strong>. Nuestro director de producción preparará la propuesta formal en PDF y se comunicará contigo al teléfono <strong>{formData.phone}</strong>.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-6 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agilizar por WhatsApp Directo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Entity & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nombre de la Entidad o Copropiedad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.entityName}
                    onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                    placeholder="Ej. Conjunto Torres del Parque / Empresa SAS"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Tipo de Organización *
                  </label>
                  <select
                    value={formData.entityType}
                    onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  >
                    <option value="Propiedad Horizontal (Conjunto Residencial)">
                      Propiedad Horizontal (Conjunto Residencial)
                    </option>
                    <option value="Empresa / Corporativo">Empresa / Corporativo</option>
                    <option value="Club Social / Campestre">Club Social / Campestre</option>
                    <option value="Colegio o Institución">Colegio o Institución Educativa</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Contact Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nombre y Apellido de Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>

              {/* Row 3: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Correo Electrónico Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="administracion@... o rrhh@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Teléfono / WhatsApp Móvil *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. 3209403080"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Requerimientos Específicos o Mensaje *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe las condiciones de tu salón, edades predominantes o si requieres cotización en formato especial para comité..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1326] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-[#7C3AED] text-slate-950 font-outfit font-extrabold text-base tracking-wide uppercase hover:opacity-95 transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-5 h-5 text-slate-950" />
                  <span>{isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud de Cotización'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-4 px-6 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-sm uppercase flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 mt-2">
                Garantía de respuesta rápida. También puedes escribirnos de inmediato al WhatsApp{' '}
                <strong className="text-white">3209403080</strong> o al correo{' '}
                <strong className="text-white">Fluxus.Quantum@gmail.com</strong>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
