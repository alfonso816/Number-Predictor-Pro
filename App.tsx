
import React from 'react';
import { 
  Info,
  Database,
  TrendingUp,
  Activity,
  Zap,
  ShieldCheck,
  Cpu,
  Layout,
  Layers,
  Target,
  ChevronRight
} from 'lucide-react';
import Hero from './components/Hero.tsx';
import { 
  TECH_DOCS, 
  TRADING_PATTERNS, 
  SYSTEM_PHILOSOPHY, 
  INDICATORS, 
  MAIN_MODULES, 
  ADVANCED_VIEWS, 
  CONTROL_TOOLS 
} from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 bg-[#020c1b]">
      <main className="flex-grow">
        <Hero />

        {/* 1. FILOSOFÍA DEL SISTEMA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-900">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Core Logic
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {SYSTEM_PHILOSOPHY.title}
              </h2>
              <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest">
                {SYSTEM_PHILOSOPHY.subtitle}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {SYSTEM_PHILOSOPHY.desc}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {['Inercia', 'Energía', 'Frecuencia'].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                    <div className="text-white font-bold text-sm mb-1">{item}</div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Convergencia Determinística</div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <div className="w-2 h-2 rounded-full bg-lime-500" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                  </div>
                </div>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-900">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400 font-mono">
                        0{i}
                      </div>
                      <div className="flex-grow h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-lime-500" style={{ width: `${30 * i}%` }} />
                      </div>
                      <div className="text-xs font-mono text-slate-500">SYNC_OK</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INDICADORES CLAVE (ADN DEL NÚMERO) */}
        <section className="bg-slate-950/50 py-24 border-y border-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Indicadores Clave: <span className="text-lime-400">El ADN del Número</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Métricas estructurales que definen el comportamiento de cada dígito en la matriz.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {INDICATORS.map((indicator, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-[#030e20] border border-slate-800 hover:border-cyan-500/30 transition-all backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-900 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                      {indicator.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-white text-lg">{indicator.title}</h4>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{indicator.subtitle}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {indicator.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-900/50 flex items-center justify-between hover:bg-slate-900/30 transition-colors">
                        <div>
                          <div className={`font-bold text-sm ${item.color}`}>{item.label}</div>
                          <div className="text-[10px] text-slate-500">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-700" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FUNCIONES Y MÓDULOS PRINCIPALES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold uppercase mb-4">
                <Layout className="w-3.5 h-3.5" />
                Módulos 02
              </div>
              <h2 className="text-4xl font-black text-white mb-6">Funciones y <span className="text-cyan-400">Módulos Principales</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Herramientas integradas para el procesamiento de datos y la generación de escenarios predictivos de alta fidelidad.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {CONTROL_TOOLS.map((tool, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800 flex flex-col items-center text-center group hover:bg-slate-900/40 transition-all">
                  <div className="mb-4 p-3 bg-slate-950 rounded-xl group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h5 className="font-bold text-white text-sm mb-1">{tool.title}</h5>
                  <p className="text-slate-500 text-[10px] uppercase tracking-tighter">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAIN_MODULES.map((module, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-lime-500/30 transition-all group">
                <div className="mb-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 w-fit group-hover:rotate-6 transition-transform">
                  {module.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{module.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VISTAS DE ANÁLISIS AVANZADO */}
        <section className="bg-slate-900/20 py-24 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Vistas de <span className="text-cyan-400">Análisis Avanzado</span></h2>
                <p className="text-slate-500">Perspectivas técnicas adicionales para detectar zonas de saturación y correlaciones espejo.</p>
              </div>
              <div className="flex gap-2">
                {['Día', 'Noche'].map(mode => (
                  <button key={mode} className="px-6 py-2 rounded-full border border-slate-800 text-xs font-bold text-slate-400 hover:bg-slate-800 transition-colors">
                    MODO {mode.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ADVANCED_VIEWS.map((view, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-900 hover:border-cyan-500/20 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-900 rounded-lg text-cyan-400">
                      {view.icon}
                    </div>
                    <h5 className="font-bold text-white">{view.title}</h5>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{view.desc}</p>
                </div>
              ))}
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

        {/* 5. EXPERT NOTE / PRO TIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-4 bg-cyan-500 rounded-2xl text-slate-950">
                <Zap className="w-8 h-8 fill-current" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Uso Recomendado por Expertos</h4>
                <p className="text-slate-400 leading-relaxed">
                  Busca filas en los <span className="text-white font-bold">Registros de Convergencia</span> que tengan la menor cantidad de guiones (<span className="text-cyan-400 font-mono">-</span>). Esas filas representan los momentos de <span className="text-lime-400 font-bold">máxima estabilidad lógica</span> del sistema, donde todos los indicadores coinciden en una trayectoria única.
                </p>
              </div>
            </div>
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
