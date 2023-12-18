export type RatingInputProps = {
  value: number;
  selectedRating: number;
  onRatingChange: (newRating: number) => void;
}

export default function RatingInput({ value, selectedRating, onRatingChange: handleRatingChange }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={() => handleRatingChange(value)}
        value={value}
        checked={value === selectedRating}
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        data-testid={`rating-input-${value}`}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating { value }</label>
    </>
  );
}
