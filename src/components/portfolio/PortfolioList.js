import React from 'react';
import PropTypes from 'prop-types';

import PorfolioItem from './PortfolioItem';
import styles from './PortfolioList.css';

function PortfolioList({ projects }) {
  const projectItems = projects.map(project => {
    const { title, tags, description } = project;

    return (
      <li key={title} className={styles.portfolioLi}>
        <PorfolioItem title={title} tags={tags} description={description} />
      </li>
    );
    
  });

  return (
    <ul className={styles.PortfolioList}>
      {projectItems}
    </ul>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PortfolioList;
