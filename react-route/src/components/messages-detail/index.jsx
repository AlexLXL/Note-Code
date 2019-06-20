import React,{Component} from 'react';

export default class MessagesDetail extends Component{    // 多对一,两边都有state数据，匹配id来显示
  state = {
    messagesDetail: [
      {id: 1, title: 'messages001', content: 'messages001 content'},
      {id: 3, title: 'messages003', content: 'messages003 content'},
      {id: 6, title: 'messages006', content: 'messages006 content'},
    ]
  };

  render() {
    console.log(this.props);
    const { id } = this.props.match.params;
    const result = this.state.messagesDetail.find((item) => item.id === +id);

    return <div>
      <ul>
        <li>id: {result.id}</li>
        <li>title: {result.title}</li>
        <li>content: {result.content}</li>
      </ul>
    </div>
  }
}