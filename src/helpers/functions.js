export const abbreviateName = fullName => {
  const words = fullName.split(' ');
  if (words.length === 3) {
    const [firstName, middleName, lastName] = words;
    return `${firstName} ${middleName.charAt(0).toUpperCase()}. ${lastName}`;
  }
  return fullName;
};

export const extractIdFromUrl = url => {
  const parts = url.split('/');
  return parts[parts.length - 1];
};

export const filterEpisodesByCharacters = (episodes, characterIds) => {
  return episodes.filter(episode => {
    const episodeCharacterIds = episode.characters.map(url => extractIdFromUrl(url));
    return characterIds.every(id => episodeCharacterIds.includes(id.toString()));
  });
};
