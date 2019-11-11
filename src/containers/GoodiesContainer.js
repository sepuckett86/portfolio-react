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
    ],
    shortcuts: [
      {
        keys: '⌘ 0',
        description: 'go from main window to side bar'
      },
      {
        keys: '⌃ 0',
        description: 'go from side bar to main window'
      },
      {
        keys: '⌘ d',
        description: 'when text is selected, it will select next instance of this text'
      },
      {
        keys: '⌘ k ⌘ d',
        description: 'when text is selected, it will deselect current selection and select next instance of this text'
      },
      {
        keys: '⌘ p',
        description: 'open vscode file search'
      },
      {
        keys: '⌘ ⇧ p',
        description: 'open vscode shortcuts search'
      },
      {
        keys: '⌥ ↓',
        description: 'move line down'
      },
      {
        keys: '⌥ ↑',
        description: 'move line up'
      },
      {
        keys: '⌘ ⇧ k',
        description: 'delete line'
      },
      {
        keys: '⌥ ⇧ ↓',
        description: 'duplicate line down'
      },
      {
        keys: '⌥ ⇧ ↑',
        description: 'duplicate line up'
      }
    ]
  }

  render() {
    return (
      <Goodies links={this.state.links} shortcuts={this.state.shortcuts} />
    );
  }
}
