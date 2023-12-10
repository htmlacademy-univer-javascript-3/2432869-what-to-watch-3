import { NameSpace } from '../../consts';
import { GenreProcessState } from '../../types/state';
import { getGenre } from './selectors';
import { Genres } from '../../consts';

describe('GenreProcess selectors', () => {
  it('returns genre from state', () => {
    const genre = Genres.Crime;
    const state: GenreProcessState = { genre };

    const result = getGenre({ [NameSpace.Genre]: state });

    expect(result).toBe(genre);
  });
});
