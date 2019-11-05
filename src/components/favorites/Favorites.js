import React from 'react';
import PropTypes from 'prop-types';

export function Favorites({ links }) {
  const linkItems = links.map(link => (
    <li key={link.url}>
      {link.name}
    </li>
  ));
  
  return (
    <ul>
      {linkItems}
    </ul>
  );
}

Favorites.propTypes = {
  links: PropTypes.array.isRequired
};
