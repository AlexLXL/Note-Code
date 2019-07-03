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

