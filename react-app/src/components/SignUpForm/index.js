import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import { createJournal } from "../../store/journals";
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const credential = "demo@demo.com";
  const pass = "password";

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Passwords must match."])
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    if(user.journals.length === 0) {
      const user_id = user.id;

          const newJournal = {
              user_id,
              journal_name: "First Journal"
          };

          dispatch(createJournal(newJournal))
    }

    return <Redirect to={`/${user.username}/dashboard`} />;
  }

  return (
    <div className="bg-img">
      <div className="login-ctn">
        <div className="logo-name" onClick={() => history.push("/")}>
          <img
          src='https://res.cloudinary.com/lpriya/image/upload/v1637620008/Pensieve/pensieve-logo_xsepmf.png'
          alt="login-logo"
          />
          <h1>Pensieve</h1>
          <p>A time capsule for your precious memories.</p>
        </div>
        <form onSubmit={onSignUp}>
          <ul className="errors">
            {errors.map((error, ind) => (
              <li key={ind}>{error}</li>
            ))}
          </ul>
          <div className="form-fields">
            <input
              type='text'
              name='first_name'
              onChange={updateFirstName}
              value={firstName}
              placeholder='First Name'
              autoFocus={true}
              required
            ></input>
          </div>
          <div className="form-fields">
            <input
              type='text'
              name='last_name'
              onChange={updateLastName}
              value={lastName}
              placeholder='Last Name'
            ></input>
          </div>
          <div className="form-fields">
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='User Name'
              required
            ></input>
          </div>
          <div className="form-fields">
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='Email'
              required
            ></input>
          </div>
          <div className="form-fields">
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='Password'
              required
            ></input>
          </div>
          <div className="form-fields">
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Repeat Password'
              required
            ></input>
          </div>
          <button type='submit' id="s-btn">Sign Up</button>
        </form>
        <div
          id="s-demo"
          onClick={() => dispatch(login(credential, pass)) }
        >
          Demo User
        </div>
        <div className="form-links">
          <p>Already have an account?</p>
            <NavLink to="/login" className="switch-links">
              Log In
            </NavLink>
        </div>
      </div>
	  </div>
  );
};

export default SignUpForm;
