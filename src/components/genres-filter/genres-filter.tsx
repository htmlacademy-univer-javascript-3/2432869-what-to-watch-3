import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { Genre } from '../../types/genre';
import { setGenre } from '../../store/genre-process/genre-process';
import { GenreButton } from '../genre-button/genre-button';
import { ALL_GENRES } from '../../consts';
import { useGenresByFilms } from '../../hooks/use-genres-by-films/use-genres-by-films';

export default function GenresFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleButtonClick = useCallback((genre: Genre) => dispatch(setGenre(genre)), [dispatch]);

  const genres = useGenresByFilms();

  useEffect(() => () => {
    dispatch(setGenre(ALL_GENRES));
  }, [dispatch]);

  return (
    <ul className="catalog__genres-list">
      <GenreButton
        key={ALL_GENRES}
        genre={ALL_GENRES}
        onClick={handleButtonClick}
      />
      {genres.map((genre: Genre, index) => index < 9 && (
        <GenreButton
          key={genre}
          genre={genre}
          onClick={handleButtonClick}
        />
      ))}
    </ul>
  );
}
