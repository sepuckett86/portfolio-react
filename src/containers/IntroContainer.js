import React, { Component } from 'react';
import Intro from '../components/intro/Intro';

class IntroContainer extends Component {
  state = {
    introStatements: [
      'With a background in science and a passion for building things with code, I bring a love of data into app development.',
      'An introvert who also thrives in teams, I like to find that sweet balance of collaboration and solo focus.',
      'Not a fan of the idea of networking, but am a fan of getting to know tech-passionate people.',
      'According to the Gallup Clifton Strengths test, my top strengths are adaptability, learner, intellection, input, and responsibility.',
      'On the fence about the trailing comma.',
      'One of my life goals is to play in clarinet in a community band until I die.',
      'Over 1.1k Github contributions in the past year as of Sept 2019. Please give me a job already. ;)',
      'Over 800 hours of full-stack JavaScript app development experience in a cohort of 19 wonderful people.',
      'My top bucket list item: Visit a sloth sanctuary in Costa Rica.',
      'Liked sloths before Kristen Bell made them popular.',
      'Here is where a witty intro statement should go that accentuates my personality. Hi?',
      'Once played clarinet in Carnegie Hall with the Oregon State University Wind Ensemble.',
      'Fun fact: I have a PhD in immunology and microbial pathogenesis. I discovered new things about tuberculosis.'
    ],
    strengths: [
      'detail-oriented',
      'thoughtful',
      'curious',
      'lover of contemplative silence',
      'excels in small group projects'
    ],
    weaknesses: [
      'drained by excessive talking',
      'easily underestimated'
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
