import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { ALL_GENRES, MAX_CARDS_COUNT_STEP } from '../../consts';
import { genres } from '../../mocks/genres';
import GenreFilmCards from './genre-film-cards';
import userEvent from '@testing-library/user-event';
import filterFilmsByGenre from '../../shared/filter-films-by-genre/filter-films-by-genre';

describe('Component: GenreFilmCards', () => {
  let preparedComponent: JSX.Element;

  beforeEach(() => {
    preparedComponent = withHistory(<GenreFilmCards />);
  });

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: ALL_GENRES },
    });

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(MAX_CARDS_COUNT_STEP);
    expect(screen.getByTestId('show-more-button')).toBeInTheDocument();
  });

  it('show additionaly new cards when user click "show more button"', async () => {
    const expectedCardsCount = MAX_CARDS_COUNT_STEP + 1;
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData.slice(0, expectedCardsCount) },
      Genre: { genre: ALL_GENRES },
    });

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(MAX_CARDS_COUNT_STEP);
    await userEvent.click(screen.getByTestId('show-more-button'));
    expect(screen.getAllByTestId('small-film-card')).toHaveLength(expectedCardsCount);
  });

  it('hide "show more button" when there are no more hidden cards', async () => {
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData.slice(0, MAX_CARDS_COUNT_STEP + 1) },
      Genre: { genre: ALL_GENRES },
    });

    render(withStoreComponent);

    await userEvent.click(screen.getByTestId('show-more-button'));
    expect(screen.queryByTestId('show-more-button')).not.toBeInTheDocument();
  });

  it('filter film cards by genre in state', () => {
    const genre = genres.Drama;
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: genre },
    });
    const expectedFilmsNames = filterFilmsByGenre(mockFilmsShortData, genre).map((film) => film.name);

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(expectedFilmsNames.length);
    expectedFilmsNames.forEach((filmName) => {
      expect(screen.getByText(filmName)).toBeInTheDocument();
    });
  });
});
