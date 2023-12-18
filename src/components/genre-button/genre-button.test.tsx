import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import { GenreButton } from './genre-button';
import { Genres } from '../../consts';
import userEvent from '@testing-library/user-event';

describe('Component: GenreButton', () => {
  const onClick = vi.fn();

  it('renders correctly when genre in state isn`t the same', () => {
    const genre = Genres.Crime;
    const { withStoreComponent } = withStore(<GenreButton genre={genre} onClick={onClick} />, {
      Genre: { genre: Genres['All genres'] }
    });

    render(withStoreComponent);

    expect(screen.getByTestId('genre-button')).toBeInTheDocument();
    expect(screen.getByTestId('genre-button')).not.toHaveClass('catalog__genres-item--active');
    expect(screen.getByText(genre)).toBeInTheDocument();
  });

  it('renders correctly when genre in state is the same', () => {
    const genre = Genres.Horror;
    const { withStoreComponent } = withStore(<GenreButton genre={genre} onClick={onClick} />, {
      Genre: { genre: genre }
    });

    render(withStoreComponent);

    expect(screen.getByTestId('genre-button')).toBeInTheDocument();
    expect(screen.getByTestId('genre-button')).toHaveClass('catalog__genres-item--active');
    expect(screen.getByText(genre)).toBeInTheDocument();
  });

  it('handle user click', async () => {
    const genre = Genres.Horror;
    const { withStoreComponent } = withStore(<GenreButton genre={genre} onClick={onClick} />, {
      Genre: { genre: genre }
    });

    render(withStoreComponent);
    await userEvent.click(screen.getByText(genre));

    expect(onClick).toBeCalled();
  });
});
