import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainStory } from './components/PainStory';
import { UvpBenefits } from './components/UvpBenefits';
import { SocialProof } from './components/SocialProof';
import { GuaranteeFilter } from './components/GuaranteeFilter';
import { PacksBonuses } from './components/PacksBonuses';
import { ComparisonAnchor } from './components/ComparisonAnchor';
import { FaqUrgency } from './components/FaqUrgency';
import { ProcessSection } from './components/ProcessSection';
import { BookingCalculator } from './components/BookingCalculator';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white relative">
      {/* Fondo festivo de celebración de Halloween al aire libre (transparente, colorido y coherente) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/src/assets/images/outdoor_halloween_bg_1790979835731.jpg"
          alt="Fiesta de Halloween al aire libre"
          className="w-full h-full object-cover object-top opacity-30 filter brightness-115 saturate-150"
          referrerPolicy="no-referrer"
        />
        {/* Capa de gradiente sutil para garantizar máxima legibilidad y armonía visual */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 via-[#0F172A]/80 to-[#0F172A]"></div>
      </div>

      {/* Top Bar Contract (Wordmark, Nav links, Action) */}
      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="flex-1 relative z-10">
        {/* Bloques 1 & 2: Hero Section */}
        <Hero />

        {/* Bloque 3: Intro / Historia & Validación del Dolor */}
        <PainStory />

        {/* Bloques 4 & 5: UVP (3 Columnas) & Beneficios Clave (Grid 2x3) */}
        <UvpBenefits />

        {/* Bloque 6: Social Proof & Testimonios de Administradores */}
        <SocialProof />

        {/* Bloques 7 & 8: Garantía VIP & Filtro "A quién NO es para este servicio" */}
        <GuaranteeFilter />

        {/* Bloques 9 & 10: Stack de Oferta (Los 3 Packs) & 2 Bonos Gratis Tachados */}
        <PacksBonuses />

        {/* Bloques 11 & 12: Matriz Comparativa & Mega CTA #1 WhatsApp */}
        <ComparisonAnchor />

        {/* Bloques 13 & 14: FAQ Interactivo & Banner de Urgencia Octubre 2026 */}
        <FaqUrgency />

        {/* Bloque 15: Diagrama de Proceso en 3 Pasos */}
        <ProcessSection />

        {/* Bloque 16: Pre-Reserva & Cotizador Express */}
        <BookingCalculator />

        {/* Bloque 17: Cierre de Alto Impacto con CTA Final */}
        <FinalCta />
      </main>

      {/* Bloque 18: Footer Completo */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Botón Sticky Flotante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
