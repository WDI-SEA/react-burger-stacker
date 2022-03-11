import { render, screen } from '@testing-library/react';
import BurgerStacker from './BurgerStacker';

test('renders learn react link', () => {
  render(<BurgerStacker />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
