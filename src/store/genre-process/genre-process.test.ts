import { Genres } from '../../consts';
import { genreProcess, setGenre } from './genre-process';

describe('GenreProcess Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { genre: Genres.Comedy };

    const result = genreProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { genre: Genres['All genres'] };

    const result = genreProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set genre with "setGenre" action', () => {
    const expectedGenre = Genres.Horror;
    const initialState = { genre: Genres['Kids & Family'] };

    const result = genreProcess.reducer(initialState, setGenre(expectedGenre));

    expect(result.genre).toEqual(expectedGenre);
  });
});
