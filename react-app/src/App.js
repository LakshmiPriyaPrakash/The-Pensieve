import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import TopNavBar from './components/TopNavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { getEntries } from './store/entries';
import EntryDetails from './components/Entries/EntryDetails';
import UserEntries from './components/Entries';
import WriteEntry from './components/Entries/CreateEntry';
import EditEntry from './components/Entries/EditEntry';


function App() {
  const user = useSelector(state => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  if(user) dispatch(getEntries(user.id));


  return (
    <BrowserRouter>
      <TopNavBar />
      <Switch>
        {!user &&
          <Route path='/' exact={true}>
            <h1>Landing page</h1>
          </Route>
        }
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/:username/dashboard' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/:username/entries' exact={true} >
          <UserEntries />
        </ProtectedRoute>
        <ProtectedRoute path='/entries/:entryId' exact={true} >
          <EntryDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/entry/new' exact={true} >
          <WriteEntry />
        </ProtectedRoute>
        <ProtectedRoute path='/edit/entry/:entryId' exact={true} >
          <EditEntry />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
