import React, { Component } from 'react';
import Goodies from '../components/goodies/Goodies';

export default class GoodiesContainer extends Component {
  state = {
    links: [
      {
        name: 'Porkbun',
        url: 'https://porkbun.com/',
        purpose: 'Domain Registration'
      },
      {
        name: 'WebGradients',
        url: 'https://webgradients.com/',
        purpose: 'CSS Gradient Code'
      },
      {
        name: 'Paletton',
        url: 'https://paletton.com/',
        purpose: 'Color Schemes and Hex Codes'
      },
      {
        name: 'Cloudinary',
        url: 'https://cloudinary.com/',
        purpose: 'Free Storage for Website Images/Media'
      },
      {
        name: 'Blisk',
        url: 'https://blisk.io/',
        purpose: 'Browser for Responsive Design'
      }
    ]
  }

  render() {
    return (
      <Goodies links={this.state.links}/>
    );
  }
}
