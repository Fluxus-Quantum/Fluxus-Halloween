import React from 'react';
import { Star, ShieldCheck, Award, ThumbsUp, Building2, Briefcase } from 'lucide-react';
import { TESTIMONIALS } from '../data/eventData';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badge Top */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-950 text-sm font-black tracking-wide uppercase mb-3 shadow-xs">
            <Award className="w-4 h-4 text-orange-600" />
            <span>+100 Celebraciones Exitosas en Bogotá y Sabana</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
            La Elección de Confianza de Administradores y Líderes de RRHH
          </h2>
          <p className="mt-3 text-slate-700 text-base sm:text-lg max-w-2xl leading-relaxed">
            Descubre por qué conjuntos de Colina, Cedritos, Usaquén, Salitre y empresas en el norte de Bogotá repiten con nosotros cada año.
          </p>
        </div>

        {/* Testimonials Grid (High-Contrast Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Location */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-sm font-black text-slate-900">5.0 / 5.0</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">{item.location}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed italic mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-orange-500 shadow-xs shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-heading">{item.name}</h4>
                  <p className="text-xs sm:text-sm font-bold text-purple-800">{item.role}</p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{item.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Trust Badges Footer */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Protocolo de Seguridad</p>
            <p className="text-base sm:text-lg font-black text-slate-900 mt-1 font-heading">ARL & Seguridad Social</p>
          </div>
          <div className="p-3">
            <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Cumplimiento Legal</p>
            <p className="text-base sm:text-lg font-black text-slate-900 mt-1 font-heading">Facturación DIAN</p>
          </div>
          <div className="p-3">
            <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Garantía Acústica</p>
            <p className="text-base sm:text-lg font-black text-slate-900 mt-1 font-heading">Calibración Salones PH</p>
          </div>
          <div className="p-3">
            <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">Registro Sanitario</p>
            <p className="text-base sm:text-lg font-black text-slate-900 mt-1 font-heading">Aval Invima</p>
          </div>
        </div>
      </div>
    </section>
  );
};
