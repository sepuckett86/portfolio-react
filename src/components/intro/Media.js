import React from 'react';
import styles from './Media.css';

export default function Media() {
  return (
    <div className={styles.Media}>
      <a href="https://github.com/sepuckett86" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/susanpuckett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://stackoverflow.com/story/sepuckett86" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
      <a href="https://codepen.io/sepuckett86/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen" aria-hidden="true"></i></a>
      <a href="https://twitter.com/sepuckett86" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
  );
}
