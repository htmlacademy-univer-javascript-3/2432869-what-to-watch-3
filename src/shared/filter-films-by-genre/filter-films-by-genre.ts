import { Genre } from '../../types/genre';
import { FilmShortData } from '../../types/film-short-data';

export default function filterFilmsByGenre(filmsData: FilmShortData[], genre: Genre) {
  return genre === 'All genres'
    ? [...filmsData]
    : filmsData.filter((filmData) => filmData.genre.includes(genre));
}
