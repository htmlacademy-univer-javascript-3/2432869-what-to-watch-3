import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import { FilmData } from '../../mocks/films-data';
import Screen404 from '../404-screen/404-screen';
import { ROUTES } from '../../routes';
import FilmScreenTabs from '../../components/tabs/film-screen-tabs/tabs/film-screen-tabs';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { FilmReviewsProps } from '../../components/tabs/film-screen-tabs/film-reviews/film-reviews';
import { Genre } from '../../mocks/genres';

export type FilmScreenProps = FilmReviewsProps & {
  userFilmsCount: number;
  filmsLikeThisCount: number;
  filmsData: ReadonlyArray<FilmData>;
};

export default function FilmScreen({ userFilmsCount, filmsLikeThisCount,
  filmsData, filmReviewsData }: FilmScreenProps): JSX.Element {
  const navigate = useNavigate();

  const params = useParams();
  const filmId = Number(params.id);
  const filmData = filmsData.find((film) => film.id === filmId);
  if (!filmData) {
    return <Screen404 />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData.bgImageSource} alt={filmData.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className='film-card__head'></Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ filmData.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ filmData.genres }</span>
                <span className="film-card__year">{ filmData.releaseDate }</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(generatePath(ROUTES.filmPlayer.fullPath, {id: filmId}))} className="btn btn--play film-card__button" type="button">
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
                <button onClick={() => navigate(ROUTES.filmReview.relativePath)} className="btn film-card__button">Add review</button>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData.imageSource} alt={filmData.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmScreenTabs filmData={filmData} filmReviewsData={filmReviewsData} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SmallFilmCards
            genre={filmData.genres.substring(0, filmData.genres.indexOf(', ')) as Genre}
            cardsCount={filmsLikeThisCount}
            excludeFilmId={filmData.id}
          />
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
