import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ counter, maxCounter }) => {
  return (
    <p className={styles.counter}>
      {counter}/{maxCounter}
    </p>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  maxCounter: PropTypes.number.isRequired,
};

export default Counter;
