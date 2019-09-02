import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioTags.css';

function PortfolioTags({ tags, handleClick, selectedTags }) {
  const tagButtons = tags.map(tag => (
    <li key={tag}>
      <button 
        name={tag} 
        onClick={handleClick}
        className={selectedTags[tag] ? styles.selected : null}>{tag}</button>
    </li>
  ));

  return (
    <ul className={styles.PortfolioTags}>
      {tagButtons}
    </ul>
  );
}

PortfolioTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedTags: PropTypes.object.isRequired
};

export default PortfolioTags;
