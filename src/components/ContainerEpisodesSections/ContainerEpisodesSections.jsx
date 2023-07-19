import { useEffect } from 'react';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import { EpisodesSection } from '../EpisodesSection';

import styles from './containerEpisodes.module.css';

const ContainerEpisodesSections = ({ chosenCharacters, setChosenCharacters }) => {
  useEffect(() => {
    setChosenCharacters(prevState => ({
      ...prevState,
      sharedCharacters: {
        episodes: [...chosenCharacters[ONE_CHARACTER].episodes, ...chosenCharacters[TWO_CHARACTER].episodes],
        characterId: [chosenCharacters[ONE_CHARACTER].characterId, chosenCharacters[TWO_CHARACTER].characterId],
      },
    }));
  }, [chosenCharacters[ONE_CHARACTER].episodes, chosenCharacters[TWO_CHARACTER].episodes]);

  return (
    <div className={styles.episodes_container}>
      <EpisodesSection title={`${ONE_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[ONE_CHARACTER]} />
      <EpisodesSection title={`${ONE_CHARACTER} & ${TWO_CHARACTER} - Shared Episodes`} chosenCharacters={chosenCharacters.sharedCharacters} />
      <EpisodesSection title={`${TWO_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[TWO_CHARACTER]} />
    </div>
  );
};

export default ContainerEpisodesSections;
