import React,{Component} from 'react';
import { Link, NavLink, Route, Redirect, Switch } from 'react-router-dom';

import Messages from '../messages';
import News from '../news';

export default class Home extends Component{
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li><NavLink className="list-group-item" activeClassName="my-active" to="/home/news">News</NavLink></li>
          <li><NavLink className="list-group-item" activeClassName="my-active" to="/home/messages" >Message</NavLink></li>
        </ul>
          <Switch>
            <Route path='/home/news' component={News}/>
            <Route path='/home/messages' component={Messages}/>
            <Redirect to="/home/messages"/>
          </Switch>
      </div>

    )
  }
}