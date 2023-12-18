import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { mockFilmsShortData } from '../../mocks/films-short-data';
import { SmallFilmCards } from './small-film-cards';

describe('Component: SmallFilmCards', () => {
  it('renders correctly', () => {
    const preparedComponent = withHistory(<SmallFilmCards filmsData={mockFilmsShortData} />);
    const { withStoreComponent } = withStore(preparedComponent, {});

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(mockFilmsShortData.length);
  });

  it('renders specified number of cards', () => {
    const cardsCount = 3;
    const preparedComponent = withHistory(<SmallFilmCards maxCardsCount={cardsCount} filmsData={mockFilmsShortData} />);
    const { withStoreComponent } = withStore(preparedComponent, {});

    render(withStoreComponent);

    expect(screen.getAllByTestId('small-film-card')).toHaveLength(cardsCount);
  });
});
