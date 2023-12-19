import { ALL_GENRES } from '../../consts';
import { genres } from '../../mocks/genres';
import { genreProcess, setGenre } from './genre-process';

describe('GenreProcess Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { genre: genres.Comedy };

    const result = genreProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { genre: ALL_GENRES };

    const result = genreProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set genre with "setGenre" action', () => {
    const expectedGenre = genres.Horror;
    const initialState = { genre: genres['Kids & Family'] };

    const result = genreProcess.reducer(initialState, setGenre(expectedGenre));

    expect(result.genre).toEqual(expectedGenre);
  });
});
