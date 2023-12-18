import { render, screen } from '@testing-library/react';
import RatingInput from './rating-input';
import userEvent from '@testing-library/user-event';
import { Mock } from '@vitest/spy';

describe('Component: RatingInput', () => {
  let onRatingChange: Mock<[number], void>;
  let value: number;
  beforeEach(() => {
    onRatingChange = vi.fn();
    value = 3;
    render(<RatingInput value={value} selectedRating={2} onRatingChange={onRatingChange} />);
  });

  it('renders correctly', () => {
    expect(screen.getByTestId(`rating-input-${value}`)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });

  it('handle rating change on click', async () => {
    await userEvent.click(screen.getByTestId(`rating-input-${value}`));

    expect(onRatingChange).toBeCalled();
  });
});
