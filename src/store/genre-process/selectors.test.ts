import { NameSpace } from '../../consts';
import { GenreProcessState } from '../../types/state';
import { getGenre } from './selectors';
import { genres } from '../../mocks/genres';

describe('GenreProcess selectors', () => {
  it('returns genre from state', () => {
    const genre = genres.Crime;
    const state: GenreProcessState = { genre };

    const result = getGenre({ [NameSpace.Genre]: state });

    expect(result).toBe(genre);
  });
});
