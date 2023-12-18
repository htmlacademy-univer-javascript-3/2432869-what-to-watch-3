import RatingInput from '../rating-input/rating-input';

export type RatingInputsProps = {
  ratingWidth: number;
  selectedRating: number;
  onRatingChange: (newRating: number) => void;
}

export default function RatingInputs({ ratingWidth = 10, selectedRating, onRatingChange: handleRatingChange }: RatingInputsProps): JSX.Element {
  const ratingInputs: JSX.Element[] = [];
  for (let i = ratingWidth; i > 0; i--) {
    ratingInputs.push(<RatingInput key={i} value={i} selectedRating={selectedRating} onRatingChange={handleRatingChange} />);
  }

  return (
    <div className="rating" data-testid={'rating-inputs'}>
      <div className="rating__stars">
        { ratingInputs }
      </div>
    </div>
  );
}
