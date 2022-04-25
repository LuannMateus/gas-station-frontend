import { Fill } from '../models/Fill';

export const updateOneFill = async (id: string, body: Fill): Promise<Fill> => {
  const fill = await fetch(`${process.env.REACT_APP_API_URl}/fills/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const data = await fill.json();

  return data;
};
