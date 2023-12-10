import './genre-button.css';
import cs from 'classnames';
import { Genre } from '../../types/genre';
import { useAppSelector } from '../../hooks';
import { getGenre } from '../../store/genre-process/selectors';

export type GenreButtonProps = {
  genre: Genre;
  onClick: (genre: Genre) => void;
}

export function GenreButton({ genre, onClick: handleClick }: GenreButtonProps): JSX.Element {
  const selectedGenre = useAppSelector(getGenre);

  return (
    <li className={cs('catalog__genres-item', { 'catalog__genres-item--active': genre === selectedGenre })}
      data-testid={'genre-button'}
    >
      <button onClick={() => handleClick(genre)} className="catalog__genres-link">{ genre }</button>
    </li>
  );
}
