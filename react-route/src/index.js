import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import 'antd/dist/antd.min.css'   //导入样式
import { BrowserRouter } from 'react-router-dom'// 导入react-router-dom // BrowserRouter用来使用history
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));