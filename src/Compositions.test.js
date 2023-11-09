import { render, screen } from '@testing-library/react';
import Compositions from './Compositions';

test('renders learn react link', () => {
  render(<Compositions />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});