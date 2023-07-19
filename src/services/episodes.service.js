import { callApi } from './utilServices';

export const EpisodeServices = (callService => {
  const getEpisodes = episodes => {
    return callService({
      endpoint: `episode/${episodes}`,
    });
  };

  return {
    getEpisodes,
  };
})(callApi);
