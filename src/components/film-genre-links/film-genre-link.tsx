import { Link } from 'react-router-dom';

export type GenreLinkProps = {
  genre: string;
  additionalClasses?: string;
}

export function GenreLink({ genre, additionalClasses = '' }: GenreLinkProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${additionalClasses}`}>
      <Link to={''} className="catalog__genres-link">{ genre }</Link>
    </li>
  );
}
