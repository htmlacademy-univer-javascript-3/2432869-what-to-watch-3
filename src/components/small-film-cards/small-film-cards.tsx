import { useCallback, useState } from 'react';
import { SmallFilmCard } from '../small-film-card/small-film-card';
import { FilmShortData } from '../../types/film-short-data';

export type SmallFilmCardsProps = {
  filmsData: FilmShortData[];
  maxCardsCount?: number;
};

export function SmallFilmCards({ filmsData, maxCardsCount = 100 }: SmallFilmCardsProps): JSX.Element {
  const [hoveredCardId, setHoveredCardId] = useState<string | undefined>(undefined);
  const handleMouseEnter = useCallback((cardId: string | undefined) => setHoveredCardId(cardId), []);
  const handleMouseLeave = useCallback(() => handleMouseEnter(undefined), [handleMouseEnter]);

  return filmsData.length
    ? (
      <div className="catalog__films-list">
        { filmsData.map((filmData: FilmShortData, index: number) =>
          index < maxCardsCount && (
            <SmallFilmCard
              key={filmData.id}
              hoveredCardId={hoveredCardId}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...filmData}
            />
          )) }
      </div>)
    : (<h3>Фильмы не найдены</h3>);
}
