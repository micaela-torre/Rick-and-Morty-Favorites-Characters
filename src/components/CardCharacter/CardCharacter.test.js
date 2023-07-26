import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardCharacter from './CardCharacter';
import { EpisodeContext } from '../../context/EpisodeContext';

const mockContextValue = {
  chosenCharacters: {},
  setChosenCharacters: jest.fn(),
};

describe('CardCharacter', () => {
  test('renders without error', () => {
    render(
      <EpisodeContext.Provider value={mockContextValue}>
        <CardCharacter />
      </EpisodeContext.Provider>
    );

    const characterCard = screen.getByTestId('character-container');
    expect(characterCard).toBeInTheDocument();
  });

  test('calls chosenCharacterHandler on click', () => {
    const { getByTestId } = render(
      <EpisodeContext.Provider value={mockContextValue}>
        <CardCharacter />
      </EpisodeContext.Provider>
    );

    const characterInput = getByTestId('character-input');
    fireEvent.click(characterInput);

    expect(mockContextValue.setChosenCharacters).toHaveBeenCalled();
  });

  test('updates chosenCharacters in context on click', () => {
    const { getByTestId } = render(
      <EpisodeContext.Provider value={mockContextValue}>
        <CardCharacter id="1" character="character_1" />
      </EpisodeContext.Provider>
    );

    const characterInput = getByTestId('character-input');
    fireEvent.click(characterInput);

    expect(mockContextValue.setChosenCharacters).toHaveBeenCalledWith({
      character_1: { episodes: undefined, characterId: '1' },
    });
  });

  test('displays correct character information', () => {
    const character = {
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://example.com/rick_sanchez.jpg',
      id: '1',
      episode: 'S01E01',
      character: 'character_1',
    };

    const { getByText, getByTestId } = render(
      <EpisodeContext.Provider value={mockContextValue}>
        <CardCharacter {...character} />
      </EpisodeContext.Provider>
    );

    const characterName = getByText('Rick Sanchez');
    const characterStatus = getByText('Alive - Human');
    const characterImage = getByTestId('character-image');

    expect(characterName).toBeInTheDocument();
    expect(characterStatus).toBeInTheDocument();
    expect(characterImage).toHaveStyle(`background-image: url(${character.image})`);
  });
});
