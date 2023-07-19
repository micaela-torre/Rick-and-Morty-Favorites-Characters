import styles from "./home.module.css";
import ContainerList from "../../components/ContainerListCharacters/ContainerListCharacters";
import { ContainerEpisodes } from "../../components/ContainerEpisodesSections";
import { useContext } from "react";
import { EpisodeContext } from "../../context/EpisodeContext";
import { ONE_CHARACTER, TWO_CHARACTER } from "../../constants/characters";

const Home = () => {
  const [chosenCharacters] = useContext(EpisodeContext);

  return (
    <div className={styles.home_container}>
      <ContainerList />
      {chosenCharacters[ONE_CHARACTER] && chosenCharacters[TWO_CHARACTER] && (
        <ContainerEpisodes chosenCharacters={chosenCharacters} />
      )}
    </div>
  );
};
export default Home;
