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
              ref={register({ required: true, maxLength: 3 })}
              data-testid='first-name-input'
            />
          </label>

          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
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
            <p>Looks like there was an error: {errors.lastName.type}</p>
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
            <p>Looks like there was an error: {errors.email.type}</p>
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
          <pre style={{ textAlign: 'left', color: 'white' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type='submit' />
      </form>
    </div>
  );
};

export default ContactForm;
