import { useEffect, useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { FilmData } from '../../mocks/films-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilmsByGenre, resetMaxCardsCount, setGenre } from '../../store/action';
import { Genre } from '../../mocks/genres';

export type SmallFilmCardsProps = {
  genre?: Genre;
  cardsCount?: number;
  excludeFilmId?: number;
}

export function SmallFilmCards({ genre = 'All genres', cardsCount = 20, excludeFilmId = -1 }: SmallFilmCardsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const genreFilmsData = useAppSelector((state) => state.filmsData);

  useEffect(() => {
    dispatch(resetMaxCardsCount());
    dispatch(setGenre({ genre: genre }));
    dispatch(changeFilmsByGenre());
  }, [dispatch, genre]);

  const [hoveredCardId, setHoveredCardId] = useState<number | undefined>(undefined);
  const onHoverHandler = (cardId: number | undefined) => setHoveredCardId(cardId);

  return (
    <div className="catalog__films-list">
      { genreFilmsData.map((filmData: FilmData, index: number) =>
        (index < cardsCount && filmData.id !== excludeFilmId) && (
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
