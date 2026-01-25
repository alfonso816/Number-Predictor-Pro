
import React, { useState } from 'react';
import { LotteryResult, PaintColor } from '../types';
import { COLORS } from '../constants';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

interface MatrixTableProps {
  data: LotteryResult[];
  paintMode: boolean;
  activeColor: PaintColor;
}

const MatrixTable: React.FC<MatrixTableProps> = ({ data, paintMode, activeColor }) => {
  const [paintedCells, setPaintedCells] = useState<Record<string, PaintColor>>({});

  const togglePaint = (rowId: string, colIndex: number) => {
    if (!paintMode) return;
    const key = `${rowId}-${colIndex}`;
    setPaintedCells(prev => ({
      ...prev,
      [key]: prev[key] === activeColor ? 'transparent' : activeColor
    }));
  };

  const getTrendIcon = (current: number, previous: number | undefined) => {
    if (previous === undefined) return <Minus className="w-3 h-3 text-slate-500" />;
    if (current > previous) return <ChevronUp className="w-3 h-3 text-emerald-500" />;
    if (current < previous) return <ChevronDown className="w-3 h-3 text-rose-500" />;
    return <Minus className="w-3 h-3 text-slate-500" />;
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800/50">
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">Fecha</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">C1</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">C2</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">C3</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">C4</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">Suma</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">Paridad</th>
            <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800">Inercia CP</th>
          </tr>
        </thead>
        <tbody className="mono">
          {data.map((row, idx) => (
            <tr key={row.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
              <td className="p-4 text-slate-500 text-xs">
                {row.timestamp.toLocaleDateString()}
              </td>
              {row.numbers.map((n, i) => (
                <td 
                  key={i} 
                  onClick={() => togglePaint(row.id, i)}
                  className={`p-4 text-center cursor-pointer transition-all ${COLORS[paintedCells[`${row.id}-${i}`] || 'transparent']}`}
                >
                  <div className="flex flex-col items-center">
                    <span className={`text-xl font-bold ${n >= 7 ? 'text-emerald-400' : n <= 2 ? 'text-rose-400' : 'text-slate-200'}`}>
                      {n}
                    </span>
                    <div className="mt-1">
                      {getTrendIcon(n, data[idx + 1]?.numbers[i])}
                    </div>
                  </div>
                </td>
              ))}
              <td className="p-4 text-center font-bold text-slate-300 bg-slate-800/10">
                {row.sum}
              </td>
              <td className="p-4 text-center">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${row.parity === 'Par' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'}`}>
                  {row.parity}
                </span>
              </td>
              <td className="p-4 text-xs text-slate-400 italic">
                {row.cp?.map(v => (v >= 0 ? `+${v}` : v)).join(' | ')}
              </td>
            </tr>
          ))}
          
          {/* Filas Especiales */}
          <tr className="bg-emerald-950/20 border-t-2 border-emerald-500/30">
            <td className="p-4 font-bold text-emerald-400">R (W1)</td>
            <td colSpan={7} className="p-4 text-xs text-slate-400">
              Duplicados: [4, 7] | Frecuencia: 0.15 | 0.22 | 0.08 | 0.31 (Densidad Media)
            </td>
          </tr>
          <tr className="bg-emerald-950/20">
            <td className="p-4 font-bold text-emerald-400">R2 (W2)</td>
            <td colSpan={7} className="p-4 text-xs text-slate-400">
              Bloque Acumulado: Estabilidad en C2 y C4 detectada.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MatrixTable;
