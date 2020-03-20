import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders all input fields', () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/first name\*/i);
  getByLabelText(/last name\*/i);
  getByLabelText(/email\*/i);
  getByLabelText(/message/i);
});

test('form submit renders a JSON object', () => {
  const { getByTestId } = render(<ContactForm />);

  const firstName = getByTestId('first-name-input');
  //   const lastName = getByTestId('last name');
  //   const email = getByTestId('email');
  //   const message = getByTestId('message');

  fireEvent.change(firstName, { target: { value: 'test first name' } });
  expect(firstName.value).toBe('test first name');
});
