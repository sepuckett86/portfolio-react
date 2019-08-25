import React from 'react';
import './App.css';

import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import Portfolio from '../containers/Portfolio';

export default function App() {
  return (
  <>
    <Header />
    <main>
      <Intro />
      <Portfolio />
    </main>
    <Footer />
  </>
  );
}
