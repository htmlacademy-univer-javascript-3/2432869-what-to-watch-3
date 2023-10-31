import { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { FilmData } from '../../mocks/films-data';

export type SmallFilmCardsProps = {
  cardsCount?: number;
  genre?: string;
  filmsData: ReadonlyArray<FilmData>;
}

export function SmallFilmCards({ cardsCount = 20, genre = 'All genres', filmsData }: SmallFilmCardsProps): JSX.Element {
  let genreFilmsData: FilmData[];
  if (genre === 'All genres') {
    genreFilmsData = [...filmsData];
  } else {
    genreFilmsData = filmsData.filter((film) => film.genres.includes(genre));
  }

  const [hoveredCardId, setHoveredCardId] = useState<number | undefined>(undefined);
  const onHoverHandler = (cardId: number | undefined) => setHoveredCardId(cardId);

  return (
    <div className="catalog__films-list">
      { genreFilmsData.map((cardInfo: FilmData, index: number) => (index < cardsCount) && (
        <SmallFilmCard
          key={cardInfo.id}
          hoveredCardId={hoveredCardId}
          handleMouseEnter={onHoverHandler}
          handleMouseLeave={() => onHoverHandler(undefined)}
          {...cardInfo}
        />
      )) }
    </div>
  );
}
