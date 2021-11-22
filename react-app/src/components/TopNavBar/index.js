
import React from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import './TopNavBar.css'

const TopNavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const credential = "demo@demo.com";
  const password = "password";

  if (user) {
    return <Redirect to={`/${user.username}/dashboard`} />;
  }

  return (
    <nav className="nav-bar">
      <div id="logo">
				<img
          src='https://res.cloudinary.com/lpriya/image/upload/v1637111931/Pensieve/pensieve-logo4_cga3n7.jpg'
          alt="Pensieve Logo"
        />
        <NavLink to='/' exact={true} activeClassName='active'>
              <p>Pensieve</p>
        </NavLink>
			</div>
      <div id="nav-links">
        <div id="login">
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
        </div>
        <div id="signup">
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
        </div>
        <div
          id="demo"
          onClick={() => dispatch(login(credential, password)) }
        >
          Demo User
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
