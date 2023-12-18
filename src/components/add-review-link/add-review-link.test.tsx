import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import AddReviewLink from './add-review-link';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { generatePath } from 'react-router-dom';
import { AppRoutes } from '../../app-routes';

describe('Component: AddReviewLink', () => {
  it('renders correctly', () => {
    const filmId = '9jdsaj342l';
    const withHistoryComponent = withHistory(<AddReviewLink filmId={filmId} />);

    render(withHistoryComponent);

    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
    expect(screen.getByText(/add review/i)).toBeInTheDocument();
  });

  it('redirect to add review for film when user click link', async () => {
    const filmId = 'dsa560';
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<AddReviewLink filmId={filmId} />, history);

    render(withHistoryComponent);
    await userEvent.click(screen.getByRole('link'));

    expect(history.location.pathname).toBe(generatePath(AppRoutes.FilmReview.FullPath, { id: filmId }));
  });
});
