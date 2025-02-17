import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import App from '../App';  // Changed to import from parent directory

test('renders without crashing', () => {
  render(<App /> as ReactElement);
});