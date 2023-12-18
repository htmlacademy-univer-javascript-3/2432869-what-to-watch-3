import { render, screen } from '@testing-library/react';
import FilmScreenTabs, { FilmTabTitle, FilmTabsTitles } from './film-screen-tabs';
import { withStore } from '../../../../utils/mock-component';
import { mockFilmsData } from '../../../../mocks/films-data';
import { mockReviewsData } from '../../../../mocks/reviews-data';
import userEvent from '@testing-library/user-event';

describe('Component: FilmScreenTabs', () => {
  const filmData = mockFilmsData[2];

  it('renders overview tab initialy', () => {
    const { withStoreComponent } = withStore(<FilmScreenTabs />, {
      FilmsData: { filmData: filmData },
      ReviewsData: { reviewsData: mockReviewsData }
    });

    render(withStoreComponent);

    expect(screen.getAllByTestId('film-tab-button')).toHaveLength(Object.values(FilmTabsTitles).length);
    Object.values(FilmScreenTabs).forEach((tabTitle: FilmTabTitle) => {
      expect(screen.getByText(tabTitle)).toBeInTheDocument();
    });
    expect(screen.getByText(filmData.rating.toFixed(1))).toBeInTheDocument();
    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
  });

  it('change tab content and tab button style when user click button', async () => {
    const { withStoreComponent } = withStore(<FilmScreenTabs />, {
      FilmsData: { filmData: filmData },
      ReviewsData: { reviewsData: mockReviewsData }
    });

    render(withStoreComponent);

    expect(screen.getAllByTestId('film-tab-button')[1]).not.toHaveClass('film-nav__item--active');
    expect(screen.getByText(filmData.rating.toFixed(1))).toBeInTheDocument();
    expect(screen.getByText(/ratings/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText(FilmTabsTitles.Details));

    expect(screen.getAllByTestId('film-tab-button')[1]).toHaveClass('film-nav__item--active');
    expect(screen.getByText(/run time/i)).toBeInTheDocument();
    expect(screen.getByText(/genre/i)).toBeInTheDocument();
    expect(screen.getByText(/released/i)).toBeInTheDocument();
  });
});

