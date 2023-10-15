import RatingInput from './rating-input';

export type RatingInputsProps = {
  ratingWidth: number;
  selectedRating: number;
  handleRatingChange: (newRating: number) => void;
}

export default function RatingInputs({ ratingWidth = 10, selectedRating, handleRatingChange }: RatingInputsProps): JSX.Element {
  const ratingInputs: JSX.Element[] = [];
  for (let i = ratingWidth; i > 0; i--) {
    ratingInputs.push(<RatingInput key={i} value={i} selectedRating={selectedRating} handleRatingChange={handleRatingChange} />);
  }

  return (
    <div className="rating">
      <div className="rating__stars">
        { ratingInputs }
      </div>
    </div>
  );
}
