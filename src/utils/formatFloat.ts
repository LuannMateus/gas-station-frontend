export const formatFloat = (value: number) => {
  return parseFloat(
    new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      maximumFractionDigits: 4,
    }).format(value),
  );
};
