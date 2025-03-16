import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React testing with jest/i);
  expect(linkElement).toBeInTheDocument();
});
