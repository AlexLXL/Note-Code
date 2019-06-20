import React,{Component} from 'react';
import { Link, Route} from 'react-router-dom'
import MessagesDetail from '../messages-detail'

export default class Messages extends Component{
  state = {
    messageArr: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messageArr: [
          {id: 1, content: 'message001'},
          {id: 3, content: 'message003'},
          {id: 6, content: 'message006'}
        ]
      })
    },1000)
  }

  render() {
    return <div>
      <ul>
        {
          this.state.messageArr.map((item, index) => {
            return <li key={index}>
              <Link to={`/home/messages/${item.id}`}>{item.content}</Link>
            </li>
          })
        }
      </ul>
      <Route path="/home/messages/:id" component={MessagesDetail} />
    </div>
  }
}