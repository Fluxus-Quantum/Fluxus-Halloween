import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/halloweenData';
import { GalleryItem } from '../types';
import { Camera, MapPin, Maximize2, X, CheckCircle } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F172A] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-[#F97316]" />
            <span>Evidencia Real &bull; Cero Sorpresas</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Galería de Montajes Reales en Bogotá (2023 - 2025)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Puestas en escena comprobadas en salones comunales, clubes de copropiedad y auditorios corporativos en Bogotá y Sabana.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group rounded-3xl overflow-hidden bg-[#101B35] border border-slate-800 hover:border-[#7C3AED] transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B35] via-transparent to-black/30" />

                <span
                  style={{ backgroundColor: `${item.tagColor}25`, borderColor: `${item.tagColor}50`, color: item.tagColor }}
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-sm"
                >
                  {item.tag}
                </span>

                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-white text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Evento Realizado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#101B35] border border-slate-700 rounded-3xl max-w-3xl w-full p-4 sm:p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
              aria-label="Cerrar visor"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden mb-4 max-h-[60vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  {selectedPhoto.tag} &bull; {selectedPhoto.location}
                </span>
                <h3 className="font-outfit text-xl font-bold text-white mt-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <a
                href={`https://wa.me/573209403080?text=Hola%2C%20vi%20la%20foto%20del%20montaje%20${encodeURIComponent(selectedPhoto.title)}%20y%20quiero%20cotizar%20algo%20similar`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105"
              >
                Cotizar este Formato
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
