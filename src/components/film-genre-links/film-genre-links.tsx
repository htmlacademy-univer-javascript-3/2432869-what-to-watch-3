import { FilmGenresData } from '../../mocks/film-genres-data';
import { GenreLink } from './film-genre-link';

export type FilmGenreLinksProps = {
  filmGenresData: FilmGenresData[];
}

export default function FilmGenreLinks({ filmGenresData }: FilmGenreLinksProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      { filmGenresData.map(({ genre, additionalClasses }) => (
        <GenreLink
          key={genre}
          genre={genre}
          additionalClasses={additionalClasses}
        />
      )) }
    </ul>
  );
}
