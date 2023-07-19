import { useState } from 'react';
import { CardCharacter } from '../CardCharacter';
import Paginator from '../Paginator/Paginator';
import styles from './listCharacters.module.css';

const List = ({ characters = [], title = '', secondList, handlerChangePage }) => {
  const [charactersList, setCharactersList] = useState(characters.slice(0, 6));

  const handleCardCountChange = count => setCharactersList(characters?.slice(0, count));

  return (
    <section className={styles.characters_list_container}>
      <h3 className={secondList ? styles.second_title : styles.characters_list_title}>{title}</h3>

      <div className={styles.characters_list}>
        {charactersList?.map(character => (
          <CardCharacter key={`character: ${character.id}`} {...character} character={title} />
        ))}
      </div>
      <Paginator handlerChangePage={handlerChangePage} onHandlerChangePagination={handleCardCountChange} character={title} />
    </section>
  );
};

export default List;
