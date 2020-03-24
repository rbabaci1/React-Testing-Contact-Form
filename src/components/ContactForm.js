import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = data => setData(data);

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)} data-testid='contact form'>
        <div>
          <label>
            First Name*
            <input
              name='firstName'
              placeholder='bill'
              ref={register({ required: true })}
              data-testid='first-name-input'
            />
          </label>

          {errors.firstName && (
            <p data-testid='firstName-error'>
              Looks like there was an error: {errors.firstName.type}
            </p>
          )}
        </div>

        <div>
          <label>
            Last Name*
            <input
              name='lastName'
              placeholder='luo'
              ref={register({ required: true })}
              data-testid='last-name-input'
            />
          </label>
          {errors.lastName && (
            <p data-testid='lastName-error'>
              Looks like there was an error: {errors.lastName.type}
            </p>
          )}
        </div>

        <div>
          <label placeholder='bluebill1049@hotmail.com'>
            Email*
            <input
              name='email'
              ref={register({ required: true })}
              data-testid='email-input'
            />
          </label>
          {errors.email && (
            <p data-testid='email-error'>
              Looks like there was an error: {errors.email.type}
            </p>
          )}
        </div>

        <div>
          <label>
            Message
            <textarea
              name='message'
              ref={register({ required: false })}
              data-testid='message-input'
            />
          </label>
        </div>

        {data && (
          <pre
            style={{ textAlign: 'left', color: 'white' }}
            data-testid='preformatted-text'
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        <input type='submit' data-testid='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
