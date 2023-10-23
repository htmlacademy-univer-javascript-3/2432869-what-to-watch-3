import GetRatingDescription from '../../../shared/get-rating-description';

export type FilmOverviewProps = {
  rating: number;
  ratingsCount: number;
  shortSummary: string;
  summary: string;
  director: string;
  starring: string;
};

export default function FilmOverview({ rating, ratingsCount, shortSummary, summary, director, starring }: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{ rating }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ GetRatingDescription(rating) }</span>
          <span className="film-rating__count">{ ratingsCount } ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ shortSummary }</p>

        <p>{ summary }</p>

        <p className="film-card__director"><strong>Director: { director }</strong></p>

        <p className="film-card__starring"><strong>Starring: { starring } and other</strong></p>
      </div>
    </>
  );
}
