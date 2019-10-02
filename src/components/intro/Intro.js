import React, { useState } from 'react';
import styles from './Intro.css';
import PropTypes from 'prop-types';
import Media from './Media';

function Intro({ introStatements }) {
  const [index, setIndex] = useState(0);
  const statement = introStatements[index];

  return (
    <section className={styles.Intro}>
      <h1>SUSAN PUCKETT</h1>
      <h2>SOFTWARE DEVELOPER</h2>
      <p>
        {statement}
        <button onClick={() => index < introStatements.length - 1 ? setIndex(index + 1) : setIndex(0)}>🏵️</button>
      </p>
      <Media />
    </section>
  );
}

Intro.propTypes = {
  introStatements: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Intro;
