import { useAppDispatch } from '../../hooks';
import { Genre, Genres } from '../../mocks/genres';
import { setGenre } from '../../store/action';
import { GenreButton } from './genre-button/genre-button';

export type GenresFilterProps = {
  genres: Genres;
};

export default function GenresFilter({ genres }: GenresFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = (genre: Genre) => () => dispatch(setGenre(genre));

  return (
    <ul className="catalog__genres-list">
      { Object.values(genres).map((genre) => (
        <GenreButton
          key={genre}
          genre={genre}
          handleClick={handleButtonClick(genre)}
        />
      )) }
    </ul>
  );
}
