import { useContext } from 'react';
import { STATUS_COLORS } from '../../constants/colors';
import Badge from '../Badge/Badge';
import styles from './cardCharacter.module.css';
import { EpisodeContext } from '../../context/EpisodeContext';
import { abbreviateName } from '../../helpers/functions';

const CardCharacter = ({ name = '', status = '', species = '', image = '', id, episode, character }) => {
  const { setChosenCharacters } = useContext(EpisodeContext);

  const chosenCharacterHandler = e => {
    const { name } = e.target;
    setChosenCharacters(prevState => ({ ...prevState, [name]: { episodes: episode, characterId: id } }));
  };

  return (
    <label htmlFor={id}>
      <input className={styles.radio_input} type="radio" name={character} onClick={chosenCharacterHandler} />
      <div style={{ backgroundImage: `url(${image})` }} className={styles.character_card_container}>
        <div className={styles.information_container}>
          <p>{abbreviateName(name)}</p>
          <div className={styles.status_container}>
            <Badge color={STATUS_COLORS[status]} />
            <p>
              {status} - {species}
            </p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default CardCharacter;
