import { render, screen } from '@testing-library/react';
import FilmReview from './film-review';
import { mockReviewsData } from '../../mocks/reviews-data';
import formatDate from '../../shared/format-date/format-date';

describe('Component: FilmReview', () => {
  const reviewData = mockReviewsData[3];

  it('renders correctly', () => {
    const preparedComponent = <FilmReview {...reviewData} />;

    render(preparedComponent);

    expect(screen.getByText(reviewData.comment)).toBeInTheDocument();
    expect(screen.getByText(reviewData.user)).toBeInTheDocument();
    expect(screen.getByText(reviewData.rating)).toBeInTheDocument();
    expect(screen.getByText(formatDate(reviewData.date))).toBeInTheDocument();
  });
});
