import { NavLink, useParams } from 'react-router-dom';
import AddReviewForm, { AddReviewFormProps } from '../../components/add-review-form';
import { FilmData } from '../../mocks/films-data';
import Screen404 from '../404-screen/404-screen';
import { ROUTES } from '../../routes';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';

export type AddReviewScreenProps = AddReviewFormProps & {
  filmsData: FilmData[];
};

export default function AddReviewScreen({ ratingWidth, filmsData }: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);
  const filmData = filmsData.find((film) => film.id === filmId);

  if (!filmData) {
    return <Screen404 />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.backgroundImageSource} alt={filmData.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <NavLink to={ROUTES.film.getDynamicPath(filmData.id)} className="breadcrumbs__link">{ filmData.name }</NavLink>
              </li>
              <li className="breadcrumbs__item">
                <NavLink to={ROUTES.filmReview.getDynamicPath(filmData.id)} className="breadcrumbs__link">Add review</NavLink>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmData.imageSource} alt={filmData.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm ratingWidth={ratingWidth} />
      </div>
    </section>
  );
}
