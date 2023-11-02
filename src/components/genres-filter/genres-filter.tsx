import { useAppDispatch } from '../../hooks';
import { Genre } from '../../mocks/genres';
import { resetMaxCardsCount, setGenre, changeFilmsByGenre } from '../../store/action';
import { GenreButton } from './genre-button/genre-button';

export type GenresFilterProps = {
  genres: { [key in Genre]: string };
};

export default function GenresFilter({ genres }: GenresFilterProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleButtonClick = (genre: Genre) => () => {
    dispatch(resetMaxCardsCount());
    dispatch(setGenre({ genre: genre }));
    dispatch(changeFilmsByGenre());
  };

  return (
    <ul className="catalog__genres-list">
      { Object.keys(genres).map((genre) => (
        <GenreButton
          key={genre}
          genre={genre as Genre}
          handleClick={handleButtonClick(genre as Genre)}
        />
      )) }
    </ul>
  );
}
