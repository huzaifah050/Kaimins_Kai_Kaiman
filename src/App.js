import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/ui/Dashboard';
import SignIn from './components/ui/authentication/SignIn';
import Profile from './components/ui/profile/Profile';


function App() {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
