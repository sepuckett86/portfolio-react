import React, { Component } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';
import PortfolioTags from '../components/portfolio/PortfolioTags';

export default class Portfolio extends Component {
  state = {
    projects: [
      {
        title: 'Newzie 📰',
        description: 'Full-stack app that allows you to consume and curate news from a variety of sources. Made with @lacrivella, @carlosus, and @aramirezdecruz3148. Link is to a video of Alex demoing the site.',
        tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Mongoose', 'Express', 'Jest', 'TravisCI', 'Auth0', 'Netlify', 'Heroku', 'HTML/CSS'],
        github: 'https://github.com/The-Newsies/newsies-fe',
        url: 'https://www.youtube.com/watch?v=GF9-4miKsto&feature=youtu.be',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1569993992/Newzie_shdgvl.png'
      },
      {
        title: 'BidUp! 💸',
        description: 'Full-stack auction app with realtime bidding for multiple users. Created on a team with @liliboxer, @lacrivella, @carlosus, and @codingclueless.',
        tags: ['Firebase', 'VanillaJS', 'TravisCI', 'HTML/CSS'],
        github: 'https://github.com/bid-up/BidUp',
        url: 'https://biduponline.com/',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1569993985/BidUp_u7b1jz.png'
      },
      {
        title: 'Harmonie 🎶',
        description: 'Back-end band management app with Twilio text alert integration. Created with @zbutler93 and @carlosus.',
        tags: ['MongoDB', 'Mongoose', 'Compass', 'Postman', 'Heroku', 'Twilio', 'Jest', 'Express', 'Node.js', 'TravisCI'],
        github: 'https://github.com/band-tracker/Harmonie',
        url: 'https://github.com/band-tracker/Harmonie',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1569993987/Harmonie_ix59ae.png'
      },
      {
        title: 'Karie Mondo 📦',
        description: 'Front-end game based on Tidying Up with Marie Kondo as a playful way to introduce ourselves. Created with @eringurley and @aramirezdecruz3148 ',
        tags: ['VanillaJS', 'TravisCI', 'QUnit', 'HTML/CSS'],
        github: 'https://github.com/team-tidy/Karie-Mondo',
        url: 'https://team-tidy.github.io/Karie-Mondo/',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1569993990/Karie-Mondo_rblpjd.png'
      },
      {
        title: 'Biology of Skin Foundation',
        description: 'Website and home page of the non-profit Biology of Skin Foundation. Coded and maintained by me.',
        tags: ['VanillaJS', 'DreamHost', 'Bootstrap', 'HTML/CSS'],
        github: 'https://github.com/sepuckett86/websites/tree/master/BSF',
        url: 'https://biologyofskinfoundation.org/',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1570477022/Biology_of_Skin_Foundation_ukoqbs.png'
      },
      {
        title: 'Goodminder',
        description: 'Website and web-app that allows you to collect, view, and make a PDF of meaningful text. I made the front-end and @codegold79 made the back-end.',
        tags: ['React', 'Redux', 'JWT', 'HTML/CSS', 'Heroku', 'Node.js', 'Laravel', 'Bootstrap'],
        github: 'https://github.com/sepuckett86/goodminder',
        url: 'http://www.goodminder.com',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1570478396/Goodminder_e1q85z.png'

      },
      {
        title: 'Introvert Quest 💁',
        description: 'Front-end game with multiple endings. Created as a solo project.',
        tags: ['VanillaJS', 'QUnit', 'TravisCI', 'HTML/CSS'],
        github: 'https://github.com/sepuckett86/week3-adventure-game',
        url: 'https://sepuckett86.github.io/week3-adventure-game/',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1570477888/Introvert_Quest_rsdp4o.png'
      },
      {
        title: 'Mad Props',
        description: 'Front-end app to help those with writer\'s block when it comes to thank you notes. A solo project.',
        tags: ['React', 'HTML/CSS', 'Surge'],
        github: 'https://github.com/sepuckett86/react/tree/master/madprops',
        url: 'http://sepuckett86_madprops.surge.sh/',
        image: 'https://res.cloudinary.com/sepuckett86/image/upload/v1570478999/Mad_Props_r8qhkd.png'
      }
    ],
    tags: [],
    selectedTag: 'all'
  }

  componentDidMount() {
    this.setState({ tags: this.generateTags() });
  }

  generateTags() {
    const tagDictionary = this.state.projects.reduce((acc, project) => {
      project.tags.forEach(tag => {
        if(!acc[tag]) acc[tag] = 0;
        acc[tag]++;
      });
      return acc;
    }, {});
    return Object.entries(tagDictionary);
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
        <PortfolioTags 
          tags={this.state.tags} 
          handleClick={this.handleClick}
          selectedTag={this.state.selectedTag} />
        <PortfolioList projects={selectedProjects} />
      </section>
    );
  }
}
