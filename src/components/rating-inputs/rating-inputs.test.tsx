import { render, screen } from '@testing-library/react';
import { Mock } from '@vitest/spy';
import RatingInputs from './rating-inputs';

describe('Component: RatingInputs', () => {
  let onRatingChange: Mock<[number], void>;
  let ratingWidth: number;
  beforeEach(() => {
    onRatingChange = vi.fn();
    ratingWidth = 3;
    render(<RatingInputs ratingWidth={ratingWidth} selectedRating={0} onRatingChange={onRatingChange} />);
  });

  it('renders correctly', () => {
    expect(screen.getByTestId('rating-inputs')).toBeInTheDocument();
    for (let i = 1; i <= ratingWidth; i++) {
      expect(screen.getByTestId(`rating-input-${i}`)).toBeInTheDocument();
    }
  });
});
