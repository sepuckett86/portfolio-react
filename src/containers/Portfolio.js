import React, { Component } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';
import PortfolioTags from '../components/portfolio/PortfolioTags';

export default class Portfolio extends Component {
  state = {
    projects: [
      {
        title: 'Newzie',
        description: 'Full-stack app that allows you to consume and curate news from a variety of sources. Made with @alex @carlos @leighann.',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Mongoose', 'Auth0', 'Netlify', 'Heroku'],
        github: 'https://github.com/The-Newsies/newsies-fe',
        url: 'https://newzie.netlify.com',
        image: 'Newzie.png'
      },
      {
        title: 'My App2',
        description: 'This is a neat little app with burgeoning capabilities.',
        tags: ['HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/The-Newsies/newsies-fe',
        url: 'https://newzie.netlify.com',
        image: 'Newzie.png'
      },
      {
        title: 'My App3',
        description: 'This is a neat little app with burgeoning capabilities.',
        tags: ['HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/The-Newsies/newsies-fe',
        url: 'https://newzie.netlify.com',
        image: 'Newzie.png'
      },
      {
        title: 'My App4',
        description: 'This is a neat little app with burgeoning capabilities.',
        tags: ['MongoDB', 'Mongoose', 'Node.js', 'Compass'],
        github: 'https://github.com/The-Newsies/newsies-fe',
        url: 'https://newzie.netlify.com',
        image: 'Newzie.png'
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
      <section id="portfolio">
        <h2>Portfolio</h2>
        <h2>UNDER CONSTRUCTION</h2>
        <PortfolioTags 
          tags={this.state.tags} 
          handleClick={this.handleClick}
          selectedTag={this.state.selectedTag} />
        <PortfolioList projects={selectedProjects} />
      </section>
    );
  }
}
