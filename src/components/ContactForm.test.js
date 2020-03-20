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
  const lastName = getByTestId('last-name-input');
  const email = getByTestId('email-input');
  const message = getByTestId('message-input');

  fireEvent.change(firstName, { target: { value: 'test first name' } });
  fireEvent.change(lastName, { target: { value: 'test last name' } });
  fireEvent.change(email, { target: { value: 'test email' } });
  fireEvent.change(message, { target: { value: 'test message' } });

  expect(firstName.value).toBe('test first name');
  expect(lastName.value).toBe('test last name');
  expect(email.value).toBe('test email');
  expect(message.value).toBe('test message');
});
