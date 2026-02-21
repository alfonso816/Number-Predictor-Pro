
import React from 'react';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  CloudLightning, 
  Paintbrush, 
  Cpu,
  Zap,
  Activity,
  GitBranch,
  Repeat,
  Layers,
  Search,
  LineChart,
  Globe,
  Thermometer,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Table,
  ClipboardList,
  BarChart,
  Bot,
  EyeOff,
  Flame,
  PieChart,
  ArrowLeftRight,
  Gamepad2,
  RefreshCw
} from 'lucide-react';

export const COLORS = {
  transparent: 'bg-transparent',
  blue: 'bg-cyan-500/40',
  red: 'bg-rose-500/40',
  green: 'bg-lime-500/40',
  yellow: 'bg-yellow-500/40',
  purple: 'bg-fuchsia-500/40'
};

// Patrones visuales extraídos de la imagen de referencia
export const TRADING_PATTERNS = [
  {
    title: "Double Top Pattern",
    desc: "Dos picos en un nivel de resistencia similar. Indica una fuerte reversión bajista inminente.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M10 50 L30 15 L50 40 L70 15 L90 50" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="15" x2="80" y2="15" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Triple Top Pattern",
    desc: "Tres picos que fallan al romper la resistencia superior. Señal de agotamiento de la tendencia alcista.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M5 50 L20 15 L35 40 L50 15 L65 40 L80 15 L95 50" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="15" x2="85" y2="15" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Head and Shoulders",
    desc: "Hombro-Cabeza-Hombro. El pico central es el más alto. El patrón más confiable de reversión estructural.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M10 50 L25 30 L40 45 L55 10 L70 45 L85 30 L95 50" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="45" x2="90" y2="45" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Double Bottom Pattern",
    desc: "Formación en 'W'. El precio toca suelo dos veces. Indica acumulación para un rebote alcista.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M10 10 L30 45 L50 20 L70 45 L90 10" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="45" x2="80" y2="45" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Triple Bottom Pattern",
    desc: "Tres suelos en un nivel impenetrable. El soporte es sólido y se espera una expansión alcista.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M5 10 L20 45 L35 20 L50 45 L65 20 L80 45 L95 10" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="45" x2="85" y2="45" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Inverse Head and Shoulders",
    desc: "Inversión del patrón H&S en la base. Señal de rebote alcista extremadamente potente.",
    svg: (color: string) => (
      <svg viewBox="0 0 100 60" className="w-full h-24">
        <path d="M10 10 L25 35 L40 15 L55 50 L70 15 L85 35 L95 10" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="15" x2="90" y2="15" stroke="white" strokeWidth="1" strokeDasharray="3" opacity="0.4" />
      </svg>
    )
  }
];

export const SYSTEM_PHILOSOPHY = {
  title: "Filosofía del Sistema",
  subtitle: "Motor de Análisis de Convergencia Determinística",
  desc: "El programa no es un simple generador de números aleatorios; se basa en la premisa de que los números siguen flujos de Inercia, Energía y Frecuencia. El objetivo es identificar el punto exacto donde múltiples indicadores lógicos coinciden (convergencia)."
};

export const INDICATORS = [
  {
    title: "Niveles de Energía",
    subtitle: "ADN del Número",
    icon: <Thermometer className="w-5 h-5" />,
    items: [
      { label: "L (Low)", color: "text-cyan-400", desc: "Ausencia 0-10. Inercia Activa." },
      { label: "M (Medium)", color: "text-amber-400", desc: "Ausencia 11-30. Transición." },
      { label: "A (Active)", color: "text-rose-500", desc: "Ausencia >30. Alta presión." }
    ]
  },
  {
    title: "Símbolos de Tendencia",
    subtitle: "Modos N y CP",
    icon: <TrendingUp className="w-5 h-5" />,
    items: [
      { label: "↑ Ascenso", color: "text-cyan-400", desc: "Valor mayor al anterior." },
      { label: "↓ Descenso", color: "text-rose-500", desc: "Valor menor al anterior." },
      { label: "◐ Estable", color: "text-slate-400", desc: "Repetición o inercia." }
    ]
  },
  {
    title: "CP (Change of Position)",
    subtitle: "Ritmos de Salto",
    icon: <Activity className="w-5 h-5" />,
    items: [
      { label: "Escala 0-9", color: "text-lime-400", desc: "Desplazamiento relativo circular." },
      { label: "Aceleración", color: "text-lime-400", desc: "Cambio de posición vs anterior." }
    ]
  }
];

export const MAIN_MODULES = [
  {
    title: "Matriz Principal",
    icon: <Table className="w-6 h-6 text-cyan-400" />,
    desc: "Celdas inteligentes con resaltador multicapa y red de conexiones para identificar Pares Críticos."
  },
  {
    title: "Registros de Convergencia",
    icon: <ClipboardList className="w-6 h-6 text-lime-400" />,
    desc: "Corazón analítico. Evalúa cada fila bajo 5 Pilares: Patrón N, Estructura, Red, CP y Contadores."
  },
  {
    title: "Monitor de Frecuencias",
    icon: <BarChart className="w-6 h-6 text-cyan-400" />,
    desc: "Totales horizontales y Top Patrones de 4 dígitos más repetidos en el historial global."
  },
  {
    title: "Predicciones Matrix v3",
    icon: <Bot className="w-6 h-6 text-lime-400" />,
    desc: "Motor de IA que genera 20 escenarios basados en inercia repetitiva y estructura de energía."
  }
];

export const ADVANCED_VIEWS = [
  { title: "Olvidados", icon: <EyeOff className="w-4 h-4" />, desc: "Rastreo de mayor ausencia por columna." },
  { title: "Mapa de Calor", icon: <Flame className="w-4 h-4" />, desc: "Densidad de aparición para detectar saturación." },
  { title: "Distribución", icon: <PieChart className="w-4 h-4" />, desc: "Análisis estadístico de dígitos 0-9 por columna." },
  { title: "Correlación", icon: <ArrowLeftRight className="w-4 h-4" />, desc: "Comparación Día/Noche para números espejo." }
];

export const CONTROL_TOOLS = [
  { title: "D-Pad", icon: <Gamepad2 className="w-5 h-5 text-cyan-400" />, desc: "Interfaz táctil para navegación y conexiones rápidas." },
  { title: "Auto Sync", icon: <RefreshCw className="w-5 h-5 text-lime-400" />, desc: "Escaneo y carga de sorteos reales en tiempo real." }
];

export const TECH_DOCS = {
  tendencias: [
    {
      id: 'n',
      title: "Tendencia N (Numérica)",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
      desc: "Analiza el desplazamiento directo de los dígitos. Determina si el valor en una columna sube, baja o se mantiene neutro respecto al anterior. Vital para identificar 'techos' y 'suelos' numéricos."
    },
    {
      id: 'cp',
      title: "Tendencia CP (Cambio de Posición)",
      icon: <Activity className="w-5 h-5 text-lime-400" />,
      desc: "Mide la velocidad del cambio. Analiza la distancia entre el número actual y el anterior. Una tendencia CP alcista indica expansión en la matriz, sugiriendo que las distancias entre resultados están creciendo."
    }
  ],
  estrategias: [
    {
      title: "Ley de Compensación",
      icon: <Repeat className="w-5 h-5 text-cyan-400" />,
      desc: "Basada en la regresión a la media. Identifica números 'fríos' (con más tiempo sin aparecer). El sistema asume una inercia de 'rebote' inminente por probabilidad acumulada."
    },
    {
      title: "Control de Paridad",
      icon: <Zap className="w-5 h-5 text-lime-400" />,
      desc: "Analiza la suma de los 4 dígitos. Detecta ciclos de oscilación Par/Impar. Si hay racha de pares, sugiere cambio a Impar para restaurar el equilibrio estadístico."
    },
    {
      title: "Inercia de CP",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      desc: "Detecta patrones circulares en cambios de posición. Si un CP (ej. +2, -1) se repite, predice el movimiento basándose en la 'memoria' de oscilación de la columna."
    },
    {
      title: "Flujo Diagonal",
      icon: <GitBranch className="w-5 h-5 text-lime-400" />,
      desc: "Análisis de correlación cruzada. Detecta si un número en C1 suele moverse a C2 o C3 en el siguiente sorteo, identificando flujos de energía diagonal."
    }
  ],
  interfaz: [
    {
      title: "Pincel ON (Modo Pintura)",
      icon: <Paintbrush className="w-5 h-5 text-cyan-400" />,
      desc: "Permite marcado visual con 5 colores para chartismo numérico. Facilita la detección de 'escaleras' y caminos que el ojo humano procesa más rápido que el algoritmo."
    },
    {
      title: "Filas Especiales (R-R4)",
      icon: <Layers className="w-5 h-5 text-lime-400" />,
      desc: "Nodos de procesamiento semanal. Calculan duplicados y frecuencias críticas, separando resultados por barras (|) para análisis de densidad."
    },
    {
      title: "Análisis con Gemini Pro",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      desc: "Motor de IA que aplica lógica de inercia avanzada para entregar un razonamiento táctico, explicando cómo los números probables equilibran la matriz."
    },
    {
      title: "Trading Mode (Gráfico)",
      icon: <LineChart className="w-5 h-5 text-lime-400" />,
      desc: "Visor técnico estilo MetaTrader. Convierte la matriz en gráficas de líneas con soportes y resistencias para un análisis técnico profesional."
    }
  ]
};

export const FEATURE_CARDS = [
  {
    title: "Funciones de Tendencia",
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    items: [
      { name: "Tendencia N", desc: "Desplazamiento vertical." },
      { name: "Tendencia CP", desc: "Velocidad de cambio." }
    ]
  },
  {
    title: "Asesor Táctico",
    icon: <Target className="w-6 h-6 text-lime-400" />,
    items: [
      { name: "Compensación", desc: "Números fríos." },
      { name: "Paridad", desc: "Equilibrio estadístico." }
    ]
  }
];

export const MOCK_RESULTS = Array.from({ length: 20 }).map((_, i) => {
  const nums = Array.from({ length: 4 }).map(() => Math.floor(Math.random() * 10));
  const sum = nums.reduce((a, b) => a + b, 0);
  return {
    id: `res-${i}`,
    numbers: nums,
    timestamp: new Date(Date.now() - i * 86400000),
    sum,
    parity: sum % 2 === 0 ? 'Par' as const : 'Impar' as const,
    cp: nums.map(n => Math.floor(Math.random() * 5) - 2)
  };
});
