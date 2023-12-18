import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import Footer from './footer';

describe('Component: Footer', () => {
  it('renders correctly', () => {
    const preparedComponent = withHistory(<Footer />);

    render(preparedComponent);

    expect(screen.getByTestId('light-logo')).toBeInTheDocument();
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
