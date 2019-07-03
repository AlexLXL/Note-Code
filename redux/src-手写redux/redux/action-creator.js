import { INCREMENT, DECREMENT } from './action-types'
// 根据state的功能来定义action，目前只有加减的操作
export const increment = (value) => ({ type:INCREMENT, data:value });
export const decrement = (value) => ({ type:DECREMENT, data:value });