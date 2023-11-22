import { useState, useCallback, useEffect } from 'react';
import { MAX_CARDS_COUNT_STEP } from '../consts';
import { useAppSelector } from '../hooks';
import { useFilmsByGenre } from '../hooks/use-films-by-genre';
import { getGenre } from '../store/genre-process/selectors';
import ShowMoreButton from './show-more-button';
import { SmallFilmCards } from './small-film-cards/small-film-cards';
import Spinner from './spinner/spinner';

export default function GenreFilmCards(): JSX.Element {
  const [maxCardsCount, setMaxCardsCount] = useState(MAX_CARDS_COUNT_STEP);
  const resetMaxCardsCount = () => setMaxCardsCount(MAX_CARDS_COUNT_STEP);
  const increaseMaxCardsCount = useCallback(() =>
    setMaxCardsCount((prev) => prev + MAX_CARDS_COUNT_STEP),
  []);

  const genre = useAppSelector(getGenre);
  const genreFilmsData = useFilmsByGenre(genre);
  useEffect(() => {
    resetMaxCardsCount();
  }, [genre]);

  return (
    <>
      {genreFilmsData.length
        ? <SmallFilmCards filmsData={genreFilmsData} maxCardsCount={maxCardsCount} />
        : <Spinner />}

      <ShowMoreButton hide={maxCardsCount >= genreFilmsData.length} handleClick={increaseMaxCardsCount} />
    </>
  );
}
