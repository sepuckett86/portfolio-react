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
    tags: [],
    selectedTag: ''
  }

  componentDidMount() {
    this.setState({ tags: this.generateTags() });
  }

  generateTags() {
    const tagDictionary = this.state.projects.reduce((acc, project) => {
      project.tags.forEach(tag => {
        if(!acc[tag]) acc[tag] = 1;
        else acc[tag]++;
      });
      return acc;
    }, {});
    return Object.entries(tagDictionary);
    // return tagArray.sort(([, a], [, b]) => a < b ? 1 : -1);
  }

  handleClick = ({ target }) => {
    if(this.state.selectedTag === target.name) {
      this.setState({ selectedTag: 'all' });
    } else {
      this.setState({
        selectedTag: target.name
      });
    }
  };


  makeSelectedProjects() {
    const filtered = this.state.projects.filter(project => {
      return project.tags.includes(this.state.selectedTag);
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
          selectedTag={this.state.selectedTag} />
        <PortfolioList projects={selectedProjects} />
      </section>
    );
  }
}
