import styles from './containerListCharacters.module.css';
import { DataList } from '../DataList';
import { formatCharacterInfo } from '../../adapters';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import { CharacterServices } from '../../services/characters.service';
import { useContext } from 'react';
import { EpisodeContext } from '../../context/EpisodeContext';

const ContainerList = () => {
  const { handleChangeCharacter } = useContext(EpisodeContext);

  return (
    <div>
      <h1 className={styles.list_characters_title}>Select your favorite character from each section and watch the magic</h1>

      <div className={styles.list_container}>
        <DataList title={ONE_CHARACTER} adapter={formatCharacterInfo} service={CharacterServices.getCharacters} saveExtraInformation={handleChangeCharacter} />
        <DataList
          title={TWO_CHARACTER}
          adapter={formatCharacterInfo}
          service={CharacterServices.getCharacters}
          initialPage={2}
          secondList
          saveExtraInformation={handleChangeCharacter}
        />
      </div>
    </div>
  );
};

export default ContainerList;
