import { useMemo } from "react";
import { filterEpisodes } from "../helpers/episodes.helper";
import { ONE_CHARACTER, TWO_CHARACTER } from "../constants/characters";
 

export function useFilterEpisodes(episodesData, chosenCharacters) {
  const characterOneEpisodes = useMemo(
    () => filterEpisodes(episodesData, [chosenCharacters[ONE_CHARACTER]]),
    [chosenCharacters[ONE_CHARACTER], episodesData]
  );

  const characterTwoEpisodes = useMemo(
    () => filterEpisodes(episodesData, [chosenCharacters[TWO_CHARACTER]]),
    [chosenCharacters[TWO_CHARACTER], episodesData]
  );

  const sharedEpisodes = useMemo(
    () =>
      filterEpisodes(episodesData, [
        chosenCharacters[ONE_CHARACTER],
        chosenCharacters[TWO_CHARACTER],
      ]),
    [
      chosenCharacters[ONE_CHARACTER],
      chosenCharacters[TWO_CHARACTER],
      episodesData,
    ]
  );

  return { characterOneEpisodes, characterTwoEpisodes, sharedEpisodes };
}
