import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/mock-component';

describe('Component: Logo', () => {
  it('renders correctly', () => {
    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getAllByText(/w/i)).toHaveLength(2);
    expect(screen.getByText(/t/i)).toBeInTheDocument();
  });
});
