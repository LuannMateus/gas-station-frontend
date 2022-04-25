import { Fill } from '../models/Fill';

export const getOneFill = async (id: string): Promise<Fill> => {
  const fill = await fetch(`${process.env.REACT_APP_API_URl}/fills/${id}`);

  const data = await fill.json();

  return data;
};
