import styles from './home.module.css';
import ContainerList from '../../components/ContainerListCharacters/ContainerListCharacters';
import { ContainerEpisodes } from '../../components/ContainerEpisodesSections';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <ContainerList />
      <ContainerEpisodes />
    </div>
  );
};
export default Home;
