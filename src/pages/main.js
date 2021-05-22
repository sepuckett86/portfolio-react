import React from 'react';
import Portfolio from '../containers/Portfolio';
import ContactForm from '../components/contact/ContactForm';
import IntroContainer from '../containers/IntroContainer';
import GoodiesContainer from '../containers/GoodiesContainer';

export default function Main() {
  return (
    <>
      <IntroContainer />
      <Portfolio />
      <ContactForm />
      <GoodiesContainer />
    </>
  );
}
