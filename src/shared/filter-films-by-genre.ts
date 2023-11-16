import { Genre } from '../mocks/genres';
import { ShortFilmData } from '../types/short-film-data';

export default function filterFilmsByGenre(filmsData: ShortFilmData[], genre: Genre) {
  return genre === 'All genres'
    ? [...filmsData]
    : filmsData.filter((filmData) => filmData.genre.includes(genre));
}
