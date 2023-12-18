import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { Genres, MAX_CARDS_COUNT_STEP } from '../../consts';
import GenreFilmCards from './genre-film-cards';
import userEvent from '@testing-library/user-event';
import filterFilmsByGenre from '../../shared/filter-films-by-genre/filter-films-by-genre';

describe('Component: SmallFilmCards', () => {
  let preparedComponent: JSX.Element;

  beforeEach(() => {
    preparedComponent = withHistory(<GenreFilmCards />);
  });

  it('renders correctly', () => {
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: Genres['All genres'] },
    });

    render(withStoreComponent);

    setTimeout(() => {
      expect(screen.getAllByTestId('small-film-card')).toHaveLength(MAX_CARDS_COUNT_STEP);
      expect(screen.getByTestId('show-more-button')).toBeInTheDocument();
    }, 50);
  });

  it('increase max cards count when user click "show more button"', () => {
    const expectedCardsCount = MAX_CARDS_COUNT_STEP + 1;
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData.slice(0, expectedCardsCount) },
      Genre: { genre: Genres['All genres'] },
    });

    render(withStoreComponent);

    setTimeout(() => {
      userEvent.click(screen.getByTestId('show-more-button'));
      expect(screen.getAllByTestId('small-film-card')).toHaveLength(expectedCardsCount);
    }, 50);
  });

  it('hide "show more button" when there are no more hidden cards', () => {
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData.slice(0, MAX_CARDS_COUNT_STEP + 1) },
      Genre: { genre: Genres['All genres'] },
    });

    render(withStoreComponent);

    setTimeout(() => {
      userEvent.click(screen.getByTestId('show-more-button'));
      expect(screen.getByTestId('show-more-button')).not.toBeInTheDocument();
    }, 50);
  });

  it('filter film cards by genre in state', () => {
    const genre = Genres.Drama;
    const { withStoreComponent } = withStore(preparedComponent, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: genre },
    });
    const expectedFilmsNames = filterFilmsByGenre(mockFilmsShortData, genre).map((film) => film.name);

    render(withStoreComponent);

    setTimeout(() => {
      expect(screen.getAllByTestId('small-film-card')).toHaveLength(expectedFilmsNames.length);
      expectedFilmsNames.forEach((filmName) => {
        expect(screen.getByText(filmName)).toBeInTheDocument();
      });
    }, 50);
  });
});
