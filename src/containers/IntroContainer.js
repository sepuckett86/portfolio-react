import React, { Component } from 'react';
import Intro from '../components/intro/Intro';
import Media from '../components/intro/Media';

class IntroContainer extends Component {
  state = {
    introStatements: [
      'With a background in science and a passion for building things with code, I aim to combine data analysis with app development.',
      'An introvert who also loves to contribute to a team, I aim to find that sweet spot of balance of socialization and focused alone time.',
      'Here is where a witty intro statement should go that accentuates my personality. Hi?',
      'Not a fan of the idea of networking, but am a fan of getting to know tech-passionate people.',
      'Fun fact: according to the Gallup Clifton Strengths test, my top strengths are adaptability, learner, intellection, input, and responsibility.',
      'On the fence about the trailing comma.',
      'One of my life goals is to play in clarinet in a community band until I die.',
      'Over 1.1k Github contributions in the past year as of Sept 2019.',
      'Over 800 hours of full-stack JavaScript app development in a cohort of 19 people.'
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
      <Media />
      </>
    );
  }
}

export default IntroContainer;
