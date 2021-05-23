import React, { Component } from 'react';
import Markdown from '../components/Markdown';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

export default class MarkdownContainer extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <Markdown content={this.props.content} />
    );
  }
}

MarkdownContainer.propTypes = {
  content: PropTypes.string.isRequired,
};
