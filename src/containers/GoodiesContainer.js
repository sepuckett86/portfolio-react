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
        name: 'Netlify',
        url: 'https://www.netlify.com/',
        purpose: 'Front-end Hosting'
      },
      {
        name: 'Heroku',
        url: 'https://www.heroku.com/',
        purpose: 'Back-end Hosting'
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
      },
      {
        name: 'repl.it',
        url: 'https://repl.it/~',
        purpose: 'Code Playground for Many Languages'
      },
      {
        name: 'CodePen',
        url: 'https://codepen.io/',
        purpose: 'HTML/CSS/JS Playground with Live Browser Visual'
      },
      {
        name: 'ObservableHQ',
        url: 'https://observablehq.com/',
        purpose: 'Notebook for JavaScript -- Good for D3 and Data Visualization'
      },
      {
        name: 'RegExr',
        url: 'https://regexr.com/',
        purpose: 'RegEx Tester'
      },
      {
        name: 'Avatars API',
        url: 'https://avatars.dicebear.com/',
        purpose: 'API for Random Avatar Images'
      },
      {
        name: 'Pixabay API',
        url: 'https://pixabay.com/service/about/api/',
        purpose: 'API for High Quality Images'
      },
      {
        name: 'JSONPlaceholder API',
        url: 'https://jsonplaceholder.typicode.com/',
        purpose: 'API for Fake RESTful Data'
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
        keys: '⌘ ↓',
        description: 'when in sidebar, opens selected file'
      },
      {
        keys: 'return',
        description: 'when in sidebar, edits title of selected file'
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
        keys: '^ tab',
        description: 'navigate between open windows'
      },
      {
        keys: '⌘ w',
        description: 'close selected window'
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
        keys: '⌘ ⇧ v',
        description: 'when in markdown file, opens markdown view'
      },
      {
        keys: '⌥ (click)',
        description: 'start another cursor where you clicked'
      },
      {
        keys: '^ (hold) r arrow enter',
        description: 'open recent repository in new window'
      },
      {
        keys: '⌘ k (let go) z',
        description: 'zen mode'
      }
    ]
  }

  render() {
    return (
      <Goodies links={this.state.links} shortcuts={this.state.shortcuts} />
    );
  }
}
