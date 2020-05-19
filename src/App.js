import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/ui/Dashboard';

function App() {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
