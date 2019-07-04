import { INCREMENT, DECREMENT } from './action-types';

function num(prevState = 0, action) { // 根据action.type来实现state的具体操作
  switch (action.type) {
    case INCREMENT :
      return prevState + action.data;
    case DECREMENT :
      return prevState - action.data;
    default :                     // 不存在的action.type
      return prevState;
  }
}

export default num;

// 暴露多个  (当组件仅需要获取某个状态的时候 使用 结构赋值获取，const {num} = this.props.getState())
// export default combineReducers({ // 暴露的还是reducer函数
//   num；
//   xxx;
//   yyy
// })

