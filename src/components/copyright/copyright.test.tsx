import { render, screen } from '@testing-library/react';
import Copyright from './copyright';

describe('Component: Copyright', () => {
  it('renders correctly', () => {
    const preparedComponent = <Copyright />;

    render(preparedComponent);

    expect(screen.getByText(/©/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/what to watch/i)).toBeInTheDocument();
  });
});
