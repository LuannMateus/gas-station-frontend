import { FuelPump } from '../models/FuelPump';

export const getAllFuelPumps = async (): Promise<FuelPump[]> => {
  const fuelPumps = await fetch(`${process.env.REACT_APP_API_URl}/fuelPumps/`);

  const data = await fuelPumps.json();

  return data;
};
