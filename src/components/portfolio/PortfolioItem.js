import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItem.css';

function PortfolioItem({ title, tags, description }) {
  const tagElements = tags.map(tag => {
    return <li key={tag}>{tag}</li>;
  });

  return (
    <section className={styles.PortfolioItem}>
      <h3>{title}</h3>
      {description}
      <ul className={styles.tags}>
        {tagElements}
      </ul>
    </section>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired
};

export default PortfolioItem;
