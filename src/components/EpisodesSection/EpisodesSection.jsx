import Message from '../Message/Message';
import styles from './episodesSection.module.css';
import { useFilterEpisodes } from './hooks/useFilterEpisodes';

const EpisodesSection = ({ title = '', chosenCharacters, isSharedEpisodes }) => {
  const filteredEpisodes = useFilterEpisodes({ chosenCharacters, isSharedEpisodes });
  return (
    <section className={styles.section_container}>
      <div className={styles.section_container_header}>{title}</div>
      <div>
        <ContainerEpisodes episodes={filteredEpisodes} />
      </div>
    </section>
  );
};

const ContainerEpisodes = ({ episodes }) => {
  if (!episodes?.length) return <Message>No results found! 😔 </Message>;

  return episodes?.map(episode => (
    <p className={styles.episode_information} key={`episode: ${episode?.name}`}>
      Episode - {episode?.name} - {episode?.air_date}
    </p>
  ));
};
export default EpisodesSection;
