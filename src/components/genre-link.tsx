export type GenreLinkProps = {
  genre: string;
  additionalClasses?: string;
}

export function GenreLink({ genre, additionalClasses = '' }: GenreLinkProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${additionalClasses}`}>
      <a href="#" className="catalog__genres-link">{ genre }</a>
    </li>
  );
}
