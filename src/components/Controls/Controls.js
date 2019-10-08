import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader/Reader.module.css';

const Controls = ({ reduceCounter, increaseCounter, counter, maxCounter }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        disabled={counter === 1}
        className={styles.button}
        onClick={increaseCounter}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={counter === maxCounter}
        className={styles.button}
        onClick={reduceCounter}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  reduceCounter: PropTypes.func.isRequired,
  increaseCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  maxCounter: PropTypes.number.isRequired,
};

export default Controls;
