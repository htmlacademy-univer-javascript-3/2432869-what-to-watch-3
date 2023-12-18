import { render, screen } from '@testing-library/react';
import { withStore } from '../../../../utils/mock-component';
import FilmReviews from './film-reviews';
import { mockReviewsData } from '../../../../mocks/reviews-data';

describe('Component: FilmReviews', () => {
  const reviewsData = mockReviewsData;

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<FilmReviews />, {
      ReviewsData: { reviewsData: reviewsData }
    });

    render(withStoreComponent);

    expect(screen.getByTestId('film-reviews')).toBeInTheDocument();
    expect(screen.getAllByTestId('film-review')).toHaveLength(reviewsData.length);
    expect(screen.getAllByTestId('reviews-column')).toHaveLength(Math.ceil(reviewsData.length / 3));
  });
});
