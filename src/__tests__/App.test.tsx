import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] }))
}));

test('renders without crashing', () => {
  render(<App/>);
  expect(screen.getByText('Simple Shop')).toBeInTheDocument();
});