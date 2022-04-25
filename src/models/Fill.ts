import { FuelPumpWithTank } from './FuelPump';

export type Fill = {
  id?: string;
  pump: string;
  amount: number;
  quantityLiters?: number;
  taxPaid?: number;
  fill_at?: string;
};

export type FillWithFuelPumpAndTank = {
  id?: string;
  pump: FuelPumpWithTank;
  amount: number;
  quantityLiters?: number;
  taxPaid?: number;
  fill_at?: string;
};
