import React, { useState } from 'react';
import styles from './Intro.css';
import PropTypes from 'prop-types';

function Intro({ introStatements }) {
  const [index, setIndex] = useState(0);
  const statement = introStatements[index];

  return (
    <section className={styles.Intro}>
      <h1>Susan Puckett</h1>
      <h2>Software Developer</h2>
      <p>{statement}</p>
      <button onClick={() => index < introStatements.length - 1 ? setIndex(index + 1) : setIndex(0)}>Next</button>
    </section>
  );
}

Intro.propTypes = {
  introStatements: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Intro;
