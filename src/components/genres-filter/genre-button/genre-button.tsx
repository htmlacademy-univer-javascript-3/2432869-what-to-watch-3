import './genre-button.css';
import cs from 'classnames';
import { useGenreSelector } from '../../../hooks/selectors';
import { Genre } from '../../../mocks/genres';

export type GenreButtonProps = {
  genre: Genre;
  handleClick: () => void;
}

export function GenreButton({ genre, handleClick }: GenreButtonProps): JSX.Element {
  const selectedGenre = useGenreSelector();

  return (
    <li className={cs('catalog__genres-item', { 'catalog__genres-item--active': genre === selectedGenre })}>
      <button onClick={handleClick} className="catalog__genres-link">{ genre }</button>
    </li>
  );
}
