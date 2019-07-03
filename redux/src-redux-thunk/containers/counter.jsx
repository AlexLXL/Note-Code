import { connect } from 'react-redux';

import Counter from '../components/counter';
import { increment, decrement, incrementAsync, error } from '../redux/action-creator'

/*
const mapStateToProps = (state) => {   // 遍历状态，通过prop传给要用的UI组件
  return {
    num: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      const action = increment(value);
      dispatch(action)
    },
    decrement: (value) => {
      dispatch(decrement(value))
    }
  }
};
*/

export default connect(
  (state) => ({num: state}),
  { increment, decrement, incrementAsync, error }
)(Counter)  // 这里是直接传,而不是组件的方式来传