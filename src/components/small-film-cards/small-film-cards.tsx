import { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { FilmData } from '../../mocks/films-data';

export type SmallFilmCardsProps = {
  cardsCount?: number;
  filmsData: FilmData[];
}

export function SmallFilmCards({ cardsCount = 20, filmsData }: SmallFilmCardsProps): JSX.Element {
  const [hoveredCardId, setHoveredCardId] = useState<number | undefined>(undefined);
  const onHoverHandler = (cardId: number | undefined) => setHoveredCardId(cardId);

  return (
    <div className="catalog__films-list">
      { filmsData.map((cardInfo: FilmData, index: number) => (index < cardsCount) && (
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
