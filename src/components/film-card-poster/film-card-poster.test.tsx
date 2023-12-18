import { render, screen } from '@testing-library/react';
import FilmCardPoster from './film-card-poster';
import { internet } from 'faker';

describe('Component: FilmCardPoster', () => {
  it('renders correctly', () => {
    const name = 'Some name';
    const preparedComponent = <FilmCardPoster posterImage={internet.url()} name={name} />;

    render(preparedComponent);

    expect(screen.getByTestId('film-card-poster')).toBeInTheDocument();
    expect(screen.getByTestId('film-card-poster')).not.toHaveClass('film-card__poster--big');
    expect(screen.getByAltText(name)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const name = 'Some name';
    const preparedComponent = <FilmCardPoster big posterImage={internet.url()} name={name} />;

    render(preparedComponent);

    expect(screen.getByTestId('film-card-poster')).toHaveClass('film-card__poster--big');
    expect(screen.getByAltText(name)).toBeInTheDocument();
  });
});
