import React, { Component } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';
import PortfolioTags from '../components/portfolio/PortfolioTags';

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
    ],
    selectedTags: {}
  }

  componentDidMount() {
    this.setState({ tags: this.generateTags() });
  }

  generateTags() {
    return this.state.projects.reduce((acc, project) => {
      project.tags.forEach(tag => {
        if(!acc.includes(tag)) acc.push(tag);
      });
      return acc;
    }, []);
  }

  handleClick = ({ target }) => {
    this.setState(state => {
      return {
        selectedTags: { 
          ...state.selectedTags, 
          [target.name]: !state.selectedTags[target.name] 
        } 
      };
    });
  }

  render() {
    return (
      <section>
        <h2>Portfolio</h2>
        <PortfolioTags 
          tags={this.state.tags} 
          handleClick={this.handleClick}
          selectedTags={this.state.selectedTags} />
        <PortfolioList projects={this.state.projects} />
      </section>
    );
  }
}
