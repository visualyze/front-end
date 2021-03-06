import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import About from './components/about';
import Auth from './components/auth';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './appContext';

export default function Main() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Auth />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <App />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
