import { callApi } from './utilServices';

export const CharacterServices = (callService => {
  const getCharacters = params => {
    return callService({
      endpoint: `character/`,
      params,
    });
  };
  const getCharactersByUrl = url => {
    return callService({
      endpoint: url,
    });
  };
  return {
    getCharacters,
    getCharactersByUrl,
  };
})(callApi);
