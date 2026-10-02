import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Clock, Phone, Sparkles, Mail, User, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppBookingLink } from '../data/eventData';

export const FinalCta: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);

    // Simulate saving contact request
    setTimeout(() => {
      try {
        const existingContacts = JSON.parse(localStorage.getItem('halloween_leads') || '[]');
        existingContacts.push({
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('halloween_leads', JSON.stringify(existingContacts));
      } catch (e) {
        console.warn('LocalStorage not available', e);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', comments: '' });
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B]/80 to-[#0F172A] border-b border-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-700/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border-2 border-purple-500/50 text-purple-200 text-xs sm:text-sm font-black mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Tu Evento de Halloween en Manos Profesionales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading">
            No dejes la celebración más esperada del año en manos de la improvisación.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Garantiza un ambiente festivo de primer nivel, montaje técnico a tiempo y diversión asegurada con un solo contrato formal y factura electrónica.
          </p>
        </div>

        {/* CTA Button Block (Acción Inmediata) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={getWhatsAppBookingLink({ clientType: 'Reserva Final Cierre' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl text-base sm:text-lg font-black text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all transform hover:scale-[1.02] glow-whatsapp shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#22C55E]" />
            <span>Hablar con un Productor por WhatsApp</span>
          </a>

          <a
            href={`tel:+57${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-2xl text-base font-bold text-white bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 transition-colors"
          >
            <Phone className="w-5 h-5 text-orange-400" />
            <span>Llamar al {CONTACT_INFO.phone}</span>
          </a>
        </div>

        {/* Formulario de Contacto al Final */}
        <div className="mt-14 max-w-2xl mx-auto bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Formulario de Contacto Directo
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-heading">
              ¿Prefieres que te contactemos nosotros?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
              Déjanos tu nombre y correo electrónico. Un director de producción te enviará el portafolio y propuesta formal.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6 px-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-heading">
                ¡Gracias por contactarnos, {formData.name}!
              </h4>
              <p className="text-slate-200 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                Hemos registrado tu solicitud. Te enviaremos toda la información y cotización detallada a{' '}
                <strong className="text-orange-400 font-bold">{formData.email}</strong> en menos de 2 horas hábiles.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/57${CONTACT_INFO.phone}?text=${encodeURIComponent(`Hola, acabo de enviar mis datos en la web a nombre de ${formData.name} (${formData.email}) y quiero coordinar la cotización de Halloween.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Acelerar atención por WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Enviar otro contacto
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="flex items-center gap-2.5 p-3.5 bg-red-950/50 border border-red-500/40 rounded-xl text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Campo Nombre */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold text-slate-200 mb-2">
                  Nombre Completo <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carolina Gómez / Administradora"
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base font-normal transition-colors"
                  />
                </div>
              </div>

              {/* Campo Correo Electrónico */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-slate-200 mb-2">
                  Correo Electrónico <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com o administracion@conjunto.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base font-normal transition-colors"
                  />
                </div>
              </div>

              {/* Botón de Envío */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mis Datos y Recibir Propuesta</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Privacidad garantizada. Respuesta formal en menos de 2 horas hábiles.</span>
              </div>
            </form>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-slate-800 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Pólizas contractuales y ARL al día</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span>Montaje 2 horas antes garantizado</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Bonos valorados en $1.450.000 COP incluidos</span>
          </span>
        </div>
      </div>
    </section>
  );
};
