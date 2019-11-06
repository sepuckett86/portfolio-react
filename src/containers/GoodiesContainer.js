import React, { Component } from 'react';
import Goodies from '../components/goodies/Goodies';

export default class GoodiesContainer extends Component {
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
      <Goodies links={this.state.links}/>
    );
  }
}
