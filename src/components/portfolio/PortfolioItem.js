import React from 'react';
import PropTypes from 'prop-types';
import styles from './PortfolioItem.css';

function PortfolioItem({ title, tags, description, github, url, image }) {
  const tagElements = tags.map(tag => {
    return <li key={tag}>{tag}</li>;
  });

  return (
    <div className={styles.PortfolioItem}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={`src/images/${image}`} alt={title}/>
      </a>
      <div className={styles.top}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
      {description}
      <ul className={styles.tags}>
        {tagElements}
      </ul>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default PortfolioItem;
