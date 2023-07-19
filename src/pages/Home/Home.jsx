import styles from './home.module.css';
import ContainerList from '../../components/ContainerListCharacters/ContainerListCharacters';
import { ContainerEpisodes } from '../../components/ContainerEpisodesSections';
import { useContext } from 'react';
import { EpisodeContext } from '../../context/EpisodeContext';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';

const Home = () => {
  const { chosenCharacters, setChosenCharacters } = useContext(EpisodeContext);

  return (
    <div className={styles.home_container}>
      <ContainerList />
      {chosenCharacters[ONE_CHARACTER]?.episodes?.length && chosenCharacters[TWO_CHARACTER]?.episodes?.length && (
        <ContainerEpisodes chosenCharacters={chosenCharacters} setChosenCharacters={setChosenCharacters} />
      )}
    </div>
  );
};
export default Home;
