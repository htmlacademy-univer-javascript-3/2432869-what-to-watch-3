import { render, screen } from '@testing-library/react';
import FilmScreenTabButton from './film-screen-tab-button';
import userEvent from '@testing-library/user-event';

describe('Component: FilmScreenTabButton', () => {
  const onClick = vi.fn();

  it('renders correctly', () => {
    const tabTitle = 'Some title';

    render(<FilmScreenTabButton tabTitle={tabTitle} selectedTab={'Another title'} onClick={onClick} />);

    expect(screen.getByTestId('film-tab-button')).toBeInTheDocument();
    expect(screen.getByTestId('film-tab-button')).not.toHaveClass('film-nav__item--active');
    expect(screen.getByText(tabTitle)).toBeInTheDocument();
  });

  it('renders correctly when title is the same with selected tab', () => {
    const tabTitle = 'Some title';

    render(<FilmScreenTabButton tabTitle={tabTitle} selectedTab={tabTitle} onClick={onClick} />);

    expect(screen.getByTestId('film-tab-button')).toHaveClass('film-nav__item--active');
    expect(screen.getByText(tabTitle)).toBeInTheDocument();
  });

  it('handle user click', async () => {
    const tabTitle = 'Some title';

    render(<FilmScreenTabButton tabTitle={tabTitle} selectedTab={'Another title'} onClick={onClick} />);
    await userEvent.click(screen.getByText(tabTitle));

    expect(onClick).toBeCalled();
  });
});
