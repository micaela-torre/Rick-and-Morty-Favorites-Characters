export interface CardCharacterProps {
  name?: string;
  status?: string;
  species?: string;
  image?: string;
  id?: string;
  episode?: [];
  character?: string;
}

export interface ChosenCharacters {
  [characterName: string]: {
    episodes: string[];
    characterId: string;
  };
}
