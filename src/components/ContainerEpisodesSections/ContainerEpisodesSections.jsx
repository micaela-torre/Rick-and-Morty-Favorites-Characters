import { useContext, useEffect, useState } from 'react';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import { useFilterEpisodes } from '../../hooks/useFilterEpisodes';
import { EpisodesSection } from '../EpisodesSection';
import { SnackbarUtilities } from '../../helpers/snackbar-manager';
import { EpisodeServices } from '../../services/episodes.service';
import styles from './containerEpisodes.module.css';

const ContainerEpisodesSections = ({ chosenCharacters }) => {
  const [episodesSection, setEpisodesSection] = useState([]);
  const { characterOneEpisodes, characterTwoEpisodes, sharedEpisodes } = useFilterEpisodes(episodesSection, chosenCharacters);

  useEffect(() => {
    (async () => {
      try {
        const episodes = await EpisodeServices.getEpisodes();
        setEpisodesSection(episodes.data.results);
      } catch (e) {
        console.error(e);
        SnackbarUtilities.error('There was an error loading the episodes, please try again later');
      }
    })();
  }, [chosenCharacters]);

  return (
    <div className={styles.episodes_container}>
      <EpisodesSection title={`${ONE_CHARACTER} - Only Episodes`} episodes={characterOneEpisodes} />
      <EpisodesSection title={`${ONE_CHARACTER} & ${TWO_CHARACTER} - Shared Episodes`} episodes={sharedEpisodes} />
      <EpisodesSection title={`${TWO_CHARACTER} - Only Episodes`} episodes={characterTwoEpisodes} />
    </div>
  );
};

export default ContainerEpisodesSections;
