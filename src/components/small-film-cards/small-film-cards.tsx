import { useCallback, useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { ShortFilmData } from '../../types/short-film-data';

export type SmallFilmCardsProps = {
  filmsData: ShortFilmData[];
  maxCardsCount?: number;
  resetMaxCardsCount?: () => void;
};

export function SmallFilmCards({ filmsData, maxCardsCount = 8 }: SmallFilmCardsProps): JSX.Element {
  const [hoveredCardId, setHoveredCardId] = useState<string | undefined>(undefined);
  const handleMouseEnter = useCallback((cardId: string | undefined) => setHoveredCardId(cardId), []);
  const handleMouseLeave = useCallback(() => handleMouseEnter(undefined), [handleMouseEnter]);

  return (
    <div className="catalog__films-list">
      { filmsData.map((filmData: ShortFilmData, index: number) =>
        index < maxCardsCount && (
          <SmallFilmCard
            key={filmData.id}
            hoveredCardId={hoveredCardId}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            {...filmData}
          />
        )) }
    </div>
  );
}
