import React, { Component } from 'react';
import Intro from '../components/intro/Intro';

class IntroContainer extends Component {
  state = {
    introStatements: [
      'With a background in science, I bring a love of data visualization into app development.',
      'An introvert who also thrives in teams, I like to find a balance of collaboration and solo focus.',
      'According to the Gallup Clifton Strengths test, my top strengths are adaptability, learner, intellection, input, and responsibility.',
      'On the fence about the trailing comma.',
      'Clarinet and piano player learning cornet basics.',
      'Over 800 hours of full-stack JavaScript app development experience in a cohort of 19 wonderful people.',
      'My top bucket list item: Visit a sloth sanctuary in Costa Rica.',
      'Liked sloths before Kristen Bell made them popular.',
      'Once played clarinet in Carnegie Hall with the Oregon State University Wind Ensemble.',
      'Fun fact: I have a PhD in immunology and microbial pathogenesis. I discovered new things about tuberculosis.'
    ]
  }

  render() {
    return (
      <>
      <Intro introStatements={this.state.introStatements} strengths={this.state.strengths} weaknesses={this.state.weaknesses} />
      </>
    );
  }
}

export default IntroContainer;
