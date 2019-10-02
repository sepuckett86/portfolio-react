import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioTags.css';

function PortfolioTags({ tags, handleClick, selectedTag }) {
  const tagButtons = tags.map(([tag]) => (
    <li key={tag}>
      <button 
        name={tag} 
        onClick={handleClick}
        className={selectedTag === tag ? styles.selected : null}>{tag}</button>
    </li>
  ));

  return (
    <>
    <ul className={styles.PortfolioTags}>
      <li>
        <button 
          name="all" 
          onClick={handleClick}
          className={selectedTag === 'all' ? `${styles.selected} ${styles.all}` : styles.all}>
          All
        </button>
      </li>
    </ul>
    <ul className={styles.PortfolioTags}>
      {tagButtons} 
    </ul>
    </>
  );
}

PortfolioTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedTag: PropTypes.string.isRequired
};

export default PortfolioTags;
