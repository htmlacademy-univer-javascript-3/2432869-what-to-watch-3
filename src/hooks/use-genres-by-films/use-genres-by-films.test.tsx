import { renderHook } from '@testing-library/react';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { useGenresByFilms } from './use-genres-by-films';
import { createStoreWrapper } from '../../utils/mock-component';

describe('Hook: useGenresByFilms', () => {
  it('returns all the genres that films in state have', () => {
    const wrapper = createStoreWrapper({ FilmsData: { filmsData: mockFilmsShortData }});

    const { result: { current: hookGenres } } = renderHook(() => useGenresByFilms(), { wrapper: wrapper });
    const genres = hookGenres.reduce((a, v) => ({ ...a, [v]: v}), {});

    mockFilmsShortData.forEach((filmData) => {
      expect(genres).toHaveProperty(filmData.genre);
    });
  });
});
