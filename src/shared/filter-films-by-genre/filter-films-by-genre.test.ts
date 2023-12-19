import { genres } from '../../mocks/genres';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import filterFilmsByGenre from './filter-films-by-genre';
import { ALL_GENRES } from '../../consts';

describe('Function: filterFilmsByGenre', () => {
  it('returns correct films by genre', () => {
    const films = mockFilmsShortData;
    const genre = genres.Crime;
    const expectedFilms = [films[9], films[10], films[11]];

    const filmsByGenre = filterFilmsByGenre(films, genre);

    expect(filmsByGenre).toEqual(expectedFilms);
  });

  it('returns all films by "All genre"', () => {
    const films = mockFilmsShortData;
    const genre = ALL_GENRES;

    const filmsByGenre = filterFilmsByGenre(films, genre);

    expect(filmsByGenre).toEqual(films);
  });
});
