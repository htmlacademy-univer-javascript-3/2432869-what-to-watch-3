import { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { FilmData } from '../../mocks/films-data';

export type SmallFilmCardsProps = {
  cardsCount?: number;
  filmsData: FilmData[];
}

export function SmallFilmCards({ cardsCount = 20, filmsData }: SmallFilmCardsProps): JSX.Element {
  const [focusedCardId, setFocusedCardId] = useState(-1);
  const onFocusHandler = (cardId: number) => setFocusedCardId(cardId);

  return (
    <div className="catalog__films-list">
      { filmsData.map((cardInfo: FilmData, index: number) => (index < cardsCount) && (
        <SmallFilmCard
          key={cardInfo.id}
          focusedCardId={focusedCardId}
          handleFocus={onFocusHandler}
          handleBlur={() => onFocusHandler(-1)}
          {...cardInfo}
        />
      )) }
    </div>
  );
}
