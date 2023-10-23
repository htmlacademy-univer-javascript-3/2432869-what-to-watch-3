import './player-screen.css';
import { useParams } from 'react-router-dom';
import { FilmData } from '../../mocks/films-data';
import Screen404 from '../404-screen/404-screen';
import FormatFilmTime from '../../shared/format-film-time';

export type PlayerScreenProps = {
  filmsData: ReadonlyArray<FilmData>;
}

export default function PlayerScreen({ filmsData }: PlayerScreenProps): JSX.Element {
  const urlParams = useParams();
  const filmId = Number(urlParams.id);
  const filmData = filmsData.find((film) => film.id === filmId);

  if (!filmData) {
    return <Screen404 />;
  }

  return (
    <div className="player">
      <video src={filmData.trailerSource} className="player__video" poster={filmData.backgroundImageSource}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler player__toggler-left">Toggler</div>
          </div>
          <div className="player__time-value">{ FormatFilmTime(filmData.duration) }</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
