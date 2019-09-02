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
      },
      {
        title: 'My App4',
        tags: ['MongoDB', 'Mongoose', 'Node.js', 'Compass']
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

  makeSelectedProjects() {
    const selectedTags = Object.keys(this.state.selectedTags).filter(key => {
      return this.state.selectedTags[key];
    });

    const filtered = this.state.projects.filter(project => {
      return selectedTags.some(key => project.tags.includes(key));
    });

    if(filtered.length === 0) {
      return this.state.projects;
    }

    return filtered;
  }

  render() {
    const selectedProjects = this.makeSelectedProjects();

    return (
      <section>
        <h2>Portfolio</h2>
        <PortfolioTags 
          tags={this.state.tags} 
          handleClick={this.handleClick}
          selectedTags={this.state.selectedTags} />
        <PortfolioList projects={selectedProjects} />
      </section>
    );
  }
}
