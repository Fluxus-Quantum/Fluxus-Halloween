import React, { useState } from 'react';
import { AudienceType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudienceToggle } from './components/AudienceToggle';
import { PainPoints } from './components/PainPoints';
import { ServicesCarousel } from './components/ServicesCarousel';
import { PacksSection } from './components/PacksSection';
import { ComparisonTable } from './components/ComparisonTable';
import { GallerySection } from './components/GallerySection';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { FAQSection } from './components/FAQSection';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>('ph');

  const handleAudienceCTA = (audience: AudienceType) => {
    setSelectedAudience(audience);
    const formElement = document.getElementById('cotizar');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('cotizador');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1326] text-slate-100 selection:bg-[#7C3AED] selection:text-white font-sans antialiased">
      {/* Permanent Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenEstimator={handleOpenEstimator} />

        {/* 2. Interactive Audience Customizer (PH vs Corporativo) */}
        <AudienceToggle
          currentAudience={selectedAudience}
          onChange={setSelectedAudience}
          onSelectAudienceCTA={handleAudienceCTA}
        />

        {/* 3. Pain Points & 3 Master Pillars */}
        <PainPoints />

        {/* 4. Carrusel de Servicios Modular */}
        <ServicesCarousel />

        {/* 5. Packs de Servicio & Bonos Gratis de Pre-Temporada */}
        <PacksSection />

        {/* 6. Tabla Comparativa (Por Separado vs Sistema 360°) */}
        <ComparisonTable />

        {/* 7. Galería Fotográfica Real Bogotá */}
        <GallerySection />

        {/* 8. Simulador / Cotizador Interactivo en Vivo */}
        <InteractiveEstimator initialAudience={selectedAudience} />

        {/* 9. Preguntas Frecuentes & Filtro Inverso */}
        <FAQSection />

        {/* 10. Formulario Formal de Cotización */}
        <QuoteForm initialAudience={selectedAudience} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
