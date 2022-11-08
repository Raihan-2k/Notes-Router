import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';


const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (r) => {
    r.preventDefault();

    password === confirmPassword
      ? register({ name, email, password })
      : alert("Invalid Password")
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={onNameChange} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={onEmailChange} />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />

      <button>Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
