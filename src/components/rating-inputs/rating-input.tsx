export type RatingInputProps = {
  value: number;
  selectedRating: number;
  handleRatingChange: (newRating: number) => void;
}

export default function RatingInput({ value, selectedRating, handleRatingChange }: RatingInputProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating"
        value={value} checked={value === selectedRating} onChange={() => handleRatingChange(value)}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating { value }</label>
    </>
  );
}
