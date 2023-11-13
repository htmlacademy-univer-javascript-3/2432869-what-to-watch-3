import GenresFilter, { GenresFilterProps } from '../../components/genres-filter/genres-filter';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useFilmsByGenreSelector, useGenreSelector, usePromoFilmSelector } from '../../hooks/selectors';
import { MAX_CARDS_COUNT_STEP } from '../../consts';
import { useEffect, useState } from 'react';
import ShowMoreButton from '../../components/show-more-button';
import Spinner from '../../components/spinner/spinner';
import FilmCardDesc from '../../components/film-card-desc';
import FilmCardPoster from '../../components/film-card-poster';

export type MainScreenProps = GenresFilterProps;

export default function MainScreen({ genres }: MainScreenProps): JSX.Element {
  const [maxCardsCount, setMaxCardsCount] = useState(MAX_CARDS_COUNT_STEP);
  const resetMaxCardsCount = () => setMaxCardsCount(MAX_CARDS_COUNT_STEP);
  const increaseMaxCardsCount = () => setMaxCardsCount((prev) => prev + MAX_CARDS_COUNT_STEP);

  const promoFilmData = usePromoFilmSelector();

  const genre = useGenreSelector();
  const genreFilmsData = useFilmsByGenreSelector(genre);
  useEffect(() => {
    resetMaxCardsCount();
  }, [genre]);

  return (
    <>
      <section className="film-card">
        {promoFilmData &&
          <div className="film-card__bg">
            <img src={promoFilmData.backgroundImage} alt={promoFilmData.name} />
          </div>}

        <h1 className="visually-hidden">WTW</h1>

        <Header className='film-card__head'></Header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            {promoFilmData
              ?
              <>
                <FilmCardPoster posterImage={promoFilmData.posterImage} name={promoFilmData.name} />
                <FilmCardDesc {...promoFilmData} />
              </>
              : <Spinner />}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresFilter genres={genres} />

          {genreFilmsData.length
            ? <SmallFilmCards filmsData={genreFilmsData} maxCardsCount={maxCardsCount} />
            : <Spinner />}

          <ShowMoreButton hide={maxCardsCount >= genreFilmsData.length} increaseCount={increaseMaxCardsCount} />
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
