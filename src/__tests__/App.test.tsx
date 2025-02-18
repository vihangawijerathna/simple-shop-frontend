import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import axios from 'axios';

// Mock axios before tests
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Set up mock response
const mockProducts = [
  { id: 1, name: 'T-Shirt', price: 19.99, description: 'A comfortable cotton t-shirt' },
  { id: 2, name: 'Jeans', price: 49.99, description: 'Classic blue jeans' }
];

mockedAxios.get.mockResolvedValue({
  data: mockProducts,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {
    url: 'https://simple-shop-backend-production.up.railway.app/api/products'
  }
});

test('renders without crashing', async () => {
  render(<App />);
  
  // Check if "Simple Shop" title is rendered
  const titleElement = screen.getByText('Simple Shop');
  expect(titleElement).toBeInTheDocument();
});