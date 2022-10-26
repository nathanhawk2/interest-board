import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <form style={{display: 'flex', boxSizing: 'border-box', justifyContent: 'center', flexDirection: 'column'}} onSubmit={handleFormSubmit}>
        <input style={{ marginRight: '20px', height: '60px', width: '400px', borderRadius: '9px', marginTop: '30px'}}
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input style={{ marginRight: '20px', height: '60px', width: '400px', borderRadius: '9px', marginTop: '30px'}}
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button style={{cursor: 'pointer', justifyContent: 'center', backgroundColor: 'lightblue', width: '400px', height: '40px', borderRadius: '9px', marginTop: '30px'}} type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <main className="d-flex m-5">
      <h4 style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>Login</h4>
      <div className='container' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
     
    </main>
  );
};

export default Login;
