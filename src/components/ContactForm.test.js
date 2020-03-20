import React from 'react';
import { render } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders all input fields', () => {
  const { getByTestId } = render(<ContactForm />);

  getByTestId('first name');
  getByTestId('last name');
  getByTestId('email');
  getByTestId('message');
});
