import { generatePath, useNavigate } from 'react-router-dom';
import GenresFilter, { GenresFilterProps } from '../../components/genres-filter/genres-filter';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import { ROUTES } from '../../routes';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { PromoFilmData } from '../../mocks/promo-film-data';
import { increaseMaxCardsCount } from '../../store/action';

export type MainScreenProps = GenresFilterProps & {
  promoFilmData: PromoFilmData;
  userFilmsCount: number;
}

export default function MainScreen({ promoFilmData, userFilmsCount, genres }: MainScreenProps): JSX.Element {
  const navigate = useNavigate();

  const { length: genreFilmsCount } = useAppSelector((state) => state.filmsData);
  const maxCardsCount = useAppSelector((state) => state.maxCardsCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilmData.bgImageSource} alt={promoFilmData.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className='film-card__head'></Header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilmData.imageSource} alt={promoFilmData.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{ promoFilmData.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ promoFilmData.genres }</span>
                <span className="film-card__year">{ promoFilmData.releaseDate }</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(generatePath(ROUTES.filmPlayer.fullPath, {id: promoFilmData.id}))} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button onClick={() => navigate(ROUTES.myList.fullPath)} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{ userFilmsCount }</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresFilter genres={genres}/>

          <SmallFilmCards cardsCount={maxCardsCount} />

          {maxCardsCount < genreFilmsCount &&
          <div className="catalog__more">
            <button
              onClick={() => (dispatch(increaseMaxCardsCount()))}
              className="catalog__button"
              type="button"
            >Show more
            </button>
          </div>}

        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
