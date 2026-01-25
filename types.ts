
export interface LotteryResult {
  id: string;
  numbers: number[]; // e.g. [0, 4, 5, 6]
  timestamp: Date;
  sum: number;
  parity: 'Par' | 'Impar';
  cp?: number[]; // Position changes
}

export type PaintColor = 'transparent' | 'blue' | 'red' | 'green' | 'yellow' | 'purple';

export interface RowStats {
  label: string;
  duplicates: number[];
  frequencies: string;
}
