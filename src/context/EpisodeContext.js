import React, { createContext, useState } from 'react';
import { ONE_CHARACTER, TWO_CHARACTER } from '../constants/characters';

export const EpisodeContext = createContext();

export const EpisodeContextProvider = ({ children }) => {
  const [chosenCharacters, setChosenCharacters] = useState({
    [ONE_CHARACTER]: { episodes: [], characterId: '', initialPage: null },
    [TWO_CHARACTER]: { episodes: [], characterId: '', initialPage: null },
  });
  
  const handleChangeCharacter = ({ title, page }) => {
    let cloneChosenCharacters = {...chosenCharacters}
    cloneChosenCharacters[title].currentPage = page
    setChosenCharacters(cloneChosenCharacters);
  };

  return <EpisodeContext.Provider value={{ chosenCharacters, setChosenCharacters, handleChangeCharacter }}>{children}</EpisodeContext.Provider>;
};
