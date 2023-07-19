export const filterEpisodes = (episodesData, characters) => {
  return episodesData.filter((episode) => {
    const episodeCharacters = episode?.characters.map((url) =>
      url.split("/").pop()
    );

    return characters.every((character) =>
      episodeCharacters.includes(character)
    );
  });
};
