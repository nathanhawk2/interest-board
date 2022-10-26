import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
          placeholder="   Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
        <input style={{ marginRight: '20px', height: '60px', width: '400px', borderRadius: '9px', marginTop: '30px'}}
          placeholder="   Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px'}}
          placeholder="   ******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button style={{cursor: 'pointer', justifyContent: 'center', backgroundColor: 'lightblue', width: '400px', height: '40px', borderRadius: '9px'}} type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <main>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Sign Up</h1>
      <div className='container' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
