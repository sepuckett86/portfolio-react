import React, { useState } from 'react';
import styles from './Intro.css';
import PropTypes from 'prop-types';

function Intro({ introStatements, strengths, weaknesses }) {
  const [index, setIndex] = useState(0);
  const statement = introStatements[index];

  const strengthItems = strengths.map(strength => (
    <li key={strength}>{strength}</li>
  ));

  const weaknessItems = weaknesses.map(weakness => (
    <li key={weakness}>{weakness}</li>
  ));

  return (
    <section className={styles.Intro}>
      <h1>Welcome to my site!</h1>
      <h2>Intro</h2>
      <h3>About me:</h3>
      <p>{statement}</p>
      <button onClick={() => index < introStatements.length - 1 ? setIndex(index + 1) : setIndex(0)}>Next</button>
      <h3>My strengths</h3>
      <ul>
        {strengthItems}
      </ul>
      <h3>My weaknesses</h3>
      <ul>
        {weaknessItems}
      </ul>
    </section>
  );
}

Intro.propTypes = {
  introStatements: PropTypes.arrayOf(PropTypes.string).isRequired,
  strengths: PropTypes.arrayOf(PropTypes.string).isRequired,
  weaknesses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Intro;
