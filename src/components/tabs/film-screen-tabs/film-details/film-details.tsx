import { useAppSelector } from '../../../../hooks';
import formatFilmTime from '../../../../shared/format-film-time/format-film-time';
import { getFilmData } from '../../../../store/films-data/selectors';
import Spinner from '../../../spinner/spinner';
import StarringList from '../../../starring-list/starring-list';

export default function FilmDetails(): JSX.Element {
  const filmData = useAppSelector(getFilmData);

  if (!filmData) {
    return <Spinner />;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{ filmData.director }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            <StarringList starring={filmData.starring} />
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{ formatFilmTime(filmData.runTime) }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{ filmData.genre }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{ filmData.released }</span>
        </p>
      </div>
    </div>
  );
}
