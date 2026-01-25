import React, { useState, useRef } from 'react';
import { 
  Cpu, 
  ShieldCheck,
  Database,
  Info,
  Lock,
  Upload,
  Image as ImageIcon,
  X,
  CheckCircle2
} from 'lucide-react';
import Hero from './components/Hero.tsx';
import { TECH_DOCS } from './constants.tsx';

const App: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    setAccessCode(code);
    if (code === '1964B') {
      setIsAuthorized(true);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const remainingSlots = 4 - images.length;
    const filesToProcess = (Array.from(files) as File[]).slice(0, remainingSlots);

    filesToProcess.forEach((file: File) => {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prev => [...prev, reader.result as string].slice(0, 4));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                Diseñado para analistas que requieren precisión técnica. Desde el <strong>Modo Pincel</strong> para chartismo manual hasta el análisis profundo de <strong>Gemini Pro</strong>, cada herramienta está optimizada para detectar lo que otros ignoran.
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

        {/* 4. SECCIÓN ACCESO Y CARGA DE IMÁGENES */}
        <section className="bg-gradient-to-r from-slate-950 to-cyan-950/30 border-y border-slate-900 py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {!isAuthorized ? (
              <div className="max-w-md mx-auto text-center space-y-8">
                <div className="inline-block p-4 bg-slate-900/50 rounded-full border border-slate-800 mb-4">
                  <Lock className="w-8 h-8 text-cyan-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-4">Módulo <span className="text-cyan-400">Restringido</span></h2>
                  <p className="text-slate-400 text-sm mb-8">Ingrese el código de seguridad para habilitar el visor de activos del sistema.</p>
                  
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="INGRESE CÓDIGO" 
                      value={accessCode}
                      onChange={handleCodeChange}
                      className="w-full bg-slate-900/50 border-b-2 border-slate-800 py-4 px-6 text-center text-2xl font-black tracking-[0.5em] text-cyan-400 focus:outline-none focus:border-cyan-500 transition-all placeholder:text-slate-700 uppercase"
                    />
                    <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan-400 group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold uppercase mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Acceso Concedido
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Visor de <span className="text-cyan-400">Activos Gráficos</span></h2>
                  <p className="text-slate-500 text-sm">Cargue hasta 4 capturas de análisis para visualización técnica permanente.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 group">
                      <img src={img} alt={`Análisis ${idx + 1}`} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 p-1.5 bg-rose-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  
                  {images.length < 4 && (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="aspect-square rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 hover:border-cyan-500/50 transition-all flex flex-col items-center justify-center gap-3 text-slate-500 hover:text-cyan-400"
                    >
                      <Upload className="w-8 h-8" />
                      <span className="text-xs font-bold uppercase tracking-wider">Cargar JPG</span>
                    </button>
                  )}
                </div>

                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/jpeg,image/jpg"
                  multiple
                  className="hidden"
                />

                <div className="flex justify-center gap-8 pt-8 opacity-40">
                  <div className="flex items-center gap-2 text-[10px] text-white font-bold"><ImageIcon className="w-3.5 h-3.5 text-cyan-500" /> FORMATO JPEG</div>
                  <div className="flex items-center gap-2 text-[10px] text-white font-bold"><Database className="w-3.5 h-3.5 text-cyan-500" /> LOCAL STORAGE</div>
                  <div className="flex items-center gap-2 text-[10px] text-white font-bold"><ShieldCheck className="w-3.5 h-3.5 text-cyan-500" /> ENCRIPTACIÓN 256B</div>
                </div>
              </div>
            )}
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