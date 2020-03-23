import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders all input fields', () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/first name\*/i);
  getByLabelText(/last name\*/i);
  getByLabelText(/email\*/i);
  getByLabelText(/message/i);
});

test('form inputs change when a user types', () => {
  const { getByTestId } = render(<ContactForm />);

  const firstName = getByTestId('first-name-input');
  const lastName = getByTestId('last-name-input');
  const email = getByTestId('email-input');
  const message = getByTestId('message-input');

  fireEvent.change(firstName, { target: { value: 'aaa' } });
  fireEvent.change(lastName, { target: { value: 'babaci' } });
  fireEvent.change(email, { target: { value: 'rbabaci1@gmail.com' } });
  fireEvent.change(message, { target: { value: 'hello' } });

  expect(firstName.value).toBe('aaa');
  expect(lastName.value).toBe('babaci');
  expect(email.value).toBe('rbabaci1@gmail.com');
  expect(message.value).toBe('hello');

  fireEvent.click(getByTestId('submit'));
  const output = getByTestId('output');

  expect(output).toBeInTheDocument();
});

// test('submit works', async () => {
//   const { getByTestId } = render(<ContactForm />);

//   act(() => {
//     fireEvent(
//       getByTestId('submit'),
//       new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true
//       })
//     );
//   });

//   expect(getByTestId('test')).
// });
// test('User should be able to enter a first name longer than 3 chars', () => {
//   const { getByTestId } = render(<ContactForm />);

//   const firstName = getByTestId('first-name-input');

//   act(() => fireEvent.change(firstName, {target: {value: 'aaaa'}}))

//   expect()
// });
