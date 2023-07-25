import { useContext, useEffect, useState } from 'react';
import { EpisodesSection } from '../EpisodesSection';
import styles from './containerEpisodes.module.css';
import { EpisodeContext } from '../../context/EpisodeContext';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import Message from '../Message/Message';

const ContainerEpisodesSections = () => {
  const { chosenCharacters } = useContext(EpisodeContext);
  const characterOne = chosenCharacters[ONE_CHARACTER];
  const characterTwo = chosenCharacters[TWO_CHARACTER];
  const characterOneId = characterOne?.characterId;
  const characterTwoId = characterTwo?.characterId;
  const [sharedCharacters, setSharedCharacters] = useState({});

  useEffect(() => {
    if (!(characterOneId && characterTwoId) && characterOneId === characterTwoId) return;
    setSharedCharacters(prevState => ({
      ...prevState,
      episodes: [...characterOne?.episodes, ...characterTwo?.episodes],
      characterId: [characterOne?.characterId, characterTwo?.characterId],
    }));

    //eslint-disable-next-line
  }, [characterOne?.episodes, characterTwo?.episodes]);

  return (
    <>
      {characterOneId && characterTwoId && characterOneId !== characterTwoId && (
        <div className={styles.episodes_container}>
          <EpisodesSection title={`${ONE_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[ONE_CHARACTER]} />
          <EpisodesSection title={`${ONE_CHARACTER} & ${TWO_CHARACTER} - Shared Episodes`} chosenCharacters={sharedCharacters} isSharedEpisodes />
          <EpisodesSection title={`${TWO_CHARACTER} - Only Episodes`} chosenCharacters={chosenCharacters[TWO_CHARACTER]} />
        </div>
      )}
      {characterOneId && characterTwoId && characterOneId === characterTwoId && <Message>You must select two different characters !</Message>}
    </>
  );
};

export default ContainerEpisodesSections;
