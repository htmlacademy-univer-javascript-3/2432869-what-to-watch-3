export type FilmReviewProps = {
  text: string;
  author: string;
  publishDate: Date;
  rating: number;
};

export default function FilmReview({ text, author, publishDate, rating }: FilmReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{ text }</p>

        <footer className="review__details">
          <cite className="review__author">{ author }</cite>
          <time className="review__date" dateTime={publishDate.toISOString()}>{ publishDate.toUTCString().substring(5, 17) }</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ rating }</div>
    </div>
  );
}
