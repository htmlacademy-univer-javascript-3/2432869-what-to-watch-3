import { render, screen } from '@testing-library/react';
import { name } from 'faker';
import StarringList from './starring-list';

describe('Component: StarringList', () => {
  it('renders correctly', () => {
    const starring = Array.from({ length: 4 }, () => `${name.firstName()} ${name.lastName()}`);

    render(<StarringList starring={starring} />);

    expect(screen.getAllByTestId('starring-item')).toHaveLength(4);
    expect(screen.getByText(starring[0])).toBeInTheDocument();
    expect(screen.getByText(starring[3])).toBeInTheDocument();
  });
});
