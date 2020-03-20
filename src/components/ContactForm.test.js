import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders all input fields', () => {
  const { getByTestId } = render(<ContactForm />);

  getByTestId('first-required');
  getByTestId('last name');
  getByTestId('email');
  getByTestId('message');
});

test('form submit renders a JSON object', () => {});
