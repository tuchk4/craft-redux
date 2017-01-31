import React, { Component, PropTypes } from 'react';
import { increment, decrement } from 'actions/counter';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import counterSelect from 'selectors/counter';

import './App.css';

export class App extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  };

  state = {
    value: 5
  };

  increment = () => {
    this.props.increment({
      value: this.state.value
    });
  };

  decrement = () => {
    this.props.decrement({
      value: this.state.value
    });
  };

  handleRangeChange = e => {
    this.setState({
      value: parseInt(e.target.value, 10)
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <h1>{this.props.counter}</h1>
        <p className="App-intro">
          <input
            type="range"
            min="1"
            max="10"
            value={value}
            onChange={this.handleRangeChange} />
        </p>
        <p>
          <button onClick={this.increment}>+ {value}</button>
          <button onClick={this.decrement}>- {value}</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  counterSelect,
  (counter) => ({
    counter: counter.value
  })
);

const mapActionsToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapActionsToProps)(App);
