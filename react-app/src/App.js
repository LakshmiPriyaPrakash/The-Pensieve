import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import TopNavBar from './components/TopNavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import { getEntries } from './store/entries';
import { getJournals } from './store/journals';
import EntryDetails from './components/Entries/EntryDetails';
import UserEntries from './components/Entries';
import WriteEntry from './components/Entries/CreateEntry';
import EditEntry from './components/Entries/EditEntry';
import UserJournals from './components/Journals';
import CreateJournal from './components/Journals/CreateJournal';
import JournalDetails from './components/Journals/JournalDetails';
import EditJournal from './components/Journals/EditJournal';
import SideNavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import SplashPage from './components/SplashPage';



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

  if(user) {
    dispatch(getEntries(user.id));
    dispatch(getJournals(user.id));
  }


  return (
    <BrowserRouter>
      {user &&
        <SideNavBar />
      }
      <Switch>
        <Route path='/' exact={true}>
          {!user && <TopNavBar />}
          {!user && <SplashPage /> }
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/:username/dashboard' exact={true} >
          <Dashboard />
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
        <ProtectedRoute path='/:username/journals' exact={true} >
          <UserJournals />
        </ProtectedRoute>
        <ProtectedRoute path='/journal/new' exact={true} >
          <CreateJournal />
        </ProtectedRoute>
        <ProtectedRoute path='/journals/:journalId' exact={true} >
          <JournalDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/edit/journal/:journalId' exact={true} >
          <EditJournal />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
