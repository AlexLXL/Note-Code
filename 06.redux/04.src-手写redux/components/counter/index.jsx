import React,{ Component, Fragment } from 'react';
import PropTypes from 'prop-types'

import { increment, decrement } from '../../redux/action-creator'

export default class Counter extends Component{
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    value: 1
  };
  
  handleChange = (e) => {
    this.setState({
      value: +e.target.value
    });
  };

  increment = () => {
    // 创建action
    const action = increment(this.state.value);
    // 调用store的dispatch方法(内部实际调用reducer制约，通过action的type实现功能)
    this.props.store.dispatch(action)
  };

  decrement = () => {
    // 创建action
    const action = decrement(this.state.value);
    // 调用store的dispatch方法(内部实际调用reducer制约，通过action的type实现功能)
    this.props.store.dispatch(action)
  };

  incrementIfOdd = () => {
    const num = this.props.store.getState();
    if((num & 1) === 1){
      // 创建action
      const action = increment(this.state.value);
      // 调用store的dispatch方法(内部实际调用reducer制约，通过action的type实现功能)
      this.props.store.dispatch(action)
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      // 创建action
      const action = increment(this.state.value);
      // 调用store的dispatch方法(内部实际调用reducer制约，通过action的type实现功能)
      this.props.store.dispatch(action)
    },1000)
  };

  render() {
    const num = this.props.store.getState();
    // console.log(this.props.store.getState())

    return <Fragment>
      <h2>click {num} times</h2>
      <select onChange={this.handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.incrementIfOdd}>increment if odd</button>
      <button onClick={this.incrementAsync}>increment async</button>
    </Fragment>;
  }
}