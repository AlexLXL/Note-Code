
export function createStore(reducers) {

  let state = reducers(undefined, {type: '@@store-init/lang'});  // underfined就会匹配default，返回之前的preState
  let listeners = [];

  function getState() {
    return state
  }

  function dispatch(action) {
    // dispatch里面会调用renders，renders返回新状态, 更新旧状态
    state = reducers(state, action);

    // 调用subscribe里的render函数
    // 之前看代码的时候就知道subscribe是用来push东西进数组，而dispatch是遍历数组运行  https://github.com/brickspert/blog/issues/22
    listeners.forEach((item) => {
      item()
    })
  }

  function subscribe(render) {
    listeners.push(render)
  }

  // 返回一个store对象
  // store对象有三个方法：getState、subscribe、dispatch
  return {
    getState,
    subscribe,
    dispatch
  }
}

export function combineReducers({
	
})