import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    counter: 1,
  };

  state = {
    counter: this.props.counter,
  };

  increaseCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  reduceCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const maxCounter = items.length;
    const { counter } = this.state;
    const currentItem = items[counter - 1];

    return (
      <div className={styles.reader}>
        <Controls
          increaseCounter={this.increaseCounter}
          reduceCounter={this.reduceCounter}
          counter={counter}
          maxCounter={maxCounter}
        />
        <Counter counter={counter} maxCounter={maxCounter} />
        <Publication item={currentItem} counter={counter} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  counter: PropTypes.number,
};
