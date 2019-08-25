import React, { Component } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';

export default class Portfolio extends Component {
  state = {
    projects: [{
      title: 'My App',
      tags: ['React', 'Redux', 'Node.js']
    }]
  }
  render() {
    return (
      <section>
        <PortfolioList projects={this.state.projects} />
      </section>
    );
  }
}
