
import React from 'react';
import { Shield, MessageCircle } from 'lucide-react';

const CrystalLogo = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,210,255,0.4)]">
    {/* Estrellas decorativas */}
    <path d="M40 30l2 2-2 2-2-2z" fill="#00d2ff" className="animate-pulse" />
    <path d="M160 50l3 3-3 3-3-3z" fill="#39ff14" className="animate-pulse" style={{ animationDelay: '1s' }} />
    <path d="M170 140l4 4-4 4-4-4z" fill="#00d2ff" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
    <path d="M30 150l2 2-2 2-2-2z" fill="#39ff14" />
    
    {/* Base de la bola */}
    <ellipse cx="100" cy="165" rx="50" ry="15" fill="#0a1a3a" />
    <ellipse cx="100" cy="160" rx="45" ry="12" fill="#1e3a5f" />
    
    {/* La Esfera */}
    <defs>
      <radialGradient id="ballGradient" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#1e4a8f" />
        <stop offset="70%" stopColor="#020c1b" />
        <stop offset="100%" stopColor="#001530" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <circle cx="100" cy="100" r="70" fill="url(#ballGradient)" stroke="#4a6fa5" strokeWidth="2" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.3" />

    {/* Reflejo de cristal */}
    <path d="M60 60 Q 80 50 100 60" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.2" />

    {/* Números Digitales Internos */}
    <g className="mono" filter="url(#glow)">
      <text x="75" y="90" fill="#00d2ff" fontSize="24" fontWeight="900" style={{ opacity: 0.9 }}>15</text>
      <text x="105" y="90" fill="#00d2ff" fontSize="24" fontWeight="900" style={{ opacity: 0.9 }}>:</text>
      <text x="115" y="90" fill="#00d2ff" fontSize="24" fontWeight="900" style={{ opacity: 0.9 }}>0</text>
      <text x="135" y="85" fill="#00d2ff" fontSize="14" fontWeight="900" style={{ opacity: 0.7 }}>5s</text>
      
      <text x="65" y="125" fill="#39ff14" fontSize="38" fontWeight="900" className="animate-pulse">0535</text>
      <text x="55" y="115" fill="#00d2ff" fontSize="16" fontWeight="900" style={{ opacity: 0.8 }}>3</text>
    </g>

    {/* El Anillo de Saturno */}
    <ellipse 
      cx="100" 
      cy="100" 
      rx="105" 
      ry="35" 
      fill="none" 
      stroke="#c0c0c0" 
      strokeWidth="4" 
      transform="rotate(-15 100 100)" 
      strokeOpacity="0.6"
    />
    <ellipse 
      cx="100" 
      cy="100" 
      rx="105" 
      ry="35" 
      fill="none" 
      stroke="#00d2ff" 
      strokeWidth="2" 
      transform="rotate(-15 100 100)" 
      strokeOpacity="0.4"
      filter="url(#glow)"
    />
  </svg>
);

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/+573150946019?text=Hola%20deseo%20tener%20acceso%20al%20programa%20de%20Number%0APredictor%20Pro";

  return (
    <section className="relative overflow-hidden pt-6 pb-16">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* El Logo de la Bola de Cristal */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56 animate-float">
            <CrystalLogo />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          Análisis de <span className="text-cyan-400">Convergencia Determinística</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Motor de procesamiento avanzado basado en flujos de <span className="text-cyan-200 font-semibold">Inercia, Energía y Frecuencia</span>. 
          Identificamos el punto exacto donde los indicadores lógicos coinciden.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://numbers-software.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30 text-sm"
          >
            <Shield className="w-4 h-4" />
            Number Predictor Pro
          </a>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 font-bold rounded-xl hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-lg shadow-emerald-500/10 text-sm group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
