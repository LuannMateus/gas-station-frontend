import { Fill } from '../models/Fill';

export const createFill = async (body: Fill): Promise<void> => {
  await fetch(`${process.env.REACT_APP_API_URl}/fills/`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};
