import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { createMemoryHistory } from 'history';
import { AppRoutes } from '../../app-routes';
import AddReviewScreen from './add-review-screen';
import { generatePath } from 'react-router-dom';
import { AuthStatus } from '../../consts';
import { mockFilmsData } from '../../mocks/films-data';

describe('Component: AddReviewScreen', () => {
  const filmData = mockFilmsData[6];
  let withStoreComponent: JSX.Element;

  beforeAll(() => {
    const history = createMemoryHistory();
    const withHistoryComponent = withHistory(<AddReviewScreen ratingWidth={5} />, history);
    withStoreComponent = withStore(withHistoryComponent, {
      FilmsData: { filmData: filmData },
      User: { authStatus: AuthStatus.Auth },
    }).withStoreComponent;

    history.push(generatePath(AppRoutes.FilmReview.FullPath, { id: filmData.id }));
  });

  it('renders correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('rating-inputs')).toBeInTheDocument();
    expect(screen.getByTestId('review-comment-input')).toBeInTheDocument();
    expect(screen.getByTestId('review-form-submit-button')).toBeInTheDocument();
    expect(screen.getAllByAltText(filmData.name)).toHaveLength(2);
    expect(screen.getByText(filmData.name)).toBeInTheDocument();
  });
});
