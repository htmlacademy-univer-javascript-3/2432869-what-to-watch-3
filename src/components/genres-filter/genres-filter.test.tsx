/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { genres } from '../../mocks/genres';
import GenresFilter from './genres-filter';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes } from '../../utils/mocks';
import { setGenre } from '../../store/genre-process/genre-process';
import { ALL_GENRES } from '../../consts';
import { mockFilmsShortData } from '../../mocks/films-short-data';

describe('Component: GenreFilter', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<GenresFilter />, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: ALL_GENRES },
    });
    const expectedLength = [...new Set(mockFilmsShortData.map((filmData) => filmData.genre))].length + 1;

    render(withStoreComponent);
    const activeButtons = screen.getAllByTestId('genre-button').filter((btn) => btn.classList.contains('catalog__genres-item--active'));

    expect(screen.getAllByTestId('genre-button')).toHaveLength(expectedLength);
    expect(activeButtons).toHaveLength(1);
  });

  it('dispatch "setGenre" when user click genre button', async () => {
    const expectedGenre = genres.Drama;
    const { withStoreComponent, mockStore } = withStore(<GenresFilter />, {
      FilmsData: { filmsData: mockFilmsShortData },
      Genre: { genre: genres.Comedy }
    });

    render(withStoreComponent);
    await userEvent.click(screen.getByText(expectedGenre));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      setGenre.type
    ]);
  });
});
