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
      <h1
        style={{
          color: '#16ABC6',
          textAlign: 'center',
          '-webkit-text-stroke': '0.5px black',
          fontSize: '2.3rem',
          'letter-spacing': '2px',
        }}
      >
        Select your favorite character from each section and watch the magic
      </h1>

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
