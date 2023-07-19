import { useEffect, useState } from 'react';
import { extractIdFromUrl, filterEpisodesByCharacters } from '../../../helpers/functions';
import { EpisodeServices } from '../../../services/episodes.service';
import { SnackbarUtilities } from '../../../helpers/snackbar-manager';
import { formatEpisodeInfo } from '../../../adapters';

export function useFilterEpisodes({ chosenCharacters, isSharedEpisodes }) {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    if (!chosenCharacters?.episodes?.length) return;
    const fetchEpisodes = async () => {
      try {
        const ids = chosenCharacters?.episodes?.map(url => extractIdFromUrl(url));
        let characterEpisodes = await EpisodeServices.getEpisodes(ids);
        if (!Array.isArray(characterEpisodes.data)) {
          characterEpisodes = [characterEpisodes.data];
        } else {
          characterEpisodes = characterEpisodes.data;
        }
        if (isSharedEpisodes) {
          const filteredByIds = filterEpisodesByCharacters(characterEpisodes, chosenCharacters.characterId);
          characterEpisodes = filteredByIds;
        }
        setFilteredEpisodes(formatEpisodeInfo(characterEpisodes));
      } catch (error) {
        console.error(error);
        SnackbarUtilities.error('There was an error loading the episodes. Please try again later.');
      }
    };

    fetchEpisodes();
    //eslint-disable-next-line
  }, [chosenCharacters]);

  return filteredEpisodes;
}
