tificadoimport React from 'react';
import { Users, Shield, Sliders, CheckCircle2, Clock, FileText, Music2, Sparkles, Utensils, HeartHandshake } from 'lucide-react';

export const UvpBenefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#0F172A] border-b border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOQUE 4: UVP (Propuesta Única de Valor) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-purple-300 font-bold mb-2">
            Nuestra Propuesta Única de Valor
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance font-heading">
            Un solo interlocutor. Cero complicaciones logísticas.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-200">
              Diversión 100% garantizada para todas las edades.
            </span>
          </h2>
          <p className="mt-5 text-slate-100 text-base sm:text-lg leading-relaxed font-normal">
            Diseñado desde cero para satisfacer los estándares de exigencia de administraciones de conjuntos residenciales y directores de bienestar en Bogotá.
          </p>
        </div>

        {/* Grid de 3 columnas UVP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Card 1: Logística Unificada */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-purple-400 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-6">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">1. Logística Unificada</h3>
            <p className="text-slate-100 text-base leading-relaxed mb-5">
              Se acabó coordinar llamadas entre sonidistas, recreadores y pasteleros. Un <strong className="text-white font-bold">Director de Producción exclusivo</strong> lidera todo el equipo técnico y operativo in situ de inicio a fin.
            </p>
            <div className="text-sm text-purple-200 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cronograma minuto a minuto garantizado</span>
            </div>
          </div>

          {/* Card 2: Multiedad Inteligente */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-orange-400 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-orange-900/40 border border-orange-500/40 flex items-center justify-center text-orange-300 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">2. Dinámicas Multiedad</h3>
            <p className="text-slate-100 text-base leading-relaxed mb-5">
              Evitamos los shows genéricos. Diseñamos bloques específicos: <strong className="text-white font-bold">títeres y magia para los más pequeños</strong>, retos y concurso de disfraces para jóvenes, y show musical prémium para adultos.
            </p>
            <div className="text-sm text-orange-200 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% de la comunidad integrada y feliz</span>
            </div>
          </div>

          {/* Card 3: Seguridad y Rigor Institucional */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-emerald-400 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-300 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">3. Seguridad Institucional</h3>
            <p className="text-slate-100 text-base leading-relaxed mb-5">
              Tranquilidad total para la administración: <strong className="text-white font-bold">Coordinación de cada integrante</strong>del equipo, y procesos operativos estandarizados que garantizan un servicio seguro y confiable.
            </p>
            <div className="text-sm text-emerald-200 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Cero contingencias Logisticas</span>
            </div>
          </div>
        </div>

        {/* BLOQUE 5: Beneficios Clave (Grid 2x3 con viñetas estilizadas) */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-2">
              Excelencia Operativa
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
              6 Razones por las que los Administradores de Bogotá nos Eligen
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Cero Retrasos en Montaje</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Nuestro equipo llega con 3 horas de anticipación y finaliza pruebas técnicas 2 horas antes de recibir a los primeros vecinos.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Personal Uniformado & ARL</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Staff debidamente identificado con carné institucional y dotación.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Presupuesto Cerrado</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Cotización transparente sin costos ocultos de transporte, extensiones eléctricas o cargos imprevistos el día del evento.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <Music2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Acústica Calibrada</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Sonido profesional lineal y micrófonos inalámbricos calibrados con decibelímetro para evitar reclamos o sanciones por ruido en la PH.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Ambientación Prémium</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Escenografía elegante y photobooth temático de alta estética, ideal para que los residentes compartan fotos orgullosos en redes sociales.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-500 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 font-heading">Alimentos Certificados</h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    Golosinas de primeras y estaciones de crispetas/algodón operadas con normas estrictas de bioseguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
