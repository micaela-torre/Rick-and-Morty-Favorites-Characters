import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
});
