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
        keys: '⇧ ⌘ e',
        description: 'toggle selection of side bar and main window'
      },
      {
        keys: '⌘ b',
        description: 'show/hide side bar'
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
      },
      {
        keys: '⌥ ⇧ →',
        description: 'select next word in line'
      },
      {
        keys: '⌥ ⇧ ←',
        description: 'select previous word in line'
      },
      {
        keys: '⌘ j',
        description: 'show/hide terminal'
      },
      {
        keys: '⌘ /',
        description: 'comment/uncomment selected text'
      },
      {
        keys: '⌥ (click)',
        description: 'start another cursor where you clicked'
      },
      {
        keys: '⌘ ⇧ v',
        description: 'when in markdown file, opens markdown view'
      },
      {
        keys: '⌘ k (let go) z',
        description: 'zen mode'
      },
      {
        keys: '^ (hold) r arrow enter',
        description: 'open recent repository in new window'
      },
      {
        keys: '^ tab',
        description: 'navigate between open windows'
      },
      {
        keys: '⌘ ↓',
        description: 'when in sidebar, opens selected file'
      }
    ]
  }

  render() {
    return (
      <Goodies links={this.state.links} shortcuts={this.state.shortcuts} />
    );
  }
}
