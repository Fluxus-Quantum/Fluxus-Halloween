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
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Bar Contract (Wordmark, Nav links, Action) */}
      <Navbar />

      <main className="flex-1">
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
      <Footer />

      {/* Botón Sticky Flotante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
