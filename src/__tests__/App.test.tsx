import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders Simple Shop title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple Shop/i);
  expect(titleElement).toBeInTheDocument();
});