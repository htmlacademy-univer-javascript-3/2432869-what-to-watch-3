import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { Genre, Genres } from '../../types/genre';
import { setGenre } from '../../store/genre-process/genre-process';
import { GenreButton } from '../genre-button/genre-button';
import { Genres as GenreValues } from '../../consts';

export type GenresFilterProps = {
  genres: Genres;
};

export default function GenresFilter({ genres }: GenresFilterProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleButtonClick = useCallback((genre: Genre) => dispatch(setGenre(genre)), [dispatch]);

  useEffect(() => () => {
    dispatch(setGenre(GenreValues['All genres']));
  }, [dispatch]);

  return (
    <ul className="catalog__genres-list">
      {Object.values(genres).map((genre) => (
        <GenreButton
          key={genre}
          genre={genre}
          onClick={handleButtonClick}
        />
      ))}
    </ul>
  );
}
