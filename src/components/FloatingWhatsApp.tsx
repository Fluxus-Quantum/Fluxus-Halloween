import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {showTooltip && (
        <div className="bg-[#101B35] border border-slate-700/80 px-3.5 py-2 rounded-2xl text-xs text-slate-200 shadow-2xl backdrop-blur-md flex items-center gap-2.5 animate-in slide-in-from-bottom-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">Asesor Bogotá Disponible</span>
            <span className="text-slate-400">Cotizaciones en tiempo real</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/573209403080?text=Hola%2C%20estoy%20viendo%20la%20p%C3%A1gina%20y%20quiero%20cotizar%20el%20evento%20de%20Halloween%20360%C2%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white flex items-center justify-center shadow-2xl glow-green transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Contactar por WhatsApp al 3209403080"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
