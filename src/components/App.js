import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Portfolio from '../containers/Portfolio';
import ContactForm from './contact/ContactForm';
import IntroContainer from '../containers/IntroContainer';
import GoodiesContainer from '../containers/GoodiesContainer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroContainer />
        <Portfolio />
        <ContactForm />
        <GoodiesContainer />
      </main>
      <Footer />
    </>
  );
}
