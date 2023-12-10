/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { Genres, NameSpace } from '../../consts';
import GenresFilter from './genres-filter';
import userEvent from '@testing-library/user-event';

describe('Component: GenreButton', () => {
  it('renders correctly', () => {
    const genres = Genres;
    const { withStoreComponent } = withStore(<GenresFilter genres={genres} />, {
      Genre: { genre: Genres['All genres'] }
    });

    render(withStoreComponent);
    const activeButtons = screen.getAllByTestId('genre-button').filter((btn) => btn.classList.contains('catalog__genres-item--active'));

    expect(screen.getAllByTestId('genre-button')).toHaveLength(Object.values(genres).length);
    expect(activeButtons).toHaveLength(1);
  });

  it('dispatch "setGenre" when user click genre button', async () => {
    const genre = Genres.Drama;
    const { withStoreComponent, mockStore } = withStore(<GenresFilter genres={Genres} />, {
      Genre: { genre: Genres.Comedy }
    });

    render(withStoreComponent);
    await userEvent.click(screen.getByText(genre));

    setTimeout(() => {
      expect(mockStore.getState()[NameSpace.Genre].genre).toBe(genre);
    }, 50);
  });
});
