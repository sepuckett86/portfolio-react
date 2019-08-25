import React from 'react';
import PropTypes from 'prop-types';

import PorfolioItem from './PortfolioItem';

function PortfolioList({ projects }) {
  const projectItems = projects.map(project => {
    const { title, tags } = project;

    return (
      <li key={title}>
        <PorfolioItem title={title} tags={tags} />
      </li>
    );
    
  });

  return (
    <ul>
      {projectItems}
    </ul>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default PortfolioList;
