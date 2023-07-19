import { useEffect, useState } from 'react';
import { extractIdFromUrl, filterEpisodesByCharacters } from '../helpers/functions';
import { EpisodeServices } from '../services/episodes.service';
import { SnackbarUtilities } from '../helpers/snackbar-manager';
import { formatEpisodeInfo } from '../adapters';

export function useFilterEpisodes(chosenCharacters) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    if (!chosenCharacters?.episodes?.length) return;
    const fetchEpisodes = async () => {
      try {
        const ids = chosenCharacters?.episodes?.map(url => extractIdFromUrl(url));
        const characterEpisodes = await EpisodeServices.getEpisodes(ids);
        if (!Array.isArray(characterEpisodes.data)) return [characterEpisodes.data];
        const filteredByIds = filterEpisodesByCharacters(characterEpisodes.data, chosenCharacters.characterId);
        setFilteredEpisodes(formatEpisodeInfo(filteredByIds));
      } catch (error) {
        console.error(error);
        SnackbarUtilities.error('There was an error loading the episodes. Please try again later.');
      }
    };

    fetchEpisodes();
  }, [chosenCharacters]);

  return filteredEpisodes;
}
