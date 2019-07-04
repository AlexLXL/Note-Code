// import { createStore } from 'redux'
import { createStore } from '../my-redux/index'

import reducers from './reducers'

const store = createStore(reducers);
export default store;