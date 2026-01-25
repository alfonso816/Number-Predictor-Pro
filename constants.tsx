
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
  Globe
} from 'lucide-react';

export const COLORS = {
  transparent: 'bg-transparent',
  blue: 'bg-cyan-500/40',
  red: 'bg-rose-500/40',
  green: 'bg-lime-500/40',
  yellow: 'bg-yellow-500/40',
  purple: 'bg-fuchsia-500/40'
};

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
