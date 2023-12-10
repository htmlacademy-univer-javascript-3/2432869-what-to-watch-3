import { render, screen } from '@testing-library/react';
import FilmOverview from './film-overview';
import { withStore } from '../../../../utils/mock-component';
import { mockFilmsData } from '../../../../mocks/films-data';

describe('Component: FilmOverview', () => {
  const filmData = mockFilmsData[4];

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<FilmOverview />, {
      FilmsData: { filmData: filmData }
    });

    render(withStoreComponent);

    expect(screen.getByText(filmData.rating.toFixed(1))).toBeInTheDocument();
    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(/starring/i)).toBeInTheDocument();
  });
});
