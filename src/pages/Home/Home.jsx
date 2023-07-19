import styles from './home.module.css';
import ContainerList from '../../components/ContainerListCharacters/ContainerListCharacters';
import { ContainerEpisodes } from '../../components/ContainerEpisodesSections';
import { FloatingButton } from '../../components/FloatingButton';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <ContainerList />
      <ContainerEpisodes />
      <FloatingButton />
    </div>
  );
};
export default Home;
