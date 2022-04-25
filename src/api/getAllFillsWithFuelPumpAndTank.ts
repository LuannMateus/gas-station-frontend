import { FillWithFuelPumpAndTank } from '../models/Fill';

export const getAllFillsWithFuelPumpAndTank = async (): Promise<
  FillWithFuelPumpAndTank[]
> => {
  const fills = await fetch(
    `${process.env.REACT_APP_API_URl}/fillsWithFuelPumpAndTank/`,
  );

  const data = await fills.json();

  return data;
};
