
import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck,
  Database,
  Info,
  Lock,
  Upload,
  Image as ImageIcon,
  X,
  CheckCircle2,
  Clock,
  PlusCircle,
  TrendingUp,
  LineChart as ChartIcon
} from 'lucide-react';
import Hero from './components/Hero.tsx';
import MatrixTable from './components/MatrixTable.tsx';
import TradingChart from './components/TradingChart.tsx';
import { LotteryResult } from './types.ts';
// Import TECH_DOCS from constants.tsx to fix the "Cannot find name 'TECH_DOCS'" error
import { TECH_DOCS } from './constants.tsx';

const ASSETS_KEY = 'number_matrix_pro_assets';
const RESULTS_KEY = 'number_matrix_pro_results';
const EXPIRATION_TIME = 20 * 60 * 60 * 1000;

interface StoredImage {
  data: string;
  timestamp: number;
}

const App: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [images, setImages] = useState<StoredImage[]>([]);
  const [results, setResults] = useState<LotteryResult[]>([]);
  const [newNumbers, setNewNumbers] = useState(['', '', '', '']);
  const [showChart, setShowChart] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Inicialización de "Base de Datos" Local
  useEffect(() => {
    // 1. Cargar Imágenes (con expiración 20h)
    const savedAssets = localStorage.getItem(ASSETS_KEY);
    if (savedAssets) {
      try {
        const parsed: StoredImage[] = JSON.parse(savedAssets);
        const now = Date.now();
        const valid = parsed.filter(img => (now - img.timestamp) < EXPIRATION_TIME);
        setImages(valid);
        localStorage.setItem(ASSETS_KEY, JSON.stringify(valid));
      } catch (e) { console.error(e); }
    }

    // 2. Cargar Resultados de Lotería (Permanentes)
    const savedResults = localStorage.getItem(RESULTS_KEY);
    if (savedResults) {
      try {
        const parsed = JSON.parse(savedResults).map((r: any) => ({
          ...r,
          timestamp: new Date(r.timestamp)
        }));
        setResults(parsed);
      } catch (e) { console.error(e); }
    }
    
    if (sessionStorage.getItem('isAuthorized') === 'true') setIsAuthorized(true);
  }, []);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toUpperCase();
    setAccessCode(code);
    if (code === '1964B') {
      setIsAuthorized(true);
      sessionStorage.setItem('isAuthorized', 'true');
    }
  };

  const addResult = () => {
    if (newNumbers.some(n => n === '' || isNaN(Number(n)))) return;
    
    const nums = newNumbers.map(Number);
    const sum = nums.reduce((a, b) => a + b, 0);
    
    // Calcular CP respecto al último resultado
    let cp = [0, 0, 0, 0];
    if (results.length > 0) {
      const last = results[0].numbers;
      cp = nums.map((n, i) => n - last[i]);
    }

    const newRes: LotteryResult = {
      id: `res-${Date.now()}`,
      numbers: nums,
      timestamp: new Date(),
      sum,
      parity: sum % 2 === 0 ? 'Par' : 'Impar',
      cp
    };

    const updated = [newRes, ...results];
    setResults(updated);
    localStorage.setItem(RESULTS_KEY, JSON.stringify(updated));
    setNewNumbers(['', '', '', '']);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const remaining = 4 - images.length;
    const toProcess = Array.from(files).slice(0, remaining);

    toProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = { data: reader.result as string, timestamp: Date.now() };
        setImages(prev => {
          const up = [...prev, img].slice(0, 4);
          localStorage.setItem(ASSETS_KEY, JSON.stringify(up));
          return up;
        });
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020c1b] selection:bg-cyan-500/30">
      <main className="flex-grow">
        <Hero />

        {/* MÓDULO DE BASE DE DATOS Y ANÁLISIS (SOLO SI ESTÁ AUTORIZADO) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {!isAuthorized ? (
            <div className="max-w-md mx-auto text-center p-12 bg-slate-900/20 border border-slate-800 rounded-3xl backdrop-blur-sm">
              <Lock className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-white mb-2">SISTEMA <span className="text-cyan-400 text-glow">BLOQUEADO</span></h2>
              <p className="text-slate-500 text-sm mb-8">Ingrese el código de acceso nivel 4 para habilitar la base de datos y herramientas de trading.</p>
              <input 
                type="text" 
                placeholder="CÓDIGO DE SEGURIDAD" 
                value={accessCode}
                onChange={handleCodeChange}
                className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-center text-xl font-mono text-cyan-400 focus:outline-none focus:border-cyan-500 transition-all uppercase"
              />
            </div>
          ) : (
            <div className="space-y-10">
              {/* PANEL DE CONTROL DE DATOS */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* 1. Ingreso de Datos (Database Input) */}
                <div className="lg:col-span-1 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 mb-6 text-cyan-400 font-bold uppercase text-xs tracking-widest">
                    <Database className="w-4 h-4" /> Base de Datos Local
                  </div>
                  <h3 className="text-white font-bold mb-4">Ingresar Nuevo Sorteo</h3>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {newNumbers.map((val, i) => (
                      <input 
                        key={i}
                        type="number"
                        min="0"
                        max="9"
                        value={val}
                        onChange={(e) => {
                          const n = [...newNumbers];
                          n[i] = e.target.value.slice(0, 1);
                          setNewNumbers(n);
                        }}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-center text-xl font-black text-white focus:border-cyan-500 focus:outline-none"
                      />
                    ))}
                  </div>
                  <button 
                    onClick={addResult}
                    className="w-full bg-cyan-500 text-slate-950 font-black py-3 rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <PlusCircle className="w-5 h-5" /> GUARDAR EN MEMORIA
                  </button>
                  <p className="text-[10px] text-slate-500 mt-4 leading-tight italic">
                    * Los datos se guardan permanentemente en este dispositivo.
                  </p>
                </div>

                {/* 2. Visualización y Persistencia de Activos (Imágenes 20h) */}
                <div className="lg:col-span-2 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
                   <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-lime-400 font-bold uppercase text-xs tracking-widest">
                      <ImageIcon className="w-4 h-4" /> Almacén de Activos (20h)
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">OCUPACIÓN: {images.length}/4</span>
                   </div>
                   
                   <div className="grid grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 group bg-slate-950">
                        <img src={img.data} className="w-full h-full object-cover" alt="Sorteo" />
                        <button onClick={() => {
                          const up = images.filter((_, i) => i !== idx);
                          setImages(up);
                          localStorage.setItem(ASSETS_KEY, JSON.stringify(up));
                        }} className="absolute top-1 right-1 p-1 bg-rose-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                    {images.length < 4 && (
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="aspect-video border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center text-slate-600 hover:border-cyan-500 hover:text-cyan-500 transition-all"
                      >
                        <Upload className="w-6 h-6" />
                      </button>
                    )}
                   </div>
                   <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                </div>
              </div>

              {/* BOTONES DE VISTA */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowChart(false)}
                  className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${!showChart ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
                >
                  <TrendingUp className="w-4 h-4" /> MATRIZ DE DATOS
                </button>
                <button 
                  onClick={() => setShowChart(true)}
                  className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${showChart ? 'bg-lime-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
                >
                  <ChartIcon className="w-4 h-4" /> TRADING MODE
                </button>
              </div>

              {/* VISUALIZACIÓN PRINCIPAL DE LA "DB" */}
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {showChart ? (
                  <TradingChart data={results} />
                ) : (
                  <MatrixTable data={results} paintMode={true} activeColor="blue" />
                )}
              </div>
            </div>
          )}
        </section>

        {/* SECCIÓN INFORMATIVA (ESTÁTICA) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase mb-4">
                <Info className="w-3.5 h-3.5" />
                Documentación Técnica
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Lógica de <span className="text-cyan-400">Inercia</span></h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                El sistema procesa vectores de movimiento N/CP. No solo vemos números aislados, vemos el flujo de probabilidad en tiempo real.
              </p>
            </div>
            
            <div className="md:w-2/3 grid gap-6">
              {Object.values(TECH_DOCS).flat().slice(0, 4).map((doc: any, idx) => (
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
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-black tracking-tighter text-white uppercase">NUMBER MATRIX <span className="text-lime-400">PRO</span></span>
          </div>
          <p className="text-slate-500 text-xs max-w-md mx-auto leading-loose">
            Transformando el azar en una disciplina de Análisis de Datos e Inercia Numérica. Base de datos local activa.
          </p>
          <div className="mt-10 pt-10 border-t border-slate-900 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
             <p>© 2025 Intelligence Systems Group. No Backend required.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
