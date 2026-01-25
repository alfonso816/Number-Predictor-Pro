
import React from 'react';
import { 
  Info,
  Database,
  TrendingUp
} from 'lucide-react';
import Hero from './components/Hero.tsx';
import { TECH_DOCS, TRADING_PATTERNS } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 bg-[#020c1b]">
      <main className="flex-grow">
        <Hero />

        {/* 1. SECCIÓN DE FUNCIONAMIENTO: TENDENCIAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase mb-4">
                <Info className="w-3.5 h-3.5" />
                Módulo 01
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Funciones de <span className="text-cyan-400">Tendencia</span></h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                El corazón de Number Matrix Pro reside en su capacidad de procesar vectores de movimiento. No solo vemos números, vemos trayectorias.
              </p>
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Estado del Motor</div>
                <div className="flex items-center gap-2 text-lime-400 font-mono text-sm">
                  <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse" />
                  PROCESANDO VECTORES N/CP
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 grid gap-6">
              {TECH_DOCS.tendencias.map((doc, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/50">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 group-hover:scale-110 transition-transform shadow-xl">
                      {doc.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{doc.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{doc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SECCIÓN: ASESOR TÁCTICO (ESTRATEGIAS) */}
        <section className="bg-slate-950/50 py-24 border-y border-slate-900 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Estrategias del <span className="text-lime-400 text-glow">Asesor Táctico</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Algoritmos predictivos basados en inercia de posición y leyes de probabilidad acumulada.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {TECH_DOCS.estrategias.map((doc, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#030e20] border border-slate-800 hover:border-lime-500/30 transition-all group backdrop-blur-md">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-lime-500/10 rounded-xl text-lime-400">
                      {doc.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 mb-2">{doc.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{doc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN: INTERFAZ Y HERRAMIENTAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-900">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH_DOCS.interfaz.map((doc, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/20 border border-slate-800/50 hover:bg-slate-900/40 transition-all">
                  <div className="mb-3 text-cyan-400">{doc.icon}</div>
                  <h5 className="font-bold text-white text-sm mb-2">{doc.title}</h5>
                  <p className="text-slate-500 text-[10px] leading-normal">{doc.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase">
                Expert Tools
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Interfaz de <span className="text-cyan-400">Grado Profesional</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                Diseñado para analistas que requieren precisión técnica. Cada herramienta está optimizada para detectar patrones de inercia que otros ignoran.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">5 Colores</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter">Paleta Pincel ON</span>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">R-R4</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter">Nodos de Bloque</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. NUEVA SECCIÓN: EJEMPLOS DE TENDENCIA (SOLICITADO) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#010816]">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase mb-4">
              Visual Intelligence
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ejemplos de <span className="text-cyan-400">Tendencia Técnica</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Modelos gráficos de comportamiento inercial aplicados a la detección de reversiones y continuaciones en la matriz numérica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRADING_PATTERNS.map((pattern, idx) => (
              <div key={idx} className="group p-6 rounded-3xl bg-slate-900/10 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-900/30 backdrop-blur-sm">
                <div className="mb-4 text-xs font-black text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${idx < 3 ? 'bg-cyan-400' : 'bg-lime-400'}`} />
                  Análisis Modelo 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {pattern.title}
                </h3>
                <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-900 mb-6 flex items-center justify-center min-h-[140px] shadow-inner">
                  {pattern.svg(idx < 3 ? '#22d3ee' : '#a3e635')}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  {pattern.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-black tracking-tighter text-white uppercase">NUMBER MATRIX <span className="text-lime-400">PRO</span></span>
          </div>
          <p className="text-slate-500 text-xs max-w-md mx-auto leading-loose">
            Transformando el azar en una disciplina de Análisis de Datos e Inercia Numérica. Herramientas de grado profesional para la toma de decisiones estadísticas.
          </p>
          <div className="mt-10 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
             <p>© 2025 Intelligence Systems Group. Built for analysts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
