/**
 * 根据action.type实现state的具体操作功能
 *   不存在的action.type返回匹配default
 */
import {INCREMENT, DECREMENT, ERROR} from './action-types';

function num(prevState = 0, action) {
  switch (action.type) {
    case INCREMENT :
      return prevState + action.data;
    case DECREMENT :
      return prevState - action.data;
    case ERROR:
      console.log(action.data);
      return prevState;
    default :
      return prevState;
  }
}

export default num;