export const formatCharacterInfo = (response = []) => {
  return response.map(item => {
    const { name = '', status = '', species = '', image = '', id = '', episode = [] } = item;

    return {
      name,
      status,
      species,
      image,
      id,
      episode,
    };
  });
};
