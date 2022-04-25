export const deleteOneFill = async (id: string): Promise<void> => {
  await fetch(`${process.env.REACT_APP_API_URl}/fills/${id}/`, {
    method: 'DELETE',
  });
};
