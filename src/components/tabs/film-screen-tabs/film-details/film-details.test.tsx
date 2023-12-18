import { render, screen } from '@testing-library/react';
import { withStore } from '../../../../utils/mock-component';
import { mockFilmsData } from '../../../../mocks/films-data';
import FilmDetails from './film-details';

describe('Component: FilmOverview', () => {
  const filmData = mockFilmsData[5];

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<FilmDetails />, {
      FilmsData: { filmData: filmData }
    });

    render(withStoreComponent);

    expect(screen.getByText(/director/i)).toBeInTheDocument();
    expect(screen.getByText(/starring/i)).toBeInTheDocument();
    expect(screen.getByText(/run time/i)).toBeInTheDocument();
    expect(screen.getByText(/genre/i)).toBeInTheDocument();
    expect(screen.getByText(filmData.genre)).toBeInTheDocument();
    expect(screen.getByText(/released/i)).toBeInTheDocument();
  });
});
