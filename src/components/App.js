import React from 'react';
import './App.css';

import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import Portfolio from '../containers/Portfolio';
import ContactForm from './contact/ContactForm';

export default function App() {
  return (
  <>
    <Header />
    <main>
      <Intro />
      <Portfolio />
      <ContactForm />
    </main>
    <Footer />
  </>
  );
}
