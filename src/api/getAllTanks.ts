'*';
import { Tank } from '../models/Tank';

export const getAllTanks = async (): Promise<Tank[]> => {
  const fills = await fetch(`${process.env.REACT_APP_API_URl}/tanks/`);

  const data = await fills.json();

  return data;
};
