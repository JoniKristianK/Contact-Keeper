import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
