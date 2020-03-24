import React from 'react';
import { render, fireEvent, wait, cleanup } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm';

test('renders all input fields', () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first name\*/i);
  getByLabelText(/last name\*/i);
  getByLabelText(/email\*/i);
  getByLabelText(/message/i);
});

test('On form submission, renders the JSON inputted data', async () => {
  const { getByTestId } = render(<ContactForm />);

  const firstName = getByTestId('first-name-input');
  const lastName = getByTestId('last-name-input');
  const email = getByTestId('email-input');
  const message = getByTestId('message-input');
  const submitButton = getByTestId('submit');

  fireEvent.change(firstName, {
    target: {
      value: 'aaa'
    }
  });
  fireEvent.change(lastName, {
    target: {
      value: 'babaci'
    }
  });
  fireEvent.change(email, {
    target: {
      value: 'rbabaci1@gmail.com'
    }
  });
  //! The same as firing the change event
  message.value = 'hello';

  expect(firstName.value).toBe('aaa');
  expect(lastName.value).toBe('babaci');
  expect(email.value).toBe('rbabaci1@gmail.com');
  expect(message.value).toBe('hello');
  expect(submitButton.type).toBe('submit');

  fireEvent.click(submitButton);

  await wait(() =>
    expect(getByTestId('preformatted-text')).toBeInTheDocument()
  );

  cleanup();
});

test('inputs render error messages onBlur', async () => {
  const { getByTestId } = render(<ContactForm />);

  const firstName = getByTestId('first-name-input');
  const lastName = getByTestId('last-name-input');
  const email = getByTestId('email-input');

  fireEvent.blur(firstName);
  fireEvent.blur(lastName);
  fireEvent.blur(email);

  await wait(() => {
    expect(getByTestId('firstName-error')).toBeInTheDocument();
    expect(getByTestId('lastName-error')).toBeInTheDocument();
    expect(getByTestId('email-error')).toBeInTheDocument();
  });

  cleanup();
});

test('User should be able to enter any firstName length', async () => {
  const { getByTestId } = render(<ContactForm />);
  const myFirstName = 'rabah ';

  const firstName = getByTestId('first-name-input');
  const lastName = getByTestId('last-name-input');
  const email = getByTestId('email-input');
  const submitButton = getByTestId('submit');

  firstName.value = myFirstName;
  lastName.value = 'o';
  email.value = 'o';

  expect(firstName.value).toBe('rabah ');

  fireEvent.click(submitButton);

  await wait(() => {
    const { firstName } = JSON.parse(
      getByTestId('preformatted-text').innerHTML
    );

    expect(firstName).toMatch(myFirstName);
  });

  cleanup();
});
