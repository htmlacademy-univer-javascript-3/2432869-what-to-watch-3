export type FilmReviewProps = {
  comment: string;
  user: string;
  date: string;
  rating: number;
};

export default function FilmReview({ comment, user, date, rating }: FilmReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{ comment }</p>

        <footer className="review__details">
          <cite className="review__author">{ user }</cite>
          <time className="review__date" dateTime={date}>{ date }</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ rating }</div>
    </div>
  );
}
