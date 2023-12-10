import { useAppSelector } from '../../../../hooks';
import getRatingDescription from '../../../../shared/get-rating-description/get-rating-description';
import { getFilmData } from '../../../../store/films-data/selectors';
import Spinner from '../../../spinner/spinner';
import StarringList from '../../../starring-list/starring-list';

export default function FilmOverview(): JSX.Element {
  const filmData = useAppSelector(getFilmData);

  if (!filmData) {
    return <Spinner />;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ filmData.rating.toFixed(1) }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ getRatingDescription(filmData.rating) }</span>
          <span className="film-rating__count">{ filmData.scoresCount } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ filmData.description }</p>

        <p className="film-card__director"><strong>Director: { filmData.director }</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring:
            <br />
            <StarringList starring={filmData.starring} />
            and other
          </strong>
        </p>
      </div>
    </>
  );
}
