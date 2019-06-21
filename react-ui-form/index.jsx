import React,{Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';

class Login extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, value) => { // === 4、this.props.form.validateFields 拿表单错误和收集表单数据 ===
      if(!errors) {
        const { username, password } = value;
        console.log(username, password)
      }else {
        console.log(errors)
      }
    })
  };

  validator = (rule, value, callback) => {             // === rule是个对象，{ fullField：username }；input的value，callback()--必写
    if(!value){
      callback('密码必须输入')
    }else if(!/^\w+$/.test(value)) {
      callback('密码只能包含字母、数字、下划线')
    }else if(value.length < 4) {
      callback('密码最小长度4位')
    }else if(value.length > 15) {
      callback('密码最大长度15位')
    }else {
      callback()
    }
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;    // === 2、创建getFieldDecorator ，用于校验form表单 ===

    return <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {
              getFieldDecorator('username',{          // === 3、使用，两种方式 ===
                rules: [
                  { validator: this.validator }

                  // {required: true, message: '用户名必须输入'},
                  // {min: 4,message: '用户名最小长度4位'},
                  // {max: 15,message: '用户名最大长度15位'},
                  // {pattern: /^\w+$/, message: '用户名只能包含字母、数字、下划线'}
                ]
              })(<Input prefix={<Icon type="user" />} placeholder="用户名" className="login-input"/>)
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password',
                {
                  rules: [
                    { validator: this.validator }
                    ]
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="密码" className="login-input"/>)
            }
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="login-button">登录</Button>
          </Item>
        </Form.Item>
    </div>
  }
}

// 返回值是一个新组件   <Form(Login)><Login></Form(Login)>
export default Form.create()(Login)                   // === 1、创建props属性form，这是高阶组件(传Login组件) ===
