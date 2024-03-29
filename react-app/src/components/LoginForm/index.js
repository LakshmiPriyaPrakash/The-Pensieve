import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const credential = "demo@demo.com";
  const pass = "password";

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/${user.username}/dashboard`} />;
  }

  return (
    <div className="bg-img">
			<div className="login-ctn">
        <div className="logo-name" onClick={() => history.push("/")}>
          <img
          src='https://res.cloudinary.com/lpriya/image/upload/v1637620008/Pensieve/pensieve-logo_xsepmf.png'
          alt="signup-logo"
          />
          <h1>Pensieve</h1>
          <p>A time capsule for your precious memories.</p>
        </div>
        <form onSubmit={onLogin}>
          <ul className="errors">
            {errors.map((error, ind) => (
              <li key={ind}>{error}</li>
            ))}
          </ul>
          <div className="form-fields">
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              autoFocus={true}
              required
            />
          </div>
          <div className="form-fields">
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required
            />
            <button type='submit'id="l-btn">Login</button>
          </div>
        </form>
        <div
          id="l-demo"
          onClick={() => dispatch(login(credential, pass)) }
        >
          Demo User
        </div>
        <div className="form-links">
					<p>Don't have an account?</p>
            <NavLink to="/sign-up" className="switch-links">
              Create account
            </NavLink>
				</div>
			</div>
		</div>
  );
};

export default LoginForm;
