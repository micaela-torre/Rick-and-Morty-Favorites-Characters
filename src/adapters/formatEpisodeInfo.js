export const formatEpisodeInfo = response => {
  return response?.map(item => {
    const name = item.name || '';
    const air_date = item.air_date || '';

    return {
      name,
      air_date,
    };
  });
};
