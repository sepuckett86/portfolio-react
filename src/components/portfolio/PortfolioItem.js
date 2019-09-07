import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItem.css';

function PortfolioItem({ title, tags }) {
  const tagElements = tags.map(tag => {
    return <p key={tag}>{tag}</p>;
  });

  return (
    <section className={styles.PortfolioItem}>
      <h3>{title}</h3>
      {tagElements}
    </section>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default PortfolioItem;
