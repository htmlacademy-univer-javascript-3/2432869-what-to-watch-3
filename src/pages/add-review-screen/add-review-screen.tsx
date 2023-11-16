import { NavLink, generatePath } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form';
import { ROUTES } from '../../routes';
import Header from '../../components/header';
import Spinner from '../../components/spinner/spinner';
import useFilmByParamId from '../../hooks/use-film-by-param-id';

export type AddReviewScreenProps = {
  ratingWidth: number;
};

export default function AddReviewScreen({ ratingWidth }: AddReviewScreenProps): JSX.Element {
  const filmData = useFilmByParamId();

  return (
    <section className="film-card film-card--full" style={{backgroundColor: filmData?.backgroundColor}}>
      <div className="film-card__header">
        {filmData &&
          <div className="film-card__bg">
            <img src={filmData.backgroundImage} alt={filmData.name} />
          </div>}

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          {filmData &&
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <NavLink to={generatePath(ROUTES.film.fullPath, {id: filmData.id})} className="breadcrumbs__link">{ filmData.name }</NavLink>
                </li>
                <li className="breadcrumbs__item">
                  <NavLink to={generatePath(ROUTES.filmReview.fullPath, {id: filmData.id})} className="breadcrumbs__link">Add review</NavLink>
                </li>
              </ul>
            </nav>}
        </Header>

        <div className="film-card__poster film-card__poster--small">
          {filmData
            ? <img src={filmData.posterImage} alt={filmData.name} width="218" height="327" />
            : <Spinner />}
        </div>
      </div>

      <div className="add-review">
        {filmData
          ? <AddReviewForm filmId={filmData.id} ratingWidth={ratingWidth} />
          : <Spinner />}
      </div>
    </section>
  );
}
