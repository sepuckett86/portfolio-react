import React from 'react';
import styles from './Markdown.css';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

function Markdown({ content }) {
  return (
    <div className={styles.Markdown}>
      <div className={styles['markdown-body']}>
        <ReactMarkdown remarkPlugins={[gfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
