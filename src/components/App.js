import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Docs from '../pages/docs';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/docs' component={Docs} />
          </Switch>
        </main>
        <Footer />     
      </Router>
    </>
  );
}
