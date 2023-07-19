import { useContext, useEffect, useState } from 'react';
import { EpisodesSection } from '../EpisodesSection';
import styles from './containerEpisodes.module.css';
import { EpisodeContext } from '../../context/EpisodeContext';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';

const ContainerEpisodesSections = () => {
  const { chosenCharacters } = useContext(EpisodeContext);
  const characterOne = chosenCharacters[ONE_CHARACTER];
  const characterTwo = chosenCharacters[TWO_CHARACTER];
  const [sharedCharacters, setSharedCharacters] = useState({});

  useEffect(() => {
    if (!characterOne?.episodes?.length && !characterTwo?.episodes?.length) return undefined;
    setSharedCharacters(prevState => ({
      ...prevState,
      episodes: [...characterOne?.episodes, ...characterTwo?.episodes],
      characterId: [characterOne?.characterId, characterTwo?.characterId],
    }));
    //eslint-disable-next-line
  }, [characterOne?.episodes, characterTwo?.episodes]);

  if (!characterOne?.episodes?.length && !characterTwo?.episodes?.length) return null;

  return (
    <div className={styles.episodes_container}>
      <EpisodesSection title={`${ONE_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[ONE_CHARACTER]} />
      <EpisodesSection title={`${ONE_CHARACTER} & ${TWO_CHARACTER} - Shared Episodes`} chosenCharacters={sharedCharacters} isSharedEpisodes />
      <EpisodesSection title={`${TWO_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[TWO_CHARACTER]} />
    </div>
  );
};

export default ContainerEpisodesSections;
