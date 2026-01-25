
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  ReferenceLine
} from 'recharts';
import { LotteryResult } from '../types';

interface TradingChartProps {
  data: LotteryResult[];
}

const TradingChart: React.FC<TradingChartProps> = ({ data }) => {
  const chartData = [...data].reverse().map(r => ({
    time: r.timestamp.toLocaleDateString(),
    col1: r.numbers[0],
    col2: r.numbers[1],
    col3: r.numbers[2],
    col4: r.numbers[3],
    sum: r.sum
  }));

  return (
    <div className="w-full h-[500px] bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-emerald-400">Trading Mode: Flujo de Inercia</h3>
        <div className="flex gap-4 text-xs font-medium uppercase tracking-wider text-slate-400">
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Col 1</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Col 2</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Col 3</span>
          <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Col 4</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis domain={[0, 9]} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Line type="monotone" dataKey="col1" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="col2" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="col3" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="col4" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <ReferenceLine y={4.5} label="Mediana" stroke="#ef4444" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradingChart;
