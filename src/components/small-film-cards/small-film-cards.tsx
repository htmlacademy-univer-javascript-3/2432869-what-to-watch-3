import { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { ShortFilmData } from '../../types/short-film-data';

export type SmallFilmCardsProps = {
  filmsData: ShortFilmData[];
  maxCardsCount?: number;
  resetMaxCardsCount?: () => void;
};

export function SmallFilmCards({ filmsData, maxCardsCount = 8 }: SmallFilmCardsProps): JSX.Element {
  const [hoveredCardId, setHoveredCardId] = useState<string | undefined>(undefined);
  const onHoverHandler = (cardId: string | undefined) => setHoveredCardId(cardId);

  return (
    <div className="catalog__films-list">
      { filmsData.map((filmData: ShortFilmData, index: number) =>
        index < maxCardsCount && (
          <SmallFilmCard
            key={filmData.id}
            hoveredCardId={hoveredCardId}
            handleMouseEnter={onHoverHandler}
            handleMouseLeave={() => onHoverHandler(undefined)}
            {...filmData}
          />
        )) }
    </div>
  );
}
