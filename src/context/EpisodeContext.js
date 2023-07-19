import React, { createContext, useState } from 'react';
import { ONE_CHARACTER, TWO_CHARACTER } from '../constants/characters';

export const EpisodeContext = createContext();

export const EpisodeContextProvider = ({ children }) => {
  const [chosenCharacters, setChosenCharacters] = useState({
    [ONE_CHARACTER]: { episodes: [], characterId: '', initialPage: null },
    [TWO_CHARACTER]: { episodes: [], characterId: '', initialPage: null },
    sharedCharacters: {
      episodes: [],
      characterId: [],
    },
  });
  const handleChangeCharacter = data => {
    setChosenCharacters(prevChosenCharacter => ({ ...prevChosenCharacter, ...data }));
  };
  return <EpisodeContext.Provider value={{ chosenCharacters, setChosenCharacters, handleChangeCharacter }}>{children}</EpisodeContext.Provider>;
};
