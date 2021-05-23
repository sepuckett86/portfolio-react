import React, { useEffect } from 'react';
import styles from './Markdown.css';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Prism from 'prismjs';
import '../global/prism.css';

function Markdown({ content }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
