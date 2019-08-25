import React, { Component } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';

export default class Portfolio extends Component {
  state = {
    projects: [
      {
        title: 'My App',
        tags: ['React', 'Redux', 'Node.js']
      },
      {
        title: 'My App2',
        tags: ['HTML', 'CSS', 'Bootstrap']
      },
      {
        title: 'My App3',
        tags: ['HTML', 'CSS', 'Bootstrap']
      }
    ],
    tags: [
      'React', 
      'Redux', 
      'Node.js', 
      'HTML', 
      'CSS', 
      'Bootstrap',
      'Python'
    ]
  }
  render() {
    return (
      <section>
        <h2>Portfolio</h2>
        <PortfolioList projects={this.state.projects} />
      </section>
    );
  }
}
