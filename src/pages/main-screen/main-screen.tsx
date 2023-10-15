import { Link } from 'react-router-dom';
import Copyright from '../../components/copyright';
import FilmGenreLinks from '../../components/film-genre-links/film-genre-links';
import Logo from '../../components/logo';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import UserBlock from '../../components/user-block';
import { FilmGenresData } from '../../mocks/film-genres-data';
import { FilmData } from '../../mocks/films-data';
import { ROUTES } from '../../routes';

export type MainScreenProps = {
  promoFilmId: number;
  userFilmsCount: number;
  filmGenresData: FilmGenresData[];
  filmsData: FilmData[];
}

export default function MainScreen({ promoFilmId, userFilmsCount, filmGenresData, filmsData }: MainScreenProps): JSX.Element {
  const promoFilmData = filmsData.find((film) => film.id === promoFilmId);

  if (!promoFilmData) {
    throw new Error('Wrong promo film ID');
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilmData.backgroundImageSource} alt={promoFilmData.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

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
                <Link to={ROUTES.filmPlayer.getDynamicPath(promoFilmId)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={ROUTES.myList.fullPath} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{ userFilmsCount }</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmGenreLinks filmGenresData={filmGenresData}/>

          <SmallFilmCards filmsData={filmsData}></SmallFilmCards>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo light />

          <Copyright />
        </footer>
      </div>
    </>
  );
}
