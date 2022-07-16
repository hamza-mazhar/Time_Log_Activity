import { render, screen } from '@testing-library/react';
import App from './App';
import './matchMedia'

test('renders main app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Report of the user/i);
  expect(linkElement).toBeInTheDocument();
});
