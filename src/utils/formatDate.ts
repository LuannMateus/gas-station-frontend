import { format, parseISO } from 'date-fns';

export const formatDate = (date: string) => {
  if (date === '') return '';

  const parsedDate = parseISO(date);

  return format(parsedDate, 'yyyy-MM-dd');
};

export const formatDateToPT = (date: string) => {
  if (date === '') return '';

  const parsedDate = parseISO(date);

  return format(parsedDate, 'dd/MM/yyyy');
};
