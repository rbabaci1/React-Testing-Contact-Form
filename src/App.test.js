import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders App with Contact Form', () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId('contact form');

  expect(form).toBeInTheDocument();
});
