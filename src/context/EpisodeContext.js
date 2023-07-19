import React, { createContext, useState } from "react";
import { ONE_CHARACTER, TWO_CHARACTER } from "../constants/characters";

export const EpisodeContext = createContext();

export const EpisodeContextProvider = ({ children }) => {
  const [chosenCharacters, setChosenCharacters] = useState({
    [ONE_CHARACTER]: "",
    [TWO_CHARACTER]: "",
  });

  return (
    <EpisodeContext.Provider value={[chosenCharacters, setChosenCharacters]}>
      {children}
    </EpisodeContext.Provider>
  );
};
