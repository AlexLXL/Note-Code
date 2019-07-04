import React,{Component} from 'react';

import Counter from './components/counter'
import store from './redux/store';  // 一般store是父组件通过 属性 传给子组件

export default class App extends Component{
  render() {
    return <Counter store={store}/>
  }
}