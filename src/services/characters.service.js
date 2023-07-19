import { callApi } from "./utilServices";

export const CharacterServices = ((callService) => {
  const getCharacters = (page) => {
    return callService({
      endpoint: `character/?page=${page}`,
    });
  };
  const getCharactersByUrl = (url) => {
    return callService({
      endpoint: url,
    });
  };
  return {
    getCharacters,
    getCharactersByUrl,
  };
})(callApi);
