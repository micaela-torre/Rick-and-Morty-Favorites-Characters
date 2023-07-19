import React, { useEffect, useState } from 'react';
import styles from './containerListCharacters.module.css';
import { ListCharacters } from '../ListCharacters';
import Spinner from '../Spinner/Spinner';
import { formatCharacterInfo } from '../../adapters';
import { CharacterServices } from '../../services/characters.service';
import { ONE_CHARACTER, TWO_CHARACTER } from '../../constants/characters';
import { SnackbarUtilities } from '../../helpers/snackbar-manager';

const ContainerList = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [characterSections, setCharacterSections] = useState({
    oneCharacter: [],
    twoCharacter: [],
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [sectionOne, sectionTwo] = await Promise.all([CharacterServices.getCharacters(1), CharacterServices.getCharacters(2)]);

  //       const formattedSectionOne = formatCharacterInfo(sectionOne.data.results);
  //       const formattedSectionTwo = formatCharacterInfo(sectionTwo.data.results);

  //       setCharacterSections(prevState => ({
  //         ...prevState,
  //         oneCharacter: formattedSectionOne,
  //         twoCharacter: formattedSectionTwo,
  //       }));
  //     } catch (e) {
  //       console.error(e);
  //       SnackbarUtilities.error('There was an error loading characters, please try again later');
  //     } finally {
  //       setIsDataLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      {isDataLoading ? (
        <Spinner />
      ) : (
        <div className={styles.list_container}>
          <ListCharacters title={ONE_CHARACTER} characters={characterSections.oneCharacter} />

          {/* <ListCharacters title={TWO_CHARACTER} secondList characters={characterSections.twoCharacter} /> */}
        </div>
      )}
    </div>
  );
};

export default ContainerList;
