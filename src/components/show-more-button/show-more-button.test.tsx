import { render, screen } from '@testing-library/react';
import ShowMoreButton from './show-more-button';
import userEvent from '@testing-library/user-event';

describe('Component: ShowMoreButton', () => {
  const onClick = vi.fn();

  it('renders correctly', () => {
    render(<ShowMoreButton hide={false} onClick={onClick} />);

    expect(screen.getByTestId('show-more-button')).toBeInTheDocument();
    expect(screen.getByText(/show more/i)).toBeInTheDocument();
  });

  it('renders nothing when "hide" property is true', () => {
    render(<ShowMoreButton hide onClick={onClick} />);

    expect(screen.queryByTestId('show-more-button')).not.toBeInTheDocument();
    expect(screen.queryByText(/show more/i)).not.toBeInTheDocument();
  });

  it('handle user click', async () => {
    render(<ShowMoreButton hide={false} onClick={onClick} />);
    await userEvent.click(screen.getByTestId('show-more-button'));

    expect(onClick).toBeCalled();
  });
});
