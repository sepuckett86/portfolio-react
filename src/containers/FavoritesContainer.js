import React, { Component } from 'react';
import Favorites from '../components/favorites/Favorites';

export default class FavoritesContainer extends Component {
  state = {
    links: [
      {
        name: 'PorkBun',
        url: 'https://porkbun.com/',
        purpose: 'Domain Registration'
      }
    ]
  }

  render() {
    return (
      <Favorites links={this.state.links}/>
    );
  }
}
