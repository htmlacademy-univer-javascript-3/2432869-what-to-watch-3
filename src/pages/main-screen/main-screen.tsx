import GenresFilter, { GenresFilterProps } from '../../components/genres-filter/genres-filter';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Spinner from '../../components/spinner/spinner';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPromoFilmData } from '../../store/films-data/selectors';
import GenreFilmCards from '../../components/genre-film-cards/genre-film-cards';
import { useEffect } from 'react';
import { fetchPromoFilmDataAction } from '../../store/api-actions';

export type MainScreenProps = GenresFilterProps;

export default function MainScreen({ genres }: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilmData = useAppSelector(getPromoFilmData);

  useEffect(() => {
    dispatch(fetchPromoFilmDataAction());
  }, [dispatch]);

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

          <GenreFilmCards />
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
