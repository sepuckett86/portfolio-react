import React from 'react';
import styles from './Media.css';

function Media() {
  return (
    <div className={styles.Media}>
      <a href="https://github.com/sepuckett86" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/susanpuckett/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
      <a href="https://stackoverflow.com/users/8995371/sepuckett86" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
      <a href="https://codepen.io/sepuckett86/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen" aria-hidden="true"></i></a>
    </div>
  );
}

export default Media;
