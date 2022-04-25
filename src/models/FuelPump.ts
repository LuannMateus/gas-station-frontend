import { Tank } from './Tank';

export type FuelPump = {
  id: string;
  pricePerLiter: number;
  tank: string;
  type: string;
};

export type FuelPumpWithTank = {
  id: string;
  pricePerLiter: number;
  tank: Tank;
  type: string;
};
