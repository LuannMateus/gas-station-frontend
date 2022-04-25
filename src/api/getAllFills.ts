import { Fill } from '../models/Fill';

export const getAllFills = async (): Promise<Fill[]> => {
  const fills = await fetch(`${process.env.REACT_APP_API_URl}/fills/`);

  const data = await fills.json();

  return data;
};
