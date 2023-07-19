import { callApi } from "./utilServices";

export const EpisodeServices = ((callService) => {
  const getEpisodes = () => {
    return callService({
      endpoint: `episode`,
    });
  };

  return {
    getEpisodes,
  };
})(callApi);
