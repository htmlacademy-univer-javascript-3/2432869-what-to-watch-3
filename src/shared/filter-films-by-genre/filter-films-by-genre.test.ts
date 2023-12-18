import { Genres } from '../../consts';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import filterFilmsByGenre from './filter-films-by-genre';

describe('Function: filterFilmsByGenre', () => {
  it('returns correct films by genre', () => {
    const films = mockFilmsShortData;
    const genre = Genres.Crime;
    const expectedFilms = [films[9], films[10], films[11]];

    const filmsByGenre = filterFilmsByGenre(films, genre);

    expect(filmsByGenre).toEqual(expectedFilms);
  });

  it('returns all films by "All genre"', () => {
    const films = mockFilmsShortData;
    const genre = Genres['All genres'];

    const filmsByGenre = filterFilmsByGenre(films, genre);

    expect(filmsByGenre).toEqual(films);
  });
});
