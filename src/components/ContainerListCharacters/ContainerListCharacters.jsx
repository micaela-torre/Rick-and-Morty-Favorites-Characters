import styles from './containerListCharacters.module.css';
import { DataList } from '../DataList';
import { formatCharacterInfo } from '../../adapters';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import { CharacterServices } from '../../services/characters.service';

const ContainerList = () => {
  return (
    <div>
      <h1 className={styles.list_characters_title}>Click on your favorite character from each section and watch the magic</h1>

      <div className={styles.list_container}>
        <DataList title={ONE_CHARACTER} adapter={formatCharacterInfo} service={CharacterServices.getCharacters} />
        <DataList title={TWO_CHARACTER} adapter={formatCharacterInfo} service={CharacterServices.getCharacters} secondList />
      </div>
    </div>
  );
};

export default ContainerList;
