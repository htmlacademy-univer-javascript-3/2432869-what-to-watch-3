import { renderHook } from '@testing-library/react';
import { genres } from '../../mocks/genres';
import { useFilmsByGenre } from './use-films-by-genre';
import { createStoreWrapper } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';

describe('Hook: useFilmByGenre', () => {
  it('filter films data by genre', () => {
    const genre = genres.Drama;
    const wrapper = createStoreWrapper({ FilmsData: { filmsData: mockFilmsShortData }});

    const { result: { current: hookFilmsData } } = renderHook(() => useFilmsByGenre(genre), { wrapper: wrapper });

    hookFilmsData?.forEach((filmData) => {
      expect(filmData.genre).toBe(genre);
    });
  });
});
