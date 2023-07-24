import { useContext } from 'react';
import { STATUS_COLORS } from '../../constants/colors';
import Badge from '../Badge/Badge';
import { EpisodeContext } from '../../context/EpisodeContext';
import { abbreviateName } from '../../helpers/functions';
import { TWO_CHARACTER } from '../../constants/characters';
import styles from './cardCharacter.module.css';

const CardCharacter = ({ name = '', status = '', species = '', image = '', id, episode, character }) => {
  const { chosenCharacters, setChosenCharacters } = useContext(EpisodeContext);
  const characterTitle = character === TWO_CHARACTER ? 'character_2' : 'character_1';

  const chosenCharacterHandler = () => {
    let cloneChosenCharacters = { ...chosenCharacters };
    cloneChosenCharacters[character] = { ...cloneChosenCharacters[character], episodes: episode, characterId: id };
    setChosenCharacters(cloneChosenCharacters);
  };

  return (
    <label htmlFor={`${characterTitle}_${id}`}>
      <input className={styles.radio_input} type="radio" id={`${characterTitle}_${id}`} name={characterTitle} onClick={chosenCharacterHandler} />
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
