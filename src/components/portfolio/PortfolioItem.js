import React from 'react';
import PropTypes from 'prop-types';

function PortfolioItem({ title, tags }) {
  const tagElements = tags.map(tag => {
    return <p key={tag}>{tag}</p>;
  });

  return (
    <section>
      <h3>{title}</h3>
      {tagElements}
    </section>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default PortfolioItem;
