import { Genre } from '../../types/genre';
import { FilmShortData } from '../../types/film-short-data';
import { ALL_GENRES } from '../../consts';

export default function filterFilmsByGenre(filmsData: FilmShortData[], genre: Genre) {
  return genre === ALL_GENRES
    ? [...filmsData]
    : filmsData.filter((filmData) => filmData.genre.includes(genre));
}
